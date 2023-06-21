import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "Home", component: () => HomeView },
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
      path: '/profile',
      name: 'Profile',
      component: () => import('../views/user/ProfileView.vue')
    }
  ]
})

export default router
