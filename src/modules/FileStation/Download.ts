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

type ResponseType = "stream" | "arraybuffer" | "text" | "blob";

export type FetchFileParams<T extends ResponseType> = {
  path: string;
  responseType: T;
};

type FetchFileResponse<T extends ResponseType> = T extends "arraybuffer"
  ? ArrayBuffer
  : T extends "stream"
    ? ReadableStream
    : T extends "blob"
      ? Blob
      : string;

export async function downloadFile<T extends ResponseType>({
  path,
  responseType,
}: FetchFileParams<T>): Promise<FetchFileResponse<T>> {
  const api = this.getApiInfoByName(FileStationApi.Download);
  const params = {
    params: { method: "download", path },
    mode: "download",
    version: api.maxVersion,
    api: FileStationApi.Download,
    _sid: this.authInfo.sid,
    responseType: responseType,
  };
  return this.run(FileStationApi.Download, params);
}
