<template>
    <Navbar></Navbar>
    <section class="px-4">
        <div class="x:max-w-[1500px] lg:max-w-[1200px] mx-auto py-[60px] lg:py-[100px]">
            <div class="w-full">
                <NavCommand></NavCommand>

                <div class="bg-white mt-2 lg:mt-0 py-4 px-5 rounded-md lg:rounded-none">
                    <form @submit.prevent="placeOrder">
                        <div class="">
                            <div class="hidden lg:flex gap-x-4 text-left border-b-[1px] border-gray-300 py-5">
                                <span class="block w-[40%] font-bold">Payment method</span>
                            </div>
                            <div class="mb-3 blog">

                                <div class="px-8 py-5 lg:max-w-md">
                                    <label :style="{ backgroundColor: backgroundColor1 }"
                                        @mouseover="backgroundColor1 = 'rgba(239,128,49,255)'"
                                        @mouseout="backgroundColor1 = 'white'"
                                        class="flex justify-start hover:text-white items-center cursor-pointer border-2 border-gray-300 rounded-lg py-5 px-5">
                                        <input type="radio" v-model="paymentMethod" value="orangeMoney"
                                            class="form-radio h-15 mx-5 text-indigo-500" id="type1" />
                                        <h1 class="px-10 font-bold py-2">pay with Orange Money</h1>
                                        <img src="https://seeklogo.com/images/O/orange-money-logo-8F2AED308D-seeklogo.com.png"
                                            class="h-12 w-1/2" />
                                    </label>
                                </div>
                                <div class="px-8 py-4 lg:max-w-md">
                                    <label :style="{ backgroundColor: backgroundColor2 }"
                                        @mouseover="backgroundColor2 = 'yellow'" @mouseout="backgroundColor2 = 'white'"
                                        class="flex items-center cursor-pointer hover:text-white border-2 border-gray-300 rounded-lg py-5 px-5">
                                        <input type="radio" v-model="paymentMethod" value="mtnMobileMoney"
                                            class="form-radio hover:text-white h-15 w-15 mx-5 text-indigo-500"
                                            id="type2">
                                        <h1 class="px-10 font-bold py-2">pay with MTN mobile Money</h1>
                                        <img src="https://www.kindpng.com/picc/m/151-1514348_mtn-momo-logo-mobile-money-logo-png-transparent.png"
                                            class="h-12 w-fit">
                                    </label>
                                </div>
                                <div class="px-8 py-4 lg:max-w-md">
                                    <label
                                        class="flex items-center hover:bg-red-600 hover:text-white cursor-pointer border-2 rounded-lg border-gray-300 py-5 px-5">
                                        <input type="radio" v-model="paymentMethod" value="payOnDelivery"
                                            class="form-radio h-15 w-15 mx-5 text-indigo-500" id="type3">
                                        <h1 class="px-10 font-bold py-2">pay on delivery</h1>
                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/952/794/small/cash-on-delivery-steacker-free-vector.jpg"
                                            class="h-12 w-fit">
                                    </label>
                                </div>

                            </div>
                            <div class="flex justify-between items-center pt-9">
                                <button class="text-black hidden lg:flex gap-x-2">
                                    <span class="block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-move-left">
                                            <path d="M6 8L2 12L6 16" />
                                            <path d="M2 12H22" />
                                        </svg></span>
                                    <span class="block "><router-link to="/shipping">Return to
                                            shipping</router-link></span>
                                </button>
                                <button type="submit"
                                    class="bg-red-700 w-full lg:w-fit px-4 py-3 lg:py-2 rounded-md text-white font-semibold">Confirm
                                    your order</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Footer from '@/components/home/Footer.vue';
import Navbar from '@/components/home/Navbar.vue';
import NavCommand from '@/components/home/NavCommand.vue';


export default {
    components: { Navbar, Footer, NavCommand },
    setup() {
        const store = useStore();
        const router = useRouter();
        const paymentMethod = ref('');
        const backgroundColor1 = ref('white');
        const backgroundColor2 = ref('white');
        const backgroundColor3 = ref('white');
        const info = store.getters['order/shippingInfo'];
        console.log(info);

        async function placeOrder() {
            const cartItems = store.getters['cart/cartItems'];
            await store.dispatch('order/setCartItems', cartItems);
            await store.dispatch('order/setPaymentMethod', paymentMethod.value);
            console.log(paymentMethod.value);
            console.log(cartItems);
            router.push('/checkout');
        }

        return {
            paymentMethod,
            placeOrder,
            backgroundColor1,
            backgroundColor2,
            backgroundColor3,

        };
    },
};


</script>
