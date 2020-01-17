<template>
  <div class="footer-nav">
    <div style="max-width:1200px;margin: 0 auto;overflow: hidden;">
      <div style="float:left;line-height:26px;">
        <router-link to="/home" class="nav-list">
          关于我们
        </router-link>
        <span>|</span>
        <router-link to="/console" class="nav-list">
          联系我们
        </router-link>
        <span>|</span>
        <router-link to="/console" class="nav-list">
          网站地图
        </router-link>
        <span>|</span>
        <router-link to="/console" class="nav-list">
          员工登录
        </router-link>
        <div class="nav-company-info">
          <p>企业名称</p>
          <p>办公地址</p>
          <p>备案编号</p>
          <p>版权所有</p>
          <h2 style="margin-top:10px;font-weight:bold;"> <i class="el-icon-phone-outline"></i> 4000-0000-0000</h2>
        </div>
      </div>
      <div style="float:right;">
        <img src="@/assets/ewm.png" alt="" class="footer-ewm">
        <p class="footer-ewm-title">趣法拍微信公众号</p>
      </div>
    </div>
  </div>
</template> 
<script>
export default {

}
</script>
<style lang="scss">
$maincolor: #fa983a;
</style>