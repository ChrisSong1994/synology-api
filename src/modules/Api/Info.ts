import axios from "axios";

import { SynologyApiInfo } from "@/types";
import { SynologyApi } from "@/core";

export async function getApiInfo(core: SynologyApi) {
  const params = {
    api: SynologyApiInfo.Info,
    version: 1,
    method: "query",
  };
  const url = `${core.baseUrl}entry.cgi`;
  const result = await axios.get(url, { params });
  if (!result.data.success) {
    throw new Error(result.data.error.message);
  }
  return result.data;
}
