import { describe, expect, test } from "vitest";

import { createSynologyApi } from "./helper";

describe("SynologyApi VideoStation", async () => {
  const synologyApi = createSynologyApi();

  test("VideoStation getInfo", async () => {
    const result = await synologyApi.vs.getInfo();
    expect(result.success).toBeDefined();
  });

  test("VideoStation getLibrary", async () => {
    const result = await synologyApi.vs.getLibrary();
    expect(result.data.library.length).toBeGreaterThan(0);
    expect(result.success).toBeDefined();
  });

  test("VideoStation getAcrossLibrary", async () => {
    const result = await synologyApi.vs.getAcrossLibrary();
    expect(result.data.movie.length).toBeGreaterThan(0);
    expect(result.success).toBeDefined();
  });

  test("VideoStation getMoiveInfo", async () => {
    const result = await synologyApi.vs.getMoiveInfo({
      id: [],
    });
    expect(result.success).toBeDefined();
  });

  test("VideoStation getStreamUrl", async () => {
    const file = await synologyApi.vs.getMoiveInfo({
      id: [790],
    });
    const fileVideoInfo = file.data.movie[0].additional.file[0];

    const result = await synologyApi.vs.getStreamId(fileVideoInfo.id);
    const streamGrant = await synologyApi.au.getAuthKeyGrant({
      allow_api: "SYNO.VideoStation2.Streaming",
      allow_methods: ["stream"],
    });
    const streamUrl = await synologyApi.vs.getStreamUrl({
      stream_id: `"${result.data.stream_id}"`,
      tid: `"${streamGrant.data.tid}"`,
    });
    console.log("getStreamUrl", streamUrl);
  });
});
