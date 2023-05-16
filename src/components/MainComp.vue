<script >
import CardsTopComp from './CardsTopComp.vue';
import TopCoursesComp from './TopCoursesComp.vue';
import LimitlessComp from './LimitlessComp.vue'
import RecentCoursesComp from './RecentCoursesComp.vue';
import ProudComp from './ProudComp.vue';
import SubscribeComp from './SubscribeComp.vue';

export default {
    name: "MainComp",
    components: {
        CardsTopComp,
        TopCoursesComp,
        LimitlessComp,
        RecentCoursesComp,
        ProudComp,
        SubscribeComp,

    }

}

</script>

<template>
    <CardsTopComp />
    <TopCoursesComp />
    <LimitlessComp />
    <RecentCoursesComp />
    <ProudComp />
    <SubscribeComp />
</template>

<style lang="scss" scoped></style>