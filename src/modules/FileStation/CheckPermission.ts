import { FileStationApi, SynologyApiResponse } from "@/types";

/**
 * Check if a logged-in user has write permission to create new files/folders in a given folder.
 */
export async function checkPermission(params: {
  path: FileStationApi;
  filename: string;
  overwrite: boolean;
  create_only: boolean;
}): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.CheckPermission, {
    params: {
      method: "write",
      ...params,
    },
  });
  return res;
}
