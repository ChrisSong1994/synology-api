export function isObjEmpty(obj: Record<string, any>) {
  return obj && typeof obj === "object" && Object.keys(obj).length === 0;
}

export function queryObjToString(params: Record<string, any>) {
  if (isObjEmpty(params)) {
    return "";
  }
  return Object.keys(params)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}

export function isHttpUrl(url: string) {
  return /^https?:\/\//.test(url);
}


export function isUndfined(value: any) {
  return value === undefined;
}