<template>
  <div>
    <div class="second-header-title">
      <div class="header-top-bg">
        <div class="fixed-nav-list">
          <div class="header-nav">
            <router-link to="/home" class="nav-list">
              首页
            </router-link>
            <router-link to="/strict" class="nav-list">
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
      </div>
      <div style="background:#fff;border-bottom:1px solid #ccc;">
        <div class="fixed-second-nav">
          <img src="@/assets/logo.jpg" alt="" class="headerlogo">
          <span class="second-h"> | </span>
          <span class="second-title">
            法拍严选
          </span>
          <el-form ref="form" :model="form" class="form-select">
            <el-input class="form-input" v-model="form.name"></el-input>
            <el-button class="form-btn">搜索</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import "@/styles/animated.css"
export default {
  data() {
    return {
      isActive: true,
      showFixedNav: false,
      form: {
        name: ""
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', (e) => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop > 85) {
          this.showFixedNav = true
        } else {
          this.showFixedNav = false
        }
      })
    })
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
