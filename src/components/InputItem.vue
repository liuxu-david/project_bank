<script setup>
import { ref } from "vue";
import { validate } from "vee-validate";

const inputValue = defineModel("inputValue");
const props = defineProps({
  title: String,
  operate: String,
});
const isForcused = ref(false);
const handleFocus = () => {
  isForcused.value = true;
};
const handleBlur = () => {
  if (!inputValue.value) {
    isForcused.value = false;
  }
};
</script>

<template>
  <div class="input-item">
    <div class="tip-text" :class="{ 'tip-text-active': isForcused }">
      {{ props.title }}
    </div>
    <input
      type="text"
      v-model="inputValue"
      @focus="handleFocus()"
      @blur="handleBlur()"
    />
    <div class="tip-icon"></div>
    <div class="tip-operate" v-if="props.operate">{{ props.operate }}</div>
  </div>
</template>

<style lang="less" scoped>
.input-item {
  position: relative;
  height: 58px;
  margin-bottom: 6px;
  input {
    position: absolute;
    bottom: 0;
    left: 0;
    border: none;
    width: 100%;
    background-color: transparent;
    outline: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
    color: white;
    box-sizing: border-box;
  }
  .tip-text {
    position: absolute;
    bottom: 16px;
    left: 0;
    text-align: left;
    font-size: 16px;
    transition: all 0.4s;
  }
  .tip-text-active {
    bottom: 30px;
    font-size: 12px;
    font-weight: 700;
  }
  .tip-icon {
    position: absolute;
    right: 0;
    top: 20px;
    width: 22px;
    height: 22px;
    cursor: pointer;
    background-size: 1800px 330px;
    background-image: url(@/assets/home/homePage.png);
    background-position: -60px 0;
  }
  .tip-operate {
    position: absolute;
    top: 20px;
    right: 25px;
    cursor: pointer;
  }
}
</style>
