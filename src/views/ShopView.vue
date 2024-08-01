<template>
    <main>

        <Navbar></Navbar>
        <Loader></Loader>
        <section class="px-4 lg:px-6 xl:px-0">
            <div class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0">
                <div class="badcrub py-[20px] hidden lg:block">
                    <a class="text-gray-500 text-[13px] font-semibold" href="/index.html">Home</a> > <a href="#"
                        class="text-red-600 text-[14px] font-semibold">All Shops</a>

                    <div
                        class="flex justify-between items-center py-3 px-4 bg-white shadow-lg rounded-md mt-4 lg:hidden">
                        <span class="inline-block font-bold">All Products</span>
                        <button class="inline-block toggle-button"><img width="30" src="/images/svgs/icon-filter.svg"
                                alt="icon of a filter"></button>
                    </div>


                </div>
            </div>
        </section>

        <section>
            <div class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0 flex pt-3 lg:pt-6 pb-10">

                <div class=" prduct-list lg:w-[100%] w-full px-4 lg:px-0">
                    <div class=" py-[7px]  lg:block mx-5">
                        <div class=" mx-auto text-center">
                            <div class="lg:flex">
                                <div class="search my-2 w-full lg:flex mr-2 gap-x-2 ">
                                    <select v-model="selectedCity" @change="fetchShops" id="town"
                                        aria-placeholder="Select your town"
                                        class="border w-full my-2 border-red-600 rounded-md p-2 focus:ring-black focus:border-red-600 ">
                                        <option value="">Ville</option>
                                        <option v-for="city in cities" :key="city.id" :value="city.name">{{ city.name }}
                                        </option>
                                        <!-- Add more options here -->
                                    </select>
                                    <select v-model="selectedNeighborhood" @change="fetchShops" id="town"
                                        aria-placeholder="Select your town"
                                        class="border w-full my-2 border-red-600 rounded-md p-2 focus:ring-black focus:border-red-600 ">
                                        <option value="">Quartier</option>
                                        <option v-for="neighborhood in neighborhoods" :key="neighborhood.id"
                                            :value="neighborhood.name">{{ neighborhood.name }}</option>
                                        <!-- Add more options here -->
                                    </select>
                                    <input
                                        class="border w-full my-2 border-red-600 rounded-md p-2 focus:ring-red-600 focus:border-red-600"
                                        type="search" placeholder='Rechercher des boutiques sur deballage.com'
                                        v-model="search" @input="fetchShops" />
                                </div>
                                <a href='#' @click="fetchShops"
                                    class="my-4 hover:bg-red-600 transition-all  flex items-center h-[inherit] px-[15px]   bg-red-700 text-white rounded-[3.56px] "><span
                                        class='inline-block px-3'>RECHERCHER</span> <img class="mx-5"
                                        src="/images/svgs/search.svg" alt="search an item" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="px-0 lg:px-4 2xl:px-4">
                        <div class="2xl:max-w-[1480px] mx-auto">
                            <div
                                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 grid-flow-row-dense lg:grid-rows-2  gap-y-4">
                                <div v-if="shops.length > 0" v-for="shop in shops" :key="shop.id"
                                    class="p-[11.86px] rounded-md shadow-md bg-white mx-1">
                                    <div class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
                                        <div class="bg-cover h-40"
                                            :style="{ backgroundImage: `url(${path + shop.cover})` }">
                                        </div>
                                        <div class="border-b px-4 pb-6">
                                            <div class="text-center sm:text-left sm:flex mb-4">
                                                <img class="h-32 w-32 rounded-full border-4 border-white -mt-16 mr-4"
                                                    :src="path + shop.profile" alt="">
                                                <div class="py-2">
                                                    <h3 class="font-bold text-2xl mb-1">{{ shop.name }}</h3>
                                                </div>
                                            </div>
                                            <div class="flex">
                                                <router-link :to="'/vendor-profile/' + shop.id"
                                                    class="flex-1 rounded-full border-2 border-red bg-red-600 font-semibold text-center text-black px-4 py-2">
                                                    Boutique</router-link>
                                            </div>
                                        </div>
                                        <div class="px-4 py-4">
                                            <div class="flex items-center text-grey-darker mb-4">
                                                <span><strong class="text-black"></strong>
                                                    {{ truncateText(shop.description, 20) }}</span>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div v-if="paginationPages.length > 0"
                        class="pagination flex gap-x-2 justify-center lg:justify-start lg:gap-x-4 mt-5 mx-0 lg:ml-4">
                        <span @click="currentPage > 1 && goToPage(currentPage - 1)"
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&lt;
                        </span>
                        <span v-for="page in paginationPages" :key="page" @click="page !== '...' && goToPage(page)"
                            class="w-8 h-8 p-6 rounded-md flex items-center font-bold cursor-pointer justify-center"
                            :class="page === currentPage ? 'bg-red-700 text-white' : 'bg-white'">{{ page }}</span>

                        <span @click="currentPage < meta.last_page && goToPage(currentPage + 1)"
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&gt;</span>
                    </div>
                    <div v-else
                        class="pagination flex gap-x-2 justify-center lg:justify-start lg:gap-x-4 mt-5 mx-0 lg:ml-4">
                        <span
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&lt;
                        </span>
                        <span
                            class="w-8 h-8 p-6 bg-red-700 text-white rounded-md flex items-center font-bold cursor-pointer justify-center">1</span>
                        <span
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">2</span>
                        <span
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">3</span>
                        <span
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">4</span>
                        <span
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&gt;</span>
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
export default {
    components: {
        Navbar,
        Footer,
        Loader,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const search = ref('');
        const selectedCity = ref('');
        const selectedNeighborhood = ref('');
        const shops = ref([]);
        const cities = ref([]);
        const neighborhoods = ref([]);
        const meta = ref({}); // Stocke les métadonnées de pagination
        const currentPage = ref(1);
        const page = ref(1);

        const fetchShops = async () => {
            const params = {
                page: page.value,
                search: search.value,
                city: selectedCity.value,
                neighborhood: selectedNeighborhood.value,
            };

            store.dispatch('loader/setLoading', true);

            try {
                const response = await axios.get('/api/shops', { params });
                shops.value = response.data.data;
                console.log(shops.value);
                meta.value = response.data.meta;
            } catch (error) {
                console.error('Error fetching shops:', error);
            } finally {
                store.dispatch('loader/setLoading', false);

            }
        };

        const fetchCities = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.get('/api/cities/all'); // Assuming you have an endpoint for cities
                cities.value = response.data.data;
            } catch (error) {
                console.error('Error fetching cities:', error);
            } finally {
                store.dispatch('loader/setLoading', false);

            }
        };

        const fetchNeighborhoods = async () => {
            store.dispatch('loader/setLoading', true);

            try {
                const response = await axios.get('/api/neighborhoods/all'); // Assuming you have an endpoint for neighborhoods
                neighborhoods.value = response.data.data;
            } catch (error) {
                console.error('Error fetching neighborhoods:', error);
            } finally {
                store.dispatch('loader/setLoading', false);

            }
        };

        const goToPage = (pageValue) => {

            if (pageValue !== currentPage.value) {
                currentPage.value = pageValue;
                page.value = pageValue;
                fetchShops();
            }
        };

        const getPaginationPages = (currentPage, totalPages) => {
            const pages = [];
            if (totalPages <= 10) {
                for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                }
            } else {
                pages.push(1);
                if (currentPage > 4) {
                    pages.push('...');
                }
                for (let i = Math.max(2, currentPage - 2); i <= Math.min(totalPages - 1, currentPage + 2); i++) {
                    pages.push(i);
                }
                if (currentPage < totalPages - 3) {
                    pages.push('...');
                }
                pages.push(totalPages);
            }
            return pages;
        };

        const paginationPages = computed(() => getPaginationPages(currentPage.value, meta.value.last_page || 1));

        onMounted(() => {
            fetchCities();
            fetchNeighborhoods();
            fetchShops();
        });

        watch([selectedCity, selectedNeighborhood], fetchShops);

        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };

        return {
            search,
            selectedCity,
            selectedNeighborhood,
            shops,
            cities,
            neighborhoods,
            fetchShops,
            path,
            truncateText,
            paginationPages,
            currentPage,
            goToPage,
            meta
        };
    }



}
</script>