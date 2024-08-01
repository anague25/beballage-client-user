<template>
    <Navbar></Navbar>
    <Loader></Loader>
    <header>
        <div class="h-[300px] bg-blue-800">
            <img class="w-full h-full object-cover" src="/images/jpgs/vendor-background-black.jpg" alt="">
        </div>
        <div class="px-4 xl:px-0">
            <div
                class="flex flex-col lg:flex-row w-full xl:max-w-[1300px] xl:mx-auto bg-white py-6 justify-between px-6 relative translate-y-[-70px] rounded-[16px]">
                <div class="flex flex-row items-center gap-x-4">
                    <div class="p-4 rounded-md bg-white shadow-md w-fit">
                        <img class="w-[70px] h-[70px]" :src="path + shop.profile" :alt="shop.name">
                    </div>
                    <div class="flex items-center gap-x-2">
                        <h1 class="font-bold text-[24px]">{{ shop.name }}</h1>
                        <span class="text-red-700"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-badge-check">
                                <path
                                    d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                                <path d="m9 12 2 2 4-4" />
                            </svg></span>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-center gap-x-4 gap-y-2 py-5">
                    <span
                        class="py-2 px-4 rounded-full gap-x-2 bg-red-50 text-red-700 w-full lg:w-fit flex items-center">
                        <span class="text-red-700 block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-message-circle-code">
                                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                                <path d="m10 10-2 2 2 2" />
                                <path d="m14 10 2 2-2 2" />
                            </svg></span>
                        <span class="block">{{ shop.user?.phone }}</span>
                    </span>
                    <span
                        class="flex items-center gap-x-2 rounded-full gap-x bg-red-50 text-red-700 w-full lg:w-fit py-2 px-4">
                        <span class="text-red-700 block"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin">
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg></span>
                        <span class="block" v-for="city in shop.cities"> {{ city.name }} -
                            {{ city.neighborhood?.name }}</span>
                    </span>
                </div>
            </div>
        </div>
    </header>

    <section class="lg:py-10 py-5 translate-y-[-40px]">
        <div class="2xl:max-w-[1480px] mx-auto px-4 rounded-lg">
            <div class="flex flex-wrap gap-y-4 gap-x-2 w-full xl:max-w-[1300px] xl:mx-auto">
                <a href="#" v-if="shop.categories?.length > 0" v-for="category in shop.categories"
                    class="block py-2 px-4 rounded-full border-2 font-medium bg-white">{{ category.name }}</a>
                <!-- <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Wirelless mouse</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Mechanical Keyboards</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Monitors</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Routers</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Phones</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">HP Laptops</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Dell Computers</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">USB chargers</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">WIFI adapter</a>
                <a href="#" class="block py-2 px-4 rounded-full border-2 font-medium bg-white">Speakers</a> -->
            </div>
        </div>
    </section>

    <section class="px-4 lg:px-4 2xl:px-0 ">
        <div class="2xl:max-w-[1480px] mx-auto bg-white px-4 rounded-lg">
            <h2 class="text-[20px] font-bold py-4 px-4 border-b-[1px] uppercase">Produit vendu par ce vendeur</h2>
            <div
                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 py-4 gap-x-2 gap-y-2">

                <router-link :to="'/product-details/' + product.id" v-if="shop.products?.length > 0"
                    v-for="product in shop.products" class="p-[11.86px] rounded-md shadow-md bg-white">
                    <span class="block"><img :src="path + product.image" style="width: 217px;height: 201px;"
                            alt=""></span>
                    <div class="">
                        <p class=" text-gray-500">{{ product.name }}</p>
                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">{{ product.description }}
                        </p>
                        <div class="flex justify-between items-center py-1">
                            <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity }} Qte</small>
                        </div>
                        <div class="flex items-center justify-between gap-x-2">
                            <span class="block text-[14px] font-bold">{{ product.price }} FCFA</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-[12px] font-bold text-gray-500">{{ product.category?.name }}</span>
                        </div>
                    </div>
                </router-link>

            </div>
        </div>
    </section>

    <section class="px-4 lg:px-4 2xl:px-0 my-10 overflow-hidden">
        <div class="2xl:max-w-[1480px] mx-auto bg-white rounded-lg">
            <h2 class="text-[20px] font-bold py-4 px-4 border-b-[1px] uppercase">Un bref aperçu de ce vendeur</h2>
            <p class="px-4 py-4 text-gray-500">{{ shop.description }}.</p>
        </div>
    </section>
    <section class="px-4 lg:px-4 2xl:px-0 my-10 overflow-hidden">
        <div class="2xl:max-w-[1480px] mx-auto bg-white rounded-lg">
            <h2 class="text-[20px] font-bold py-4 px-4 border-b-[1px] uppercase">DÉCOUVREZ LES AVIS DES UTILISATEURS QUI
                ONT PARTAGÉ LEUR EXPÉRIENCE AVEC CETTE BOUTIQUE.</h2>
            <p class="px-4 py-4 lg:flex flex-wrap gap-x-2 text-gray-500">
                <ReviewCard v-for="review in reviews" :key="review.id" :review="review">
                </ReviewCard>
            </p>
        </div>
    </section>


</template>

<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Navbar from '@/components/home/Navbar.vue';
import Loader from '@/components/loader/Loader.vue';
import ReviewCard from '@/components/reviews/ReviewCard.vue';
import axios from '@/plugins/axios';
export default {
    components: {
        Navbar,
        Loader,
        ReviewCard,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const shop = computed(() => store.getters['shops/shop']);
        const reviews = ref([]);
        // watch(shop, (newVal, oldVal) => {
        //     console.log(oldVal);
        //     console.log(newVal);
        // })


        const fetchShopReviews = async (reviewableId, reviewableType) => {
            try {
                console.log(reviewableId);
                console.log(reviewableType);

                const response = await axios.get('/api/all-reviews', {
                    params: {
                        reviewable_id: reviewableId,
                        reviewable_type: reviewableType
                    }
                });
                reviews.value = response.data;
                console.log(reviews.value);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };





        onMounted(async () => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await store.dispatch('shops/fetchShop', route.params.id);
                console.log(response);

            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }

            fetchShopReviews(shop.value.id, 'App\\Models\\Shop'); // Replace with actual reviewable_id and reviewable_type

        });

        return {
            shop,
            path,
            reviews,
        };
    },
};


</script>