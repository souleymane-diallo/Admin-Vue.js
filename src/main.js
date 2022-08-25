/* eslint-disable prettier/prettier */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import Toaster from "v-toaster";
import "v-toaster/dist/v-toaster.css";

import "./index.css";
const app = createApp(App);

app.use(router);

//app.use(Toaster, { timeout: 5000 })

import Swal from 'sweetalert2'
window.Swal = Swal

function loggedIn() {
  return localStorage.getItem('token');
}

app.mount("#app");

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
        next()
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if (loggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
