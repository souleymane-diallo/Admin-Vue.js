import axios from "axios";
import { ref } from "vue";
import router from '../router';

export default function useCurrencies() {
  const errors = ref('');
  const currency = ref('');
  const currencies = ref([]);

  // récupérer la liste de tous les currencies
  const getCurrencies = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/currencies');

    currencies.value = response.data.data;
  };

  // methode pour récupérer une devise avec un id
  const getCurrency = async (id) => {
    let response = await axios.get('http://127.0.0.1:8000/api/currencies/' +id);
    currency.value = response.data.data;
  };

  // methode pour créer une devise
  const createCurrency = async (data) => {
    errors.value = '';

    try {
      let response = await axios.post('http://127.0.0.1:8000/api/currencies', data);

      await router.push({ name: 'currencies.index' });
    } catch (error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }

  };

  // methode pour modifier une devise
  const updateCurrency = async (id) => {
    errors.value = '';

    try {
      let response = await axios.put('http://127.0.0.1:8000/api/currencies/' + id, currency.value);

      await router.push({ name: 'currencies.index' });
    } catch (error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }
  };

  // methode pour supprimer une devise
  const destroyCurrency = async (id) => {
    if (!window.confirm('Voulez - vous Supprimer cette devise ?')) return;

    await axios.delete('http://127.0.0.1:8000/api/currencies/' + id);
    await getCurrencies();
  };

  return {
    errors,
    currency,
    currencies,
    getCurrencies,
    getCurrency,
    createCurrency,
    updateCurrency,
    destroyCurrency

  }
}