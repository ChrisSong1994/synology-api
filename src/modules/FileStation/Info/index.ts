import { FileStationApi } from "@/types";
import { FileStationInfoResponse } from "./types";

/**
 * get filestation info
 */
export async function getInfo() {
  const res = await this.run(FileStationApi.Info, {
    params: {
      method: "get",
      version: 2, // 2 and later
    },
  });
  return res.data as FileStationInfoResponse;
}
