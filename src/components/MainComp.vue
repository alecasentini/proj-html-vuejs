<script >
import CardsTopComp from './CardsTopComp.vue';
import TopCoursesComp from './TopCoursesComp.vue'

export default {
    name: "MainComp",
    components: {
        CardsTopComp,
        TopCoursesComp

    }

}

</script>

<template>
    <CardsTopComp />
    <TopCoursesComp />
</template>

<style lang="scss" scoped></style>