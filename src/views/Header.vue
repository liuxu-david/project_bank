<script setup>
import IconItem from "@/components/IconItem.vue";
import { useMainStore } from "../store/mainStore";

const mainStore = useMainStore();
const { handleModel } = mainStore;

const iconInfo = [
  {
    x: -180,
    y: -30,
    acitveX: -180,
    activeY: -52,
    img: new URL("@/assets/header/header.png", import.meta.url),
    title: "首页",
  },
  {
    x: -60,
    y: -30,
    acitveX: -60,
    activeY: -52,
    img: new URL("@/assets/header/header.png", import.meta.url),
    title: "我的仪表板",
  },
  {
    x: -120,
    y: -30,
    acitveX: -120,
    activeY: -52,
    img: new URL("@/assets/header/header.png", import.meta.url),
    title: "收件箱",
  },
  {
    x: -300,
    y: -30,
    acitveX: -300,
    activeY: -52,
    img: new URL("@/assets/header/header.png", import.meta.url),
    title: "打印",
  },
  {
    x: -240,
    y: -30,
    acitveX: -240,
    activeY: -52,
    img: new URL("@/assets/header/header.png", import.meta.url),
    title: "练习我们",
  },
  {
    x: -420,
    y: -30,
    acitveX: -420,
    activeY: -52,
    img: new URL("@/assets/header/header.png", import.meta.url),
    title: "我的设定",
  },
];
</script>

<template>
  <div class="header">
    <div class="header-divider"><div class="divider-left"></div></div>
    <div class="header-content">
      <div class="header-left">
        <img src="../assets/header/Bank_of_China_Logo.png" alt="" />
        <div class="img-divider"></div>
        <img src="../assets/header/icn_footer_logo.png" alt="" />
      </div>
      <div class="header-right">
        <IconItem v-for="item in iconInfo" :key="item.title" :info="item" />
        <div class="login-btn" @click="handleModel">登录</div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 60px;
  z-index: 99;
  background-color: white;
  box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.05);
  .header-divider {
    width: 100%;
    height: 4px;
    background-color: #9d2235;
    .divider-left {
      background-color: #7c878e;
      width: 211px;
      height: 4px;
    }
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    width: 1568px;
    margin: auto;
    .img-divider {
      display: inline-block;
      width: 1px;
      height: 32px;
      background-color: #d8d8d8;
      margin: 0 20px;
    }
    .header-right {
      display: flex;
      flex-direction: row;
      align-items: center;
      .login-btn {
        padding: 5px 26px;
        font-size: 16px;
        background-color: #b51a25;
        color: #ffffff;
        text-align: center;
        border-radius: 5px;
        cursor: pointer;
        font-weight: 700;
      }
    }
  }
}
</style>
