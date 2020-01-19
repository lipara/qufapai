<template>
  <div class="app-wrapper">
    <SecondHeader></SecondHeader>
    <router-view></router-view>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script>
import { SecondHeader, Footer } from './components'
export default {
  name: 'Layout',
  components: {
    SecondHeader,
    Footer,
  },


  methods: {

  }
}
</script>
