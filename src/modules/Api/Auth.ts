import Axios from "axios";

import { SynoApi, SynologyApiResponse } from "@/types";

export async function login(core: any) {
  const params = {
    method: "login",
    api: SynoApi.Auth,
    version: 6,
    account: core.username,
    passwd: core.password,
    enable_device_token: "no",
    enable_syno_token: "yes",
    logintype: "local",
    client: "browser",
    session: "webui",
    format: "cookie",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = (await Axios.get<SynologyApiResponse>(url, { params: params })).data;
  if (!result.success) {
    throw new Error(result.error.message);
  }
  return result;
}

export async function logout(core: any) {
  const params = {
    api: SynoApi.Auth,
    version: 6,
    method: "logout",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = (await Axios.get<SynologyApiResponse>(url, { params: params })).data;
  if (!result.success) {
    throw new Error(result.error.message);
  }
}
