import { AudioStationApi, SynologyApiResponse } from "@/types";

export type AudioStationCreatePlaylistParams = {
  library?: "all" | "personal";
  name: string;
};

export type AudioStationCreatePlaylistResponse = SynologyApiResponse<{
  id: string;
}>;

export async function createPlaylist(
  params: AudioStationCreatePlaylistParams
): Promise<AudioStationCreatePlaylistResponse> {
  const { library = "all", name } = params;
  const res = await this.run(AudioStationApi.Playlist, {
    params: {
      method: "create",
      library,
      name,
    },
  });
  return res;
}

export type AudioStationPlaylistParams = {
  limit?: number;
  offset?: number;
  library?: "all" | "personal";
};

export type AudioStationPlaylistResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  playlists: Array<{
    id: string;
    library: string;
    name: string;
    sharing_status: string;
    type: string;
  }>;
}>;

export async function getPlaylist(
  params: AudioStationPlaylistParams
): Promise<AudioStationPlaylistResponse> {
  const { library = "all", limit = 1000, offset = 0 } = params;
  const res = await this.run(AudioStationApi.Playlist, {
    params: {
      method: "list",
      limit: limit,
      offset: offset,
      library: library,
    },
  });
  return res;
}

/**
 * deletePlaylist
 * @param id
 * @returns
 */
export async function deletePlaylist(params: { id: string }): Promise<SynologyApiResponse<any>> {
  const res = await this.run(AudioStationApi.Playlist, {
    params: {
      method: "delete",
      id: params.id,
    },
  });
  return res;
}
