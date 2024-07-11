<template>
    <Navbar></Navbar>
    <section class="px-4">
        <div class="x:max-w-[1500px] lg:max-w-[1200px] mx-auto py-[60px] lg:py-[100px]">
            <Loader/>
            <div class="w-full">
                <NavCommand />
                <div class="bg-white mt-1 lg:mt-0 py-4 px-5 rounded-md lg:rounded-none">
                    <div class="">
                        <div class="hidden lg:flex gap-x-4 text-left border-b-[1px] border-gray-300 py-5">
                            <span class="block w-[40%] font-bold">Checkout Confirmation</span>
                        </div>
                        <div class="mb-1 blog">
                            <!-- component -->
                            <div class=" py-5 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                                <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->

                                <div class="flex justify-start item-start  flex-col">
                                    <h1
                                        class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                                        Order #13432</h1>
                                    <p class="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st
                                        Mart 2021 at 10:34 PM</p>
                                </div>

                                <div
                                    class="mt-1 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                                    <div class="w-full">


                                        <div
                                            class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                                            <div
                                                class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 mx-5 xl:space-y-8">
                                                <div
                                                    class="justify-start items-start dark:bg-gray-800 bg-gray-50 px-4  py-2 md:py-6 md:p-6 xl:p-8 w-full  ">
                                                    <h3
                                                        class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 font-bold text-center">
                                                        Customer’s Cart</h3>

                                                    <div v-if="Object.keys(groupedCartItems).length === 0"
                                                        class="px-3 pb-4 mt-4 md:mt-6  md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full border-[1px] border-green-600">
                                                        <div
                                                            class=" border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8">
                                                            <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 text-center pb-4"
                                                                style="color: red;">Shop & Item name</h3>

                                                            <div
                                                                class="flex justify-between  items-start w-full pt-2  ">
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg leading-6">
                                                                    Iphone</p>
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                                                    <span class="px-7">Quantity</span>10
                                                                </p>

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <div v-else v-for="(shopItems, shopName) in groupedCartItems"
                                                        class="px-3 pb-4 mt-4 md:mt-6  md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full border-[1px] border-green-600">
                                                        <div
                                                            class=" border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8">
                                                            <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800 text-center pb-4"
                                                                style="color: red;">{{ shopName }}</h3>

                                                            <div v-for="item in shopItems"
                                                                class="flex justify-between  items-start w-full pt-2  ">
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg leading-6">
                                                                    {{ item.product.name }}</p>
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                                                    <span class="px-7">Quantity</span>{{ item.quantity
                                                                    }}
                                                                </p>

                                                            </div>
                                                        </div>

                                                    </div>




                                                    <div class="mt-5 py-3 w-full border-[1px] border-green-600 px-4">
                                                        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800"
                                                            style="color: red;">Product in Cart</p>

                                                        <div v-if="orderCartItems.length > 0"
                                                            v-for="item in orderCartItems"
                                                            class=" border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8">
                                                            <h3
                                                                class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                                                {{ item.product.name }}</h3>
                                                            <div class="flex justify-between  items-start w-full pt-2">
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg leading-6">
                                                                    {{ item.product.price }} FRCFA <span class="px-7">{{
                                                                        item.quantity }}</span> </p>
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                                                    {{ item.product.price * item.quantity }} FCFA</p>
                                                            </div>
                                                        </div>
                                                        <div v-else
                                                            class=" border-b-[1px] border-black w-full flex flex-col justify-start items-start space-y-8">
                                                            <h3
                                                                class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
                                                                Premium Quaility Dress</h3>
                                                            <div class="flex justify-between  items-start w-full pt-2">
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg leading-6">
                                                                    $36.00 <span class="px-7">01</span> </p>
                                                                <p
                                                                    class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
                                                                    $36.00</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                                <div
                                                    class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                                    <div
                                                        class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
                                                        <h3
                                                            class="text-xl dark:text-white font-semibold leading-5 text-gray-800">
                                                            Summary</h3>
                                                        <div
                                                            class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                            <div class="flex justify-between w-full">
                                                                <p
                                                                    class="text-base dark:text-white leading-4 text-gray-800">
                                                                    Subtotal</p>
                                                                <p
                                                                    class="text-base dark:text-gray-300 leading-4 text-gray-600">
                                                                    {{ formatCurrency(subtotal) }}</p>
                                                            </div>
                                                            <!-- <div class="flex justify-between items-center w-full">
                                                                <p
                                                                    class="text-base dark:text-white leading-4 text-gray-800">
                                                                    Discount <span
                                                                        class="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span>
                                                                </p>
                                                                <p
                                                                    class="text-base dark:text-gray-300 leading-4 text-gray-600">
                                                                    -$28.00 (50%)</p>
                                                            </div> -->
                                                            <div class="flex justify-between items-center w-full">
                                                                <p
                                                                    class="text-base dark:text-white leading-4 text-gray-800">
                                                                    Shipping</p>
                                                                <p
                                                                    class="text-base dark:text-gray-300 leading-4 text-gray-600">
                                                                    {{ formatCurrency(shippingCost) }}</p>
                                                            </div>
                                                        </div>
                                                        <div class="flex justify-between items-center w-full">
                                                            <p
                                                                class="text-base dark:text-white font-semibold leading-4 text-gray-800">
                                                                Total</p>
                                                            <p
                                                                class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">
                                                                {{ formatCurrency(total) }}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="overflow-hidden bg-gray-50 dark:bg-gray-800 w-full  flex justify-between items-center md:items-start px-4 py-6 mx-5 md:p-6 xl:p-8 flex-col">
                                                <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800"
                                                    style="color: red;">Shipping Details</h3>
                                                <div
                                                    class=" md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                                    <div class="grid grid-cols-1 gap-4 w-full mt-4">
                                                        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                                            <div class="w-full">
                                                                <label for="firstName">Nom</label>
                                                                <label for="shippingFirstName"
                                                                    class="non-editable-label  border w-full border-gray-300 rounded-md p-5 "
                                                                    style="background-color: white;">{{
                                                                        shippingInfo.firstName ?? 'nom' }}</label>
                                                            </div>
                                                            <div class="w-full">
                                                                <label for="lastName">Prenom</label>
                                                                <label for="shippingLastName"
                                                                    class="non-editable-label   border w-full border-gray-300 rounded-md p-3"
                                                                    style="background-color: white;"> {{
                                                                        shippingInfo.lastName ?? 'prenom' }}</label>
                                                            </div>
                                                            <div class="w-full">
                                                                <label for="email">Email</label>
                                                                <label for="shippingEmail"
                                                                    class="non-editable-label border w-full border-gray-300 rounded-md p-5 "
                                                                    style="background-color: white;">{{
                                                                        shippingInfo.email ?? 'email' }}</label>
                                                            </div>
                                                            <div class="w-full">
                                                                <label for="phoneNUmber">Telephone</label>
                                                                <label for="shippingPhoneNumber"
                                                                    class="non-editable-label  border w-full border-gray-300 rounded-md p-3"
                                                                    style="background-color: white;">{{
                                                                        shippingInfo.phone ?? 'nom' }}</label>
                                                            </div>
                                                            <div class="w-full">
                                                                <label for="country">Pays</label>
                                                                <label for="shippingCountry"
                                                                    class="non-editable-label  border w-full border-gray-300 rounded-md p-5 "
                                                                    style="background-color: white;">Cameroon</label>
                                                            </div>
                                                            <div class="w-full">
                                                                <label for="region">Ville</label>
                                                                <label for="shippingTown"
                                                                    class="non-editable-label   border w-full border-gray-300 rounded-md p-3"
                                                                    style="background-color: white;"> {{
                                                                        shippingInfo.city ?? 'nom' }}</label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div>
                                                                <label for="address">
                                                                    Adresse
                                                                </label>
                                                                <label for="shippingAddress"
                                                                    class="non-editable-label   border w-full border-gray-300 rounded-md p-3"
                                                                    style="background-color: white;">{{
                                                                        shippingInfo.address ??
                                                                        'Ex:Pk17,intrancegendamerie appt 789' }} </label>
                                                            </div>
                                                            <div class="pt-3">
                                                                <label for="field8">instruction utile</label>
                                                                <label for="shippingSpecialNotice"
                                                                    class="non-editable-label   border w-full border-gray-300 rounded-md p-3"
                                                                    style="background-color: white;">
                                                                    {{
                                                                        shippingInfo.description ??
                                                                        "s'il vous plait ne pas livrer apres 20h"
                                                                    }} </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- <div class="flex flex-col justify-center w-full">
                                                    <h1 class="text-red-600 text-center font-bold mb-6">Payment Method
                                                    </h1>
                                                    <label for="type1"
                                                        class="flex items-center hover:bg-red-600 hover:text-white cursor-pointer border-2 rounded-lg border-gray-300 py-5 px-5">
                                                        <input type="radio"
                                                            class="form-radio h-15 w-15 mx-5 text-indigo-500"
                                                            name="type" id="type1" checked>
                                                        <h1 class="px-10 font-bold py-2  ">pay on delivery</h1>
                                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/952/794/small/cash-on-delivery-steacker-free-vector.jpg"
                                                            class="h-12 w-fit">
                                                    </label>
                                                </div> -->
                                                <div v-if="paymentMethod === 'orangeMoney'"
                                                    class="px-8 py-5 lg:max-w-md">
                                                    <label :style="{ backgroundColor: backgroundColor1 }"
                                                        @mouseover="backgroundColor1 = 'rgba(239,128,49,255)'"
                                                        @mouseout="backgroundColor1 = 'white'"
                                                        class="flex justify-start hover:text-white items-center cursor-pointer border-2 border-gray-300 rounded-lg py-5 px-5">
                                                        <input type="radio" value="orangeMoney"
                                                            class="form-radio h-15 mx-5 text-indigo-500" id="type1" />
                                                        <h1 class="px-10 font-bold py-2">pay with Orange Money</h1>
                                                        <img src="https://seeklogo.com/images/O/orange-money-logo-8F2AED308D-seeklogo.com.png"
                                                            class="h-12 w-1/2" />
                                                    </label>
                                                </div>
                                                <div v-if="paymentMethod === 'mtnMobileMoney'"
                                                    class="px-8 py-4 lg:max-w-md">
                                                    <label :style="{ backgroundColor: backgroundColor2 }"
                                                        @mouseover="backgroundColor2 = 'yellow'"
                                                        @mouseout="backgroundColor2 = 'white'"
                                                        class="flex items-center cursor-pointer hover:text-white border-2 border-gray-300 rounded-lg py-5 px-5">
                                                        <input type="radio" value="mtnMobileMoney"
                                                            class="form-radio hover:text-white h-15 w-15 mx-5 text-indigo-500"
                                                            id="type2">
                                                        <h1 class="px-10 font-bold py-2">pay with MTN mobile Money</h1>
                                                        <img src="https://www.kindpng.com/picc/m/151-1514348_mtn-momo-logo-mobile-money-logo-png-transparent.png"
                                                            class="h-12 w-fit">
                                                    </label>
                                                </div>
                                                <div v-if="paymentMethod === 'payOnDelivery'"
                                                    class="px-8 py-4 lg:max-w-md">
                                                    <label
                                                        class="flex items-center hover:bg-red-600 hover:text-white cursor-pointer border-2 rounded-lg border-gray-300 py-5 px-5">
                                                        <input type="radio" value="payOnDelivery"
                                                            class="form-radio h-15 w-15 mx-5 text-indigo-500"
                                                            id="type3">
                                                        <h1 class="px-10 font-bold py-2">pay on delivery</h1>
                                                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/952/794/small/cash-on-delivery-steacker-free-vector.jpg"
                                                            class="h-12 w-fit">
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex justify-between items-center pt-9">
                            <button class="text-black hidden lg:flex gap-x-2">
                                <span class="block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left">
                                        <path d="M6 8L2 12L6 16" />
                                        <path d="M2 12H22" />
                                    </svg></span>
                                <span class="block "><router-link to="/payment">Return to
                                        payment</router-link></span>
                            </button>
                            <button @click="placeOrder"
                                class="bg-red-700 w-full lg:w-fit px-4 py-3 lg:py-2 rounded-md text-white font-semibold">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>

    <Footer></Footer>
