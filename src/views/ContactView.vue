<template>
    <main>

        <Navbar></Navbar>
        <Loader></Loader>
        <!-- Content -->
        <!-- Header -->
        <header class="bg-gray-800 h-[500px] lg:h-[500px] flex items-center justify-center">
            <div id="headerContent" class="text-gray-200 font-light text-center px-6">
                <h1 class="text-4xl font-bold mb-4">Contactez-nous</h1>
                <p class="text-lg lg:w-[800px]">Si vous avez des inquiétudes ou des difficultés à comprendre comment
                    utiliser notre application, n'hésitez pas à nous contacter en utilisant le formulaire convivial
                    fourni ci-dessous.</p>
            </div>
        </header>

        <section class="contact-form">
            <div class="lg:max-w-[1000px] lg:flex mx-auto px-6 py-10 mt-[-100px] mb-[150px] lg:p-0">
                <div class="form bg-[#ffffff] p-[5%] lg:w-[60%]">
                    <div class="flex items-center justify-between">
                        <h2 class="text-[22px] font-bold text-[#333333]">Envoyer un message</h2>
                        <div class="icon"><img src="/images/svgs/mail.svg" alt=""></div>
                    </div>
                    <div class="mt-6">
                        <form @submit.prevent="sendMessage">
                            <div class="flex flex-col lg:flex-col justify-between gap-y-5">
                                <div class="lg:flex lg:items-center lg:gap-x-5">
                                    <div class="w-full">
                                        <h4 class="text-[14px] font-semibold text-[#333333]">Votre Email</h4>
                                        <input v-model="email" placeholder="Enter your mail" type="email"
                                            class="px-2 py-[12px] mt-2 lg:mt-0 rounded-[4.25px] w-full border-b-2 ">
                                        <span v-if="errors.email" class="text-red-500 m-1">{{ errors.email[0] }}</span>
                                    </div>
                                    <div class="w-full">
                                        <h4 class="text-[14px] font-semibold text-[#333333]">Votre adresse</h4>
                                        <input v-model="address" placeholder="Enter your address" type="text"
                                            class="px-2 py-[12px] mt-2 lg:mt-0 rounded-[4.25px] w-full border-b-2 ">
                                        <span v-if="errors.address" class="text-red-500 m-1">{{ errors.address[0]
                                            }}</span>

                                    </div>
                                </div>
                                <div class="lg:flex lg:items-center lg:gap-x-5">
                                    <div class="w-full">
                                        <h4 class="text-[14px] font-semibold text-[#333333]">Votre nom</h4>
                                        <input v-model="name" placeholder="Enter your name here" type="text"
                                            class="px-2 py-[12px] mt-2 rounded-[4.25px] w-full border-b-2 ">
                                        <span v-if="errors.name" class="text-red-500 m-1">{{ errors.name[0] }}</span>

                                    </div>
                                    <div class="w-full">
                                        <h4 class="text-[14px] font-semibold text-[#333333] mt-4 lg:mt-0">Votre
                                            Telephone
                                        </h4>
                                        <input v-model="phone" placeholder="Enter your phone number" type="text"
                                            class="px-2 py-[12px] mt-2 rounded-[4.25px] w-full border-b-2 ">
                                        <span v-if="errors.phone" class="text-red-500 m-1">{{ errors.phone[0] }}</span>

                                    </div>
                                </div>
                                <div class="">
                                    <h4 class="text-[14px] font-semibold text-[#333333]">Votre message</h4>
                                    <textarea v-model="message" placeholder="Enter your message"
                                        class="px-2 py-[12px] h-[150px] mt-2 rounded-[4.25px] w-full border-b-2 "></textarea>
                                    <span v-if="errors.message" class="text-red-500 m-1">{{ errors.message[0] }}</span>

                                </div>
                            </div>
                            <div class="mt-8 flex w-full justify-end">
                                <button type="submit"
                                    class="flex justify-center items-center w-[50px] h-[50px] bg-black rounded-full"
                                    title="send message"><img width="25" src="/images/svgs/icon-send.svg"
                                        alt=""></button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="info bg-red-700 text-white p-[5%] lg:w-[40%]">
                    <div class="">
                        <h3 class="text-[22px]">Quelques informations utiles</h3>
                        <div class="flex flex-col gap-y-4 mt-4">
                            <div class="flex items-center gap-x-2">
                                <img src="/images/svgs/uiw_mail.svg" alt="">
                                <p class="font-light"><a
                                        href="mailto:contact@deballage.cm">contact@deballage.cm</a></p>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <img src="/images/svgs/icon-phone.svg" alt="">
                                <p class="font-light">(+237) 682 827 307</p>
                            </div>
                            <div class="flex items-center gap-x-2">
                                <img src="/images/svgs/icon-position.svg" alt="">
                                <p class="font-light">contact@deballage.cm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Footer></Footer>
    </main>
</template>


<script>

import Navbar from '@/components/home/Navbar.vue';
import Footer from '@/components/home/Footer.vue';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Loader from '@/components/loader/Loader.vue';
import axios from '@/plugins/axios';
import toast from '@/plugins/Notification'

export default {
    components: {
        Navbar,
        Footer,
        Loader,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const address = ref('');
        const name = ref('');
        const errors = ref([]);
        const phone = ref('');
        const email = ref('');
        const message = ref('');


        const sendMessage = async () => {
            errors.value = '';
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.post('/api/messages', { address: address.value, name: name.value, phone: phone.value, email: email.value, message: message.value });
                toast.success();
            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    console.log(error);
                    errors.value = error.response.data.errors;
                } else {
                    console.log(error);

                }
            } finally {
                store.dispatch('loader/setLoading', false);

            }
        };




        return {
            address,
            name,
            phone,
            email,
            message,
            errors,
            sendMessage,

        };
    }



}
</script>