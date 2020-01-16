<template>
  <div class="header-title">
    <img src="@/assets/logo.jpg" alt="" class="headerlogo">
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
      this.isActive = true
      this.$router.push({ name: "login" })
    },
    toRegister() {
      this.isActive = false
      this.$router.push({ name: "register" })

    }
  }
}
</script>
