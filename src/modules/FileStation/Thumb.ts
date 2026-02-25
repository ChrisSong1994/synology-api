import { FileStationApi, SynologyApiResponse } from "@/types";
import { buildUrlWithQuery } from "@/utils";

export type GetThumbRequest = {
  path: string;
  size?: "small" | "medium" | "large" | "original";
  /**
    Optional. Return rotated
    thumbnail.
    Rotate Options:
    0: Do not rotate.
    1: Rotate 90°.
    2: Rotate 180°.
    3: Rotate 270°.
    4: Rotate 360°.
  */
  rotate?: 0 | 1 | 2 | 3 | 4;
};

export type GetThumbResponse = SynologyApiResponse<{}>;

export async function getThumbUrl(params: GetThumbRequest): Promise<GetThumbResponse> {
  const { path, size = "small", rotate = 0 } = params;
  if(!this.isConnecting) {
    await this.connect();
  }
  const apiInfo = this.getApiInfoByName(FileStationApi.Thumb);
  const options = await this.genRequestOptions(FileStationApi.Thumb, {
    params: {
      path,
      size,
      rotate,
      method: "get",
      version: apiInfo.maxVersion || apiInfo.minVersion,
      SynoToken: this.authInfo.synotoken,
      _sid: this.authInfo.sid,
    },
  });

  const thumbUrl = buildUrlWithQuery(`${this.baseUrl}${apiInfo.path}`, options.params);

  return {
    success: true,
    data: thumbUrl,
  };
}
