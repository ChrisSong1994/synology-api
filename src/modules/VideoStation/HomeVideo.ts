import { VideoStationApi, SynologyApiResponse } from "@/types";

export type VideoStationFileSetWatchStatusParams = {
  id: number; // video id
  position: number; // video player position
};

export async function getFileVideoInfo(
  params: VideoStationFileSetWatchStatusParams
): Promise<SynologyApiResponse<any>> {
  const res = await this.run(VideoStationApi.File, {
    params: {
      method: "set_watchstatus",
      ...params,
    },
  });
  return res;
}


