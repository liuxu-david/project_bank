<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import banner1 from "@/assets/swiper/banner_s3.jpg";
import banner2 from "@/assets/swiper/chequedeposit_s.jpg";
import banner3 from "@/assets/swiper/iGTB Mobile Token.jpg";
import banner4 from "@/assets/swiper/igtb_topbanner.jpg";
import banner5 from "@/assets/swiper/iGTBTopBanner_SC.jpg";
import banner6 from "@/assets/swiper/iGTB_banner_api.jpg";
const slides = [
  {
    img: banner1,
    title: "1",
  },
  {
    img: banner2,
    title: "2",
  },
  {
    img: banner3,
    title: "3",
  },
  {
    img: banner4,
    title: "4",
  },
  {
    img: banner5,
    title: "5",
  },
  {
    img: banner6,
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
