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

export type UserInfoParams = {
  name: string;
  additional?: Array<
    | "description"
    | "email"
    | "expired"
    | "cannot_chg_passwd"
    | "passwd_never_expire"
    | "password_last_change"
  >;
};

export type UserInfoResponse = SynologyApiResponse<{
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

export async function getUserInfo(params: UserInfoParams): Promise<UserInfoResponse> {
  const { additional = [] } = params;
  const res = await this.run(CoreApi.User, {
    params: {
      ...params,
      method: "get",
      type: "local",
      additional: JSON.stringify(additional),
    },
  });
  return res;
}

export type CreateUserParams = {
  name: string;
  description: string;
  email: string;
  expired?: string;
  cannot_chg_passwd?: boolean;
  passwd_never_expire?: boolean;
  notify_by_email?: boolean;
  send_password?: boolean;
};

export type CreateUserResponse = SynologyApiResponse<{
  uid: number;
  name: string;
}>;

export async function createUser(params: CreateUserParams): Promise<CreateUserResponse> {

  const res = await this.run(CoreApi.User, {
    params: {
      method: "create",
      ...params,
    },
  });
  return res;
}
