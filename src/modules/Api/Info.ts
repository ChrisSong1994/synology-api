import ky from "ky";

import { SynologyApiInfo, SynologyApiResponse } from "@/types";
import { SynologyApi } from "@/core";

export async function getApiInfo(core: SynologyApi) {
  const params = {
    api: SynologyApiInfo.Info,
    version: 1,
    method: "query",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = await ky.get<SynologyApiResponse>(url, { searchParams: params }).json();
  if (!result.success) {
    throw new Error(result.error.message);
  }
  return result;
}
