import axios from "axios";

import { SYNOLOGY_API_AUTH, SYNOLOGY_API_INFO } from "./constants";

export interface SynologyApiOptions {
  server: string;
  username: string;
  password: string;
}

export interface SynologyApiInfo {
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

export class SynologyApi {
  server: string;
  username: string;
  password: string;
  baseUrl: string;
  isConnecting: boolean = false;
  private authInfo: SynologyApiAuthInfo | null = null;
  private apiInfo: Record<string, SynologyApiInfo> = {};
  constructor(options: SynologyApiOptions) {
    this.server = options.server;
    this.username = options.username;
    this.password = options.password;
    this.baseUrl = `${this.server}/webapi/`;
  }

  async connect() {
    const params = {
      api: SYNOLOGY_API_AUTH,
      version: 6,
      method: "login",
      account: this.username,
      passwd: this.password,
      format: "sid",
    };
    try {
      const url = `${this.baseUrl}entry.cgi`;
      const result = await axios.get(url, { params });
      if (!result.data.success) {
        throw new Error(result.data.error.message);
      }

      this.authInfo = result.data.data;
      this.isConnecting = true;
      await this._getApiInfo();
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async disconnect() {
    const params = {
      api: SYNOLOGY_API_AUTH,
      version: 6,
      method: "logout",
    };
    try {
      const url = `${this.baseUrl}entry.cgi`;
      const result = await axios.get(url, { params });
      if (!result.data.success) {
        throw new Error(result.data.error.message);
      }
      this.authInfo = null;
      this.apiInfo = {};
      this.isConnecting = false;
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async _getApiInfo() {
    const params = {
      api: SYNOLOGY_API_INFO,
      version: 1,
      method: "query",
    };
    try {
      const url = `${this.baseUrl}entry.cgi`;
      const result = await axios.get(url, { params });
      if (!result.data.success) {
        throw new Error(result.data.error.message);
      }
      this.apiInfo = result.data.data;
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
}
