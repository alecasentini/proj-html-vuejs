<script >
import CardsTopComp from './CardsTopComp.vue';
import TopCoursesComp from './TopCoursesComp.vue';
import LimitlessComp from './LimitlessComp.vue'

export default {
    name: "MainComp",
    components: {
        CardsTopComp,
        TopCoursesComp,
        LimitlessComp

    }

}

</script>

<template>
    <CardsTopComp />
    <TopCoursesComp />
    <LimitlessComp />
</template>

<style lang="scss" scoped></style>