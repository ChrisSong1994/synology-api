import { FileStationApi, SynologyApiResponse } from "@/types";

export type CreateFolderParams = {
  folder_path: string;
  name: string;
  force_parent?: boolean;
};

export type CreateFolderResponse = SynologyApiResponse<{
  folders: Array<{
    isdir: boolean;
    name: string;
    path: string;
  }>;
}>;

export async function createFolder(params: CreateFolderParams): Promise<CreateFolderResponse> {
  const { folder_path, name, force_parent = false } = params;
  const res = await this.run(FileStationApi.File, {
    params: {
      method: "create_folder",
      folder_path,
      name,
      force_parent,
    },
  });

  return res;
}
