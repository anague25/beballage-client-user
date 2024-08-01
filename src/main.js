import './index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'

// vee-validate imports
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, max, numeric, alpha } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

// Define validation rules
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('numeric', numeric)
defineRule('alpha', alpha)
// Define a custom rule for alphabetic characters and spaces
defineRule('alpha_spaces', (value) => {
  if (/^[A-Za-z\s]*$/.test(value)) {
    return true;
  }
  return 'This field must only contain alphabetic characters and spaces';
});

defineRule('alpha_num_spaces', (value) => {
  if (/^[A-Za-z0-9\s]*$/.test(value)) {
    return true;
  }
  return 'This field must only contain letters, numbers, and spaces';
});

defineRule('phone', (value) => {
  // Regex for phone numbers with optional + and spaces
  const phoneRegex = /^[+\d\s]+$/;
  if (phoneRegex.test(value)) {
    return true;
  }
  return 'Please enter a valid phone number';
});

/// Configure vee-validate
configure({
  generateMessage: localize('en', en), // Utiliser les messages d'erreur anglais
});

// Définir les noms de champs personnalisés
localize('en', {
  fields: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    phone: 'Phone',
    city: 'City',
    neighborhood: 'Neighborhood',
    address: 'Address',
    description: 'Description',
    // Ajoutez d'autres champs ici selon vos besoins
  },
});

const app = createApp(App)
app.config.globalProperties.$axios = axios // Ajoutez Axios aux propriétés globales

// Register vee-validate components globally
app.component('Field', Field)
app.component('Form', Form)
app.component('ErrorMessage', ErrorMessage)

// Initialisation du panier depuis localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || []
store.commit('cart/INIT_CART_FROM_STORAGE', cartItems)

app.use(router)
app.use(store)

app.mount('#app')
