import { FileStationApi, SynologyApiResponse } from "@/types";

export type FavoriteListParams = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  additional?: string[];
  status_filter: "all" | "valid" | "broken";
};

export type FavoriteListResponse = SynologyApiResponse<{
  is_manager: boolean; // If the logged-in user is an administrator.
  support_virtual_protocol: number;
  support_sharing: boolean;
  hostname: string;
}>;

export async function getFavoriteList(params: FavoriteListParams): Promise<FavoriteListResponse> {
  const { additional = ["real_path", "size", "owner", "time"], ...resetParams } = params;
  const res = await this.run(FileStationApi.Favorite, {
    params: {
      method: "list",
      ...resetParams,
      additional: JSON.stringify(additional),
    },
  });
  return res;
}

export type AddFavoriteParams = {
  path: string; //  path of the file or folder to add to the favorite list.
  name: string; //  name of the favorite.
  index: number; //  index of the favorite.
};

/**
 * add favorite
 */
export async function addFavorite(params: FavoriteListParams): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Favorite, {
    params: {
      method: "add",
      ...params,
    },
  });
  return res;
}

export type RemoveFavoriteParams = {
  path: string; //  path of the file or folder to remove from the favorite list.
};

/**
 * remove favorite
 */
export async function deleteFavorite(
  params: RemoveFavoriteParams
): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Favorite, {
    params: {
      method: "delete",
      ...params,
    },
  });
  return res;
}

/**
 * clear_broken
 * Delete all broken statuses of favorites.
 */
export async function clearBrokenFavorite(): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Favorite, {
    params: {
      method: "clear_broken",
    },
  });
  return res;
}



export type EditFavoriteParams = {
  path: string;  // A folder path starting with a shared folder is edited from a user's favorites.
  name: string;  // New favorite name.
}

/**
 * Edit a favorite name
*/
export async function editFavorite(params: EditFavoriteParams): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Favorite, {
    params: {
      method: "edit",
     ...params
    },
  });
  return res;
}


