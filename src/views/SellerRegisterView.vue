<template>
    <main
        class="w-full py-[100px] px-[16px] md:h-full md:py-8 lg:py-[120px] h-full xl:h-full flex items-center bg-[#F1F3F6] md:px-[40px]">
        <Loader></Loader>
        <div
            class="flex md:max-h-[1200px] flex-col md:flex-row w-full lg:max-w-[900px] max-w-[1480px] xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div class=" bg-white relative top-[50%] px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%] mx-auto">
                <div class="lg:max-w-[80%] w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="/index.html"><img src="/images/pngs/logo-white.png"
                                alt=""></a></div>
                    <div class="py-5 flex items-center flex-col ">
                        <h1 class=" text-[20px] font-bold">Rejoignez Deballage gratuitement</h1>
                        <p class="font-thin text-sm mt-2 text-center">Rejoignez des milliers de personnes à travers
                            l'Afrique pour acheter ou vendre vos
                            produits en toute simplicité.</p>
                    </div>
                    <form @submit.prevent="registerSeller">
                        <div class="pt-[0px] flex flex-col gap-y-[10px]">
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="Recto">Cni Recto</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="file"
                                    id="Recto" @change="onFileChangeCniRecto">
                                <span v-if="errors.cniRecto" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.cniRecto[0] }} </span>
                                <img v-if="imageUrlCniRecto" :src="imageUrlCniRecto" alt="Selected Image" class="mt-2"
                                    width="50" height="50" />
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="Verso">Cni Verso</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="file"
                                    id="Verso" @change="onFileChangeCniVerso">
                                <span v-if="errors.cniVerso" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.cniVerso[0] }} </span>
                                <img v-if="imageUrlCniVerso" :src="imageUrlCniVerso" alt="Selected Image" class="mt-2"
                                    width="50" height="50" />
                            </div>


                        </div>
                        <div class="text-center py-3">
                            <button type="submit"
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">Devenir
                                Vendeur</button>
                        </div>
                    </form>

                </div>
            </div>
            <div class="h-[100px] md:h-[inherit] w-full md:w-[50%] order-first md:order-[initial]">

                <img class="object-cover hidden md:block w-full h-full" src="/images/jpgs/login-2.jpeg" alt="">
                <img class="md:hidden block w-full h-full object-cover" src="/images/jpgs/login-mobile.jpeg" alt="">
            </div>
        </div>
    </main>
</template>

<script>

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import axios from '@/plugins/axios';
import Swal from 'sweetalert2';
import Loader from '@/components/loader/Loader.vue';


export default {
    components: {
        Loader,
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const route = useRoute();

        const errors = ref({});
        const cniRecto = ref('');
        const cniVerso = ref('');
        const imageUrlCniVerso = ref('');
        const imageUrlCniRecto = ref('');



        const registerSeller = async () => {
            errors.value = {};
            const formData = new FormData();
            formData.append('id', route.params.id);
            formData.append('cniRecto', cniRecto.value);
            formData.append('cniVerso', cniVerso.value);
            store.dispatch('loader/setLoading', true);

            try {
                const response = await axios.post(`/api/users/${route.params.id}`, formData);
                store.state.auth.user = response.data.user;

                Swal.fire({
                    title: 'Succès!',
                    text: 'Félicitations, vous venez de compléter votre statut et êtes maintenant un vendeur sur Deballage. Vous pouvez désormais créer votre boutique et commencer à vendre.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/create-shop'); // Rediriger vers la page de connexion après l'envoi du lien
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
                    console.log(error);
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

        const onFileChangeCniVerso = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                cniVerso.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlCniVerso.value = e.target.result;
                };
                reader.readAsDataURL(cniVerso.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };

        const onFileChangeCniRecto = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                cniRecto.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlCniRecto.value = e.target.result;
                };
                reader.readAsDataURL(cniRecto.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };

        return {

            cniVerso,
            cniRecto,
            registerSeller,
            onFileChangeCniRecto,
            onFileChangeCniVerso,
            imageUrlCniVerso,
            imageUrlCniRecto,
            errors,
        };
    },
};



</script>