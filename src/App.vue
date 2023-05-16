<script >
import HeaderComp from './components/HeaderComp.vue'
import JumbotronComp from './components/JumbotronComp.vue'
import MainComp from './components/MainComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  name: "App",
  components: {
    HeaderComp,
    JumbotronComp,
    MainComp,
    FooterComp
  }
}

</script>

<template>
  <HeaderComp />
  <JumbotronComp />
  <MainComp />
  <FooterComp />
</template>

<style lang="scss">
@use './style/main.scss'
</style>
