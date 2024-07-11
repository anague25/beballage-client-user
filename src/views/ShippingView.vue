<template>
    <Navbar></Navbar>
    <section>
        <div class="x:max-w-[1500px] lg:max-w-[1200px] mx-auto py-[50px] px-4 lg:px-0">
            <div class="w-full">
                <NavCommand></NavCommand>
            </div>
            <div class="w-full mx-auto py-10 lg:py-20 lg:px-10 px-6 rounded-md lg:rounded-none bg-white mt-4 lg:mt-0">
                <div class="max-w-[700px] mx-auto">
                    <div class="">
                        <h2 class="capitalize font-bold text-[32px] text-gray-700">Shipping & Delivery information</h2>
                        <p>Kindly fill the form below with your shipping/delivery information.</p>
                    </div>
                    <!-- <form @submit.prevent="proceedToPayment">
                        <div class="w-full ">
                            <div class="grid grid-cols-1 gap-4 w-full mt-4">
                                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div class="w-full">
                                        <label for="firstName">Nom</label>
                                        <input type="text" v-model="shippingInfo.firstName" id="field1"
                                            placeholder="first name"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
                                    </div>
                                    <div class="w-full">
                                        <label for="lastName">Prenom</label>
                                        <input type="text" v-model="shippingInfo.lastName" id="lastName"
                                            placeholder="last name"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
                                    </div>
                                    <div class="w-full">
                                        <label for="email">email</label>
                                        <input type="email" v-model="shippingInfo.email" id="email"
                                            placeholder="deballage237@gmail.com"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
                                    </div>
                                    <div class="w-full">
                                        <label for="phoneNumber">Telephone</label>
                                        <input type="tel" v-model="shippingInfo.phone" id="phoneNumber"
                                            placeholder="697245689"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
                                    </div>
                                    <div class="w-full">
                                        <label for="town">Ville</label>
                                        <input type="text" id="town" v-model="shippingInfo.city"
                                            placeholder="Entrer votre ville"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black">

                                    </div>
                                    <div class="w-full">
                                        <label for="quater">Quartier</label>
                                        <input type="text" id="quater" v-model="shippingInfo.neighborhood"
                                            placeholder="Entrer votre quartier"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black">

                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <label for="address">Adresse</label>
                                        <input type="text" v-model="shippingInfo.address" id="address"
                                            placeholder="Ex:Pk17,intrancegendamerie appt 789"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
                                    </div>
                                    <div class="pt-3">
                                        <label for="shortNote">instruction utile</label>
                                        <textarea id="field8" v-model="shippingInfo.description"
                                            placeholder="Ex:plus de details sur le lieu de livraison, Ex:s'il vous plait ne pas livrer apres 20h"
                                            class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black"></textarea>
                                    </div>
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
                                    <span class="block "><router-link to="/cart">Return to cart</router-link></span>
                                </button>
                                <button type="submit"
                                    class="bg-red-700 w-full lg:w-fit px-4 py-3 lg:py-2 rounded-md text-white font-semibold">Continue
                                    to payment</button>
                            </div>
                        </div>
                    </form> -->


                    <Form @submit="proceedToPayment">
      <div class="w-full">
        <div class="grid grid-cols-1 gap-4 w-full mt-4">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div class="w-full">
              <label for="firstName">Nom</label>
              <Field name="first name" id="firstName" v-model="shippingInfo.firstName" :rules="'required|alpha'" placeholder="First name" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="first name"  class="text-red-700"/>
            </div>
            <div class="w-full">
              <label for="lastName">Prenom</label>
              <Field name="last name" id="lastName" v-model="shippingInfo.lastName" :rules="'required|alpha'" placeholder="Last name" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="last name" class="text-red-700"/>
            </div>
            <div class="w-full">
              <label for="email">Email</label>
              <Field name="email" id="email" v-model="shippingInfo.email" :rules="'required|email'" placeholder="deballage237@gmail.com" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="email" class="text-red-700"/>
            </div>
            <div class="w-full">
              <label for="phoneNumber">Telephone</label>
              <Field name="phone" id="phoneNumber" v-model="shippingInfo.phone" :rules="'required|numeric|min:9'" placeholder="697245689" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="phone" class="text-red-700"/>
            </div>
            <div class="w-full">
              <label for="town">Ville</label>
              <Field name="city" id="town" v-model="shippingInfo.city" :rules="'required|alpha'" placeholder="Entrer votre ville" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="city" class="text-red-700"/>
            </div>
            <div class="w-full">
              <label for="quater">Quartier</label>
              <Field name="neighborhood" id="quater" v-model="shippingInfo.neighborhood" :rules="'required|alpha'" placeholder="Entrer votre quartier" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="neighborhood" class="text-red-700"/>
            </div>
          </div>
          <div>
            <div>
              <label for="address">Adresse</label>
              <Field name="address" id="address" v-model="shippingInfo.address" :rules="'required'" placeholder="Ex:Pk17,intrancegendamerie appt 789" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="address" class="text-red-700"/>
            </div>
            <div class="pt-3">
              <label for="shortNote">Instruction utile</label>
              <Field name="description" id="shortNote" v-model="shippingInfo.description" :rules="'required'"  placeholder="Ex:plus de details sur le lieu de livraison, Ex:s'il vous plait ne pas livrer apres 20h" class="border w-full border-gray-300 rounded-md p-2 focus:ring-black focus:border-black" />
              <ErrorMessage name="description" class="text-red-700"/>
            </div>
          </div>
        </div>
        <div class="flex justify-between items-center pt-9">
          <button class="text-black hidden lg:flex gap-x-2">
            <span class="block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-left">
              <path d="M6 8L2 12L6 16" />
              <path d="M2 12H22" />
            </svg></span>
            <span class="block "><router-link to="/cart">Return to cart</router-link></span>
          </button>
          <button type="submit" class="bg-red-700 w-full lg:w-fit px-4 py-3 lg:py-2 rounded-md text-white font-semibold">Continue to payment</button>
        </div>
      </div>
    </Form>


               
                </div>
            </div>
        </div>
    </section>
    <Footer></Footer>
</template>

<script>
import { computed, reactive, onMounted, watch } from 'vue';
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
        const shippingInfo = reactive({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            city: '',
            description: '',
            address: '',
            neighborhood: '',
            order_id: '',
        });

        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

       

        const userInfo = ()=>
        {        
                shippingInfo.firstName = authUser.value.firstName || '';
                shippingInfo.lastName = authUser.value.lastName || '';
                shippingInfo.email = authUser.value.email || '';
                shippingInfo.phone = authUser.value.phone || '';
        }



        function proceedToPayment() {
            store.dispatch('order/setShippingInfo', shippingInfo);
            router.push('/payment');
        }

        onMounted(async () => {
            if (token.value) {
                await store.dispatch('auth/fetchUser');
            }
            userInfo();
        });

        return {
            shippingInfo,
            proceedToPayment,
            authUser,
            token
        };
    },
};


</script>