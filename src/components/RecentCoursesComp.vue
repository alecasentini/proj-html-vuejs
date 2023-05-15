<script >
import SingleCardCourseComp from './SingleCardCourseComp.vue'

export default {
    name: "RecentCoursesComp",
    components: {
        SingleCardCourseComp
    },
    data() {
        return {
            courses: [
                {
                    category: 'Software Development',
                    subcategory: 'Apache',
                    name: 'Web Coding and Apache Basics',
                    img: "../../public/photo-1461749280684-dccba630e2f6-544x322.jpeg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "Free",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Art',
                    subcategory: 'Art',
                    name: 'Real Things Art Painting by Jason Ni',
                    img: "../../public/cat_2-544x322.jpg",
                    featured: true,
                    label: "new",
                    duration: '6 hours',
                    price: "$46",
                    discount: "$60",
                    rating: ""
                },
                {
                    category: 'Software Development',
                    subcategory: 'Software Development',
                    name: 'Basics of MasterStudy',
                    img: "../../public/course-preview-544x322.jpg",
                    featured: false,
                    label: "hot",
                    duration: '',
                    price: "Free",
                    discount: "",
                    rating: "5"
                },
                {
                    category: 'Music',
                    subcategory: 'Electronic',
                    name: 'How to be a DJ? Make Electronic Music',
                    img: "../../public/photo-1496307042754-b4aa456c4a2d-544x322.jpeg",
                    featured: false,
                    label: "special",
                    duration: '',
                    price: "$49",
                    discount: "$59",
                    rating: "5"
                },
                {
                    category: 'Material Design',
                    subcategory: 'Communication',
                    name: 'Design Instrument for Communication',
                    img: "../../public/photo-1416339134316-0e91dc9ded92-scaled-544x322.jpeg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Art',
                    subcategory: 'Art',
                    name: 'Make your Concept Right and Beautiful',
                    img: "../../public/cathryn-lavery-67852-unsplash-544x322.jpg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "$70",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Art',
                    subcategory: 'Art',
                    name: 'Make your Concept Right and Beautiful',
                    img: "../../public/cathryn-lavery-67852-unsplash-544x322.jpg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "$70",
                    discount: "",
                    rating: ""
                },
            ]
        }
    }


}

</script>

<template>
    <div class="w-75 my-5">
        <h2 class="text-center py-3" style="font-size: 50px; font-weight: 300;">Recent Courses</h2>

        <div class="d-flex">
            <SingleCardCourseComp v-for="(elem, index) in courses" :key="index" :img="elem.img" :category="elem.category"
                :subcategory="elem.subcategory" :name="elem.name" :featured="elem.featured" :label="elem.label"
                :duration="elem.duration" :price="elem.price" :discount="elem.discount" :rating="elem.rating" />

        </div>
    </div>
</template>

<style lang="scss" scoped>
.w-75 {
    margin: 0 auto;
}
</style>