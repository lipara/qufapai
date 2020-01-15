<template>
  <button style="color:#fff;border:none;" :disabled="visible || time > 0">{{ text }}</button>
</template>

<script>
export default {
  props: {
    second: {
      type: Number,
      default: 60
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      time: 0,
      visible: this.disabled
    };
  },
  methods: {
    run: function() {
      this.time = this.second;
      this.timer();
    },
    stop: function() {
      this.time = 0;
      this.visible = false;
    },
    timer: function() {
      if (this.time > 0) {
        this.time--;
        setTimeout(this.timer, 1000);
        this.visible=false  
      }
    }
  },
  computed: {
    text: function() {
      return this.time > 0 ? this.time + "s"+ "再次获取验证码" : "获取验证码";
      
    }
  }
};
</script>


