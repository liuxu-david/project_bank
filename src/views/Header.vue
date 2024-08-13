<script setup>
</script>

<template>
  <div class="header">
    <div class="header-divider"><div class="divider-left"></div></div>
    <div class="header-content">
        <div class="header-left">
            <img src="../assets/header/Bank_of_China_Logo.png" alt="">
            <div class="img-divider"></div>
            <img src="../assets/header/icn_footer_logo.png" alt="">
        </div>
        <div class="header-right"></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    .header-divider{
        width: 100%;
        height: 4px;
        background-color: #9d2235;
        .divider-left{
            background-color: #7c878e;
            width: 211px;
            height: 4px;
        }
    }
}
.header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 56px;
    background-color: skyblue;
    width: 1568px;
    margin: auto;
    .img-divider {
        display: inline-block;
        width: 1px;
        height: 32px;
        background-color: #d8d8d8;
        margin: 0 20px;
    }
}
</style>
