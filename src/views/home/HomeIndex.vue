<template>
  <div>
    <div class="swiper-box">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="@/assets/r1.png" alt />
          </div>
          <div class="swiper-slide">
            <img src="@/assets/r1.png" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="search-bg">
      <div class="form-box">
        <div class="form-nav">
          <span class="nav-title">全部栏目</span>
          <span>法拍严选</span>
          <span>在售好房</span>
        </div>
        <div class="form-nav" style="margin:15px 0 25px 0;">
          <span class="nav-title">全部城区</span>
          <span v-for="(item,index) in cityData" :key="index">{{item}}</span>
        </div>
        <div class="form-select">
          <el-input class="form-input" placeholder="输入关键字 好房 好物即刻拥有"></el-input>
          <el-button class="form-btn">搜索</el-button>
        </div>
      </div>
    </div>
    <div
      v-for="(v,index) in contentList"
      :key="index"
      class="container-bg"
      :class="`container-bg${index}`"
    >
      <div class="container-area">
        <div class="container-floor">
          <div class="floor-title">
            <span class="floor-name">{{v.name}}</span>
            <span class="floor-more" @click="goDetails(v)">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <ul class="floor-list">
            <li class="floor-list-nav" v-for="(item,i) in 4" :key="i" @click="toDetail">
              <img src="@/assets/test.png" alt />
              <p class="nav-name">北京市xxxx小区xxx栋001号</p>
              <div class="nav-detail">
                起拍价格
                <span class="houseprice">1200.00万</span>
                <span>(xxx万/平)</span>
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
          <div>
            <img src="@/assets/floorbg.png" alt width="100%" />
          </div>
        </div>
      </div>
    </div>
    <div class="brand-bg">
      <div class="brand-img">
        <img src="@/assets/brand.png" alt />
      </div>
    </div>
    <!-- <Button @click="console()">点击</Button>
    <Button @click="loginout()">退出</Button>-->
    <!--导航条 Start-->
    <slidebar></slidebar>
  </div>
</template> 
<script>
import Auth from "@/utils/auth";
import Swiper from "Swiper";
import slidebar from "@/components/slidebar/Index.vue";

export default {
  components: {
    slidebar
  },
  data() {
    return {
      cityData: [
        "京城",
        "西城",
        "海淀",
        "朝阳",
        "丰台",
        "昌平",
        "石景山",
        "大兴",
        "通州",
        "顺义"
      ],
      contentList: [
        {
          name: "法拍严选"
        },
        {
          name: "在售好房"
        }
      ]
    };
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        autoplay: {
          disableOnInteraction: false, //手动滑动之后不打断播放
          delay: 2000
        }
      }
    });
  },
  methods: {
    console() {
      this.$router.push({ name: "console" });
    },
    loginout() {
      Auth.removeToken();
      //退出到首页
      window.location.href = "/";
    },
    goDetails(v) {
      if (v.name === "法拍严选") {
        this.$router.push({ name: "strict" });
      } else if (v.name === "在售好房") {
        this.$router.push({ name: "saleIndex" });
      }
    },
    toDetail() {
      this.$router.push({ name: "detail" });
    }
  }
};
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