<template>
  <div class="login-container">
    <RegisterAndPassword :dataInfo.sync="dataInfo"></RegisterAndPassword>
  </div>
</template>
<script>

import md5 from "js-md5";
import { login } from "@/api/auth";
import Auth from "@/utils/auth";
import TimerBtn from "@/components/countdown/TimerBtn";
import RegisterAndPassword from "./components/RegisterAndPassword";

export default {
  components: { TimerBtn, RegisterAndPassword },
  data() {

    return {
      dataInfo: { password: "请输入密码", confirmPassword: "请再次输入密码",btnContent:"注册并登录", register: true },
      
    }
  },

  mounted() {

  },
  methods: {


    confirmSave() {
      
    },

  }
}
</script>
<style lang="scss">
</style>


