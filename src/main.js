import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import "flowbite";
import loader from "vue-ui-preloader";
import App from "./App.vue";
import "./index.css";
import router from "../src/components/router/router.js";
import store from "./store";
// import VeeValidate from "vee-validate";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUsers,
  faUserPlus,
  faArrowRightFromBracket,
  faCaretDown,
  faArrowsUpDown,
  faMagnifyingGlass,
  faEye,
  faTrashCan,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";

import TheHeader from "../src/components/layout/TheHeader.vue";
import InputComponent from "../src/components/ui/InputComponent.vue";
import ButtonComponent from "../src/components/ui/ButtonComponent.vue";
import PreloaderComponent from "../src/components/ui/PreloaderComponent.vue";
import SelectListComponent from "../src/components/ui/SelectListComponent.vue";

library.add(
  faUsers,
  faUserPlus,
  faArrowRightFromBracket,
  faMagnifyingGlass,
  faCaretDown,
  faArrowsUpDown,
  faEye,
  faTrashCan,
  faUpload
);

const app = createApp(App);
/** use loader */
app.use(router);
app.use(loader);
// app.use(VeeValidate);
app.use(store);

app.component("font-awesome-icon", FontAwesomeIcon);
app.config.productionTip = false;

//import global component
app.component("preloader-component", PreloaderComponent);
app.component("input-component", InputComponent);
app.component("button-component", ButtonComponent);
app.component("select-list-component", SelectListComponent);
app.component("the-header", TheHeader);

app.mount("#app");
