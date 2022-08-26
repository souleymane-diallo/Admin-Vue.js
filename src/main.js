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

// const loggedIn = localStorage.getItem('token');

app.mount("#app");

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'connexion' && !loggedIn) next({ name: 'connexion' })
//   else next()

//   if (loggedIn) next({ name: 'pairs.index' })
//   else next()
  
// })
