<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { reactive, ref, computed } from "vue";
import MenuItem from "../components/MenuItem.vue";
import InputItem from "../components/InputItem.vue";
import { useMainStore } from "../store/mainStore";
import { storeToRefs } from "pinia";
import Schema from "async-validator";
import { rules } from "@/utils/inputValidator.js";

const mainStore = useMainStore();
const { modelFlag } = storeToRefs(mainStore);
const validator = new Schema(rules);
// const modelFlag = computed(() => mainStore.modelFlag);

const { handleModel } = mainStore;
const inputRef = ref(null);

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
const menuInfo = [
  {
    x: -300,
    y: -30,
    acitveX: -300,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "仪表板",
    desc: "根据您的需要选择仪表板展示内容，快速进入交易",
    needLogin: true,
  },
  {
    x: -900,
    y: -30,
    acitveX: -900,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "自贸区业务图书馆",
    desc: "提供最新自贸区、大湾区及人民币国际化政策动态",
    href: "https://igtb.bochk.com/",
  },
  {
    x: 0,
    y: -30,
    acitveX: 0,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "网上申请商业理财账户",
    desc: "只需三个简单步骤即可申请开立商业理财账户",
    href: "https://transaction.bochk.com/igtb/html/aop/gib_aopMainPage.html?lang=zh_CN",
  },
  {
    x: -750,
    y: -30,
    acitveX: -750,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "查询",
    desc: "以视图形式为您展示全球账户，余额及交易资讯，一目了然",
    needLogin: true,
  },
  {
    x: -1500,
    y: -30,
    acitveX: -1500,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "知识中心",
    desc: "提供丰富业务资讯、产品介绍、服务条款及功能说明书等",
    href: "https://igtb.bochk.com/",
  },
  {
    x: -1200,
    y: -30,
    acitveX: -1200,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "工具",
    desc: "提供更多管理工具，使您的交易更加便利",
    needLogin: true,
  },
  {
    x: -150,
    y: -30,
    acitveX: -150,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "交易银行",
    desc: "了解我们多元化的交易银行业务。",
    href: "https://igtb.bochk.com/",
  },
  {
    x: -1050,
    y: -30,
    acitveX: -1050,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "培训中心",
    desc: " 提供常用业务指引及功能亮点说明，增进您对iGTB平台的认识",
    href: "https://igtb.bochk.com/",
  },
  {
    x: -600,
    y: -30,
    acitveX: -600,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "中银全球智汇",
    desc: "智能汇款服务方便您随时追踪汇款，提高汇款效率",
    needLogin: true,
  },
  {
    x: -1350,
    y: -30,
    acitveX: -1350,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "下载中心",
    desc: "提供不同国家/提供交易模板，供您下载使用",
    needLogin: true,
  },
  {
    x: -1650,
    y: -30,
    acitveX: -1650,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "本地特色服务",
    desc: "为您提供不同国家/地区的当地特色服务，满足不同业务需要",
    needLogin: true,
  },
  {
    x: -150,
    y: -180,
    acitveX: -150,
    activeY: -252,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "iGTB API资讯网",
    desc: "了解中银香港iGTB API服务详情，您亦可下载不同API材料",
    href: "https://igtb.bochk.com/",
  },
  {
    x: 0,
    y: -180,
    acitveX: 0,
    activeY: -252,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "绿色存款",
    desc: "参与绿色存款，启航实践可持续发展理念",
    needLogin: true,
  },
  {
    x: 0,
    y: -30,
    acitveX: 0,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "在线贷款申请",
    desc: "三个步骤完成您的线上货款申请，轻松解决公司资金周转需要",
    href: "https://igtb.bochk.com/loanapplication_sc.html",
  },
  {
    x: -300,
    y: -30,
    acitveX: -300,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "申请询证函",
    desc: "",
    needLogin: true,
  },
  {
    x: -1350,
    y: -30,
    acitveX: -1350,
    activeY: -102,
    img: new URL("@/assets/home/homePage.png", import.meta.url),
    title: "上载银行服务指示文件",
    desc: "您可透过此功能上载并递交银行服务指示文件",
    needLogin: true,
  },
];
const loginData = reactive([
  {
    id: "username",
    title: "iGTB平台编号/登录名称",
    value: "",
    remind: "14位数字企业网上银行账号 / 8-16个英文字符登入名称",
  },
  {
    id: "codename",
    title: "使用者代号",
    value: "",
    remind: "2-6个英文字或数字",
  },
  {
    id: "password",
    title: "密码",
    value: "",
    operate: "忘记密码",
    remind: "8-12个字母、数字及/或符号",
  },
  {
    id: "authcode",
    title: "验证码",
    value: "",
  },
]);

