import { createRouter, createWebHistory } from 'vue-router'
import { useStore } from 'vuex';
import { computed } from 'vue';
import HomeView from '../views/HomeView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import EmailVerificationView from '@/views/EmailVerificationView.vue'
import ResetPasswordRequestView from '@/views/ResetPasswordRequestView.vue'
import ResetPasswordView from '@/views/ResetPasswordView.vue'
import SellerRegisterView from '@/views/SellerRegisterView.vue'
import CreateShopsView from '@/views/CreateShopsView.vue'
import EditShopsView from '@/views/EditShopsView.vue'
import CreateProductsView from '@/views/CreateProductsView.vue'
import EditProductsView from '@/views/EditProductsView.vue'
import UserDashboardView from '@/views/UserDashboardView.vue'
import ListProductsView from '@/views/ListProductsView.vue'
import CartView from '@/views/CartView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },

    {
      path: '/users/password/email',
      name: 'ResetPasswordRequest',
      component: ResetPasswordRequestView
    },
    {
      path: '/users/password/reset',
      name: 'ResetPassword',
      component: ResetPasswordView
    },
    {
      path: '/users/email/verify',
      name: 'EmailVerification',
      component: EmailVerificationView,

    },
    {
      path: '/seller/register/:id',
      name: 'SellerRegister',
      component: SellerRegisterView,
      meta: { requiresAuth: true, requiresNoneSeller: true }

    },

    {
      path: '/product-details/:id',
      name: 'ProductDetails',
      component: ProductDetailsView
    },

    {
      path: '/register',
      name: 'Register',
      component: RegisterView,
      meta: { requiresGuest: true },
    },

    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresGuest: true },
    },
    {
      path: '/create-shop',
      name: 'CreateShops',
      component: CreateShopsView,
      meta: { requiresAuth: true, requiresSeller: true }
    },
    {
      path: '/edit-shop',
      name: 'EditShops',
      component: EditShopsView,
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },
    {
      path: '/list-product',
      name: 'ListProducts',
      component: ListProductsView,
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },
    {
      path: '/create-product',
      name: 'CreateProducts',
      component: CreateProductsView,
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },

    {
      path: '/edit-product/:id',
      name: 'EditProducts',
      component: EditProductsView,
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },

    {
      path: '/user-dashboard',
      name: 'UserDashboard',
      component: UserDashboardView,

    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/SearchView.vue'),
    },

    {
      path: '/cart',
      name: 'Cart',
      component: CartView,

    },
    {
      path: '/shipping',
      name: 'Shipping',
      component: () => import('@/views/ShippingView.vue'),

    },

    {
      path: '/checkout',
      name: 'Checkout',
      component: () => import('@/views/CheckoutView.vue'),
      meta: { requiresPayment: true },
    },
    {
      path: '/payment',
      name: 'Payment',
      component: () => import('@/views/PaymentView.vue'),
      meta: { requiresShipping: true }
    },
    {
      path: '/favorites-products',
      name: 'FavoritesProducts',
      component: () => import('@/views/FavoritesProductsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/favorites-shops',
      name: 'FavoritesShops',
      component: () => import('@/views/FavoritesShopsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/orders',
      name: 'Orders',
      component: () => import('@/views/OrdersView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/payments',
      name: 'Payments',
      component: () => import('@/views/PaymentsView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/vendor-profile/:id',
      name: 'VendorProfile',
      component: () => import('@/views/VendorProfileView.vue'),
      meta: { requiresAuth: true }
    },

    {
      path: '/user-attribute',
      name: 'UserAttribute',
      component: () => import('@/views/UserAttribute.vue'),
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },

    {
      path: '/user-categories',
      name: 'UserCategories',
      component: () => import('@/views/UserCategorieView.vue'),
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },

    {
      path: '/user-properties',
      name: 'UserProperties',
      component: () => import('@/views/UserPropertiesView.vue'),
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },
    {
      path: '/user-profile',
      name: 'UserProfile',
      component: () => import('@/views/UserProfileView.vue'),
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },
    {
      path: '/user-shop-payments',
      name: 'UserShopPayments',
      component: () => import('@/views/UserShopPaymentView.vue'),
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },

    {
      path: '/user-shop-orders',
      name: 'UserShopOrders',
      component: () => import('@/views/UserShopOrderView.vue'),
      meta: { requiresAuth: true, requiresSeller: true, requiresShop: true }
    },
    {
      path: '/category-details/:id',
      name: 'CategoryDetails',
      component: () => import('@/views/CategoryDetailsView.vue'),
    },
    {
      path: '/categories',
      name: 'Categories',
      component: () => import('@/views/CategoryView.vue'),
    },
    {
      path: '/shops',
      name: 'Shops',
      component: () => import('@/views/ShopView.vue'),
    },
    {
      path: '/abouts',
      name: 'Abouts',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: () => import('@/views/ContactView.vue'),
    },



  ]
})


// Middleware global pour la vérification
router.beforeEach(async (to, from, next) => {
  const store = useStore(); // Accéder au store de l'utilisateur

  // Toujours exécuter fetchUser avant de vérifier les conditions de route
  await store.dispatch('auth/fetchUser').catch(error => {
    console.error('Erreur lors de la récupération de l\'utilisateur', error);
  });

  //verifier si les informations de shipping ont ete fournis
  const shipping = computed(() => store.getters['order/shippingInfo']);
  const isShipping = computed(() => shipping.value.firstName && shipping.value.lastName && shipping.value.email && shipping.value.phone && shipping.value.city && shipping.value.description && shipping.value.address && shipping.value.neighborhood);

  //verifier si le payment method est present
  const paymentMethod = computed(() => store.getters['order/paymentMethod']);

  // Vérifier si la route nécessite un invité et si l'utilisateur est connecté
  if (to.matched.some(record => record.meta.requiresGuest) && store.state.auth.accessToken) {
    next({ name: 'Home' }); // Rediriger vers la page d'accueil
  } else if (to.matched.some(record => record.meta.requiresAuth) && !store.state.auth.accessToken) {
    next({ name: 'Login' }); // Rediriger vers la page de connexion
  } else if (to.matched.some(record => record.meta.requiresSeller) && !store.state.auth.user.cniRecto) {
    next({ name: 'SellerRegister', params: { id: store.state.auth.user?.id } });
  } else if (to.matched.some(record => record.meta.requiresShop) && !store.state.auth.user?.shop?.id) {
    next({ name: 'CreateShops' });
  }
  else if (to.matched.some(record => record.meta.requiresNoneSeller) && store.state.auth.user.cniRecto) {
    next({ name: 'UserDashboard' });
  } else if (to.matched.some(record => record.meta.requiresShipping) && !isShipping.value) {
    next({ name: 'Shipping' });
  } else if (to.matched.some(record => record.meta.requiresPayment) && !paymentMethod.value) {
    next({ name: 'Payment' });
  }
  else {
    next(); // Continuer normalement
  }
});

export default router
