import { SynologyApiInfo, SynologyApiResponse } from "@/types";

export type SynologyApiGetAuthKeyGrantParams = {
  allow_api: string;
  allow_methods: string[];
};
export async function getAuthKeyGrant(
  params: SynologyApiGetAuthKeyGrantParams
): Promise<SynologyApiResponse<{ tid: string }>> {
  const { allow_methods, allow_api } = params;
  const result = await this.run(SynologyApiInfo.AuthKey, {
    params: {
      method: "grant",
      allow_api: allow_api,
      allow_methods: JSON.stringify(allow_methods),
    },
  });

  return result;
}
