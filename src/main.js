import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import router from '@/router'
library.add(faPhone)
library.add(faUser)
library.add(faUser)
library.add(faCartShopping)
library.add(faSearch)
const app = createApp(App); 
app.component("font-awesome-icon", FontAwesomeIcon)
// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// styles
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"; // bootstrap


app.use(router);
app.mount("#app");