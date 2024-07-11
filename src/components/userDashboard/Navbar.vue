<template>
    <!-- <aside class="w-[100%] lg:w-[20%] panel-slider absolute lg:relative bg-white  lg:block ">
            <div class="dash-header h-screen relative">
                <div class="">
                    <div class="avatar flex flex-col items-center py-8">
                        <span class="w-[130px] rounded-full h-[130px] bg-gray-200 flex items-center justify-center"><img src="../images/svgs/icon_user.svg" alt=""></span>
                        <div class="text-center mt-4">
                            <span class="block font-bold text-lg text-gray-800">ETA NELSON</span>
                            <span class="block text-gray-500">etanelson@gmail.com</span>
                        </div>
                    </div>
                    <svg id="closeButton" class="absolute lg:hidden block  top-[5%] right-[10%]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </div>
                <div class="mt-8 w-full">
                    <ul>
                        <li class="w-full flex items-center justify-start pl-[59px] py-3">
                            <i class="fa fa-home inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="./user-dashboard.html" class="font-medium bg-red-600 text-white border-2 border-red-600 rounded-full px-4">Dashboard</a>
                        </li>
                    </ul>
                    <div class="relative inline-block justify-start pl-[59px] py-3 ml-3 mt-4 mb-4">
                        <button id="dropdown-buttons" type="button" class="inline-flex justify-center  px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-full shadow-sm">
                          Manage My Profile
                          <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      
                        <div id="dropdown-menus" class="hidden absolute right-0 z-10 mt-2 w-full origin-top-right  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                          <ul>
                            <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                                <i class="fa fa-hourglass-end inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                                <a href="./user-profile.html" class="font-medium text-gray-800">My Profile</a>
                            </li>
                            <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                                <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                                <a href="./user-orders.html" class="font-medium text-gray-800">My Orders</a>
                            </li>
                            <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                                <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                                <a href="./user-payment.html" class="font-medium text-gray-800">My Payments</a>
                            </li>
                            <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                                <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                                <a href="./user-favorite-shops.html" class="font-medium text-gray-800">My Favorite Shops</a>
                            </li>
                            <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                                <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                                <a href="user-favorite-products.html" class="font-medium text-gray-800">My Favorite Products</a>
                            </li>
                          </ul>
                        </div>
                    </div>  
                </div>
                <div class="relative inline-block justify-start pl-[59px] py-3 ml-3 mt-4 mb-4">
                    <button id="dropdown-button" type="button" class="inline-flex justify-center  px-4 py-2 text-sm font-medium text-white bg-red-600 border border-red-600 rounded-full shadow-sm">
                        Manage My Shop account
                      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  
                    <div id="dropdown-menu" class="hidden absolute right-0 z-10 mt-2 w-full origin-top-right px-15 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <ul>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-life-ring inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="user-product.html" class="font-medium text-gray-800">List Of Products</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="user-shop-order.html" class="font-medium text-gray-800">Shop Orders</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="user-shop-payment.html" class="font-medium text-gray-800">Shop Payments</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="user-attribute.html" class="font-medium text-gray-800">Attributes</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="./user-category.html" class="font-medium text-gray-800">Categories</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="./user-condition.html" class="font-medium text-gray-800">Conditions</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-plus-square-o inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="./user-property.html" class="font-medium text-gray-800">Properties</a>
                        </li>
                        <li class="w-full flex  justify-start pl-[59px] items-center py-3">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="./user-shop-profile.html" class="font-medium text-gray-800">Shop Profile</a>
                        </li>
                      </ul>
                    </div>
                </div>  
            </div>

        </aside> -->
    <aside class="w-[100%] lg:w-[20%] panel-slider absolute lg:relative bg-white  lg:block  ">
        <div class="dash-header h-screen relative">
            <div class="">
                <div class="avatar flex flex-col items-center py-3">
                    <span class="w-[130px] rounded-full h-[130px] bg-gray-200 flex items-center justify-center"><img
                            width="130" height="130" class="rounded-full overflow:hidden" :src="path + authUser.profile"
                            alt=""></span>
                    <div class="text-center mt-1">
                        <span class="block font-bold text-lg text-gray-800">{{ authUser.firstName }} {{
                            authUser.lastName
                        }}</span>
                        <span class="block text-gray-500">{{ authUser.email }}</span>
                    </div>
                </div>
                <svg id="closeButton" class="absolute lg:hidden block  top-[5%] right-[10%] lucide lucide-x"
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 6 6 18" />
                    <path d="m6 6 12 12" />
                </svg>
            </div>

            <div class=" ">

                <ul>
                    <li class="w-full flex  items-center justify-start pl-[59px]">
                        <i class="fa fa-home inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                        <router-link to="/user-dashboard" class="font-bold text-red-600">Dashboard</router-link>
                    </li>
                    <li
                        class="w-full flex justify-start pl-[59px] items-center  py-1 ml-4 mt-2 text-white border-gray-600">
                        <i class="fa fa-hourglass-end inline-block mr-2 text-[18px] text-gray-800"
                            aria-hidden="true"></i>
                        <a href="./user-profile.html" class="font-bold  text-gray-800">My Profile</a>
                    </li>
                    <div class="bg-white p-2 rounded shadow">
                        <li
                            class="w-[60%] flex  justify-center mx-auto  py-1  mt-1 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="./user-orders.html" class="font-medium text-gray-800">My Orders</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="./user-payment.html" class="font-medium text-gray-800">My Payments</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto  py-1  mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="./user-favorite-shops.html" class="font-medium text-gray-800">My Favorite
                                Shops</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="user-favorite-products.html" class="font-medium text-gray-800">My Favorite
                                Products</a>
                        </li>
                    </div>
                    <!-- <li class="w-full flex  justify-start pl-[59px] items-center py-1 ">
                            <i class="fa fa-refresh inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                            <a href="" class="font-medium text-gray-800">Manage My Shop account</a>
                        </li> -->
                    <li v-if="authUser?.shop?.id"
                        class="w-full flex justify-start pl-[59px] items-center  py-1 ml-4 mt-2 text-white border-gray-600">
                        <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                        <a href="./user-shop-profile.html" class="font-bold text-gray-800">Shop Profile</a>
                    </li>
                    <div v-if="authUser?.shop?.id" class="bg-white p-2 rounded shadow">
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full ">
                            <i class="fa fa-life-ring inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <router-link to="/list-product" class="font-medium text-gray-800">Liste
                                des produits</router-link>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full ">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="user-shop-order.html" class="font-medium text-gray-800">Shop Orders</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full ">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="user-shop-payment.html" class="font-medium text-black">Shop Payments</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full ">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="user-attribute.html" class="font-medium text-black ">Attributes</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="./user-category.html" class="font-medium text-black">Categories</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-gratipay inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="./user-condition.html" class="font-medium text-gray-800">Conditions</a>
                        </li>
                        <li
                            class="w-[60%] flex  justify-center mx-auto py-1 mt-2 text-white border-[1px] border-gray-600 bg-gray-200 rounded-full">
                            <i class="fa fa-plus-square-o inline-block mr-2 text-[18px] text-gray-800"
                                aria-hidden="true"></i>
                            <a href="./user-property.html" class="font-medium text-gray-800">Properties</a>
                        </li>
                    </div>
                </ul>
            </div>
        </div>

    </aside>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';

export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

        onMounted(async () => {
            if (token.value) {
                await store.dispatch('auth/fetchUser');
            }
        });



        return {
            path,
            token,
            authUser,

        };
    }

}

</script>