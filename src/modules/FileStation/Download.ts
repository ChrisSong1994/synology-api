import { AxiosRequestConfig } from "axios";
import { FileStationApi, SynologyApiResponse } from "@/types";
import { buildUrlWithQuery } from "@/utils";

export type DownloadFileParams = {
  path: string;
  mode?: "download" | "open";
  responseType?: AxiosRequestConfig["responseType"];
};

export type DownloadFileResponse = DownloadFileParams["responseType"];

export async function getDownloadFile(params: DownloadFileParams): Promise<DownloadFileResponse> {
  const { path, mode = "download" ,responseType} = params;
  const res = await this.run(FileStationApi.Download, {
    params: {
      path,
      mode,
      method: "download",
    },
    responseType,
  });

  return res;
}
