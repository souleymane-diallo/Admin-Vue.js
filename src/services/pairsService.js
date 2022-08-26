import axios from "axios";
import { ref } from "vue";
import router from '../router';

export default function usePairs() {
  const errors = ref('');
  const pair = ref('');
  const pairs = ref([]);

  // récuperer la liste de toutes les paires disponible
  const getPairs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/pairs');

    pairs.value = response.data.data;
  };

  // methode pour recuperer une paire à partir d'un id
  const getPair = async (id) => {
    let response = await axios.get('http://127.0.0.1:8000/api/pairs/' +id);
    pair.value = response.data.data;
  };

  // methode pour créer une pair
  const createPair = async (data) => {
    errors.value = '';

    try {
      let response = await axios.post('http://127.0.0.1:8000/api/pairs', data);

      await router.push({ name: 'pairs.index'});
    } catch (error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }

  };

  // methode pour modifier une paire
  const updatePair = async (id) => {
    errors.value = '';

    try {
      let response = await axios.put('http://127.0.0.1:8000/api/pairs/' + id, pair.value);

      console.log(response.data);
      await router.push({ name: 'pairs.index'});
    } catch (error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }

  };

  // methode pour supprimer une paire
  const destroyPair = async (id) => {
    if (!window.confirm('Voulez - vous Supprimer cette paire ?')) return;

    await axios.delete('http://127.0.0.1:8000/api/pairs/' + id);
    await getPairs();
  };

  return {
    pair,
    pairs,
    errors,
    getPairs,
    getPair,
    createPair,
    updatePair,
    destroyPair,
  }
}