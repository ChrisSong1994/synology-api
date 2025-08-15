import { FileStationApi, SynologyApiResponse } from "@/types";

export type CreateFolderParams = {
  folder_path: string;
  name: string;
  force_parent?: boolean;
  additional: Array<"real_path" | "size" | "owner" | "time" | "perm" | "type">;
};

export type CreateFolderResponse = SynologyApiResponse<{
  folders: Array<{
    isdir: boolean;
    name: string;
    path: string;
  }>;
}>;

export async function createFolder(params: CreateFolderParams): Promise<CreateFolderResponse> {
  const { additional = [] } = params;
  const res = await this.run(FileStationApi.CreateFolder, {
    params: {
      method: "create",
      ...params,
      additional: JSON.stringify(additional),
    },
  });

  return res;
}
