<template>
  <div class="strictContent onsaleHouse">
    <div class="conditions">
      <div class="breads">
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
      </div>
      <div class="conditions-nav">
        <div class="nav-list">
          <span class="nav-title">区域：</span>
          <el-button
            class="nav-detail"
            v-for="(item,index) in cityData"
            :key="index"
            :class="{active:item.active}"
            @click="selectCity(index)"
          >{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">价格：</span>
          <el-button
            class="nav-detail"
            v-for="(item,index) in priceData"
            :key="index"
            :class="{active:item.active}"
            @click="selectPrice(index)"
          >{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">房型：</span>
          <el-button
            class="nav-detail"
            v-for="(item,index) in houseData"
            :key="index"
            :class="{active:item.active}"
            @click="selectHouse(index)"
          >{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">面积：</span>
          <el-button
            class="nav-detail"
            v-for="(item,index) in houseArea"
            :key="index"
            :class="{active:item.active}"
            @click="selectHouse(index)"
          >{{item.name}}</el-button>
        </div>
        <div class="nav-list">
          <span class="nav-title">标签：</span>
          <el-button
            class="nav-detail"
            v-for="(item,index) in houseProty"
            :key="index"
            :class="{active:item.active}"
            @click="selectHouse(index)"
          >{{item.name}}</el-button>
        </div>
      </div>
    </div>
    <div class="list-bg">
      <div class="list-con">
        <el-row :gutter="8">
          <el-col :span="20">
            <div>
              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                <el-tab-pane label="热度" name="hot"></el-tab-pane>
                <el-tab-pane label="最新" name="new"></el-tab-pane>
                <el-tab-pane label="总价" name="allPrice"></el-tab-pane>
                <el-tab-pane label="单价" name="price"></el-tab-pane>
                <el-tab-pane label="面积" name="area"></el-tab-pane>
              </el-tabs>
            </div>
            <ul class="list">
              <li v-for="(item,index) in 4" :key="index">
                <el-tag class="area">实地拍摄</el-tag>
                <img src="@/assets/test.png" alt />
                <div class="content">
                  <div class="info">
                    <p class="title">xxxx小区xxx号楼xx单元x号</p>
                    <div class="detail">
                      <p>
                        <i class="el-icon-location-outline"></i>
                        <span>海淀 - 世纪城</span>
                      </p>
                      <p>
                        <i class="el-icon-house"></i>
                        <span>3室2厅 | 181.27㎡ | 南北 | 简装 | 4/6层 | 08年建</span>
                      </p>
                      <p>
                        <i class="el-icon-star-off"></i>
                        <span>128人关注 / 2019-12-06 10:00发布</span>
                      </p>
                    </div>
                    <div class="tag">
                      <el-tag type="success">必看好房</el-tag>
                      <el-tag type="info">满五年</el-tag>
                      <!-- <el-tag type="warning">商品房</el-tag> -->
                    </div>
                  </div>
                  <div class="price">
                    <h3>
                      668.00
                      <span>万</span>
                    </h3>
                    <p class="num">单价12345.67/㎡</p>
                  </div>
                </div>
              </li>
            </ul>
            <div class="block">
              <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                background
                prev-text="上一页"
                next-text="下一页"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000"
              ></el-pagination>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="recommend">
              <p class="title">
                <b></b>好房推荐
              </p>
              <ul>
                <li v-for="(item,index) in 2" :key="index">
                  <img src="@/assets/recommend.png" alt />
                  <p>xx小区xx号楼xx单元x...</p>
                  <el-button type="primary">立即关注</el-button>
                </li>
              </ul>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "hot",
      currentPage1: 1,
      cityData: [
        { name: "不限", id: "-1", active: true },
        { name: "京城", id: "0", active: false },
        { name: "西城", id: "1", active: false },
        { name: "海淀", id: "2", active: false },
        { name: "朝阳", id: "3", active: false },
        { name: "丰台", id: "4", active: false },
        { name: "昌平", id: "5", active: false },
        { name: "石景山", id: "6", active: false },
        { name: "大兴", id: "7", active: false },
        { name: "通州", id: "8", active: false },
        { name: "顺义", id: "9", active: false }
      ],
      priceData: [
        { name: "不限", id: "-1", active: true },
        { name: "300万以下", id: "0", active: false },
        { name: "300-500万", id: "1", active: false },
        { name: "500-1000万", id: "2", active: false },
        { name: "1000-3000万", id: "3", active: false },
        { name: "3000万以上", id: "4", active: false }
      ],
      houseData: [
        { name: "不限", id: "-1", active: true },
        { name: "一室", id: "1", active: false },
        { name: "两室", id: "2", active: false },
        { name: "三室", id: "3", active: false },
        { name: "四室", id: "4", active: false },
        { name: "五室", id: "5", active: false },
        { name: "五室以上", id: "6", active: false }
      ],
      houseArea: [
        { name: "不限", id: "-1", active: true },
        { name: "50㎡以下", id: "1", active: false },
        { name: "50-90㎡", id: "2", active: false },
        { name: "90-140㎡", id: "3", active: false },
        { name: "140-2000㎡", id: "4", active: false },
        { name: "200㎡以上", id: "5", active: false }
      ],
      houseProty: [
        { name: "不限", id: "-1", active: true },
        { name: "必看好房", id: "1", active: false },
        { name: "满五年", id: "2", active: false },
        { name: "满两年", id: "3", active: false }
      ]
    };
  },
  mounted() {},
  methods: {
    selectCity(index) {
      this.cityData.map(item => {
        item.active = false;
      });
      this.cityData[index].active = true;
    },
    selectPrice(index) {
      this.priceData.map(item => {
        item.active = false;
      });
      this.priceData[index].active = true;
    },
    selectHouse(index) {
      this.houseData.map(item => {
        item.active = false;
      });
      this.houseData[index].active = true;
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
  }
};
</script>