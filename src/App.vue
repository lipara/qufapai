<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import "./styles/iview-reset.less";
export default {
  name: "App",
};
</script>

<style lang="less">
.thead_pa_none td {
  padding: 0;
}

.search-box{
  .ivu-form-item-label{
    width: 90px;
  }
  .ivu-form-item-content{
    display: inline-block;
  }
}
</style>
