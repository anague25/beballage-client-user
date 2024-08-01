<template>
    <main class="flex">
        <Navbar></Navbar>
        <section class="flex flex-col w-ful lg:px-0 lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>
                <Loader></Loader>
                <div class="py-5 px-6 lg:px-[25px]">
                    <div class="flex justify-between items-center">
                        <div class="">
                            <h1 class="text-[30px] font-bold text-gray-800">Deballage Buyer's Profile</h1>
                            <span class="text-gray-600 text-base">Gérez votre boutique préférée ici</span>
                        </div>

                    </div>
                    <!-- <div class="2xl:max-w-[1480px] mx-auto bg-white px-4 rounded-lg">
                        <h2 class="text-[20px] font-bold py-4 px-4 border-b-[1px] uppercase">Product I do like most</h2>
                        <div
                            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 py-4 gap-x-5 gap-y-2">

                            <div v-if="products.length > 0" v-for="product in products"
                                class="p-[11.86px] rounded-md shadow-md bg-white">
                                <span class="block"><img :src="path + product.image" :alt="product.name" width="201"
                                        height="201"></span>
                                <div class="">
                                    <p class=" text-gray-500">{{ product.name }}</p>
                                    <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">
                                        {{ product.description }}</p>
                                    <div class="flex justify-between items-center py-1">
                                        <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity }}
                                            set</small>
                                    </div>
                                    <div class="flex items-center justify-between gap-x-2">
                                        <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <span class="text-[12px] font-bold text-gray-500">{{ product.category.name
                                            }}</span>
                                       
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div> -->
                    <div class="lg:grid-cols-4 gap-x-5 md:grid grid-cols-3 sm:grid grid-cols-2 w-full ">
                        <div v-if="shops.length > 0" v-for="shop in shops" :key="shop.id"
                            class="font-sans leading-tight min-h-screen bg-grey-lighter pt-8 ">
                            <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                                <div class="bg-cover h-40"
                                    :style="{ backgroundImage: 'url(' + path + shop.profile + ')' }">
                                </div>
                                <div class="border-b px-4 pb-6">
                                    <div class="text-left sm:text-left sm:flex mb-4">
                                        <img class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                                            :src="path + shop.cover" alt="">
                                        <div class="py-2 mt-3">
                                            <h3 class="font-bold text-2xl ">{{ shop.name }}</h3>
                                        </div>
                                    </div>
                                    <div class="flex">
                                        <button
                                            class="flex-1 rounded-full border-2 border-red bg-red-600 font-semibold text-black px-4 py-2"><router-link
                                                :to="'/vendor-profile/' + shop.id">Boutique</router-link></button>
                                    </div>
                                </div>
                                <div class="px-4 py-4">
                                    <div class="flex items-center justify-between text-grey-darker mb-4">
                                        <span><strong class="text-black"></strong> {{ truncateText(shop.description
                                            ,14)}}</span>
                                        <a href="#" @click="removeFavorite(shop.id)"
                                            class="text-[13px] font-bold uppercase p-1 bg-red-700 text-white">supprimer</a>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </section>
    </main>
</template>




<script>
import { ref, computed, onMounted, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';
import Navbar from '@/components/userDashboard/Navbar.vue';
import TopNavbar from '@/components/userDashboard/TopNavbar.vue';
import Loader from '@/components/loader/Loader.vue';
import toast from '@/plugins/Notification.js';
import axios from '@/plugins/axios.js';

export default {
    components: {
        Navbar,
        Loader,
        TopNavbar
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const favorites = ref([]);
        const shops = computed(() => {
            return favorites.value.filter((favorite) => {
                return favorite.type === "shop";
            })
        });

        watch(shops, (newVal, oldVal) => {
            console.log(oldVal);
            console.log(newVal);
        })

        const removeFavorite = async (id) => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.delete('/api/remove-favorite/' + id);
                if (response && response.data && response.data.message) {
                    toast.success(response.data.message);
                    const response2 = await axios.get('/api/favorites');
                    favorites.value = response2.data;
                }
                // console.log(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        }

        onMounted(async () => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.get('/api/favorites');
                favorites.value = response.data;
                // console.log(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        });

        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };


        return {
            shops,
            path,
            removeFavorite,
            truncateText,

        };
    }
};
</script>


<style></style>


<style></style>