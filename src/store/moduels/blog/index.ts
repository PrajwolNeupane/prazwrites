import actions from "./actions";
import getters from "./getters";
import mutations from "./mutation";

export default {
  namespaced: true,
  state() {
    return {
      blogList: [],
      categoryBlog: {
        category: "",
        blogs: [],
      },
    };
  },
  actions: actions,
  mutations: mutations,
  getters: getters,
};
