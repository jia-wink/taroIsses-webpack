import { useStorage } from "@vueuse/core";
import Taro from "@tarojs/taro";

// 终极补丁版本
export const useTaroStorage = (key, defaultValue, options) => {
  return useStorage(
    key,
    () => Taro.getStorageSync(key) || defaultValue,
    {
      getItem: (key) => {
        Taro.getStorageSync(key);
      },
      setItem: (key, value) => {
        Taro.setStorageSync(key, value);
      },
      removeItem: (key) => {
        Taro.removeStorageSync(key);
      },
    },
    {
      serializer: {
        read: (v) => v,
        write: (v) => v,
      },
      // enmm暂时解决报错
      window: null,
      ...options,
    }
  );
};
