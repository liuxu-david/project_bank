<script setup>
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Navigation, Pagination, Autoplay } from "swiper/modules";
  const slides = [
    {
      img: new URL("@/assets/swiper/banner_s3.jpg", import.meta.url),
      title: "1",
    },
    {
      img: new URL("@/assets/swiper/chequedeposit_s.jpg", import.meta.url),
      title: "2",
    },
    {
      img: new URL("@/assets/swiper/iGTB Mobile Token.jpg", import.meta.url),
      title: "3",
    },
    {
      img: new URL("@/assets/swiper/igtb_topbanner.jpg", import.meta.url),
      title: "4",
    },
    {
      img: new URL("@/assets/swiper/iGTBTopBanner_SC.jpg", import.meta.url),
      title: "5",
    },
    {
      img: new URL("@/assets/swiper/iGTB_banner_api.jpg", import.meta.url),
      title: "6",
    },
  ];
</script>

<template>
  <div class="main">
    <div class="swiper-wrapper">
      <Swiper
        :modules="[Pagination, Navigation, Autoplay]"
        :pagination="{ clickable: true }"
        loop
        :autoplay="{ delay: 3000 }"
        :slides-per-view="1"
      >
        <Swiper-slide
          class="swiper-slide"
          v-for="item in slides"
          :key="item.img"
          :style="{ backgroundImage: `url(${item.img})` }"
        >
        </Swiper-slide>
      </Swiper>
    </div>
    <div class="menu"></div>
  </div>
</template>

<style lang="less" scoped>
  .main {
    width: 100%;
    height: 900px;
    margin-top: 60px;
    .swiper-wrapper {
      width: 100vw;
      height: 500px;
      .swiper-slide {
        width: 100vw;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
      }
    }
  }
</style>
