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
                            <span class="text-gray-600 text-base">Manage your favorite products here</span>
                        </div>

                    </div>
                    <div class="2xl:max-w-[1480px] mx-auto bg-white px-4 rounded-lg">
                        <h2 class="text-[20px] font-bold py-4 px-4 border-b-[1px] uppercase">Les produits que j'aime le
                            plus</h2>
                        <div
                            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 py-4 gap-x-5 gap-y-2">


                            <div v-if="products.length > 0" v-for="product in products"
                                class="p-[11.86px] rounded-md shadow-md bg-white">
                                <router-link :to="'product-details/' + product.id" class="block"><img
                                        :src="path + product.image" :alt="product.name"
                                        style="width: 217px;height: 201px;"></router-link>
                                <div class="">
                                    <router-link :to="'product-details/' + product.id">
                                        <p class=" text-gray-500">{{ product.name }}</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">
                                            {{ truncateText(product.description, 14) }}</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity
                                                }}
                                                set</small>
                                            <!-- <span class="font-bold inline-block text-[14px] text-gray-600">Other</span> -->
                                        </div>
                                        <div class="flex items-center justify-between gap-x-2">
                                            <span class="block text-[14px] font-bold">{{ product.price }} FCFA</span>
                                        </div>
                                    </router-link>
                                    <div class="flex items-center justify-between">
                                        <span class="text-[12px] font-bold text-gray-500">{{ product.category.name
                                            }}</span>
                                        <a href="#" @click="removeFavorite(product.id)"
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
        const products = computed(() => {
            return favorites.value.filter((favorite) => {
                return favorite.type === "product";
            })
        });

        // watch(products, (newVal, oldVal) => {
        //     console.log(oldVal);
        //     console.log(newVal);
        // })

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
            products,
            path,
            removeFavorite,
            truncateText

        };
    }
};
</script>


<style></style>


<style></style>