import { describe, test } from "vitest";

import { createSynologyApi } from "./util";

describe("SynologyApi AudioStation", async () => {
  const synologyApi = createSynologyApi();
  await synologyApi.connect();

  if (synologyApi.isConnecting) {
    test("SynologyApi getSongList", async () => {
      const result = await synologyApi.AudioStation.getSongList({
        limit: 10,
        offset: 0,
      });

      console.log(result);
    });
  }
});
