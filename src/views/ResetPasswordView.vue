<template>
    <main
        class="w-full md:h-full md:py-8 h-screen py-[120px] px-[16px] xl:h-screen flex items-center bg-[#F1F3F6] md:px-10">
       <Loader></Loader>
        <div
            class="flex flex-col md:flex-row w-full h-full max-h-[800px] lg:max-w-[900px] max-w-[1480px] xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div class="self-center h-full bg-white px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%]  mx-auto">
                <div class="lg:max-w-[80%] translate-y-[-50%] relative top-[50%] w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="../index.html"><img class="w-[140px]"
                                src="/images/pngs/logo-white.png" alt=""></a></div>
                    <div class="py-5 flex items-center flex-col">
                        <h1 class="text-[22px] xl:text-[32px] font-bold">Connexion a votre compte</h1>
                        <p class="font-thin text-sm lg:text-[16px] mt-2">Connectez-vous a votre compte pour une plus
                            grande faciliter d'utilisation
                        </p>
                    </div>
                    <form @submit.prevent="resetPassword">
                        <div class="pt-[20px] flex flex-col gap-y-[21px]">
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_password">Nouveau Mot de
                                    Passe</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="password"
                                    placeholder="Nouveau mot de passe" v-model="password" id="user_password">
                                <span v-if="errors.password" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.password[0] }}</span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_password_confirmation">Confirmez
                                    le Mot de Passe</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="password"
                                    placeholder="Confirmez le mot de passe" v-model="password_confirmation"
                                    id="user_password_confirmation">
                            </div>
                        </div>

                        <div class="">
                            <button type="submit"
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">Réinitialiser
                                le mot de passe</button>
                        </div>
                    </form>
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
import { ref } from 'vue';
import axios from '@/plugins/axios'; // Assurez-vous d'avoir configuré votre plugin Axios correctement
import Swal from 'sweetalert2';
import { useRouter, useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Loader from '@/components/loader/Loader.vue';

export default {
     components: {
        Loader
    },
    setup() {
        const password = ref('');
        const password_confirmation = ref('');
        const errors = ref({});
        const router = useRouter();
        const route = useRoute();
        const store = useStore();

        const resetPassword = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                const { email, expires, signature } = route.query;
                const encodedEmail = encodeURIComponent(email);
                const encodedExpires = encodeURIComponent(expires);
                const encodedSignature = encodeURIComponent(signature);

                await axios.post(`/api/users/password/reset?email=${encodedEmail}&expires=${encodedExpires}&signature=${encodedSignature}`, {
                    password: password.value,
                    password_confirmation: password_confirmation.value,
                });

                Swal.fire({
                    title: 'Succès!',
                    text: 'Votre mot de passe a été réinitialisé avec succès.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/login'); // Rediriger vers la page de connexion après la réinitialisation du mot de passe
                });
            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    errors.value = error.response.data.errors;
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: "Une erreur s'est produite lors de la réinitialisation du mot de passe.",
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        return {
            password,
            password_confirmation,
            resetPassword,
            errors
        };
    }
};
</script>

<style></style>