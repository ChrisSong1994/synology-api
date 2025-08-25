// reference: https://kb.synology.com/zh-tw/DSM/tutorial/What_websites_does_Synology_NAS_connect_to_when_running_services_or_updating_software
import Axios, { AxiosRequestConfig } from "axios";
import { HttpProxyAgent } from "http-proxy-agent";
import { HttpsProxyAgent } from "https-proxy-agent";

import { BaseSynologyApi } from "./modules";
import { isHttpUrl, getApiKey, isUndfined } from "./utils";
import { getServerInfo } from "./helpers";
import { login, logout, getApiInfo } from "./modules/Api";
import { resWithErrorCode } from "./errorcodes";

interface Agent {
  http?: { host: string; port: number };
  https?: { host: string; port: number };
}
export interface SynologyApiOptions {
  server: string;
  username: string;
  password: string;
  agent?: Agent; // http/https proxy agent
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
  agent?: Agent;
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
    this.agent = options.agent ?? undefined;
  }

  public async connect() {
    // if quickconnect id
    if (!isHttpUrl(this.server as string)) {
      this.server = await getServerInfo(this.server as string);
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

  public async disconnect() {
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

  protected getApiInfoByName(apiName: string) {
    return this.apiInfo[apiName];
  }

  public hasApi(apiName: string) {
    if (!this.isConnecting) {
      throw new Error("Not connected");
    }
    return Object.prototype.hasOwnProperty.call(this.apiInfo, apiName);
  }

  public getApiInfo() {
    if (!this.isConnecting) {
      throw new Error("Not connected");
    }
    return this.apiInfo;
  }

  protected async genRequestOptions(
    apiName: string,
    options: {
      method?: "get" | "post";
      params?: Record<string, any>;
      data?: Record<string, any>;
      headers?: Record<string, any>;
    }
  ): Promise<AxiosRequestConfig> {
    if (!this.isConnecting) {
      const res = await this.connect();
      if (!res) {
        throw new Error("Not connected");
      }
    }
    if (!this.hasApi(apiName)) {
      throw new Error(`${apiName} not found`);
    }
    const api = this.apiInfo[apiName];
    const url = `${this.baseUrl}${api.path}`;

    // create options
    const requestOptions: AxiosRequestConfig = {
      url: url,
      method: options.method || "get",
      params: {
        api: apiName,
        version: api.maxVersion || api.minVersion,
        _sid: this.authInfo.sid,
        ...(options.params ?? {}),
      },
      headers: {
        ...(options.headers ?? {}),
        "x-syno-token": this.authInfo.synotoken,
      },
      data: options.data ?? null,
    };
    // https agent
    if (this.agent?.https) {
      requestOptions.httpsAgent = new HttpsProxyAgent(
        `https://${this.agent.https.host}:${this.agent.https.port}`
      );
    }
    // http agent
    if (this.agent?.http) {
      requestOptions.httpAgent = new HttpProxyAgent(
        `http://${this.agent.http.host}:${this.agent.http.port}`
      );
    }

    return requestOptions;
  }

  protected async run(
    apiName: string,
    options: {
      method?: "get" | "post";
      params?: Record<string, any>;
      data?: Record<string, any>;
      headers?: Record<string, any>;
    }
  ) {
    const requestOptions = await this.genRequestOptions(apiName, options);
    const apiKey = getApiKey(apiName);
    try {
      let result = (await Axios(requestOptions)).data;
      if (!isUndfined(apiKey)) {
        result = resWithErrorCode(apiKey, result);
      }
      return result;
    } catch (err) {
      return resWithErrorCode(apiKey, { error: err, success: false });
    }
  }
}
