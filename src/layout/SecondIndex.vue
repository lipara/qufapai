<template>
  <div class="app-wrapper">
    <SecondHeader></SecondHeader>
    <router-view></router-view>
    <Footer></Footer>
    <slidebar></slidebar>

  </div>
</template>

<script>
import { SecondHeader, Footer } from './components'
import slidebar from "@/components/slidebar/Index.vue";

export default {
  name: 'Layout',
  components: {
    SecondHeader,
    Footer,
    slidebar
  },


  methods: {

  }
}
</script>
