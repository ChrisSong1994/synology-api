import {AxiosProgressEvent } from "axios"
import { isNode, createFormData, getFormDataHeaders } from "@/utils";
import { FileStationApi, SynologyApiResponse } from "@/types";

enum OverwriteEnum {
  OVERWRITE = "overwrite",
  SKIP = "skip",
}
export type UploadFileParams = {
  path: string;
  file: File | Blob | string | any;
  overwrite?: OverwriteEnum;
  create_parents?: boolean;
  onUploadProgress?: (progress: AxiosProgressEvent) => void;
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
  const { path, file, overwrite = OverwriteEnum.OVERWRITE, create_parents = true } = params;
  const api = this.getApiInfoByName(FileStationApi.Upload);

  let fileContent = file;
  let fileName = "";
  if (typeof file === "string" && isNode) {
    fileContent = require("fs").readFileSync(file);
    fileName = require("path").basename(file);
  } else {
  }

  const formData = createFormData();
  formData.append("method", "upload");
  formData.append("version", String(api.maxVersion));
  formData.append("api", FileStationApi.Upload);
  formData.append("path", path);
  formData.append("overwrite", overwrite);
  formData.append("file", fileContent, {
    filename: fileName,
    contentType: "application/octet-stream", // 可根据文件类型修改
  });

  // formData.append("create_parents", String(create_parents));

  console.log("headers:", getFormDataHeaders(formData));
  const res = this.run(FileStationApi.Upload, {
    method: "post",
    data: formData,
    headers: getFormDataHeaders(formData),
  });
  return res;
}
