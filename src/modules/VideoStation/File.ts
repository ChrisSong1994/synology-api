import { VideoStationApi, SynologyApiResponse } from "@/types";

export type VideoStationFileSetWatchStatusParams = {
  id: number; // video id
  position: number; // video player position
};

// 设置观看进度
export async function setWatchStatus(
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

export type VideoStationGetTrackInfoResponse = SynologyApiResponse<{
  audio: Array<{
    bitrate: number;
    channel: number;
    channel_layout: string;
    codec: string;
    codec_raw: string;
    frequency: number;
    id: string;
    is_default: boolean;
    language: string;
    profile: string;
    sample_rate: number;
    streamid: number;
    track: string;
  }>;
  video: Array<{
    bitrate: number;
    codec: string;
    codec_raw: string;
    codec_tag: string;
    display_x: number;
    display_y: number;
    framerate: number;
    framerate_den: number;
    framerate_num: number;
    id: string;
    language: string;
    level: number;
    pix_fmt: string;
    profile: string;
    resolutionx: number;
    resolutiony: number;
    rotate: number;
    sample_aspect_ratio_den: number;
    sample_aspect_ratio_num: number;
    track: string;
  }>;
}>;

// 获取媒体信息
export async function getTrackInfo(params: {
  id: number;
}): Promise<VideoStationGetTrackInfoResponse> {
  return await this.run(VideoStationApi.File, {
    params: {
      method: "get_track_info",
      ...params,
    },
  });
}
