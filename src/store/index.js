import { createStore } from "vuex";
import yardOwnerModule from "./dataList/yardOwner.module";
import memberModule from "./dataList/member.module";
import {auth} from './authentication/auth.module';

export default createStore({
  modules: {
    yardOwner: yardOwnerModule,
    member: memberModule,
    auth
  },
});
