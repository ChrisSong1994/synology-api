import axios from "axios";

import { SYNOLOGY_AUTH_API } from "./constants";
import { queryObjToString } from "./utils";

export interface SynologyApiOptions {
  server: string; // e.g. "https://192.168.1.1"
  username: string;
  password: string;
}

export interface SynologyApiInfo {
  maxVersion: number;
  minVersion: number;
  path: string;
  requestFormat?: string;
}

export class SynologyApi {
  server: string;
  username: string;
  password: string;
  baseUrl: string;
  private apiInfo: Record<string, SynologyApiInfo>;
  constructor(options: SynologyApiOptions) {
    this.server = options.server;
    this.username = options.username;
    this.password = options.password;
    this.baseUrl = `${this.server}/webapi/`;
  }

  async connect() {
    const params = {
      api: SYNOLOGY_AUTH_API,
      version: 6,
      method: "login",
      account: this.username,
      passwd: this.password,
      format: "sid",
    };

    try {
      const url = `${this.baseUrl}entry.cgi`;
      const result = await axios.get(url, { params });
      console.log(result.data);
      return result;
    } catch (err) {
      console.error(err);
      return err;
    }
  }

  async _getApiInfo(api: string) {
    const apiInfo = this.apiInfo[api];
    if (!apiInfo) {
      throw new Error(`API ${api} not found`);
    }
    return apiInfo;
  }
}
