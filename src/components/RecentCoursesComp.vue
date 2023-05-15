<script >
import SingleCardCourseComp from './SingleCardCourseComp.vue'

export default {
    name: "RecentCoursesComp",
    components: {
        SingleCardCourseComp
    },
    data() {
        return {
            activeCategory: "All Categories",
            courses: [
                {
                    category: 'Software Development',
                    subcategory: 'Apache',
                    name: 'Web Coding and Apache Basics',
                    img: "../../public/photo-1461749280684-dccba630e2f6-544x322.jpeg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "free",
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
                    price: "free",
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
                    category: 'Exercise',
                    subcategory: 'Bicycling',
                    name: 'Road Bike Manual or How to Be a Champion.',
                    img: "../../public/photo-1475452779376-caebfb988090-544x322.jpeg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "$20",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Photography',
                    subcategory: 'Documentary',
                    name: 'How to Make Beautiful Landscape photos?',
                    img: "../../public/cristian-grecu-762012-unsplash-min-scaled-544x322.jpg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "$60",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Art',
                    subcategory: 'Art',
                    name: 'Let`s paint Van Gogh`s Starry Night',
                    img: "../../public/landscape-544x322.jpg",
                    featured: false,
                    label: "",
                    duration: '6 hours',
                    price: "$79",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Software Development',
                    subcategory: 'Nvidia',
                    name: 'Nvidia and UE4 Technologies Practice',
                    img: "../../public/12345-1-544x322.png",
                    featured: false,
                    label: "special",
                    duration: '',
                    price: "Free",
                    discount: "",
                    rating: "5"
                },
                {
                    category: 'Art',
                    subcategory: 'Art',
                    name: 'How to work with Legendart RED camera?',
                    img: "../../public/jakob-owens-198234-unsplash-min-1-544x322.png",
                    featured: false,
                    label: "special",
                    duration: '6 hours',
                    price: "Free",
                    discount: "",
                    rating: ""
                },
                {
                    category: 'Software Development',
                    subcategory: 'Software Development',
                    name: 'MasterStudy Mobile LMS App',
                    img: "../../public/promo_tf-544x322.jpg",
                    featured: false,
                    label: "",
                    duration: '2 hours',
                    price: "Free",
                    discount: "",
                    rating: ""
                },

            ]
        }
    },
    computed: {
        categories() {
            const categories = new Set();
            this.courses.forEach(course => categories.add(course.category));
            return Array.from(categories).sort();
        },
        filteredCourses() {
            if (this.activeCategory === "All Categories") {
                return this.courses;
            } else {
                return this.courses.filter(
                    (course) => course.category === this.activeCategory
                );
            }
        },
    },
    methods: {
        setActiveCategory(category) {
            this.activeCategory = category;
        },
    },


}

</script>

<template>
    <div class="w-90 my-5 ">
        <h2 class="text-center py-3" style="font-size: 50px; font-weight: 300;">Recent Courses</h2>

        <div class="d-flex justify-content-center">
            <ul class="d-flex ps-0">
                <li :class="{ active: activeCategory === 'All Categories' }" @click="setActiveCategory('All Categories')">
                    All Categories
                </li>
                <li v-for="category in categories" :key="category" :class="{ active: activeCategory === category }"
                    @click="setActiveCategory(category)">
                    {{ category }}
                </li>

            </ul>


        </div>

        <div class="d-flex justify-content-between flex-wrap">
            <SingleCardCourseComp v-for="(elem, index) in filteredCourses" :key="index" :img="elem.img"
                :category="elem.category" :subcategory="elem.subcategory" :name="elem.name" :featured="elem.featured"
                :label="elem.label" :duration="elem.duration" :price="elem.price" :discount="elem.discount"
                :rating="elem.rating" />

        </div>
        <div class="d-flex justify-content-center">
            <button type="button" class="btn">SHOW ALL</button>
        </div>


    </div>
</template>

<style lang="scss" scoped>
.w-90 {
    width: 90%;
    margin: 0 auto;
}

ul {
    cursor: pointer;

    li {
        list-style-type: none;
        margin-left: 20px;
        color: #195ec8;
        padding: 10px 12px;

        &.active {
            color: #77777a;
            background-color: #f2f6fb;
            border-radius: 20px;

        }
    }

}

.btn {
    background-color: #195ec8;
    color: white;
    font-weight: bolder;
    border-radius: 25px;
    padding: 10px 30px;
    margin: 50px 0;
}
</style>