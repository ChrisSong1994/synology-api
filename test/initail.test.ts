import { describe, test } from "vitest";

import { SynologyApi } from "../src";

describe("SynologyApi initial", () => {
  test("SynologyApi login", async () => {
    const synologyApi = new SynologyApi({
      server: "https://home.chrissong.top:5001",
      username: "songjun",
      password: "Sj1201134566",
    });
    const result = await synologyApi.connect();
    console.log(result);
    // expect(dayjs(1747793327968).format("YYYY-MM-DD HH:mm:ss")).toBe("2025-05-21 10:08:47");
  });
});
