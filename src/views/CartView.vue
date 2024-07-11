<template>
    <Navbar></Navbar>
    <section class="px-4">
        <div class="x:max-w-[1500px] lg:max-w-[1200px] mx-auto py-[60px] lg:py-[100px]">
            <div class="w-full">
                <NavCommand></NavCommand>
                <div class="bg-white mt-2 lg:mt-0 py-4 px-5 rounded-md lg:rounded-none">
                    <div class="">
                        <div class="hidden lg:flex gap-x-4 text-left border-b-[1px] border-gray-300 py-5">
                            <span class="block w-[40%] font-bold">Product</span>
                            <span class="block w-[12%] font-bold">Price</span>
                            <span class="block w-[12%] font-bold">Total Price</span>
                            <span class="block w-[12%] font-bold">Quantity</span>
                            <span class="block w-[12%] font-bold">Remove</span>
                        </div>
                        <div class="">
                            <ul v-if="cartItems.length > 0" v-for="item in cartItems" :key="item.product.id"
                                class="flex flex-wrap lg:flex-nowrap space-y-5 items-center gap-x-4 py-8 lg:py-5 border-b-[1px] border-gray-300">
                                <li class="w-[100%] lg:w-[40%]">
                                    <div class="flex gap-x-2">
                                        <img class="w-10 h-10" :src="path + item.product.image"
                                            :alt="item.product.name">
                                        <p class="text-[12px] lg:text-[16px]">{{ item.product.name }}.</p>
                                    </div>
                                </li>
                                <li class="w-[33.3%] lg:w-[12%]">{{ item.product.price }} XAF</li>
                                <li class="w-[30.3%] lg:w-[12%] text-red-700 font-medium">{{ item.product.price *
                                    item.quantity }} XAF</li>
                                <li class="w-[60%] lg:w-[12%]">
                                    <div class="flex rounded-[6px] overflow-hidden w-fit">
                                        <button @click="decrement(item)" id="decrement"
                                            class="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-600">-</button>
                                        <span id="quantity"
                                            class="w-16 px-4 py-2 text-center bg-white border rounded">{{ item.quantity
                                            }}</span>
                                        <button @click="increment(item)" id="increment"
                                            class="px-4 py-2 text-white bg-red-600 rounded hover:bg-green-600">+</button>
                                    </div>
                                </li>
                                <li class="w-[20%] lg:w-[12%]">
                                    <button @click="removeItem(item)"
                                        class="text-red-600 p-2 bg-red-100 rounded flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-trash-2">
                                            <path d="M3 6h18" />
                                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                            <line x1="10" x2="10" y1="11" y2="17" />
                                            <line x1="14" x2="14" y1="11" y2="17" />
                                        </svg>
                                    </button>
                                </li>
                            </ul>

                            <div class="flex justify-between py-4">
                                <span class="font-semibold block">Subtotal</span>
                                <span class="font-semibold block">{{ subtotal }} XAF</span>
                            </div>
                        </div>
                        <div class="flex justify-between items-center mt-5">
                            <button class="text-black lg:flex gap-x-2 hidden">
                                <span class="block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left">
                                        <path d="M6 8L2 12L6 16" />
                                        <path d="M2 12H22" />
                                    </svg></span>
                                <span class="block "><router-link to="/">Return to home</router-link></span>
                            </button>
                            <button
                                class="bg-red-700 px-4 py-2 block w-full lg:w-fit rounded-md text-white font-semibold"><router-link
                                    to="/shipping">Continue to shipping</router-link></button>
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import Footer from '@/components/home/Footer.vue';
import Navbar from '@/components/home/Navbar.vue';
import NavCommand from '@/components/home/NavCommand.vue';


export default {
    components: { Navbar, Footer, NavCommand },
    setup() {
        const store = useStore();
        const cartItems = computed(() => store.getters['cart/getCartItems']);
        const subtotal = computed(() => store.getters['cart/getCartSubtotal']);
        const path = computed(() => store.getters['getImagePaths/getPath']);

        const increment = (item) => {
            store.dispatch('cart/updateCartItemQuantity', { productId: item.product.id, quantity: item.quantity + 1 });
        };

        const decrement = (item) => {
            if (item.quantity > 1) {
                store.dispatch('cart/updateCartItemQuantity', { productId: item.product.id, quantity: item.quantity - 1 });
            }
        };

        const removeItem = (item) => {
            store.dispatch('cart/removeFromCart', item.product.id);
        };

        return {
            cartItems,
            subtotal,
            path,
            increment,
            decrement,
            removeItem,
        };
    },
};


</script>