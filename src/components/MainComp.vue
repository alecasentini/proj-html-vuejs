<script >
import CardsTopComp from './CardsTopComp.vue';
import TopCoursesComp from './TopCoursesComp.vue';
import LimitlessComp from './LimitlessComp.vue'
import RecentCoursesComp from './RecentCoursesComp.vue';
import ProudComp from './ProudComp.vue';
import SubscribeComp from './SubscribeComp.vue';
import PopularCoursesComp from './PopularCoursesComp.vue';
import JoinComp from './JoinComp.vue'
import TestimonialComp from './TestimonialComp.vue'

export default {
    name: "MainComp",
    components: {
        CardsTopComp,
        TopCoursesComp,
        LimitlessComp,
        RecentCoursesComp,
        ProudComp,
        SubscribeComp,
        PopularCoursesComp,
        JoinComp,
        TestimonialComp

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
    <PopularCoursesComp />
    <JoinComp />
    <TestimonialComp />
</template>

<style lang="scss" scoped></style>