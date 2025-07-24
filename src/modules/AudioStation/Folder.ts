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

/**
 * Get the list of folders from AudioStation
 * 
 * @param params - Parameters for retrieving the folder list
 * @param params.limit - Maximum number of results to return, defaults to 1000
 * @param params.offset - Starting offset for results, defaults to 0
 * @param params.library - Specify library type, currently only supports 'all'
 * @param params.additional - Array of additional information to retrieve, defaults to ['song_tag', 'song_audio', 'song_rating']
 * @param params.id - Folder ID to filter results
 * @param params.sort_by - Field to sort by, can be 'song_rating', 'title', 'album', 'artist', 'duration', or 'track', defaults to 'title'
 * @param params.sort_direction - Sort direction, can be 'ASC' or 'DESC', defaults to 'ASC'
 * 
 * @returns Response object containing the list of folders and related information
 */
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
