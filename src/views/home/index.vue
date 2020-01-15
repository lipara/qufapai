<template>
  <div style="max-width:1200px;margin:0 auto;">
    这是首页
    <Button @click="console()">点击</Button>
    <Button @click="loginout()">退出</Button>
  </div>
</template> 
<script>
import Auth from "@/utils/auth";

export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
    console() {
      this.$router.push({ name: "console" })
    },
    loginout() {
      Auth.removeToken()
      //退出到首页
      window.location.href = "/"
    }
  }
}
</script>

