<script >
import HeaderComp from './components/HeaderComp.vue'
import JumbotronComp from './components/JumbotronComp.vue'
export default {
  name: "App",
  components: {
    HeaderComp,
    JumbotronComp
  }
}

</script>

<template>
  <HeaderComp />
  <JumbotronComp />
</template>

<style lang="scss">
@use './style/main.scss'
</style>
