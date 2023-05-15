<script >
import HeaderComp from './components/HeaderComp.vue'
import JumbotronComp from './components/JumbotronComp.vue'
import MainComp from './components/MainComp.vue';
export default {
  name: "App",
  components: {
    HeaderComp,
    JumbotronComp,
    MainComp
  }
}

</script>

<template>
  <HeaderComp />
  <JumbotronComp />
  <MainComp />
</template>

<style lang="scss">
@use './style/main.scss'
</style>
