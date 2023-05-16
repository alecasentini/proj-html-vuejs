<script >
import CardsTopComp from './CardsTopComp.vue';
import TopCoursesComp from './TopCoursesComp.vue';
import LimitlessComp from './LimitlessComp.vue'
import RecentCoursesComp from './RecentCoursesComp.vue';
import ProudComp from './ProudComp.vue';
import SubscribeComp from './SubscribeComp.vue';
import JoinComp from './JoinComp.vue'

export default {
    name: "MainComp",
    components: {
        CardsTopComp,
        TopCoursesComp,
        LimitlessComp,
        RecentCoursesComp,
        ProudComp,
        SubscribeComp,
        JoinComp

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
    <JoinComp />
</template>

<style lang="scss" scoped></style>