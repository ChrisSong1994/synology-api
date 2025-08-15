import { FileStationApi, SynologyApiResponse } from "@/types";
import { buildUrlWithQuery } from "@/utils";

export type DownloadFileParams = {
  path: string;
  mode?: "download" | "open";
};

export type DownloadFileResponse = SynologyApiResponse<string>;

export async function getDownloadFile(params: DownloadFileParams): Promise<DownloadFileResponse> {
  const { path, mode = "download" } = params;
  const api = this.getApiInfoByName(FileStationApi.Download);
  const query = {
    method: "download",
    path,
    mode,
    version: api.maxVersion,
    api: FileStationApi.Download,
    _sid: this.authInfo.sid,
  };
  const url = buildUrlWithQuery(`${this.baseUrl}${api.path}`, query);
  return {
    data: url,
    success: true,
  };
}
