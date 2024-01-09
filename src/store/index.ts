import { createStore } from "vuex";
import adminModule from "./moduels/admin/index.ts";
import blogModule from './moduels/blog/index.ts';

const store = createStore({
  modules: {
    admin: adminModule,
    blogs:blogModule
  },
  state() {},
});

export default store;
