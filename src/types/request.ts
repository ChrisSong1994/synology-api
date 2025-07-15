// export response

export type SynologyApiResponse<T = any> = {
  data?: T;
  error?: {
    code: number;
    message?: string;
  };
  success: boolean;
};
