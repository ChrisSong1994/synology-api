import { VideoStationApi, SynologyApiResponse } from "@/types";

export interface AmeStatus {
  ame_major_version: number;
  has_aac: boolean;
  has_hevc: boolean;
  has_license: boolean;
  is_aac_activated: boolean;
  is_ame_broken: boolean;
  is_ame_install: boolean;
  is_ame_v2: boolean;
  is_ame_v3: boolean;
}

export interface Privilege {
  dtv: boolean;
  offline_conversion: boolean;
  renderer: boolean;
  sharing: boolean;
}

export interface TranscodingCapability {
  dtv_transcode: boolean;
  fhd_hardware_transcode: boolean;
  hardware_transcode: boolean;
  remux: boolean;
  software_transcode: boolean;
  transcode: boolean;
}

/**
 * get filestation info
 */
export type VideoStationInfoResponse = SynologyApiResponse<{
  ame_status: AmeStatus;
  is_dtv_enabled: boolean;
  is_manager: boolean;
  is_subtitle_search_enabled: boolean;
  need_aac: boolean;
  need_hevc: boolean;
  privilege: Privilege;
  timezone: string;
  timezone_offset: number;
  transcoding_capability: TranscodingCapability;
  version: string;
  version_string: string;
}>;

export async function getInfo(): Promise<VideoStationInfoResponse> {
  const res = await this.run(VideoStationApi.Info, {
    params: {
      method: "get",
    },
  });
  return res;
}
