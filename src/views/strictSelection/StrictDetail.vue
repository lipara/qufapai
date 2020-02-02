<template>
  <div class="detailContent">
    <div class="detail-info">
      <div class="detail-nav">
        <i class="el-icon-s-home"></i>
        首页 > 法拍严选
      </div>
      <div class="detail-title">
        <h3 class="title-name">龙华别墅</h3>
        <div class="title-r">
          <span class="title-box">
            <span class="title-img box1">
              <i class="el-icon-star-on"></i>
            </span>
            取消
          </span>
          <span class="title-box">
            <span class="title-img">
              <i class="el-icon-star-off"></i>
            </span>
            收藏
          </span>
        </div>
      </div>
      <div class="detail-introduce">
        <div class="img-box">
          <div class="swiper-container gallery-top" style="width:633px;height:474px;">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item,index) in images"
                :key="index"
                :style="`background-image:url(${item.url})`"
              ></div>
            </div>
            <!-- Add Arrows -->
          </div>
          <div class="swiper-container gallery-thumbs">
            <div class="swiper-wrapper">
              <div
                class="swiper-slide"
                v-for="(item,index) in images"
                :key="index"
                :style="`background-image:url(${item.url})`"
              ></div>
            </div>
            <div class="swiper-button-next swiper-button-white"></div>
            <div class="swiper-button-prev swiper-button-white"></div>
          </div>
          <!-- <img src="@/assets/test.png" alt="" width="100%" height="100%"> -->
        </div>
        <div class="product-info">
          <div class="product-nav">
            <div style="float:left;">
              <div>
                <span class="nav-title">起拍价：</span>
                <span class="price">10000.00</span>
                <span class="unit">万</span>
              </div>
              <div style="margin-top:20px;">
                <span class="nav-title">参考价：</span>
                <span class="c-price">123.00</span>
                <span class="c-unit">万</span>
              </div>
            </div>
            <div style="float:right;width:100px;text-align:right;line-height:26px;">
              <el-tag class="product-tag" type="info">住宅</el-tag>
              <br />
              <el-tag type="warning" class="product-tag">一拍</el-tag>
              <br />
              <el-tag type="danger" class="product-tag">商品房</el-tag>
            </div>
          </div>
          <div class="house-detail">
            <div class="house-info">
              <div class="house-num">八室四厅</div>
              <div class="house-floor">2层</div>
            </div>
            <div class="house-info" style="text-align:center;">
              <div class="house-num">南北朝向</div>
              <div class="house-floor">车库天台</div>
            </div>
            <div class="house-info" style="text-align:right;">
              <div class="house-num">482.52平</div>
              <div class="house-floor">2008年建</div>
            </div>
          </div>
          <div class="house-nav">
            <div style="float:left;line-height:26px;">
              <div>
                <span class="house-l">房源编号：</span>
                <span class="house-d">123465</span>
              </div>
              <div>
                <span class="house-l">保证金额：</span>
                <span class="house-d">123465</span>
              </div>
              <div>
                <span class="house-l">单价：</span>
                <span class="house-d">123465</span>
              </div>
              <div>
                <span class="house-l">区域：</span>
                <span class="house-d">123465</span>
              </div>
              <div>
                <span class="house-l">所在小区：</span>
                <span class="house-d">123465</span>
              </div>
              <div>
                <span class="house-l">拍卖时间：</span>
                <span class="house-d">123465</span>
              </div>
            </div>
            <div style="float:right;width:114px;">
              <p class="look-report">扫描查看报告</p>
              <img src="@/assets/ewm.png" alt />
            </div>
          </div>
          <div class="house-footer">
            <div style="float:left;width:176px;">
              <span class="house-footer-nav">预约看房</span>
              <span class="house-footer-nav" style="color:#641900;opacity:0.4;">贷款咨询</span>
              <span class="house-footer-nav" style="color:#641900;opacity:0.4;">房源资讯</span>
            </div>
            <div class="jt"></div>
            <div style="float:right;width:123px;">
              <img src="@/assets/ewm.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="house-related">
      <div class="related-floor">
        <div class="floor-title">
          <span>房源特色</span>
        </div>
        <div class="floor-int">
          <span class="int-nav">小区介绍</span>
          <span
            class="int-content"
          >置地逸轩小区是2004年批地，2005年入伙，小区的物业管理费3.6元每平方米，有地下停车场，小区4楼有带空中花园，游 泳池，便利店，健身会所，棋牌室。</span>
        </div>
        <div class="floor-int">
          <span class="int-nav">周边配套</span>
          <span class="int-content">一号线国贸站，九号线人民南站双地铁出门方便，近罗湖口岸进出香港。</span>
        </div>
        <div class="floor-int">
          <span class="int-nav">交通出行</span>
          <span
            class="int-content"
          >置地逸轩小区位于国贸商圈和东门商圈的交汇点上， 地理位置优越，配套完善。东面20米罗湖医院，有罗湖医院公交站台， 建设银行，南面近罗湖火车站，西面佳宁娜广场和嘉里大厦，金光华广场，嘉里大厦一层有中国工商银行， 沃尔玛超市。</span>
        </div>
        <div class="floor-int">
          <span class="int-nav">核心卖点</span>
          <span class="int-content">欠款120万，朝东北，高楼层采光充足，精简装修，业主诚心卖。</span>
        </div>
        <div style="padding:17px 0 30px 0">
          <span style="font-size:12px; opacity: 0.6;">其他备注信息:xxxxxxxxxxxxxxxxxxxxx</span>
        </div>
      </div>
    </div>
    <div>
      <div class="related-floor">
        <div class="floor-title">
          <span>小区介绍</span>
        </div>
        <div class="community-int">
          <img src="@/assets/test.png" alt width="300px" />
          <div class="community-right">
            <div style="margin-bottom:20px;">
              <span class="community-name">远大元一区</span>
              <span style="font-size:14px;">本小区共有4套房产拍卖</span>
            </div>
            <div class="community-floor">
              <span class="community-info">
                当月成交均价：
                <span class="info-key">96076.00元</span>
              </span>
              <span class="community-info">
                建筑结构：
                <span class="info-key">楼板</span>
              </span>
            </div>
            <div class="community-floor">
              <span class="community-info">
                建筑类型：
                <span class="info-key">住宅</span>
              </span>
              <span class="community-info">
                所在版块：
                <span class="info-key">海淀 世纪城</span>
              </span>
            </div>
            <div class="community-floor">
              <span class="community-info">
                户型总数：
                <span class="info-key">641户</span>
              </span>
              <span class="community-info">
                楼栋总数：
                <span class="info-key">5栋</span>
              </span>
            </div>
            <div class="community-floor">
              <span class="community-info">
                物业费：
                <span class="info-key">2.50-3.5元/平米/月</span>
              </span>
              <span class="community-info">
                物业公司：
                <span class="info-key">北京世纪城物业管理有限公司</span>
              </span>
            </div>
            <div class="community-floor">
              <span class="community-info">
                开发商：
                <span class="info-key">北京房地产开发有限公司</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="related-floor">
        <div class="floor-title">
          <span>地理位置</span>
        </div>
        <div style="margin-top:28px;margin-bottom:28px;">
          <img src="@/assets/address.jpg" alt />
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
            <span class="floor-more">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </span>
          </div>
          <ul class="floor-list">
            <li class="floor-list-nav" v-for="(item,i) in 4" :key="i">
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "Swiper";
export default {
  data() {
    return {
      images: [
        {
          url: require("../../assets/test.png")
        },
        {
          url: require("../../assets/r1.png")
        }
      ],
      contentList: [
        {
          name: "猜你喜欢"
        }
      ]
    };
  },
  mounted() {
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
    var galleryTop = new Swiper(".gallery-top", {
      spaceBetween: 10,

      thumbs: {
        swiper: galleryThumbs
      }
    });
  },
  methods: {}
};
</script>
<style>
html,
body {
  position: relative;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  background-size: cover;
  background-position: center;
}
.gallery-top {
  height: 80%;
  width: 100%;
}
.gallery-thumbs {
  /* height: 20%; */
  height: 113px;
  margin-top: 10px;
  box-sizing: border-box;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-thumb-active {
  opacity: 1;
}
</style>