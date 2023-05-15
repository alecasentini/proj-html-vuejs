import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBasketball, faBars, faMagnifyingGlass, faBullhorn, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faBehance, faFlickr, faGit, faLinkedin, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { faUser, faBookmark } from "@fortawesome/free-regular-svg-icons"
library.add(faBasketball, faBars, faMagnifyingGlass, faBullhorn, faBriefcase, faUser, faBookmark, faTwitter, faInstagram, faBehance, faFlickr, faGit, faLinkedin, faPinterest);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')

