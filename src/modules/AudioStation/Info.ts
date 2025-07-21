import { AudioStationApi, SynologyApiResponse } from "@/types";

export type AudioStationInfoResponse = SynologyApiResponse<{
  ame_status: {
    ame_major_version: number;
    has_aac: boolean;
    has_license: boolean;
    is_aac_activated: boolean;
    is_ame_broken: boolean;
    is_ame_install: boolean;
    need_aac_transcoding: boolean;
  };
  browse_personal_library: string;
  dsd_decode_capability: boolean;
  enable_equalizer: boolean;
  enable_personal_library: boolean;
  enable_user_home: boolean;
  has_music_share: boolean;
  is_manager: boolean;
  playing_queue_max: number;
  privilege: {
    playlist_edit: boolean;
    remote_player: boolean;
    sharing: boolean;
    tag_edit: boolean;
    upnp_browse: boolean;
  };
  remote_controller: boolean;
  same_subnet: boolean;
  serial_number: string;
  settings: {
    audio_show_virtual_library: boolean;
    disable_upnp: boolean;
    enable_download: boolean;
    prefer_using_html5: boolean;
    transcode_to_mp3: boolean;
  };
  sid: string;
  support_bluetooth: boolean;
  support_usb: boolean;
  support_virtual_library: boolean;
  transcode_capability: Array<string>;
  version: number;
  version_string: string;
}>;

export async function getInfo(): Promise<AudioStationInfoResponse> {
  const res = await this.run(AudioStationApi.Info, {
    params: {
      method: "getinfo",
    },
  });
  return res;
}
