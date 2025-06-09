export function isEmpty(obj: Record<string, any>) {
  return Object.keys(obj).length === 0;
}

export function queryObjToString(params: Record<string, any>) {
  if (isEmpty(params)) {
    return "";
  }
  return Object.keys(params)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
    .join("&");
}
