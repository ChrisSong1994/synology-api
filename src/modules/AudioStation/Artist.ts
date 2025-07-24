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

/**
 * Get the list of artists from AudioStation
 * 
 * @param params - Parameters for retrieving the artist list
 * @param params.limit - Maximum number of results to return, defaults to 1000
 * @param params.offset - Starting offset for results, defaults to 0
 * @param params.library - Specify library type, can be 'all' or 'personal', defaults to 'all'
 * @param params.additional - Array of additional information to retrieve, defaults to ['avg_rating']
 * @param params.filter - Filter condition
 * @param params.artist - Filter by artist name
 * @param params.genre - Filter by genre
 * @param params.sort_by - Field to sort by, currently only supports 'name'
 * @param params.sort_direction - Sort direction, can be 'ASC' or 'DESC', defaults to 'ASC'
 * 
 * @returns Response object containing the list of artists
 */
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
