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
  const options = await this.genRequestOptions(FileStationApi.Thumb, {
    method: "get",
    params: {
      path,
      size,
      rotate,
    },
  });

  const thumbUrl = buildUrlWithQuery(options.url, options.params);

  return {
    success: true,
    data: thumbUrl,
  };
}
