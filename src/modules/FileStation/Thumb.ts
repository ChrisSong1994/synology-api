import { FileStationApi } from "@/types";
import { isNode } from "@/utils";

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

export type GetThumbResponse = Buffer;

export async function getThumb(params: GetThumbRequest): Promise<GetThumbResponse> {
  const { path, size = "small", rotate = 0 } = params;

  const res = await this.run(FileStationApi.Thumb, {
    responseType: "arraybuffer",
    params: {
      path,
      size,
      rotate,
    },
  });

  return isNode ? Buffer.from(res as ArrayBuffer) : (res as any);
}
