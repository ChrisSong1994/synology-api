import ky from "ky";

import { SynologyApiInfo, SynologyApiResponse } from "@/types";
import { SynologyApi } from "@/core";

export async function login(core: SynologyApi) {
  const params = {
    api: SynologyApiInfo.Auth,
    version: 6,
    method: "login",
    account: core.username,
    passwd: core.password,
    format: "sid",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = await ky.get<SynologyApiResponse>(url, { searchParams: params }).json();
  if (!result.success) {
    throw new Error(result.error.message);
  }
  return result;
}

export async function logout(core: SynologyApi) {
  const params = {
    api: SynologyApiInfo.Auth,
    version: 6,
    method: "logout",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = await ky.get<SynologyApiResponse>(url, { searchParams: params }).json();
  if (!result.success) {
    throw new Error(result.error.message);
  }
}
