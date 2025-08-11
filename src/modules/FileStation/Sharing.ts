import { FileStationApi, SynologyApiResponse } from "@/types";

// Generate a sharing link to share files/folders with other people and perform operations on sharing link(s).

export type SharingLink = {
  id: string;
  date_available?: string;
  date_expired?: string;
  has_password?: boolean;
  isFolder?: boolean;
  link_owner?: string;
  name?: string;
  path?: string;
  url?: string;
  qrcode?: string;
};

/**
 *  Get information of a sharing link by the sharing link ID.
 */
export async function getSharingInfo(params: {
  id: string;
}): Promise<SynologyApiResponse<SharingLink>> {
  return await this.run(FileStationApi.Sharing, {
    params: {
      method: "getinfo",
      ...params,
    },
  });
}

/**
 * Get Sharing List
 * */
export type GetSharingListParams = {
  limit?: number;
  offset?: number;
  sort_by?: string;
  sort_direction?: "ASC" | "DESC";
  force_clean?: boolean;
};

export type GetSharingListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  links: Array<SharingLink>;
}>;

export async function getSharingList(
  params: GetSharingListParams = {}
): Promise<GetSharingListResponse> {
  const res = await this.run(FileStationApi.Sharing, {
    params: {
      method: "list",
      ...params,
    },
  });

  return res;
}

/**
 * Generate one or more sharing link(s) by file/folder path(s)
 */
export type CreateSharingLinkParams = {
  path: string | string[];
  password?: string;
  date_expired?: string;
  date_available?: string;
};

export type CreateSharingLinkResponse = SynologyApiResponse<{
  links: Array<SharingLink>;
}>;

export async function createSharingLink(
  params: CreateSharingLinkParams
): Promise<CreateSharingLinkResponse> {
  const res = await this.run(FileStationApi.Sharing, {
    params: {
      method: "create",
      ...params,
    },
  });
  return res;
}

/**
 * Delete one or more sharing links.
 */
export type DeleteSharingLinkParams = {
  ids: string[];
};
export async function deleteSharingLinks(
  params: DeleteSharingLinkParams
): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Sharing, {
    params: {
      method: "delete",
      id: params.ids.join(","),
    },
  });
  return res;
}

/**
 * Remove all expired and broken sharing links.
 */
export async function clearInvalidSharingLinks(): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Sharing, {
    params: {
      method: "claear_invalid",
    },
  });
  return res;
}

/**
 * Edit sharing link(s)
 * */
export type EditSharingLinkParams = {
  id: string;
  password?: string;
  date_expired?: string;
  date_available?: string;
};
export async function editSharingLink(
  params: EditSharingLinkParams
): Promise<SynologyApiResponse<any>> {
  const res = await this.run(FileStationApi.Sharing, {
    params: {
      method: "edit",
      ...params,
    },
  });
  return res;
}
