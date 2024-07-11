import { createStore } from 'vuex';
import products from './modules/products'; // Assurez-vous que le chemin est correct
import getImagePaths from './modules/getImagePaths'; // Assurez-vous que le chemin est correct
import users from './modules/users'; // Assurez-vous que le chemin est correct
import auth from './modules/auth'; // Assurez-vous que le chemin est correct
import cart from './modules/cart';
import categories from './modules/categories';
import cities from './modules/cities';
import neighborhoods from './modules/neighborhoods';
import shops from './modules/shops';
import attributes from './modules/attributes';
import properties from './modules/properties';
import ProductSeller from './modules/ProductSeller';
import ProductsImages from './modules/ProductsImages';
import order from './modules/order';
import loader from './modules/loader';
const store = createStore({
  modules: {
    products, // Utilisez un nom clé pour le module
    getImagePaths, // Utilisez un nom clé pour le module
    users, // Utilisez un nom clé pour le module
    auth, // Utilisez un nom clé pour le module
    cart, // Utilisez un nom clé pour le module
    categories, // Utilisez un nom clé pour le module
    cities, // Utilisez un nom clé pour le module
    neighborhoods, // Utilisez un nom clé pour le module
    shops, // Utilisez un nom clé pour le module
    attributes, // Utilisez un nom clé pour le module
    properties, // Utilisez un nom clé pour le module
    ProductSeller, // Utilisez un nom clé pour le module
    ProductsImages, // Utilisez un nom clé pour le module
    order, // Utilisez un nom clé pour le module
    loader, // Utilisez un nom clé pour le module
  }
});

export default store;

