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
  faFilePen,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import "flowbite";
import loader from "vue-ui-preloader";
import App from "./App.vue";
import "./index.css";

import SideBarAdmin from "../src/components/layout/admin/SideBarAdmin.vue";
import InputComponent from "../src/components/ui/InputComponent.vue";
import PreloaderComponent from "../src/components/ui/PreloaderComponent.vue";
import SelectListComponent from "../src/components/ui/SelectListComponent.vue";

const app = createApp(App);

/** use loader */
app.use(loader);

library.add(
  faUsers,
  faUserPlus,
  faArrowRightFromBracket,
  faMagnifyingGlass,
  faCaretDown,
  faArrowsUpDown,
  faEye,
  faTrashCan,
  faFilePen
);
app.component("font-awesome-icon", FontAwesomeIcon);
app.config.productionTip = false;

//import global component
app.component("side-bar-admin", SideBarAdmin);
app.component("preloader-component", PreloaderComponent);
app.component("input-component", InputComponent);
app.component("select-list-component", SelectListComponent);

app.mount("#app");
