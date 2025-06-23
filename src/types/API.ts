// export response

export type SynologyApiResponse<T = any> = {
  data: T;
  error: {
    code: number;
    errors: Record<string, string>;
    message: string;
  };
  success: boolean;
};
