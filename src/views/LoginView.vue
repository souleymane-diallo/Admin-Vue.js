<template>
  <div class="max-w-2xl mx-auto">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" @submit.prevent="login">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Connexion à notre MoneyValue</h3>
        <div>
          <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your email</label>
          <input type="email" name="email" id="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="">
          <div  v-if="errors.name" class="text-red-400">
            {{ errors.name[0] }}
          </div>
        </div>
        <div>
          <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your password</label>
          <input type="password" name="password" id="password" v-model="form.password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="">
          <div  v-if="errors.password" class="text-red-400">
            {{ errors.password[0] }}
          </div>
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
          Not registered? <router-link to="/register" class="text-blue-700 hover:underline dark:text-blue-500">Create
            account</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import useAuth from '../services/userAuthServices';

export default {
  name: 'LoginView',

  setup() {
    const { errors, createLogin } = useAuth();
    const form = reactive({
      email: '',
      password: '',
      device_name: 'browser'
    });

    const login = async () => {
      await createLogin({...form})
    }

    return {
      form,
      errors,
      login
    }
  }
}
</script>

<style>

</style>