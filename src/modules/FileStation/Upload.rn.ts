import { AxiosProgressEvent } from "axios";
import { createFormData, getFormDataHeaders } from "@/utils";
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
export async function uploadFile(params: UploadFileParams) {
  if (!this.isConnecting) {
    await this.connect();
  }
  const api = this.getApiInfoByName(FileStationApi.Upload);
  const { path, file, overwrite = OverwriteEnum.OVERWRITE, create_parents = true } = params;

  const formData = createFormData();
  formData.append("method", "upload");
  formData.append("version", String(api?.maxVersion));
  formData.append("api", FileStationApi.Upload);
  formData.append("path", path);
  formData.append("overwrite", overwrite);
  formData.append("create_parents", String(create_parents));
  formData.append("file", file);

  const res = this.run(FileStationApi.Upload, {
    method: "post",
    data: formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res;
}
