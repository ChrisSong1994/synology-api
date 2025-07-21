import { AudioStationApi, SynologyApiResponse } from "@/types";

export type AudioStationAlbumListParams = {
  limit?: number;
  offset?: number;
  library?: "all" | "personal";
  additional?: string[];
  version?: number;
  filter?: string;
  artist?: string;
  genre?: string;
  sort_by?: "time" | "random" | "year" | "name" | "display_artist" | "avg_rating";
  sort_direction?: "ASC" | "DESC";
};

export type AudioStationAlbumListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  albums: Array<{
    additional: {
      avg_rating?: {
        rating: number;
      };
    };
    album_artist: string;
    artist: string;
    display_artist: string;
    name: string;
    year: number;
  }>;
}>;

export async function getAlbumList(
  params: AudioStationAlbumListParams
): Promise<AudioStationAlbumListResponse> {
  const {
    additional = ["avg_rating"],
    library = "all",
    limit = 1000,
    offset = 0,
    sort_by = "name",
    sort_direction = "ASC",
    ...extraParams
  } = params;
  const res = await this.run(AudioStationApi.Album, {
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
