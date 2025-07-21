import { buildUrlWithQuery } from "@/utils";

import { VideoStationApi, SynologyApiResponse } from "@/types";

export type VideoStationGetStreamUrlParams = {
  stream_id: string;
  tid: string;
};

export type VideoStationGetStreamUrlResponse = SynologyApiResponse<string>;
export async function getStreamUrl(params: VideoStationGetStreamUrlParams): Promise<string> {
  const url = `${this.baseUrl}entry.cgi/1.mp4`;
  const query = {
    ...params,
    api: VideoStationApi.Streaming,
    method: "stream",
    format: "raw",
    version: 2,
    _sid: this.authInfo?.sid,
  };

  return buildUrlWithQuery(url, query);
}

// 基于视频ID获取播放流ID
export async function getStreamId(
  id: number
): Promise<SynologyApiResponse<{ format: string; stream_id: string }>> {
  return await this.run(VideoStationApi.Streaming, {
    params: {
      method: "open",
      raw: JSON.stringify({}),
      file: JSON.stringify({ id }),
    },
  });
}
