<template>
  <div>
    <div class="conditions">
      <i class="el-icon-s-home" style="vertical-align: middle;"></i>
      <span>
        <span class="home-name">首页</span>
        <span class="home-name">></span>
      </span>
      <span>
        <span class="home-name">房产拍卖北京</span>
        <span class="home-name">></span>
      </span>
      <span>
        <span class="chosen">
          丰台
          <el-button class="el-icon-close"></el-button>
        </span>
        <span class="home-name">></span>
      </span>
      <div class="conditions-nav">
        <div class="nav-list">
          <span class="nav-title">区域：</span>
          <el-button class="nav-detail" v-for="(item,index) in cityData" :key="index" :class="{active:item.active}" @click="selectCity(index)">{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">价格：</span>
          <el-button class="nav-detail" v-for="(item,index) in priceData" :key="index" :class="{active:item.active}" @click="selectPrice(index)">{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">房型：</span>
          <el-button class="nav-detail" v-for="(item,index) in houseData" :key="index" :class="{active:item.active}" @click="selectHouse(index)">{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">面积：</span>
          <el-button class="nav-detail" v-for="(item,index) in houseData" :key="index" :class="{active:item.active}" @click="selectHouse(index)">{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">性质：</span>
          <el-button class="nav-detail" v-for="(item,index) in houseData" :key="index" :class="{active:item.active}" @click="selectHouse(index)">{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">状态：</span>
          <el-button class="nav-detail" v-for="(item,index) in houseData" :key="index" :class="{active:item.active}" @click="selectHouse(index)">{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">拍卖次数：</span>
          <el-button class="nav-detail" v-for="(item,index) in houseData" :key="index" :class="{active:item.active}" @click="selectHouse(index)">{{item.name}}</el-button>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      cityData: [
        { name: "不限", id: "-1", active: false },
        { name: "京城", id: "0", active: false },
        { name: "西城", id: "1", active: false },
        { name: "海淀", id: "2", active: false },
        { name: "朝阳", id: "3", active: false },
        { name: "丰台", id: "4", active: false },
        { name: "昌平", id: "5", active: false },
        { name: "石景山", id: "6", active: false },
        { name: "大兴", id: "7", active: false },
        { name: "通州", id: "8", active: false },
        { name: "顺义", id: "9", active: false },
      ],
      priceData: [
        { name: "不限", id: "-1", active: false },
        { name: "300万以下", id: "0", active: false },
        { name: "300-500万", id: "1", active: false },
        { name: "500-1000万", id: "2", active: false },
        { name: "1000-3000万", id: "3", active: false },
        { name: "3000万以上", id: "4", active: false },
      ],
      houseData: [
        { name: "不限", id: "-1", active: false },
        { name: "一室", id: "1", active: false },
        { name: "两室", id: "2", active: false },
        { name: "三室", id: "3", active: false },
        { name: "四室", id: "4", active: false },
        { name: "五室", id: "5", active: false },
        { name: "五室以上", id: "6", active: false },
      ]
    }
  },
  mounted() {

  },
  methods: {
    selectCity(index) {
      this.cityData.map(item => {
        item.active = false
      })
      this.cityData[index].active = true
    },
    selectPrice(index) {
      this.priceData.map(item => {
        item.active = false
      })
      this.priceData[index].active = true
    },
    selectHouse(index) {
      this.houseData.map(item => {
        item.active = false
      })
      this.houseData[index].active = true
    }
  }
}
  </script>