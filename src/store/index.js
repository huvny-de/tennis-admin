import { createStore } from "vuex";
import yardOwnerModule from "./dataList/yardOwner.module";

export default createStore({
  modules: {
    yardOwner: yardOwnerModule,
  },
});
