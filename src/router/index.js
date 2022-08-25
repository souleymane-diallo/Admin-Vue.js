import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'connexion',
      component: LoginView,
      meta: {guest: true}
    },
    {
      path: '/register',
      name: 'inscription',
      component: RegisterView,
      meta: {guest: true}
    },
    {
      path: '/dashboard',
      name: 'admin',
      component: DashboardView,
      meta: {requireAuth: true}
    }
  ],
});

export default router;
