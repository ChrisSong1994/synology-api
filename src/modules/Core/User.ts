import { CoreApi, SynologyApiResponse } from "@/types";

export type UserListParams = {
  offset?: number;
  limit?: number; // Defaults to -1
  sort_by?: string; // Defaults to "name"
  sort_direction?: "ASC" | "DESC";
  additional?: Array<
    | "description"
    | "email"
    | "expired"
    | "cannot_chg_passwd"
    | "passwd_never_expire"
    | "password_last_change"
    | "groups"
    | "2fa_status"
  >;
};

export type UserListResponse = SynologyApiResponse<{
  offset: number;
  total: number;
  users: Array<{
    description: string;
    email: string;
    expired: string;
    name: string;
    passwd_never_expire: boolean;
  }>;
}>;

export async function getUserList(params?: UserListParams): Promise<UserListResponse> {
  const { additional = ["email", "description", "expired"] } = params || {};
  const res = await this.run(CoreApi.User, {
    params: {
      ...params,
      method: "list",
      additional: JSON.stringify(additional),
    },
  });
  return res;
}
