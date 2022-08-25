import axios from "axios";
import { ref } from "vue";
import router from '../router';

export default function useAuth() {
  const errors = ref('');

  const createRegister = async (data) => {
    errors.value = '';

    try {
      let response = await axios.post("http://127.0.0.1:8000/api/register", data);
      console.log(response.data.data);

      await router.push("/login");
    } catch(error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
      console.log(errors.value);
    }

  };

  const createLogin = async (data) => {
    errors.value = '';

    try {
      let response = await axios.post("http://127.0.0.1:8000/api/login", data);
      localStorage.setItem('token', response.data);
      console.log(response.data.data);
      
      await router.push("/dashboard");
    } catch(error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }
  };

  const createLogout = async () => {
    try {
      let response = await axios.post("http://127.0.0.1:8000/api/logout");
      localStorage.removeItem('token');
      await router.push('/login');
    } catch (error) {
      const createRegisterErrors = error.response.data.errors;
      errors.value = createRegisterErrors;
    }
    
  };

  return {
    errors,
    createRegister,
    createLogin,
    createLogout
  }
}