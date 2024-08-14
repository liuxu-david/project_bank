<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  menuInfo: Object,
});
const menuItemActive = ref(false);
const info = reactive({ ...props.menuInfo });

const handleMouseEnter = () => {
  //   info.x = props.menuInfo.activeX;
  info.y = props.menuInfo.activeY;
  menuItemActive.value = true;
};
const handleMouseLeave = () => {
  //   info.x = props.menuInfo.x;
  info.y = props.menuInfo.y;
  menuItemActive.value = false;
};
const handleMenuClick = () => {};
</script>

<template>
  <div class="menu-item">
    <div
      class="menu-link"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @click="handleMenuClick"
    >
      <div
        class="menu-img"
        :style="{ backgroundPosition: `${info.x}px ${info.y}px` }"
      ></div>
      <div :class="['menu-title', menuItemActive ? 'menu-title-active' : '']">
        {{ props.menuInfo.title }}
      </div>
      <div :class="['menu-desc', menuItemActive ? 'menu-desc-active' : '']">
        {{ props.menuInfo.desc }}
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.menu-item {
  width: 25%;
  z-index: 999;
  .menu-link {
    padding: 82px 8px 0;
    cursor: pointer;
    .menu-img {
      width: 72px;
      height: 72px;
      margin: 0 auto 10px;
      background-image: url("../assets/home/homePage.png");
      background-repeat: no-repeat;
      background-size: 1800px 330px;
    }
    .menu-title {
      font-weight: 700;
      font-size: 18px;
      line-height: 24px;
      color: #222222;
      text-align: center;
    }
    .menu-title-active {
      color: #b51a25;
    }
    .menu-desc {
      font-weight: 400;
      margin-top: 8px;
      line-height: 19px;
      font-size: 14px;
      color: #666666;
      text-align: center;
    }
    .menu-desc-active {
      color: black;
    }
  }
}
</style>
