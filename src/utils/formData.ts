import { isNode } from "./env";
// detect environment and create FormData instance
export function createFormData() {
  if (isNode) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const FormDataNode = require("form-data");
    return new FormDataNode();
  } else {
    return new FormData();
  }
}

//  Node.js
export function getFormDataHeaders(formData: any) {
  if (typeof formData.getHeaders === "function") {
    return formData.getHeaders();
  }
  return {};
}
