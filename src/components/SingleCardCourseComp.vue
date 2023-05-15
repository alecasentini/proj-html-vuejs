<script >
export default {
    name: "SingleCardCourseComp",

    props: {
        category: String,
        subcategory: String,
        name: String,
        img: String,
        featured: String,
        label: String,
        duration: String,
        price: String,
        discount: String,
        rating: String,
    },
    mounted() {
        console.log(this.rating);
        console.log(parseInt(this.rating));
    },
}




</script>

<template>
    <div class="card position-relative">
        <div class="card-img-top">
            <img :src="img" class="card-img-top" alt="">
            <label :class="[label, 'position-absolute']">{{ label }}</label>
            <div v-if="featured" class="featured">Featured</div>
        </div>
        <div class="description" :class="{ feature: featured }">
            <div class="card-body p-0 m-3">
                <p class="card-text mb-2" style="color: #77777a; font-size: 12px;">{{ subcategory }} ></p>
                <h5 class="card-title fw-bolder" style="font-size: 16px;">{{ name }}</h5>

            </div>

            <div class="d-flex justify-content-between p-0 mx-3 align-items-center">
                <div>
                    <p v-if="duration" class="m-0" style="font-size: 12px;"><font-awesome-icon :icon="['far', 'clock']" />
                        {{ duration }}</p>
                    <span v-if="rating" class="m-0">
                        <font-awesome-icon v-for="n in parseInt(rating)" :key="n" :icon="['fas', 'star']"
                            style="color: #efb467;" />
                    </span>
                    <span class="m-0">{{ rating }}</span>
                </div>


                <div>
                    <p style="color: #77777a; font-size: 13px;" class="m-0"><del>{{ discount }}</del></p>
                    <p class="fw-bolder m-0 " style="font-size: 16px;">{{ price }}</p>
                </div>

            </div>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.card {
    border-radius: 0;
    border: 0;
    max-height: 350px !important;
    overflow: hidden;
    padding: 0;
    margin-right: 5px;
    width: calc(100% / 6 - 15px);
    margin-top: 40px;

    .card-img-top {
        border-radius: 0;
        width: 100%;
        max-height: 160px;

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