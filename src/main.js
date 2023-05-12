import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
    .mount('#app')
    .component("font-awesome-icon", FontAwesomeIcon)
