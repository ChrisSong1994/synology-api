import {
  getSystemStatus,
  getSystemInfo,
  getSystemStorageInfo,
  getSystemHealth,
  getSystemUtilization,
} from "./System";

// fs methods
export const METHODS = {
  getSystemStorageInfo,
  getSystemHealth,
  getSystemUtilization,
  getSystemInfo,
  getSystemStatus,
};

// name space
export const KEY = "Core";
export const ALIAS_KEY = "co";

// type
export type TMethods = typeof METHODS;
