import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import CreatePair from "../pairs/CreatePair.vue";
import EditPair from "../pairs/EditPair.vue";
import CurrenciesIndex from "../currencies/CurrenciesIndex.vue";
import CreateCurrency from "../currencies/CreateCurrency.vue";
import EditCurrency from "../currencies/EditCurrency.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  falback: true,
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
      path: '/',
      name: 'pairs.index',
      component: DashboardView,
      meta: {requireAuth: true}
    },
    {
      path: '/pairs/create',
      name: 'pairs.create',
      component: CreatePair,
      meta: {requireAuth: true}
    },
    {
      path: '/pairs/:id/edit',
      name: 'pairs.edit',
      component: EditPair,
      props: true,
      meta: {requireAuth: true}
    },
    {
      path: '/currencies',
      name: 'currencies.index',
      component: CurrenciesIndex,
      meta: { requireAuth: true }
    },
    {
      path: '/currencies/create',
      name: 'currencies.create',
      component: CreateCurrency,
      meta: { requireAuth: true }
    },
    {
      path: '/currencies/:id/edit',
      name: 'currencies.edit',
      component: EditCurrency,
      props: true,
      meta: {requireAuth: true}
    }
  ],
});

const loggedIn = localStorage.getItem('token');

router.beforeEach((to, from, next) => {
  if (to.name !== 'connexion'  && !loggedIn) next({ name: 'connexion' })
  else next()

  if (loggedIn) next({ name: 'pairs.index' })
  else next()
  
})

export default router;
