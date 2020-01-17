<template>
  <div>
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/r1.png" alt="">
          </div>
          <div class="swiper-slide">
            <img src="@/assets/r1.png" alt="">
          </div>
        </div>
        <!-- Add Arrows -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="container-bg">
      <div class="container-area">
        <div class="container-floor">
          <div class="floor-title">
            <span class="floor-name"> 法拍严选</span>
            <span class="floor-more">查看更多</span>
          </div>
          <ul class="floor-list">
            <li class="floor-list-nav">
              <img src="@/assets/test.png" alt="">
              <p class="nav-name">北京市xxxx小区xxx栋001号</p>
              <div class="nav-detail">
                起拍价格
                <span class="houseprice">1200.00万</span>
                <span>xxx万/平</span>
              </div>
              <div class="nav-detail">
                参考价格
                <span>￥1120万</span>
              </div>
              <div class="nav-detail">
                总面积
                <span>100.00平</span>
              </div>
              <div class="nav-detail">
                拍卖时间
                <span>2020-10-10</span>
              </div>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <Button @click="console()">点击</Button>
    <Button @click="loginout()">退出</Button>
  </div>
</template> 
<script>
import Auth from "@/utils/auth";
import Swiper from "Swiper";

export default {
  components: {
  },
  data() {
    return {
    }
  },
  mounted() {
    var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        },
      },
    });
  },
  methods: {
    console() {
      this.$router.push({ name: "console" })
    },
    loginout() {
      Auth.removeToken()
      //退出到首页
      window.location.href = "/"
    }
  }
}
</script>

<style lang="scss">
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  img {
    height: 100%;
  }
}
</style>