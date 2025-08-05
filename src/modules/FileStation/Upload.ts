import ky, { type Progress } from "ky";
import fs from "fs";
import Axios from "axios";
import { HttpProxyAgent } from "http-proxy-agent";
// import {Buffer } from "node:buffer"

import { buildUrlWithQuery, isNode, createFormData, getFormDataHeaders } from "@/utils";
import { FileStationApi, SynologyApiResponse } from "@/types";

export type UploadFileParams = {
  path: string;
  file: File | Blob | string | any;
  overwrite?: boolean;
  create_parents?: boolean;
  onProgress?: (progress: Progress) => void;
};

export type UploadFileResponse = SynologyApiResponse<{
  blSkip: boolean;
  file: string;
  pid: number;
  progress: number;
}>;
export async function uploadFile(params: UploadFileParams): Promise<UploadFileResponse> {
  if (!this.isConnecting) {
    await this.connect();
  }
  const { path, file, overwrite = true, create_parents = true } = params;
  const api = this.getApiInfoByName(FileStationApi.Upload);
  const query = {
    // method: "upload",
    // version: api.maxVersion, // minVersion: 2
    // api: FileStationApi.Upload,
    _sid: this.authInfo.sid,
  };
  const url = buildUrlWithQuery(`${this.baseUrl}${api.path}`, query);
  let fileContent = file;
  let fileName = "";
  if (typeof file === "string" && isNode) {
    // fileContent = await fs.readFile(file);
    fileContent = fs.readFileSync(file);
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    fileName = require("path").basename(file);
  }

  const formData = createFormData();
  // formData.append("mtime", String(file.lastModified));
  formData.append("method", "upload");
  formData.append("version", String(api.maxVersion));
  formData.append("api", FileStationApi.Upload);
  formData.append("path", path);
  formData.append("overwrite", "overwrite");
  formData.append("file", fileContent, {
    filename: fileName, 
    contentType: "application/octet-stream", // 可根据文件类型修改
  });

  // formData.append("create_parents", String(create_parents));

  console.log("headers:", getFormDataHeaders(formData));

  const res: any = await Axios.post(url, formData, {
    headers: {
      "x-syno-token": this.authInfo.synotoken,
      ...getFormDataHeaders(formData),
    },
    httpAgent: new HttpProxyAgent("http://localhost:8888"),
  });
  return res;
}
