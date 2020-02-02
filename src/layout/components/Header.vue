<template>
  <div>

    <div class="header-title">
      <div class="fixed-nav-list">
        <img src="@/assets/logo.png" alt="" class="headerlogo">
        <div class="header-nav">
          <router-link to="/home" class="nav-list">
            首页
          </router-link>
          <router-link to="/strict" class="nav-list">
            法拍严选
          </router-link>
          <router-link to="/saleIndex" class="nav-list">
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
          <el-button type="text" @click="toLogin" :class="{activeBtn:isActive && $store.getters.user.viewLoad}">登录</el-button>
          <span style="color: #666;font-size:13px">|</span>
          <el-button type="text" @click="toRegister" :class="{activeBtn:!isActive && $store.getters.user.viewLoad}">注册</el-button>
        </div>
      </div>

    </div>
    <div class="header-title animated fixedNav" :class="showFixedNav ? 'fadeInDown show' : 'fadeOutUp hide'">
      <div class="fixed-nav-list">
        <img src="@/assets/logo.png" alt="" class="headerlogo">
        <div class="header-nav">
          <router-link to="/home" class="nav-list">
            首页
          </router-link>
          <router-link to="/strict" class="nav-list">
            法拍严选
          </router-link>
          <router-link to="/saleIndex" class="nav-list">
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
          <el-button type="text" @click="toLogin" :class="{activeBtn:isActive && $store.getters.user.viewLoad}">登录</el-button>
          <span style="color: #666;font-size:13px">|</span>
          <el-button type="text" @click="toRegister" :class="{activeBtn:!isActive && $store.getters.user.viewLoad}">注册</el-button>
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
