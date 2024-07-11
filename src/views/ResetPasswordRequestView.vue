<template>
    <main
        class="w-full md:h-full md:py-8 h-screen py-[120px] px-[16px] xl:h-screen flex items-center bg-[#F1F3F6] md:px-10">
       <Loader></Loader>
        <div
            class="flex flex-col md:flex-row w-full h-full max-h-[800px] lg:max-w-[900px] max-w-[1480px] xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div class="self-center h-full bg-white px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%]  mx-auto">
                <div class="lg:max-w-[80%] translate-y-[-50%] relative top-[50%] w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="/"><img class="w-[140px]"
                                src="/images/pngs/logo-white.png" alt=""></a></div>
                    <div class="py-5 flex items-center flex-col">
                        <h1 class="text-[22px] xl:text-[32px] font-bold">Réinitialisation du mot de passe</h1>
                        <p class="font-thin text-sm lg:text-[16px] mt-2">Entrez votre email pour recevoir un lien de
                            réinitialisation de mot de passe.</p>
                    </div>
                    <form @submit.prevent="submitRequest">
                        <div class="pt-[20px] flex flex-col gap-y-[21px]">
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_email">Email</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="email"
                                    placeholder="useremail@gmail.com" v-model="email" id="user_email">
                                <span v-if="errors.email" class="text-red-400 mt-1 text-xs font-thin">{{ errors.email[0]
                                    }}</span>
                            </div>
                        </div>

                        <div class="">
                            <button type="submit"
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">Envoyer
                                le lien de réinitialisation</button>
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
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Loader from '@/components/loader/Loader.vue';

export default {
    components: {
        Loader
    },
    setup() {
        const email = ref('');
        const errors = ref({});
        const router = useRouter();
        const store = useStore();

        const submitRequest = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await axios.post('/api/users/password/email', { email: email.value });

                Swal.fire({
                    title: 'Succès!',
                    text: 'Un lien de réinitialisation de mot de passe a été envoyé à votre adresse email.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/'); // Rediriger vers la page de connexion après l'envoi du lien
                });
            } catch (error) {
                if (error.response && error.response.data && error.response.data.errors) {
                    errors.value = error.response.data.errors;
                } else {
                    Swal.fire({
                        title: "Oops!",
                        text: "Une erreur s'est produite lors de l'envoi du lien de réinitialisation.",
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        };

        return {
            email,
            submitRequest,
            errors
        };
    }
};
</script>

<style></style>