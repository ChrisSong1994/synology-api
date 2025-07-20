import { VideoStationApi, SynologyApiResponse } from "@/types";
import { VideoFile } from "./types";

export type VideoStationGetMoiveInfoParams = {
  id: number[];
  additional?: string[];
};

export type Additional = {
  file: VideoFile[];
  watched_ratio: number;
};

export type VideoStationAcrossLibraryResponse = SynologyApiResponse<{
  movie: Array<{
    additional: Additional;
    certificate: string;
    create_time: number;
    id: number;
    last_watched: number;
    library_id: number;
    mapper_id: number;
    original_available: string;
    rating: number;
    sort_title: string;
    tagline: string;
    title: string;
  }>;
}>;

export async function getMoiveInfo(
  params: VideoStationGetMoiveInfoParams
): Promise<VideoStationAcrossLibraryResponse> {
  const { additional = ["file"], id } = params;

  const res = await this.run(VideoStationApi.Movie, {
    params: {
      ...params,
      method: "getinfo",
      id: JSON.stringify(id),
      additional: JSON.stringify(additional),
    },
  });
  return res;
}
