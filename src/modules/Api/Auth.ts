import axios from "axios";

import { SYNOLOGY_API_AUTH } from "@/constants";
import { SynologyApi } from "@/core";

export async function login(core: SynologyApi) {
  const params = {
    api: SYNOLOGY_API_AUTH,
    version: 6,
    method: "login",
    account: core.username,
    passwd: core.password,
    format: "sid",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = await axios.get(url, { params });
  if (!result.data.success) {
    throw new Error(result.data.error.message);
  }
  return result.data;
}

export async function logout(core: SynologyApi) {
  const params = {
    api: SYNOLOGY_API_AUTH,
    version: 6,
    method: "logout",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = await axios.get(url, { params });
  if (!result.data.success) {
    throw new Error(result.data.error.message);
  }
}
