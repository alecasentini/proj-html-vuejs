<script >
import { store } from '../store.js'
export default {
    name: "SingleCardCourseComp",
    props: ['course'],
    data() {
        return {
            store,
        }
    },

}




</script>

<template>
    <!-- card -->
    <div class="card position-relative">
        <!-- image + labels -->
        <div class="card-img-top">
            <img :src="course.img" class="card-img-top" alt="">
            <label :class="[course.label, 'position-absolute']">{{ course.label }}</label>
            <div v-if="course.featured" class="featured">Featured</div>
        </div>
        <div class="description" :class="{ feature: course.featured }">

            <!-- name course -->
            <div class="card-body p-0 m-3">
                <p class="card-text mb-2" style="color: #77777a; font-size: 12px;">{{ course.subcategory }} ></p>
                <h5 class="card-title fw-bolder" style="font-size: 16px;">{{ course.name }}</h5>

            </div>

            <!-- description -->
            <div class="d-flex justify-content-between p-0 mx-3 align-items-center">
                <div>
                    <p v-if="course.duration" class="m-0" style="font-size: 12px;"><font-awesome-icon
                            :icon="['far', 'clock']" />
                        {{ course.duration }}</p>
                    <span v-if="course.rating" class="m-0">
                        <font-awesome-icon v-for="n in parseInt(course.rating)" :key="n" :icon="['fas', 'star']"
                            style="color: #efb467;" />
                    </span>
                    <span class="m-0">{{ course.rating }}</span>
                </div>

                <div>
                    <p style="color: #77777a; font-size: 13px;" class="m-0"><del>{{ course.discount }}</del></p>
                    <p class="fw-bolder m-0 " style="font-size: 16px;">{{ course.price }}</p>
                </div>

            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 0;
    border: 0;
    height: 310px !important;
    overflow: hidden;
    padding: 0;
    margin-left: 10px;
    margin-right: 10px;
    width: calc(100% / 6 - 20px);
    margin-top: 40px;

    .card-img-top {
        border-radius: 0;
        width: 100%;
        max-height: 150px;

    }

    .description {
        border: 1px solid lightgrey;
        height: 100%;

        .card-body {
            border-bottom: 1px solid lightgrey;
        }

        &.feature {
            border: 1px solid #f09b23;
            border-top: 0;
        }
    }

    label {
        color: white;
        top: 10px;
        right: 20px;
        border-radius: 5px;
        padding: 5px;
        font-size: 10px;
        text-transform: uppercase;
    }

    .new {
        background-color: #1eb874;
    }

    .hot {
        background-color: #ff0000;
    }

    .special {
        background-color: #f09b23;
    }

    .featured {
        position: absolute;
        top: 85px;
        left: -25px;
        background-color: #f09b23;
        color: white;
        padding: 5px 10px;
        font-size: 12px;
        text-transform: uppercase;
        transform: rotate(-45deg);
        transform-origin: 0 0;
        text-align: center;
        width: 170px;
        font-weight: bolder;
    }


}
</style>