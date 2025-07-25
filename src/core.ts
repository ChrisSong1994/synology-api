// reference: https://kb.synology.com/zh-tw/DSM/tutorial/What_websites_does_Synology_NAS_connect_to_when_running_services_or_updating_software
import ky from "ky";

import { BaseSynologyApi } from "./modules";
import { isHttpUrl, getApiKey, isUndfined } from "./utils";
import { getServerInfo } from "./helpers";
import { login, logout, getApiInfo } from "./modules/Api";
import { resWithErrorCode } from "./errorcodes";
export interface SynologyApiOptions {
  server: string;
  username: string;
  password: string;
}

export interface SynologyApiInfoData {
  maxVersion: number;
  minVersion: number;
  path: string;
  requestFormat?: string;
}

export interface SynologyApiAuthInfo {
  sid: string;
  did: number;
  is_portal_port: boolean;
  synotoken: string;
}

export class SynologyApi extends BaseSynologyApi {
  server: string;
  username: string;
  password: string;
  baseUrl: string;
  isConnecting: boolean = false;
  private authInfo: SynologyApiAuthInfo | null = null;
  private apiInfo: Record<string, SynologyApiInfoData> = {};
  constructor(options: SynologyApiOptions) {
    super();
    this.server = options.server;
    this.username = options.username;
    this.password = options.password;
    this.baseUrl = `${this.server}/webapi/`;
  }

  async connect() {
    // if quickconnect id
    if (!isHttpUrl(this.server as string)) {
      this.server = await getServerInfo(this.server as string);
      // reset base url
      this.baseUrl = `${this.server}/webapi/`;
    }
    try {
      const result = await login(this);
      this.authInfo = result.data;
      this.isConnecting = true;
      await this._getApiInfo();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async disconnect() {
    try {
      await logout(this);
      this.authInfo = null;
      this.apiInfo = {};
      this.isConnecting = false;
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  private async _getApiInfo() {
    try {
      const result = await getApiInfo(this);
      this.apiInfo = result.data;
    } catch (err) {
      console.error(err);
    }
  }

  hasApi(apiName: string) {
    if (!this.isConnecting) {
      throw new Error("Not connected");
    }
    return Object.prototype.hasOwnProperty.call(this.apiInfo, apiName);
  }

  async run(
    apiName: string,
    options: {
      method?: "get" | "post";
      params?: Record<string, any>;
      data?: Record<string, any>;
      headers?: Record<string, any>;
    }
  ) {
    if (!this.isConnecting) {
      const res = await this.connect();
      if (!res) {
        throw new Error("Not connected");
      }
    }
    if (!this.hasApi(apiName)) {
      throw new Error(`${apiName} not found`);
    }
    const { method = "get", params, data, headers } = options;
    const api = this.apiInfo[apiName];
    const url = `${this.baseUrl}${api.path}`;
    const externalParams = {
      api: apiName,
      version: api.maxVersion,
      _sid: this.authInfo.sid,
      ...params,
    };
    let result = null;
    if (method === "get") {
      result = await ky.get(url, { searchParams: externalParams, headers }).json();
    }
    if (method === "post") {
      result = await ky.post(url, { searchParams: externalParams, json: data, headers }).json();
    }
    // match error code msg
    const apiKey = getApiKey(apiName);
    if (!isUndfined(apiKey)) {
      result = resWithErrorCode(apiKey, result);
    }
    return result;
  }
}
