import { FileStationApi } from "@/types";
import { isNode, buildUrlWithQuery } from "@/utils";

export type DownloadFileParams = {
  path: string;
};

export type DownloadFileResponse = Buffer;

export async function getDownload(params: DownloadFileParams): Promise<DownloadFileResponse> {
  const { path } = params;

  const res = await this.run(FileStationApi.Download, {
    responseType: "arraybuffer",
    params: {
      path,
      mode: "download",
    },
  });

  return isNode ? Buffer.from(res as ArrayBuffer) : (res as any);
}

// export async function getFileOpenUrl(params: DownloadFileParams): Promise<{
//   data: string;
//   success: boolean;
// }> {
//   if (!this.isConnecting) {
//     await this.connect();
//   }
//   const { path } = params;
//   const apiInfo = this.getApiInfoByName(FileStationApi.Download);
//   const url = buildUrlWithQuery(`${this.baseUrl}${apiInfo.path}`, {
//     api: FileStationApi.Download,
//     method:"download",
//     path,
//     mode: "open",
//     version: apiInfo.maxVersion,
//     _sid: this.authInfo?.sid,
//   });

//   return {
//     data: url,
//     success: true,
//   };
// }
