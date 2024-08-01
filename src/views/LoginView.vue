<template>
    <main
        class="w-full md:h-full md:py-8 h-full py-[120px] px-[16px] xl:h-screen flex justify-center items-center bg-[#F1F3F6] md:px-10">
        <Loader></Loader>
        <div
            class="flex justify-center items-center flex-col md:flex-row w-full h-[initial] lg:max-h-[800px] lg:max-w-[900px] max-w-[1480px] xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div
                class="self-center lg:self-stretch bg-white px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%]  mx-auto">
                <div class="lg:max-w-[80%] lg:min-h-full  relative md:top-0 w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="https://deballage.cm"><img class="w-[140px]"
                                src="/images/pngs/logo-white.png" alt=""></a></div>
                    <div class="py-5 flex items-center flex-col">
                        <h1 class="text-[22px] xl:text-[32px] font-bold">Connexion a votre compte</h1>
                        <p class="font-thin text-sm lg:text-[16px] mt-2">Connectez-vous a votre compte pour une plus
                            grande faciliter d'utilisation
                        </p>
                    </div>

                    <form @submit.prevent="login">
                        <div class="pt-[20px] flex flex-col gap-y-[21px]">
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_email">Email</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="email"
                                    placeholder="useremail@gmail.com" id="user_email" v-model="email">
                                <span v-if="errors.email" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.email[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_password">Mot de passe</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="password"
                                    placeholder="your password" v-model="password" id="user_password">
                                <span v-if="errors.password" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.password[0] }} </span>
                            </div>
                        </div>

                        <div class="text-[14px] font-light flex justify-between items-center mt-4">
                            <span class="flex items-center gap-x-2">
                                <input type="checkbox" v-model="rememberMe" id="remember_me">
                                <label for="">se souvenir de moi</label>
                            </span>
                            <span class="inline-block">
                                <router-link class="underline" to="/users/password/email">Mot de passe
                                    oublié</router-link>
                            </span>
                        </div>
                        <div class="">
                            <button type="submit"
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">Connexion</button>
                            <div class="text-center py-3">
                                <small class="font-extralight text-[14px]">Avez-vous un compte?</small>
                                <h4><router-link class="text-red-700 font-bold hover:underline transition-all"
                                        to="/register">S'inscrire</router-link>
                                </h4>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="w-full md:self-stretch overflow-hidden md:w-[50%] order-first lg:order-2">
                <img class="object-cover hidden overflow-hidden lg:block w-full h-full" src="/images/jpgs/login.jpeg"
                    alt="">
                <img class="lg:hidden w-full h-[100px] md:h-full object-cover" src="/images/jpgs/login.jpeg" alt="">
            </div>
        </div>
    </main>






</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import Loader from '@/components/loader/Loader.vue';

export default {
    components: {
        Loader
    },
    setup() {
        const email = ref('');
        const password = ref('');
        const errors = ref({});
        const store = useStore();
        const router = useRouter();
        const rememberMe = ref(false); // Utilisé pour Remember Me

        // Chargement initial : vérifier si Remember Me est activé
        const initialize = () => {
            const rememberMeChecked = localStorage.getItem('remember_me');
            rememberMe.value = rememberMeChecked === 'true'; // Convertit en booléen
            if (rememberMe.value) {
                email.value = localStorage.getItem('user_email') || '';
                password.value = localStorage.getItem('user_password') || '';
            }
        };

        initialize(); // Appel à l'initialisation

        const login = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('auth/login', { email: email.value, password: password.value });
                // Si Remember Me est coché, stocker dans localStorage
                if (rememberMe.value) {
                    localStorage.setItem('remember_me', 'true');
                    localStorage.setItem('user_email', email.value);
                    localStorage.setItem('user_password', password.value);
                } else {
                    localStorage.removeItem('remember_me');
                    localStorage.removeItem('user_email');
                    localStorage.removeItem('user_password');
                }
                Swal.fire({
                    title: 'Succès!',
                    text: 'Connexion Reussite.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/'); // Rediriger vers la page de connexion après l'envoi du lien
                });

            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    errors.value = error.response.data.errors;
                } else if (error.response && error.response.data && error.response.data.message) {
                    Swal.fire({
                        title: "Oop'!",
                        text: error.response.data.message,
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                } else {
                    Swal.fire({
                        title: "Oop'!",
                        text: "Une erreur s'est produite. Veuillez réessayer.",
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };

        return {
            email,
            password,
            login,
            errors,
            rememberMe,
        };
    }
};
</script>

<style></style>