export const getEnv = () => {
  // browser
  if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    return "browser";
  }

  // Node.js
  if (
    typeof process !== "undefined" &&
    process?.versions?.node &&
    process?.versions?.node != null
  ) {
    return "node";
  }

  //  React Native
  if (typeof navigator !== "undefined" && navigator.product === "ReactNative") {
    return "react-native";
  }

  return "unknown";
};

export const isBrowser = getEnv() === "browser";
export const isNode = getEnv() === "node";
export const isReactNative = getEnv() === "react-native";
