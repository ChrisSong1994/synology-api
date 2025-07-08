import { FileStationApi, SynologyApiResponse } from "@/types";

/**
 * get filestation info
 */
export type FileStationInfoResponse = SynologyApiResponse<{
  is_manager: boolean; // If the logged-in user is an administrator.
  support_virtual_protocol: number;
  support_sharing: boolean;
  hostname: string;
}>;

export async function getInfo() {
  const res = await this.run(FileStationApi.Info, {
    params: {
      method: "get",
    },
  });
  return res.data as FileStationInfoResponse;
}
