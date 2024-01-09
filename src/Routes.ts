import { createRouter, createWebHistory } from "vue-router";
import NavBarVue from "./components/NavBar.vue";
import HomePageVue from "./page/Home/HomePage.vue";
import BlogPageVue from "./page/Blog/BlogPage.vue";
import CategoryPageVue from "./page/Category/CategoryPage.vue";
import AddBlogPageVue from "./page/Add Blog/AddBlogPage.vue";
import LoginPageVue from "./page/Admin/LoginPage.vue";
import AdminPageVue from "./page/Admin/AdminPage.vue";
import AdminProtectedVue from "./page/Admin/AdminProtected.vue";

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
    {
      path: "/admin",
      component: AdminProtectedVue,
      children: [
        {
          path: "/admin",
          component: AdminPageVue,
        },
        {
          path: "/admin/login",
          component: LoginPageVue,
        },
        {
          path: "/admin/addblog",
          component: AddBlogPageVue,
        },
      ],
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});
export default router;