</template>



<script>
import { computed, watch, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Footer from '@/components/home/Footer.vue';
import Navbar from '@/components/home/Navbar.vue';
import NavCommand from '@/components/home/NavCommand.vue';
import axios from '@/plugins/axios';
import toast from '@/plugins/Notification';
import Loader from '@/components/loader/Loader.vue';

export default {
    components: { Navbar, Footer, NavCommand,Loader },
    setup() {
        const store = useStore();
        //recuperer les info de livraison du user
        const shippingInfo = computed(() => store.getters['order/shippingInfo']);
        //methode de payment choisie par le user
        const paymentMethod = computed(() => store.getters['order/paymentMethod']);
        //recuperer les produits que le user veut commander
        const orderCartItems = computed(() => store.getters['order/orderCartItems']);
        //prix de livraison du produit
        const shippingCost = ref(1000);  // 1000 FCFA
        // Calculez le subtotal
        const subtotal = computed(() => orderCartItems.value.reduce((total, item) => total + item.product.price * item.quantity, 0));
        // Calculez le total final
        const total = computed(() => subtotal.value + shippingCost.value);
        //recuperer les infos du user connecter
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

        const backgroundColor1 = ref('white');
        const backgroundColor2 = ref('white');
        const backgroundColor3 = ref('white');

        console.log(orderCartItems.value);

        // Group items by shop
        const groupedCartItems = computed(() => {
            return orderCartItems.value.reduce((acc, item) => {
                const shop = item.product.shop;
                if (shop && shop.name) {
                    const shopName = shop.name;
                    if (!acc[shopName]) {
                        acc[shopName] = [];
                    }
                    acc[shopName].push(item);
                }
                return acc;
            }, {});
        });





        // watch(groupedCartItems, (newVal) => {

        //     console.log(newVal.value);
        // })

        async function placeOrder() {
            const items = orderCartItems.value.map(item => {
                const totalPrice = parseFloat(item.product.price) * parseInt(item.quantity);
                return {
                    product_id: item.product.id,
                    price: totalPrice, // Prix total calculé pour le produit
                    quantity: parseInt(item.quantity)
                };
            });

            store.dispatch('loader/setLoading', true);
            try {

                //le user effectue le payment
                const paymentsData = new FormData();
                paymentsData.append('amount', total.value);
                paymentsData.append('payment_method', paymentMethod.value);
                paymentsData.append('user_id', authUser.value.id || null);
                const payment = await axios.post('/api/payments', paymentsData);

                // Envoyer les informations de commande au serveur
                const orderSData = new FormData();
                orderSData.append('totalAmount', total.value);
                orderSData.append('payment_id', payment.data.payment.id);
                orderSData.append('user_id', authUser.value.id || null);

                const order = await axios.post('/api/orders', orderSData);
                const orderId = order.data.data.id;

                //envoyer les informations des produits commandes au serveur
                const itemsData = new FormData();
                items.forEach((field, index) => {
                    itemsData.append(`items[${index}][product_id]`, field.product_id);
                    itemsData.append(`items[${index}][price]`, field.price);
                    itemsData.append(`items[${index}][quantity]`, field.quantity);
                });

                itemsData.append('city', shippingInfo.value.city);
                itemsData.append('neighborhood', shippingInfo.value.neighborhood);
                itemsData.append('phone', shippingInfo.value.phone);
                itemsData.append('lastName', shippingInfo.value.lastName);
                itemsData.append('firstName', shippingInfo.value.firstName);
                itemsData.append('description', shippingInfo.value.description);
                itemsData.append('email', shippingInfo.value.email);
                itemsData.append('address', shippingInfo.value.address);

                for (let [key, value] of itemsData.entries()) {
                    console.log(`${key}: ${value}`);
                }
                await axios.post(`/api/order-items/${orderId}`, itemsData);

                //envoyer les informations de livraison au serveur
                const shippingInfosData = new FormData();
                shippingInfosData.append('city', shippingInfo.value.city);
                shippingInfosData.append('neighborhood', shippingInfo.value.neighborhood);
                shippingInfosData.append('phone', shippingInfo.value.phone);
                shippingInfosData.append('lastName', shippingInfo.value.lastName);
                shippingInfosData.append('firstName', shippingInfo.value.firstName);
                shippingInfosData.append('description', shippingInfo.value.description);
                shippingInfosData.append('email', shippingInfo.value.email);
                shippingInfosData.append('address', shippingInfo.value.address);
                shippingInfosData.append('order_id', orderId);
                await axios.post('/api/deliveries', shippingInfosData);
                toast.success();


            } catch (error) {
                console.error('Failed to place order:', error);
                // Gérer les erreurs ici, comme afficher un message d'erreur à l'utilisateur
            } finally{
                store.dispatch('loader/setLoading', false);
            }
            
        }

        // Fonction pour formater la monnaie
        function formatCurrency(value) {
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'XAF',
            }).format(value);
        }


        // console.log(orderCartItems.value);

        onMounted(async () => {
            if (token.value) {
                await store.dispatch('auth/fetchUser');
            }
        });


        return {
            groupedCartItems,
            shippingInfo,
            paymentMethod,
            orderCartItems,
            subtotal,
            shippingCost,
            total,
            placeOrder,
            backgroundColor1,
            backgroundColor2,
            backgroundColor3,
            formatCurrency,
        };
    }

};


</script>
<style>
.non-editable-label {
    border: 1px solid #ccc;
    padding: 5px;
    display: inline-block;
    background-color: #f9f9f9;
    cursor: not-allowed;
}
</style>