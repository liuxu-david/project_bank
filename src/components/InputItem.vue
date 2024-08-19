<script setup>
import { ref } from "vue";
import Schema from "async-validator";
import { rules } from "@/utils/inputValidator.js";

const inputValue = defineModel("inputValue");
const props = defineProps({
  id: String,
  title: String,
  operate: String,
});
// 是否聚焦
const isForcused = ref(false);
// 是否校验
const isValid = ref(false);
const validator = new Schema(rules);
const inputError = ref(props.title);

const handleFocus = () => {
  isForcused.value = true;
  isValid.value = false;
  inputError.value = props.title;
};
// 数据校验方法
const handleValidate = () => {
  validator.validate({ [props.id]: inputValue.value }, (errors, fields) => {
    if (errors && fields[props.id]) {
      inputError.value = fields[props.id][0].message;
      isValid.value = true;
      return errors;
    } else {
      inputError.value = props.title;
      isValid.value = false;
    }
  });
};
const handleBlur = () => {
  handleValidate();
  if (!inputValue.value) {
    isForcused.value = false;
    isValid.value = false;
    inputError.value = props.title;
  }
};
defineExpose({ handleValidate });
</script>

<template>
  <div class="input-item">
    <div
      class="tip-text"
      :class="{
        'tip-text-active': isForcused,
        'validate-error': isValid,
      }"
    >
      {{ inputError }}
    </div>
    <input
      type="text"
      v-model="inputValue"
      @focus="handleFocus()"
      @blur="handleBlur()"
      maxlength="16"
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
  .validate-error {
    bottom: 30px;
    font-size: 12px;
    font-weight: 700;
    color: #d42b35;
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
