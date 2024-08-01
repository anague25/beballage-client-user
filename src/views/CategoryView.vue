<template>
    <main>
        <!-- Navbar starts here -->
        <Navbar></Navbar>
        <!-- Navbar ends here -->
        <Loader></Loader>
        <section class="px-4 lg:px-6 xl:px-0">
            <div class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0">
                <div class="badcrub py-[20px] hidden lg:block">
                    <a class="text-gray-500 text-[13px] font-semibold" href="https://deballage.cm/">Home</a> >
                    <router-link to="/categories" class="text-red-600 text-[14px] font-semibold">All
                        Categories</router-link>


                </div>
                <div class="flex justify-between items-center py-3 px-4 bg-white shadow-lg rounded-md mt-4 lg:hidden">
                    <span class="inline-block font-bold">All Products</span>
                    <button class="inline-block toggle-button"><img width="30" src="/images/svgs/icon-filter.svg"
                            alt="icon of a filter"></button>
                </div>

                <div class="sidebar-container h-screen w-full">
                    <div class="bg-white lg:hidden px-5 py-7 rounded-[6px] block lg:w-[22%]">
                        <!-- Sidebar content goes here -->
                        <aside class=" flex flex-col gap-x-2 ">
                            <div class="flex items-center justify-between">
                                <h3 class="text-[20px] font-bold">Market place categories</h3>
                                <img class="icon-close" src="/images/svgs/icon-close.svg" alt="">
                            </div>
                            <div class="mt-4 ">
                                <h4 class="text-[18px] font-bold">All categories</h4>
                                <ul v-if="allCategories.length > 0" class="mt-2 space-y-1">
                                    <li v-for="category in allCategories"><router-link
                                            :to="'/category-details/' + category.id">{{ category.name }}</router-link>
                                    </li>

                                </ul>
                                <ul v-else class="mt-2 space-y-1">
                                    <li><router-link to="#">Short Sleeve</router-link></li>

                                </ul>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0 flex pt-3 lg:pt-6 pb-10">
                <div class="bg-white px-5 py-7 rounded-[6px] sidebar hidden lg:block lg:w-[22%]">
                    <aside class=" flex flex-col gap-x-2 ">
                        <h3 class="text-[20px] font-bold">Market place categories</h3>
                        <div class="mt-4 ">
                            <h4 class="text-[18px] font-bold">All categories</h4>
                            <ul v-if="allCategories.length > 0" class="mt-2 space-y-1">
                                <li v-for="category in allCategories"><router-link
                                        :to="'/category-details/' + category.id">{{ category.name }}</router-link></li>

                            </ul>
                        </div>

                    </aside>
                </div>
                <div class=" prduct-list lg:w-[78%] w-full px-4 lg:px-0">
                    <div class="px-0 lg:px-4 2xl:px-4">
                        <div class="2xl:max-w-[1480px] mx-auto">
                            <div
                                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2">
                                <router-link v-if="categories.length > 0" v-for="category in categories"
                                    :key="category.id" :to="'/category-details/' + category.id"
                                    class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img :src="path + category.image" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">{{ category.name }}</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">
                                            {{ category.description }}</p>
                                        <!-- <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div> -->
                                    </div>
                                </router-link>
                                <router-link v-else class="p-[11.86px] rounded-md shadow-md bg-white">
                                    <span class="block"><img src="/images/pngs/tesoro.png" alt=""></span>
                                    <div class="">
                                        <p class=" text-gray-500">( Jacket + Vest + Pants )</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 truncate">High-end Groom
                                            Formaluated suites</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">10 set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600">Other</span>
                                        </div>
                                        <div class="flex items-center gap-x-2">
                                            <span class="block text-[14px] font-bold">70 000 FCFA</span>
                                            <span class="text-[12px] font-bold line-through">100 000 FCFA</span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">Electronics</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-100 text-red-500">30%
                                                off</span>
                                        </div>
                                    </div>
                                </router-link>


                            </div>
                        </div>
                    </div>
                    <div v-if="paginationPages.length > 0"
                        class="pagination flex gap-x-2 justify-center lg:justify-start lg:gap-x-4 mt-5 mx-0 lg:ml-4">
                        <span @click="currentPage > 1 && goToPage(currentPage - 1)"
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">
                            &lt; </span>
                        <span v-for="page in paginationPages" :key="page" @click="page !== '...' && goToPage(page)"
                            class="w-8 h-8 p-6 rounded-md flex items-center font-bold cursor-pointer justify-center"
                            :class="page === currentPage ? 'bg-red-700 text-white' : 'bg-white'">
                            {{ page }}</span>
                        <span @click="currentPage < meta.last_page && goToPage(currentPage + 1)"
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">&gt;</span>
                    </div>
                    <div v-else
                        class="pagination flex gap-x-2 justify-center lg:justify-start lg:gap-x-4 mt-5 mx-0 lg:ml-4">
                        <span
                            class="w-8 h-8 p-6 bg-white rounded-md flex items-center justify-center font-bold cursor-pointer">
                            &lt; </span>
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

        <!-- Footer starts here -->
        <Footer></Footer>
        <!-- Footer ends here -->
    </main>
</template>


<script>
import Navbar from '@/components/home/Navbar.vue';
import Footer from '@/components/home/Footer.vue';
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Loader from '@/components/loader/Loader.vue';

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
        const categories = computed(() => store.getters['categories/categories']);;
        const allCategories = computed(() => store.getters['categories/allCategories']);;
        const meta = ref({}); // Stocke les métadonnées de pagination
        const currentPage = ref(1);

        const getCategories = async (page = 1) => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await store.dispatch('categories/fetchCategories', { page, search: '' });
                meta.value = response.data.meta;
                console.log(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }

        }

        const getAllCategories = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('categories/fetchAllCategories');
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }

        }


        const goToPage = (page) => {

            if (page !== currentPage.value) {
                currentPage.value = page;
                getCategories(page);
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
        watch(paginationPages, (newVal, oldVal) => {
            console.log(newVal);
            console.log(meta.value.last_page);
        });

        onMounted(async () => {
            getCategories();
            getAllCategories();
        });



        return {
            categories,
            path,
            allCategories,
            currentPage,
            goToPage,
            meta,
            paginationPages,
        }
    }
}

</script>