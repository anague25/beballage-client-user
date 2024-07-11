import './index.css'
// import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './plugins/axios'

// vee-validate imports
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min, max, numeric,alpha } from '@vee-validate/rules'
import { localize } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'

// Define validation rules
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)
defineRule('numeric', numeric)
defineRule('alpha', alpha)

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
