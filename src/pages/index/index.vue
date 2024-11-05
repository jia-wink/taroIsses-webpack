<template>
  <view class="index">
    <view class="index">正常响应式对象：{{ msg }}</view>
    <view class="index">响应式Storage：{{ proxeyState }}</view>
    <view class="button-group">
      <button @tap="handleMsg">改变msg</button>
      <button @tap="handleProxeyState">改变proxeyState</button>
    </view>
  </view>
</template>

<script setup>
import { ref } from "vue";
import "./index.scss";
import { useTaroStorage } from "./";

// 正常的响应式变量
const msg = ref("Hello Taro");

// 返回的也是一个响应式对象
const proxeyState = useTaroStorage("Storagekey", "defaultValue");

const handleMsg = () => {
  msg.value += "_next";
};
const handleProxeyState = () => {
  proxeyState.value += "_next";
};
</script>

<style lang="scss">
.button-group {
  display: flex;
  margin-top: 50px;
  button {
    border-radius: 20px;
    box-sizing: border-box;
    border: 1px solid #000;
  }
}
.index {
  margin-bottom: 10px;
}
</style>
