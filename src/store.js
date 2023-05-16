import { reactive } from 'vue'

export const store = reactive({
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
            price: "$45",
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
})