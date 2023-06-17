import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: HomeView },
    {
      path: "/login",
      name: "Login",
      component: () => import("../views/Auth/LoginView.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("../views/Auth/RegisterView.vue"),
    },
    {
      path: "/forgot-password",
      name: "ForgotPassword",
      component: () => import("../views/Auth/ForgotPassword.vue"),
    },
    {
      path: "/password-reset/:token",
      name: "ResetPassword",
      component: () => import("../views/Auth/ResetPassword.vue"),
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/user/ProfileView.vue')
    }
  ]
})

export default router
