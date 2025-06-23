import axios from "axios";

import { SYNOLOGY_API_INFO } from "@/constants";
import { SynologyApi } from "@/core";

export async function getApiInfo(core: SynologyApi) {
  const params = {
    api: SYNOLOGY_API_INFO,
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
