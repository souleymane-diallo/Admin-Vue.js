<template>
  <div class="max-w-2xl mx-auto">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" @submit.prevent="storeCurrency">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Création d'une Devise</h3>
        <div>
          <label for="name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Nom de la device</label>
          <input type="text" name="name" id="name" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Euro France" required>
          <div  v-if="errors.name" class="text-red-400 mt-1">
            {{ errors.name[0] }}
          </div>
        </div>
        <div>
          <label for="code" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Code de la device</label>
          <input type="text" minlength="3" maxlength="3" name="code" id="code" v-model="form.code" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="EUR" required />
          <div  v-if="errors.code" class="text-red-400 mt-1">
            {{ errors.code[0] }}
          </div>
        </div>
        <div>
          <label for="symbol" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Symbole de la device</label>
          <input type="text" minlength="1" name="symbol" id="symbol" v-model="form.symbol" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="€" />
          <div  v-if="errors.symbol" class="text-red-400 mt-1">
            {{ errors.symbol[0] }}
          </div>
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Engristrer</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';
import useCurrencies from '../services/currencyServices';

export default {
  name: 'CreateCurrency',

  setup() {
    const form = reactive({
      name: '',
      code: '',
      symbol: ''
    });

    const {errors, createCurrency } = useCurrencies();

    const storeCurrency = async () => {
      await createCurrency({ ...form });
    };

    return {
      form,
      errors,
      storeCurrency
    }
    
  }
}
</script>

<style>

</style>