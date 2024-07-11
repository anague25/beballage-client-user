<template>
    <main
        class="w-full md:h-full md:py-8 h-screen py-[120px] px-[16px] xl:h-screen flex items-center bg-[#F1F3F6] md:px-10">
        <Loader></Loader>
        <div
            class="flex flex-col md:flex-row w-full h-full max-h-[800px] lg:max-w-[900px] max-w-[1480px] xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div v-if="!errors"
                class="self-center h-full bg-white px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%]  mx-auto">
                <div class="lg:max-w-[80%] translate-y-[-50%] relative top-[50%] w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="#"><img class="w-[140px]"
                                src="/images/pngs/logo-white.png" alt=""></a></div>
                    <div class="py-5 flex items-center flex-col">
                        <h1 class="text-[22px] xl:text-[32px] font-bold">VERIFICATION DE VOTRE EMAIL</h1>

                    </div>

                    <div class="">
                        <button type="submit"
                            class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">VERIFICATION...</button>
                    </div>
                </div>
            </div>
            <div v-else
                class="self-center h-full bg-white px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%]  mx-auto">
                <div class="lg:max-w-[85%] translate-y-[-50%] relative top-[50%] w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="#"><img class="w-[140px]"
                                src="/images/pngs/logo-white.png" alt=""></a></div>
                    <div class="py-5 flex items-center flex-col">
                        <h2 class="text-[20px] xl:text-[30px] font-bold">OOP'S UNE ERREUR EST SURVENU!!!</h2>
                        <p class="font-thin text-sm lg:text-[16px] mt-2">VEUILLEZ VOUS
                            CONNECTER POUR DEMANDER UN NOUVEAU LIEN DE CONFIRMATION.</p>

                    </div>

                    <div class="">
                        <button type="submit"
                            class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">VOTRE
                            LIEN DE VERIFICATION SEMPBLE AVOIR EXPIRER</button>
                    </div>
                </div>
            </div>
            <div class="h-[100px] md:h-[inherit] w-full md:w-[50%] order-first lg:order-2">
                <img class="object-cover hidden lg:block w-full h-full" src="/images/jpgs/login.jpeg" alt="">
                <img class="lg:hidden w-full h-full object-cover" src="/images/jpgs/login-mobile.jpeg" alt="">
            </div>
        </div>
    </main>
</template>

<script>
import axios from '@/plugins/axios';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import Loader from '@/components/loader/Loader.vue';


export default {
    components: {
        Loader,
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const errors = ref(false);
        const verifyEmail = async () => {
            const { email, expires, signature } = route.query;
            store.dispatch('loader/setLoading', true);
            try {
                const encodedEmail = encodeURIComponent(email);
                const encodedExpires = encodeURIComponent(expires);
                const encodedSignature = encodeURIComponent(signature);

                const response = await axios.post(`/api/users/email/verify?email=${encodedEmail}&expires=${encodedExpires}&signature=${encodedSignature}`);

                console.log(response);
                if (response.data.message === 'Email verified successfully.') {
                    alert('Email verified successfully.');
                    router.push('/login'); // Redirige vers la page de connexion ou une autre page
                } else {
                    alert(response.data.message);
                    router.push('/');
                }
            } catch (error) {
                if (error.response.status == 403) {
                    errors.value = true;
                }
            }finally{
                    store.dispatch('loader/setLoading', false);

                }
        };

        verifyEmail();

        return { errors, };
    },
};
</script>


<style></style>