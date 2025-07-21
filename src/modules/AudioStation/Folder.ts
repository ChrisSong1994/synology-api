import { AudioStationApi, SynologyApiResponse } from "@/types";

export type AudioStationFolderListParams = {
  limit?: number;
  offset?: number;
  library?: "all";
  additional?: Array<"song_tag" | "song_audio" | "song_rating">;
  id?: string; // folder id
  sort_by?: "song_rating" | "title" | "album" | "artist" | "duration" | "track";
  sort_direction?: "ASC" | "DESC";
};

export type AudioStationFolderListResponse = SynologyApiResponse<{
  folder_total: number;
  id: string;
  items: Array<{
    id: string;
    is_personal: boolean;
    path: string;
    title: string;
    type: string;
  }>;
  offset: number;
  total: number;
}>;

export async function getFolderList(
  params: AudioStationFolderListParams
): Promise<AudioStationFolderListResponse> {
  const {
    additional = ["song_tag", "song_audio", "song_rating"],
    library = "all",
    limit = 1000,
    offset = 0,
    sort_by = "title",
    sort_direction = "ASC",
    ...extraParams
  } = params;
  const res = await this.run(AudioStationApi.Folder, {
    params: {
      method: "list",
      limit: limit,
      offset: offset,
      library: library,
      sort_by: sort_by,
      sort_direction: sort_direction,
      additional: additional.join(","),
      ...extraParams,
    },
  });
  return res;
}
