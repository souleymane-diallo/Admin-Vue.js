<template>
  <div>
    <div class="bg-gray-300 border-gray-200">
      <nav 
        class="container px-6 py-8 mx-auto md:flex md:justify-between md:items-center"
      >
        <div class="flex items-center justify-between">
          <router-link
            to="/"
            class="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400"
            >MoneyValue
          </router-link>
          <!-- Mobile menu button -->
          <div @click="showMenu = !showMenu" class="flex md:hidden">
            <button
              type="button"
              class="text-gray-800 hover:text-gray-400 focus:outline-none focus:text-gray-400"
            >
              <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
        <ul
          :class="showMenu ? 'flex' : 'hidden'"
          class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
        >
          <template v-if="token">
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <router-link 
                class="font-bold text-gray-800 md:text-md hover:text-blue-400" 
                to="/currencies">
                  Dashboard Currency
              </router-link>
            </li>
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              {{ currentUser.name }}
            </li>
          
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <button class="bg-blue-700 hover:bg-blue-800 focus:ring-4 p-3 text-white" @click="logout">Déconnexion</button>
            </li>
          </template>
          <template v-else>
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <router-link to="/register">Register</router-link>
            </li>
            <li class="text-sm font-bold text-gray-800 hover:text-blue-400">
              <router-link to="/login">Login</router-link>
            </li>
          </template>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import useAuth from '../services/userAuthServices';
export default {
  name: "NavBar",

  setup() {
    const showMenu = ref(false);

    const { createLogout, currentUser, token, getUser } = useAuth();

    const toggleNav = () => {
      showMenu.value = !showMenu.value
    }

    const logout = async () => {
      await createLogout();
    };

    onMounted(getUser());

    return {
      toggleNav,
      showMenu,
      logout,
      currentUser,
      token
    }
  }
  
};

</script>
