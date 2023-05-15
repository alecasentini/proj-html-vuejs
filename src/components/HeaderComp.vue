<script >
import NavbarComp from './NavbarComp.vue';

export default {
    name: "HeaderComp",
    component: {
        NavbarComp
    },
    components: { NavbarComp }
}

</script>

<template>
    <NavbarComp />
    <hr>
    <div class="d-flex">
        <img src="../../public/MasterStudy_logo.svg" alt="logo">

    </div>
</template>

<style lang="scss" scoped>
hr {
    color: #77777a;
    margin: 0;
}
</style>