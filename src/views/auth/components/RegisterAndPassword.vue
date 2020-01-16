<template>
  <el-form ref="registerForm" :model="form" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">

    <div class="title-container">
      <h3 class="title">新用户注册</h3>
    </div>

    <el-form-item prop="phone">
      <el-input ref="phone" v-model="form.phone" placeholder="请输入手机号码" type="text" />
    </el-form-item>

    <el-form-item prop="password">
      <el-input ref="password" v-model="form.password" type="password" :placeholder="dataInfo.password" />
    </el-form-item>

    <el-form-item prop="confirmPassword">
      <el-input ref="confirmPassword" v-model="form.confirmPassword" type="password" :placeholder="dataInfo.confirmPassword" />
    </el-form-item>

    <el-form-item prop="code" style="position:relative;">
      <el-input ref="code" v-model="form.code" placeholder="请输入手机验证码" @keyup.enter.native="confirmSave" />
      <timer-btn class="c-form-item-code" @click.native="sendCode()" :disabled="disabled" ref="btn" :second="60" style="width:auto;"></timer-btn>
    </el-form-item>

    <el-form-item style="text-align:left;margin:0;" v-if="dataInfo.register">
      <el-checkbox v-model="agree" label=""></el-checkbox>
      <span style="color:#aaa;">我已阅读并同意</span>
      <span class="c-sign-up-agreement" @click="showAgreement">《用户隐私协议》</span>
    </el-form-item>

    <el-button :loading="loading" class="loginbtn" @click="confirmSave">{{dataInfo.btnContent}}</el-button>

  </el-form>
</template>
<script>

import md5 from "js-md5";
import { login } from "@/api/auth";
import Auth from "@/utils/auth";
import TimerBtn from "@/components/countdown/TimerBtn";

// import { validUsername } from '@/utils/validate'
export default {
  components: { TimerBtn },
  props: {
    dataInfo: {
      type: Object,
      default: {}
    }


  },
  data() {

    const validatePhone = (rule, value, callback) => {
      if (value === "") {
        callback("手机号码不能为空");
      }
      else {
        if (!/^1[0-9]{10}$/.test(value)) {
          callback("请输入正确的手机号码")
        } else {
          callback();
        }
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value == "") {
        callback("密码不能为空")

      } else if (value.length < 8) {
        callback("密码不能小于8位数")
      }
      else if (!(/^[a-zA-Z0-9]{1,}$/.test(value))) {
        callback("密码不能包括特殊字符")
      } else {
        callback()
      }
    }

    const validatePassCheck = (rule, value, callback) => {
      if (value === "") {
        callback(
          "密码不能为空"
        );
      } else if (value !== this.form.password) {
        callback(
          "两次输入密码不一致"
        );
      } else {
        callback()
      }
    }

    return {
      disabled: false,
      agree: false,
      form: {
        phone: '',
        password: '',
        confirmPassword: "",
        code: "",
      },
      loginRules: {
        phone: [
          { required: true, trigger: 'blur', validator: validatePhone }
        ],
        password: [
          { required: true, trigger: 'blur', validator: validatePassword }
        ],
        confirmPassword: [
          { required: true, trigger: 'blur', validator: validatePassCheck }
        ],
        code: [
          { required: true, message: "请输入手机验证码", trigger: "blur" }
        ],
      },
      loading: false,

    }
  },

  mounted() {

  },
  methods: {


    confirmSave() {
      this.$refs["registerForm"].validate(valid => {
        if (valid) {
          const params = Object.assign({}, this.form, {
            password: md5(this.form.password),
            confirmPassword: md5(this.form.confirmPassword)
          })
          if (!this.agree) {
            this.$message.error('请先阅读并勾选平台服务协议')
            return false
          }
          apolloRegistry(params)
            .then(response => {
              this.$message.success("注册成功")
              this.Login()
            })
            .catch(error => {
              this.$message.error(error.message)
            });
        }
      });
    },

    sendCode: function () {

      if (this.form.phone == "") {
        this.$message.error('手机号码不能为空');
        return
      }

      this.checkVerifyCode()
    },

    checkVerifyCode() {
      const params = {
        key: this.form.comfirmKey,
        verifyCode: this.form.comfirmCode
      }
      checkVerifyCode(params).then(response => {
        if (response.code == 200) {
          this.getCode()
        } else {
          this.$message.error(response.message)
        }
      })
        .catch(error => {
          this.$message.error(error.message)
        })
    },

    getCode() {
      this.disabled = false;
      const phone = this.form.phone
      let params = { phone: phone, userType: this.form.userType }
      getCode(params)
        .then(response => {
          if (response.code == "200") {
            this.$message.success('短信发送成功')
            this.$refs.btn.run(); //启动倒计时
          } else {
            this.$message.error(response.message)
          }
        })
        .catch(error => {
          this.$message.error(error.message);
        })
    },

    showAgreement() {
      // this.showModel({
      //   title: 'Apollo平台服务协议',
      //   component: () => import('./Agreement'),
      //   width: 800,
      //   showFooter: false
      // })
    },
  }
}
</script>
<style lang="scss">
</style>


