import Axios from "axios";

import { SynoApi, SynologyApiResponse } from "@/types";
import { SynologyApi } from "@/core";

export async function getApiInfo(core: SynologyApi) {
  const params = {
    api: SynoApi.Info,
    version: 1,
    method: "query",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = (await Axios.get<SynologyApiResponse>(url, { params: params })).data;
  if (!result.success) {
    throw new Error(result.error.message);
  }
  return result;
}
