<script >

export default {
    name: "TopCoursesComp",
    data() {
        return {
            courses: [
                {
                    "img": "../../public/cat_1-1540x750.jpg",
                    "name": "Software Development",
                    "quantity": "5"
                },
                {
                    "img": "../../public/cat_2-740x310.jpg",
                    "name": "Art",
                    "quantity": "8"
                },
                {
                    "img": "../../public/cat_3-740x310.jpg",
                    "name": "Material Design",
                    "quantity": "5"
                },
                {
                    "img": "../../public/cat_5-740x310.jpg",
                    "name": "Music",
                    "quantity": "5"
                },
                {
                    "img": "../../public/cat_4-740x310.jpg",
                    "name": "Exercise",
                    "quantity": "7"
                },
                {
                    "img": "../../public/cat_6-740x310.jpg",
                    "name": "Photography",
                    "quantity": "4"
                }

            ]
        }
    }

}

</script>

<template>
    <!-- top courses -->
    <div class="d-flex flex-column w-75 py-5">
        <div class="row">
            <!-- 1 big & 2 normal-->
            <div class="big col-8">
                <img :src="courses[0].img" :alt="courses[0].name">
                <div class="d-flex justify-content-between py-3">
                    <h5>{{ courses[0].name }}</h5>
                    <span>{{ courses[0].quantity }} Courses</span>
                </div>
            </div>

            <div class="d-flex flex-column col-4">
                <div v-for="index in 2" :key="index" class="normal ">
                    <img :src="courses[index].img" :alt="courses[index].name">
                    <div class="d-flex justify-content-between py-3">
                        <h5>{{ courses[index].name }}</h5>
                        <span>{{ courses[index].quantity }} Courses</span>
                    </div>
                </div>
            </div>

        </div>

        <div class="row">
            <!-- 3 normal-->
            <div v-for="index in 3" :key="index" class="normal col-4">
                <img :src="courses[index + 2].img" :alt="courses[index].name">
                <div class="d-flex justify-content-between py-3">
                    <h5>{{ courses[index + 2].name }}</h5>
                    <span>{{ courses[index + 2].quantity }} Courses</span>
                </div>
            </div>
        </div>





    </div>
</template>

<style lang="scss" scoped>
.w-75 {
    margin: 0 auto;

    .big {
        img {
            width: 100%;
        }
    }

    .normal {
        img {
            width: 100%;
        }
    }
}
</style>