<template>
  <div>
    这是首页
    <Button @click="console()">点击</Button>
  </div>
</template> 
<script>
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
    }
  }
}
</script>

