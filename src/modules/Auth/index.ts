import { getAuthKeyGrant } from "./AuthKey";
import { getEncryptionInfo } from "./Encryption";

//  methods
export const METHODS = {
  getAuthKeyGrant,
  getEncryptionInfo,
};

// name space
export const KEY = "Auth";
export const ALIAS_KEY = "au";

// type
export type TMethods = typeof METHODS;
