import { AudioStationApi, SynologyApiResponse } from "@/types";

export type AudioStationArtistListParams = {
  limit?: number;
  offset?: number;
  library?: "all" | "personal";
  additional?: string[];
  filter?: string;
  artist?: string;
  genre?: string;
  sort_by?: "name";
  sort_direction?: "ASC" | "DESC";
};

export type AudioStationArtistListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  artists: Array<{
    additional: {
      avg_rating?: {
        rating: number;
      };
    };
    name: string;
  }>;
}>;

export async function getArtistList(
  params: AudioStationArtistListParams
): Promise<AudioStationArtistListResponse> {
  const {
    additional = ["avg_rating"],
    library = "all",
    limit = 1000,
    offset = 0,
    sort_by = "name",
    sort_direction = "ASC",
    ...extraParams
  } = params;
  const res = await this.run(AudioStationApi.Artist, {
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
