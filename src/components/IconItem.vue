<script setup>
import { reactive, ref } from "vue";

const props = defineProps({
  info: Object,
});
const iconLocationInfo = reactive({ ...props.info });
const isActived = ref(false);
const handleEnter = () => {
  isActived.value = true;
  iconLocationInfo.y = props.info.activeY;
};
const handleLeave = () => {
  isActived.value = false;
  iconLocationInfo.y = props.info.y;
};
</script>

<template>
  <div
    class="icon-item"
    @mouseenter="handleEnter"
    @mouseleave="handleLeave"
    :style="{
      backgroundImage: `url(${props.info.img})`,
      backgroundPosition: `${iconLocationInfo.x}px ${iconLocationInfo.y}px`,
    }"
  >
    <div class="tooltips" v-if="isActived">{{ props.info.title }}</div>
  </div>
</template>

<style lang="less" scoped>
.icon-item {
  position: relative;
  width: 22px;
  height: 22px;
  margin-right: 19px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: 540px 180px;
  .tooltips {
    position: absolute;
    top: 25px;
    right: 11px;
    background-color: #ffffff;
    color: #666666;
    display: inline-flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    flex-direction: row;
    overflow: hidden;
    width: 60px;
    font-size: 12px;
    line-height: 24px;
    text-align: center;
  }
}
</style>
