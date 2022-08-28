<template>
  <div class="flex flex-col">
    <div class="flex mb-4">
        <router-link 
          :to="{ name: 'currencies.create'}"
          class="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-3 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Créer une devise
        </router-link>
    </div>
    <div class="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
      <table class="w-full">
        <thead>
            <tr>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4  text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  #
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4  text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Nom de la Devise
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4  text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Code Devise
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4 text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                    Symbole
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4  text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Edit
                </th>
                <th
                  class="px-6 py-3 text-xs font-medium leading-4  text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                  Delete
                </th>
            </tr>
        </thead>
        <tbody class="bg-white">
          <tr v-for="(currency, index) in currencies" :key="currency.id">
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-500">{{ index+1 }}</div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="flex items-center">
                  <div class="text-sm font-medium leading-5 text-center text-gray-900">
                    {{ currency.name }}
                  </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div class="text-sm leading-5 text-gray-500">{{ currency.code }}</div>
            </td>
            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
              <span
                class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full"
              >
                {{ currency.symbol }}
              </span>
            </td>
            <td
              class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
              <router-link :to="{name: 'currencies.edit', params: {id: currency.id } }">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-400" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </router-link>
            </td>
            <td
                class="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <button type="button" @click="deleteCurrency(currency.id)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-400" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import useCurrencies from '../services/currencyServices';

export default {
  name: 'CurrenciesIndex',

  setup() {
    const { currencies, getCurrencies, destroyCurrency } = useCurrencies();

    onMounted(getCurrencies());

    const deleteCurrency = async (id) => {
      await destroyCurrency(id);
    };

    return {
      currencies,
      deleteCurrency,
    }
  }
}
</script>

<style>

</style>