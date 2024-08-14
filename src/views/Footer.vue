<script setup>
const data = [
  {
    lable: "服务条款",
    href: "https://www.bochk.com/sc/conditionsforservices.html",
  },
  {
    lable: "重要声明及私隐政策声明",
    href: "https://www.bochk.com/sc/importantnotice.html",
  },
  {
    lable: "保安资讯",
    href: "https://www.bochk.com/sc/security.html",
  },
  {
    lable: "超连结政策",
    href: "https://www.bochk.com/sc/hyperlinkpolicy.html",
  },
  {
    lable: "系统升级时间表",
    href: "https://igtb.bochk.com/",
  },
  {
    lable: "表格和申请",
    href: "https://igtb.bochk.com/",
  },
  {
    lable: "企业电子及线上服务条款",
    href: "https://www.bochk.com/sc/conditionsforservices.html",
  },
];
</script>

<template>
  <div class="footer">
    <div class="footer-content">
      <div class="header">
        <div class="item-link" v-for="(item, index) in data" :key="item.lable">
          <a :href="item.href">{{ item.lable }}</a>
          <span v-if="data.length - 1 !== index">|</span>
        </div>
      </div>
      <div class="copyright">©　中国银行（香港）有限公司。版权所有。</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  position: relative;
  top: 100px;
  left: 0;
  width: 100vw;
  background-color: #f2f2f2;
  padding: 16px 0;
  .footer-content {
    width: 1568px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: left;
    .item-link {
      display: inline-block;
      margin-right: 8px;
      cursor: pointer;
      span {
        margin: 0 0 0 8px;
        color: #d8d8d8;
      }
      a {
        font-size: 14px;
        color: #666666;
      }
    }
    .copyright {
      width: 100%;
      font-size: 10px;
      color: #999999;
      margin-top: 8px;
    }
  }
}
</style>
