<script>
import Navbar from "./components/Navbar.vue";
//import DashboardView from "./views/DashboardView.vue";

export default {
  components: {
    Navbar,
  },
};

 import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <Navbar />
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <router-view />
    </div>
  </div>
</template>

<style scoped></style>
