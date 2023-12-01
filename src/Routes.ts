import { createRouter, createWebHistory } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
import HomePageVue from "./page/Home/HomePage.vue";
import BlogPageVue from "./page/Blog/BlogPage.vue";
import CategoryPageVue from "./page/Category/CategoryPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: NavBarVue,
      children: [
        {
          path: "/",
          component: HomePageVue,
        },
        {
          path: "/blog/:slug",
          component: BlogPageVue,
        },
        {
          path: "/category/:category",
          component: CategoryPageVue,
        },
      ],
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});
export default router;
