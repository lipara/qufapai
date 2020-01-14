<template>
  <div class="app-wrapper">
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import { Header, Footer } from './components'
export default {
  name: 'Layout',
  components: {
    Header,
    Footer,
  },


  methods: {

  }
}
</script>
