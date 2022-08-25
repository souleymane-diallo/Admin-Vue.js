import axios from "axios";
import { ref } from "vue";
import router from '../router';

export default function usePairs() {
  const pair = ref('');
  const pairs = ref([]);

  const getPairs = async () => {
    let response = await axios.get('http://127.0.0.1:8000/api/pairs');

    pairs.value = response.data.data;

    console.log(pairs.value);
  };

  return {
    pair,
    pairs,
    getPairs
  }
}