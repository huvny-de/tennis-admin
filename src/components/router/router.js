import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Home",
    component: () => import("../pages/admin/AdminDashBoard.vue"),
  },
  {
    path: "/login",
    name: "Login Page",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register Page",
    component: RegisterPage,
  },
  {
    path: "/profile",
    name: "Profile Page",
    component: () => import("../pages/admin/AdminProfilePage.vue"),
  },
  {
    path: "/yard-owner",
    name: "Yard Owner Dashboard",
    component: () => import("../pages/yardOwner/DashBoard.vue"),
  },
  {
    path: "/store-profile",
    name: "Store Profile",
    component: () => import("../pages/admin/AdminDashBoard.vue"),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const publicPage = ["/login", "/register"];
  const authRequire = !publicPage.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if ((authRequire && !loggedIn) || to.path === "/") {
    next("/login");
  } else {
    next();
  }
});
export default router;
