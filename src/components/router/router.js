import { createRouter, createWebHistory } from "vue-router";

import LoginPage from "../pages/LoginPage.vue";
import RegisterPage from "../pages/RegisterPage.vue";

const routes = [
  {
    path: "/dashboard",
    name: "Home",
    component: () => import("../pages/admin/AdminDashBoard.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: false,
    },
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
    meta: {
      requiresAuth: true,
      adminAuth: true,
      userAuth: false,
    },
  },
  {
    path: "/yard-owner",
    name: "Yard Owner Dashboard",
    component: () => import("../pages/yardOwner/DashBoard.vue"),
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: true,
    },
  },
  {
    path: "/store-profile",
    name: "Store Profile",
    meta: {
      requiresAuth: true,
      adminAuth: false,
      userAuth: true,
    },
  },
  {
    path : '/owner-profile',
    name  : 'Owner Profile',
    component : () => import('../pages/yardOwner/ProfilePage.vue'),
    meta : {
      requiresAuth : true,
      adminAuth : false,
      userAuth : true,
    }
  },
  { path: '/:pathMatch(.*)*', component: () => import('../pages/PageNotFound.vue')}
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach((to, from, next) => {
  const publicPage = ["/login", "/register"];
  const authRequire = !publicPage.includes(to.path);
  const loggedIn = JSON.parse(localStorage.getItem("user"));

  if(authRequire && !loggedIn) {
    next('/login')
  }else if(to.path === '/') {
    next('/login')
  }
  else {
    next()
    if(loggedIn) {
      let RoleID = loggedIn.Token.RoleIds[0];
      if(to.meta.adminAuth) {
        if(RoleID === 1) {
          next()
        }else {
          router.push('/yard-owner')
        }
      }else if(to.meta.userAuth) {
        if(RoleID === 2) {
          next()
        }else {
          router.push('/dashboard')
        }
      }
    }
  }
});
export default router;
