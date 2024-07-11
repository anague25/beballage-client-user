<template>
    <ol class="lining-nums w-full bg-white py-4 justify-center lg:py-0 lg:bg-gray-100 flex rounded-md lg:rounded-none">
        <li class="w-[25%]">
            <router-link to="/cart"><span class=" text-gray-400 lg:hidden w-full flex justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-shopping-cart">
                        <circle cx="8" cy="21" r="1" />
                        <circle cx="19" cy="21" r="1" />
                        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                    </svg></span>
            </router-link>
            <button class="py-6 hidden px-5 w-full font-semibold lg:block" :class="isActive('/cart')"><router-link
                    to="/cart">My
                    Cart</router-link></button>
        </li>
        <li class="w-[25%]">
            <router-link to="/shipping"> <span class="text-red-700 lg:hidden w-full flex justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-map">
                        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                        <line x1="9" x2="9" y1="3" y2="18" />
                        <line x1="15" x2="15" y1="6" y2="21" />
                    </svg></span>
            </router-link>
            <button class="py-6 hidden  px-5 w-full font-semibold lg:block" :class="isActive('/shipping')"><router-link
                    to="/shipping">Delivery
                    info</router-link></button>
        </li>
        <li class="w-[25%]">
            <router-link to="/payment"> <span class="text-gray-400 lg:hidden w-full flex justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-credit-card">
                        <rect width="20" height="14" x="2" y="5" rx="2" />
                        <line x1="2" x2="22" y1="10" y2="10" />
                    </svg></span>
            </router-link>
            <button class="py-6 hidden px-5 w-full font-semibold lg:block" :class="isActive('/payment')"><router-link
                    to="/payment">Payment</router-link></button>
        </li>
        <li class="w-[25%]">
            <router-link to="/checkout"> <span class="text-gray-400 lg:hidden w-full flex justify-center"><svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-check-circle-2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="m9 12 2 2 4-4" />
                    </svg></span>
            </router-link>
            <button class="py-6 hidden px-5 w-full font-semibold lg:block" :class="isActive('/checkout')"><router-link
                    to="/checkout">Confirmation</router-link>
            </button>
        </li>
    </ol>
</template>


<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const isActive = (path) => route.path === path ? 'bg-white' : 'bg-red-50';
</script>