const modalData = reactive([
  {
    id: "username",
    title: "iGTB平台编号/登录名称",
    value: "",
    remind: "14位数字企业网上银行账号 / 8-16个英文字符登入名称",
  },
  {
    id: "codename",
    title: "使用者代号",
    value: "",
    remind: "2-6个英文字或数字",
  },
  {
    id: "password",
    title: "密码",
    value: "",
    operate: "忘记密码",
    remind: "8-12个字母、数字及/或符号",
  },
  {
    id: "authcode",
    title: "验证码",
    value: "",
  },
]);

const handleMenuItemClick = (flag, href) => {
  flag ? handleModel() : open(href, "_blank");
};
const handleLogin = () => {
  if (inputRef.value.length) {
    inputRef.value.forEach((refItem) => {
      refItem.handleValidate();
    });
  }
};
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
        <SwiperSlide
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
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="login-section">
      <div class="form">
        <div class="login-title">登录</div>
        <div class="login-desc">首次使用者?<span>按此开始使用</span></div>
        <InputItem
          v-for="item in loginData"
          :key="item.title"
          v-model:inputValue="item.value"
          :title="item.title"
          :operate="item.operate"
          :id="item.id"
          :remind="item.remind"
          ref="inputRef"
        />

        <div class="login_button">
          <div class="btn" @click="handleLogin">基本登录</div>
          <div class="btn">双重认证登录</div>
        </div>
      </div>
    </div>
    <div class="menu">
      <MenuItem
        :menuInfo="item"
        v-for="item in menuInfo"
        :key="item.title"
        @click="handleMenuItemClick(item.needLogin, item.href)"
      />
    </div>
  </div>
  <div class="model" v-if="modelFlag">
    <div class="shadow" @click="handleModel"></div>
    <div class="loginData">
      <div class="login-modal">
        <div class="border">
          <div class="border_right"></div>
        </div>
        <div class="form">
          <div class="title">
            <h2>登录</h2>
            首次使用者? <span>点此开始使用</span>
          </div>
          <InputItem
            v-for="item in modalData"
            :key="item.title"
            v-model:inputValue="item.value"
            :title="item.title"
            :operate="item.operate"
            :id="item.id"
            :remind="item.remind"
            ref="inputRef"
          />
          <div class="login_button">
            <span class="btn" @click="handleLogin">基本登录</span>
            <span class="btn">双重认证登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main {
  position: relative;
  top: 60px;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 0;
  .swiper-wrapper {
    width: 100vw;
    height: 500px;
    .swiper-slide {
      position: relative;
      width: 100vw;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      &::before {
        content: "";
        position: absolute;
        background: linear-gradient(transparent, transparent, black);
        opacity: 0.6;
        width: 100%;
        height: 100%;
      }
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
    --swiper-pagination-color: #b51a25;
    --swiper-pagination-bullet-inactive-color: #ffffff;
    --swiper-pagination-bullet-inactive-opacity: 1;
  }
  .login-section {
    position: absolute;
    right: 156px;
    top: 24px;
    z-index: 9;
    background: rgba(34, 34, 34, 0.6);
    width: 320px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: #ffffff !important;
    .form {
      .login-title {
        font-weight: 700;
        font-size: 24px;
      }
      .login-desc {
        margin-top: 8px;
        font-size: 14px;
        span {
          font-weight: 600;
          cursor: pointer;
          padding-left: 6px;
        }
      }
      .login_button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .btn {
          display: inline-block;
          min-width: 132px;
          height: 40px;
          text-align: center;
          line-height: 40px;
          border: 1px solid white;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
          margin-top: 16px;
        }
        .btn:hover {
          background-color: white;
          color: black;
        }
      }
    }
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 1568px;
    margin: auto;
    padding: 32px 0;
  }
}
.model {
  .shadow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    background-color: yellow;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.8);
  }
  .loginData {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 100;
    .login-modal {
      width: 500px;
      height: 480px;
      background-color: black;

      .border {
        height: 4px;
        background-color: rgb(181, 26, 37);
        .border_right {
          width: 100px;
          height: 4px;
          background-color: rgb(124, 135, 142);
        }
      }
      .form {
        color: white;
        padding: 0 20px;
        .title {
          text-align: left;
          margin: 50px 10px 20px 0px;
          h2 {
            margin-bottom: 5px;
          }
          span {
            font-weight: 700;
          }
        }
        .login_button {
          text-align: right;
          margin-top: 30px;
          :first-child {
            margin-right: 20px;
          }

          .btn {
            height: 40px;
            border: 1px solid white;
            padding: 12px 40px;
            border-radius: 5px;
            cursor: pointer;
          }
          .btn:hover {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
  transition: all 0.3s;
}
</style>
