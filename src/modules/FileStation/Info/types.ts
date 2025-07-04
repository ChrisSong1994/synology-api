import { SynologyApiResponse } from "@/types";

export type FileStationInfoResponse = SynologyApiResponse<{
  is_manager: boolean; // If the logged-in user is an administrator.
  support_virtual_protocol: number;
  support_sharing: boolean;
  hostname: string;
}>;
