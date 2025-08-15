import {
  getSystemStatus,
  getSystemInfo,
  getSystemStorageInfo,
  getSystemHealth,
  getSystemUtilization,
} from "./System";
import { getUserList, getUserInfo } from "./User";

// methods
export const METHODS = {
  getSystemStorageInfo,
  getSystemHealth,
  getSystemUtilization,
  getSystemInfo,
  getSystemStatus,
  getUserList,
  getUserInfo,
};

// name space
export const KEY = "Core";
export const ALIAS_KEY = "co";

// type
export type TMethods = typeof METHODS;
