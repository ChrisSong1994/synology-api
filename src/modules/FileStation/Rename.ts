import { FileStationApi, SynologyApiResponse } from "@/types";

export type RenameParams = {
  path: string;
  name: string;
  additional: Array<"real_path" | "size" | "owner" | "time" | "perm" | "type">;
  /**
   * Optional. A unique ID for the search
   * task which is obtained from start
   * method. It is used to update the
   * renamed file in the search result.
   */
  search_taskid?: string;
};

export type RenameResponse = SynologyApiResponse<{
  files: Array<{
    isdir: boolean;
    name: string;
    path: string;
  }>;
}>;

/**
 * Rename a file/folder.
 */
export async function rename(params: RenameParams): Promise<RenameResponse> {
  const res = await this.run(FileStationApi.Rename, {
    params: {
      method: "rename",
      ...params,
    },
  });
  return res;
}
