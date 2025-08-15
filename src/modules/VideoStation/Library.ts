import { VideoStationApi, SynologyApiResponse } from "@/types";

export type VideoStationAcrossLibraryParams = {
  policy?: string;
  limit?: number;
  additional?: string[];
};

interface File {
  audio_bitrate: number;
  audio_codec: string;
  channel: number;
  container_type: string;
  display_x: number;
  display_y: number;
  duration: string;
  ff_video_profile: number;
  filesize: number;
  frame_bitrate: number;
  frame_rate_den: number;
  frame_rate_num: number;
  frequency: number;
  id: number;
  path: string;
  position: number;
  resolutionx: number;
  resolutiony: number;
  rotation: number;
  sharepath: string;
  video_bitrate: number;
  video_codec: string;
  video_level: number;
  video_profile: number;
  watched_ratio: number;
}

export type VideoStationAcrossLibraryResponse = SynologyApiResponse<{
  movie: Array<{
    additional: {
      file: File[];
      watched_ratio: number;
    };
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

export async function getAcrossLibrary(
  params: VideoStationAcrossLibraryParams = {}
): Promise<VideoStationAcrossLibraryResponse> {
  const {
    additional = ["summary", "poster_mtime", "backdrop_mtime", "file"],
    policy = "top_rating",
    limit = 20,
  } = params;

  const res = await this.run(VideoStationApi.AcrossLibrary, {
    params: {
      method: "list_movie",
      additional: JSON.stringify(additional),
      policy,
      limit,
      ...params,
    },
  });
  return res;
}

// getLibrary

export type VideoStationLibraryParams = {
  limit?: number;
};

export type VideoStationLibraryResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  library: Array<{ id: number; is_public: boolean; title: string; type: string; visible: boolean }>;
}>;
export async function getLibrary(
  params: VideoStationLibraryParams = {}
): Promise<VideoStationLibraryResponse> {
  const res = await this.run(VideoStationApi.Library, {
    params: {
      method: "list",
      ...params,
    },
  });
  return res;
}
