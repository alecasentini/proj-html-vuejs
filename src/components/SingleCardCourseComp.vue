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
        rating: String

    }


}

</script>

<template>
    <div class="card">
        <div>
            <img :src="img" class="card-img-top" alt="">
            <label>{{ label }}</label>
        </div>

        <div class="card-body">
            <p class="card-text">{{ subcategory }}</p>
            <h5 class="card-title">{{ name }}</h5>
        </div>
        <div class="d-flex">
            <div>
                <p>{{ duration }}</p>
                <p>{{ rating }}</p>
            </div>

            <div>
                <p>{{ Discount }}</p>
                <p>{{ Price }}</p>
            </div>

        </div>
    </div>
</template>

<style lang="scss" scoped></style>