import { buildUrlWithQuery } from "@/utils";

import { VideoStationApi, SynologyApiResponse } from "@/types";

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


export type VideoStationGetStreamUrlParams = {
  id: number;
};

export type VideoStationGetStreamUrlResponse = SynologyApiResponse<string>;
export async function getStreamUrl(
  params: VideoStationGetStreamUrlParams
): Promise<VideoStationGetStreamUrlResponse> {
  try {
    const movies = await this.vs.getMoiveInfo({
      id: [params.id],
    });
    const fileInfo = movies?.data?.movie?.[0]?.additional?.file?.[0];
    const result = await this.vs.getStreamId(fileInfo.id);
    const streamGrant = await this.au.getAuthKeyGrant({
      allow_api: VideoStationApi.Streaming,
      allow_methods: ["stream"],
    });
    const url = `${this.baseUrl}entry.cgi/1.mp4`;
    const query = {
      ...params,
      api: VideoStationApi.Streaming,
      method: "stream",
      format: "raw",
      version: 2,
      _sid: this.authInfo?.sid,
      stream_id: `"${result.data.stream_id}"`,
      tid: `"${streamGrant.data.tid}"`,
    };
    return {
      success: true,
      data: buildUrlWithQuery(url, query),
    };
  } catch (e) {
    return {
      success: false,
      data: "",
      error: {
        code: 0,
        message: e.message,
      },
    };
  }
}
