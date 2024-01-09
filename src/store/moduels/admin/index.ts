import mutations from "./mutations.ts";
import actions from "./actions.ts";
import getters from "./getters.ts";

export default {
  namespaced: true,
  state() {
    return {
      email: null,
      id: null,
      isAdmin: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
};
