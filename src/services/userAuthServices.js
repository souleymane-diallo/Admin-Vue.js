import axios from "axios";
import { ref } from "vue";
import router from '../router';

export default function useAuth() {
  const errors = ref('');
  const currentUser = ref('');
  const token = ref(localStorage.getItem('token'));

  const createRegister = async (data) => {
    errors.value = '';

    try {
      let response = await axios.post("http://127.0.0.1:8000/api/register", data);
    
      await router.push({ name: 'connexion' });
    } catch(error) {
      const createRegisterErrors = error.response.data;
      errors.value = createRegisterErrors;
    }

  };

  const createLogin = async (data) => {
    errors.value = '';

    try {
      let response = await axios.post("http://127.0.0.1:8000/api/login", data);
      localStorage.setItem('token', response.data);
      
      await router.push('/');
    
    } catch(error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }
  };

  const createLogout = async () => {

    try {
      let response = await axios.post("http://127.0.0.1:8000/api/logout");
      localStorage.removeItem('token');
      
      await router.push({ name: 'connexion' });
    } catch (error) {
      console.log(error.response.data);
    }
    
  };

  // methode pour récupérer l'utilisateur connecté
  const getUser = async () => {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token.value}`;

    try {
      let response = await axios.get('http://127.0.0.1:8000/api/user');
      currentUser.value = response.data;
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return {
    errors,
    createRegister,
    createLogin,
    createLogout,
    token,
    currentUser,
    getUser
  }
}