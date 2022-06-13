import { createStore } from "vuex";
import yardOwnerModule from "./dataList/yardOwner.module";
import {auth} from './authentication/auth.module';

export default createStore({
  modules: {
    yardOwner: yardOwnerModule,
    auth
  },
});
