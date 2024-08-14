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
    detailTile: "iGTB 流动保安编码",
    detailContent: "启用流动保安编码，随时随地管理您的账户及交易",
  },
  {
    img: new URL("@/assets/swiper/igtb_topbanner.jpg", import.meta.url),
    title: "4",
    detailTile: "BOC TradePLUS",
    detailContent:
      "数码贸易方案，应用金融科技，为客户提供更完善、安全、高效的商贸服务，助您紧握商机。",
  },
  {
    img: new URL("@/assets/swiper/iGTBTopBanner_SC.jpg", import.meta.url),
    title: "5",
  },
  {
    img: new URL("@/assets/swiper/iGTB_banner_api.jpg", import.meta.url),
    title: "6",
    detailTile: "iGTB API",
    detailContent:
      "透过应用程式介面(API)，将我行服务与您的企业系统无缝接合，促进业务流程数码化，为您提供更好的使用体验",
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
          <div class="float-info">
            <h1 v-if="item.detailTile">{{ item.detailTile }}</h1>
            <p v-if="item.detailContent">{{ item.detailContent }}</p>
            <div class="btn">了解更多</div>
          </div>
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
      .float-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 50px;
        width: 1568px;
        margin: auto;
        h1 {
          font-size: 32px;
          color: #ffffff;
        }
        p {
          font-size: 14px;
          color: #ffffff;
          margin-top: 5px;
        }
        .btn {
          width: 130px;
          background: transparent;
          padding: 11px 0;
          text-align: center;
          font-size: 16px;
          color: #ffffff;
          border-radius: 5px;
          border: 1px solid #ffffff;
          margin-top: 24px;
        }
      }
    }
  }
}
</style>
