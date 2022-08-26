<template>
  <div class="max-w-2xl mx-auto">
    <div
      class="bg-white shadow-md border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
      <form class="space-y-6" @submit.prevent="storePair">
        <h3 class="text-xl font-medium text-gray-900 dark:text-white">Création d'une paire</h3>
        <div>
          <label for="rates" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Exchange Rate</label>
          <input type="number" step="0.01" name="rates" id="rates" v-model="form.rates" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="1.00" required>
          <div  v-if="errors.rates" class="text-red-400 mt-1">
            {{ errors.rates[0] }}
          </div>
        </div>
        <div>
          <label for="from_id" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Currency From</label>
          <select
            v-model="form.from_id"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            name="from_id">
            <option v-for="currency in currencies" :key="currency.id" 
              :value="currency.id" class="py-1">{{ currency.code }}</option>
          </select>
          <div  v-if="errors.from_id" class="text-red-400 mt-1">
            {{ errors.from_id[0] }}
          </div>
        </div>
        <div>
          <label for="to_id" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Currency To</label>
          <select
            v-model="form.to_id"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            name="to_id">
            <template v-for="currency in currencies" :key="currency.id">
              <option :value="currency.id" class="py-1"> {{ currency.code }}</option>
            </template>
          </select>
          <div  v-if="errors.to_id" class="text-red-400 mt-1">
            {{ errors.to_id[0] }}
          </div>
        </div>
        <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Engristrer</button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, onMounted } from 'vue';
import useCurrencies from '../services/currencyServices';
import usePairs from '../services/pairsService';

export default {
  name: 'CreatePair',

  setup() {
    const { errors, createPair, pairs, getPairs } = usePairs();
    const {currencies, getCurrencies} = useCurrencies();

    const form = reactive({
      from_id: '',
      to_id: '',
      rates: ''
    });

    const storePair = async () => {
      //console.log({...pairForm});
      await createPair({ ...form });
    };

    onMounted(
      getPairs(),
      getCurrencies(),
    );
    
    return {
      form,
      errors,
      pairs,
      currencies,
      storePair,
    }
  }

}
</script>

<style>

</style>