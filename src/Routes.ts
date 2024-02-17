import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("./components/NavBar.vue"),
      children: [
        {
          path: "/",
          component: import("./page/Home/HomePage.vue"),
        },
        {
          path: "/blog/:slug",
          component: () => import("./page/Blog/BlogPage.vue"),
        },
        {
          path: "/category/:category",
          component: () => import("./page/Category/CategoryPage.vue"),
        },
      ],
    },
    {
      path: "/admin",
      component: () => import("./page/Admin/AdminProtected.vue"),
      children: [
        {
          path: "/admin",
          component: () => import("./page/Admin/AdminPage.vue"),
        },
        {
          path: "/admin/login",
          component: () => import("./page/Admin/LoginPage.vue"),
        },
        {
          path: "/admin/addblog",
          component: () => import("./page/Add Blog/AddBlogPage.vue"),
        },
      ],
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
});
export default router;
