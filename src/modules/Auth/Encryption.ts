import { SynoApi, SynologyApiResponse } from "@/types";

export type EncryptionInfoResponse = SynologyApiResponse<{
  cipherkey: string;
  ciphertoken: string;
  public_key: string;
  server_time: number;
}>;
export async function getEncryptionInfo(): Promise<EncryptionInfoResponse> {
  const res = await this.run(SynoApi.Encryption, {
    params: {
      method: "getinfo",
      format: "module",
    },
  });
  return res;
}
