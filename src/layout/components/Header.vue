<template>
  <div class="header-title">
    <img src="@/assets/logo.jpg" alt="" style="vertical-align: super;">
    <div class="header-nav">
      <router-link to="/home" class="nav-list">
        首页
      </router-link>
      <router-link to="/console" class="nav-list">
        法拍严选
      </router-link>
      <router-link to="/console" class="nav-list">
        在售好房
      </router-link>
      <router-link to="/console" class="nav-list">
        法拍贷款
      </router-link>
      <router-link to="/console" class="nav-list">
        法拍百科
      </router-link>
    </div>
    <div style="float:right;">
      <el-button type="text" @click="toLogin" :class="{activeBtn:isActive}">登录</el-button>
      <span style="color: #666;">|</span>
      <el-button type="text" @click="toRegister" :class="{activeBtn:!isActive}">注册</el-button>
    </div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      isActive: true,
    }
  },
  methods: {
    toLogin() {
      this.$router.push({ name: "login" })
    },
    toRegister() {
      this.isActive = false
    }
  }
}
</script>
<style lang="scss">
$maincolor: #fa983a;
.header-title {
  height: 75px;
  padding: 0 78px;
  line-height: 78px;
  overflow: hidden;
  .header-nav {
    display: inline-block;
    margin-left: 102px;
    overflow: hidden;
    vertical-align: sub;
    .nav-list {
      padding: 10px 20px;
      color: #000;
      font-size: 18px;
      &:hover {
        color: $maincolor;
      }
      &.router-link-active {
        color: $maincolor;
      }
    }
  }
  .el-button--text {
    color: #666;
    &.activeBtn {
      color: $maincolor;
    }
  }
}
</style>