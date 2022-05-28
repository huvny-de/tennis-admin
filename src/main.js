import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'


import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from "vue";
import 'flowbite';
import loader from "vue-ui-preloader";
import App from "./App.vue";
import "./index.css";


const app = createApp(App);


/** use loader */
app.use(loader);

library.add(faUsers,faUserPlus,faArrowRightFromBracket,faMagnifyingGlass,faCaretDown)
app.component('font-awesome-icon', FontAwesomeIcon)
app.config.productionTip = false


app.mount("#app");
