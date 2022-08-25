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
      <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 bg-white border-b border-gray-200">
          <Router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
