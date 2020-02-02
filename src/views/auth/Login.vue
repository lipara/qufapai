<template>
  <!-- <div class="flexlayout" ref="flexlayout">
    <Header></Header> -->

    <div class="login-container">
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
        <div class="title-container">
          <h3 class="title">用户登录</h3>
        </div>
        <el-form-item prop="account">
          <el-input ref="account" v-model="loginForm.account" placeholder="请输入手机号码" type="text" class="" />
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input key="passwordType" ref="password" v-model="loginForm.pwd" type="password" placeholder="请输入密码" @keyup.enter.native="handleLogin" />
        </el-form-item>
        <div id="your-dom-id" class="nc-container"></div>
        <div style="text-align:right;">
          <el-button :loading="loading" type="text" style="color:#444444;font-size:14px;" @click="findPassword">忘记密码？</el-button><br>
        </div>
        <el-button :loading="loading" class="loginbtn" @click="handleLogin">登录</el-button>
      </el-form>
    </div>
    <!-- <Footer></Footer>
  </div> -->

</template>
<script>
import '@/utils/nc.js'
import md5 from "js-md5";
import { login } from "@/api/auth";
import Auth from "@/utils/auth";
import { Header, Footer } from '@/layout/components'

// import { validUsername } from '@/utils/validate'
export default {
  components: {
    Header,
    Footer,
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback("请输入用户名")
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback("密码不能小于6位数")
      } else {
        callback()
      }
    }
    return {
      divheight: "400px",
      loginForm: {
        account: 'admin',
        pwd: 'admin123456'
      },
      loginRules: {
        account: [{
          required: true,
          trigger: 'blur',
          validator: validateUsername
          // message: "请输入用户名"
        }],
        pwd: [{ required: true, trigger: 'blur', validator: validatePassword }]
      },
      loading: false,
      nc: null,
      noReloadRetCode: [10026, 10027, 10028] // [607, 608],
    }
  },
  watch: {

  },
  mounted() {
    this.$store.commit('SET_VIEWLOAD', true);
    this.getNC() // 初始化滑块
    var tt = document.body.clientHeight || document.documentElement.clientHeight;
    this.$refs.flexlayout.style.height = tt + 'px'; //动态设置HTML元素高度
  },
  beforeDestroy(){
    this.$store.commit('SET_VIEWLOAD', false);
  },
  methods: {

    handleLogin() {
      const params = Object.assign({}, this.loginForm, { pwd: md5(this.loginForm.pwd) })

      login(params)
        .then(response => {
          const jwt = response.data.token
          Auth.setToken(jwt)
          this.$router.push('/')
          // this.$router.push({ name: "home" })
        })
        .catch(error => {
          this.$message.error('用户名或者密码错误')
        });
    },

    findPassword() {
      this.$router.push({ name: "findpassword" })
    },

    getNC() {
      const self = this
      var nc_token = ['FFFF0N000000000069E7', (new Date()).getTime(), Math.random()].join(':')
      var NC_Opt =
      {
        renderTo: '#your-dom-id',
        appkey: 'FFFF0N000000000069E7',
        scene: 'nc_login',
        token: nc_token,
        customWidth: 410,
        trans: { 'key1': 'code0' },
        elementID: ['usernameID'],
        is_Opt: 0,
        language: 'cn',
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {},
        callback: function (data) {
          let result = {
            session: data.csessionid,
            sig: data.sig,
            token: nc_token
          }
          self.$emit('callback', result)
        }
      }
      this.nc = new noCaptcha(NC_Opt) // eslint-disable-line new-cap,no-undef
      this.nc.upLang('cn', {
        _startTEXT: '请按住滑块，拖动到最右边',
        _yesTEXT: '验证通过',
        _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
        _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
      })
    },
    reload() {
      this.nc.reload()
    }
  }
}
</script>


<style lang="scss">
$maincolor: #fa983a;

.nc-container .nc_scale span,
.nc_scale,
.nc-lang-cnt,
#nc_1_n1t {
  height: 40px !important;
  line-height: 40px !important;
  overflow: hidden;
}
.nc-container .errloading {
  border-color: orange !important;
  color: orange !important;
  padding: 7px 5px 8px 5px !important;
  width: 328px !important;
}
.nc-container #nc_1_wrapper {
  width: 100% !important;
  border-radius: 3px;
}
#nc_1__scale_text_loading {
  height: 40px !important;
}
.nc-container .nc_scale .btn_slide {
  background: $maincolor;
  border-radius: 0 4px 4px 0;
}
.nc_wrapper {
  width: 100% !important;
}
</style>

<style lang="scss">
.flexlayout {
  display: flex;
  flex-direction: column; /*2*/
}
</style>