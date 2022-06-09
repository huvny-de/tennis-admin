import { createStore } from "vuex";
import membersModule from "./members.module";

export default createStore({
  modules: {
    members: membersModule,
  },
});
