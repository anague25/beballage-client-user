<template>
    <Navbar></Navbar>
    <section class="px-4 lg:px-6 xl:px-0">
        <div class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0">
            <Loader ></Loader>
            <div class="badcrub py-[20px] hidden lg:block">
                <a class="text-gray-500 text-[13px] font-semibold" href="/index.html">Home</a> > <a href="#"
                    class="text-red-600 text-[14px] font-semibold">All Categories</a>

                <div v-if="parentCategories.length > 0"
                    class="grid grid-cols-1 lg:grid-cols-4 gap-y-[12px] lg:gap-4 mt-4">
                    <div v-for="category in parentCategories" class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" :src="path + category.image"
                            :alt="category.name">
                        <div class=''>
                            <h2 class="text-xl font-bold mb-1">{{ category.name }}</h2>
                            <p class="mt-0 text-gray-500  text-sm">{{ truncateText(category.description, 20) }}</p>
                        </div>
                    </div>
                </div>
                <div v-else class="grid grid-cols-1 lg:grid-cols-4 gap-y-[12px] lg:gap-4 mt-4">
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px]" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                    <div class="bg-white p-4 flex gap-x-6 rounded-md">
                        <img class=" block  object-cover w-[70px] h-[70px] w-full" src="/images/pngs/woman.png"
                            alt="image of a woman standing">
                        <div class="">
                            <h2 class="text-xl font-bold mb-1">Heading 1</h2>
                            <p class="mt-0 text-gray-500">Description 1</p>
                        </div>
                    </div>
                </div>
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
                            <ul v-if="parentCategories.length > 0" class="mt-2 space-y-1">
                                <li v-for="category in parentCategories" :key="category.id">
                                    <a href="#">{{ category.name }}</a>
                                </li>

                            </ul>
                            <ul v-else class="mt-2 space-y-1">
                                <li><a href="#">Short Sleeve</a></li>
                                <li><a href="#">Short Sleeve</a></li>
                                <li><a href="#">Long Sleeves</a></li>
                                <li><a href="#">Sweaters</a></li>
                            </ul>
                        </div>
                        <div v-if="allAttributes.length > 0">
                            <div class="my-4" v-for="attribute in allAttributes">
                                <h3 class="text-[16px] font-bold">Filter by {{ attribute.name }}</h3>
                                <ul class="pl-2 mt-2">
                                    <li v-for="property in attribute.properties" class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" v-model="selectedProperties" :value="property.id"
                                                class="form-checkbox text-red-600">
                                            <span class="ml-2">{{ property.name }}</span>
                                        </label>
                                    </li>

                                    <!-- More color options... -->
                                </ul>
                            </div>
                        </div>
                        <div v-else>
                            <div class="my-4">
                                <h3 class="text-[16px] font-bold">Filter by Color</h3>
                                <ul class="pl-2 mt-2">
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">Red</span>
                                        </label>
                                    </li>
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">Blue</span>
                                        </label>
                                    </li>
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">Blue</span>
                                        </label>
                                    </li>
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">Blue</span>
                                        </label>
                                    </li>
                                    <!-- More color options... -->
                                </ul>
                            </div>
                            <div class="my-4">
                                <h3 class="text-[16px] font-bold">Filter by Size</h3>
                                <ul class="pl-2 mt-2">
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">L</span>
                                        </label>
                                    </li>
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">XL</span>
                                        </label>
                                    </li>
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">XXL</span>
                                        </label>
                                    </li>
                                    <li class="my-1">
                                        <label class="inline-flex items-center">
                                            <input type="checkbox" class="form-checkbox text-red-600">
                                            <span class="ml-2">BBW</span>
                                        </label>
                                    </li>
                                    <!-- More color options... -->
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div
            class="2xl:max-w-[1480px] xl:max-w-[1410px] mx-auto lg:px-6 2xl:px-0 flex gap-x-5  pt-3 lg:pt-6 pb-10 justify-stretch">
            <div class="bg-white px-5 py-7 rounded-[6px] sidebar hidden lg:block lg:w-[22%] self-start">
                <aside class=" flex flex-col gap-x-2 ">
                    <h3 class="text-[20px] font-bold">Market place categories</h3>
                    <div class="mt-4 ">
                        <h4 class="text-[18px] font-bold">All categories</h4>
                        <ul v-if="parentCategories.length > 0" class="mt-2 space-y-1">
                            <li v-for="category in parentCategories" :key="category.id">
                                <a href="#">{{ category.name }}</a>
                            </li>

                        </ul>
                        <ul v-else class="mt-2 space-y-1">
                            <li><a href="#">Short Sleeve</a></li>
                            <li><a href="#">Short Sleeve</a></li>
                            <li><a href="#">Long Sleeves</a></li>
                            <li><a href="#">Sweaters</a></li>
                        </ul>
                    </div>
                    <div v-if="allAttributes.length > 0">
                        <div class="my-4" v-for="attribute in allAttributes" :key="attribute.id">
                            <h3 class="text-[16px] font-bold">Filter by {{ attribute.name }}</h3>
                            <ul class="pl-2 mt-2">
                                <li v-for="property in attribute.properties" class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" v-model="selectedProperties" :value="property.id"
                                            class="form-checkbox text-red-600">
                                        <span class="ml-2">{{ property.name }}</span>
                                    </label>
                                </li>

                                <!-- More color options... -->
                            </ul>
                        </div>

                    </div>
                    <div v-else>
                        <div class="my-4">
                            <h3 class="text-[16px] font-bold">Filter by Color</h3>
                            <ul class="pl-2 mt-2">
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">Red</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">Blue</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">Blue</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">Blue</span>
                                    </label>
                                </li>
                                <!-- More color options... -->
                            </ul>
                        </div>
                        <div class="my-4">
                            <h3 class="text-[16px] font-bold">Filter by Size</h3>
                            <ul class="pl-2 mt-2">
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">L</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">XL</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">XXL</span>
                                    </label>
                                </li>
                                <li class="my-1">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" class="form-checkbox text-red-600">
                                        <span class="ml-2">BBW</span>
                                    </label>
                                </li>
                                <!-- More color options... -->
                            </ul>
                        </div>
                    </div>
                </aside>
            </div>
            <div class=" prduct-list lg:w-[78%] h-[full] px-4 lg:px-0 rounded-md overflow-hidden">
                <div class="px-0 lg:px-4 2xl:px-4 h-full lg:w-full bg-white rounded overflow-hidden">
                    <div class="2xl:max-w-[1480px] h-full mx-auto lg:w-[initial]">
                        <div class="lg:w-full h-full flex flex-col justify-center">

                            <div v-if="searchResults.length > 0"
                                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 gap-x-2 gap-y-2">
                                <router-link :to="'product-details/' + product.id" v-for="product in searchResults"
                                    :key="'search_' + product.id" class="p-[11.86px] rounded-md shadow-md bg-white ">
                                    <span class="block"><img :src="path + product.image" alt="" width="201"
                                            height="201"></span>
                                    <div class="">
                                        <p class=" text-gray-500">{{ product.name }}</p>
                                        <p class="w-full lg:w-[189px] text-sm text-gray-500 ">
                                            {{ truncateText(product.description, 16) }}</p>
                                        <div class="flex justify-between items-center py-1">
                                            <small class="font-semibold text-[14px] text-gray-600">{{ product.quantity
                                                }}
                                                set</small>
                                            <span class="font-bold inline-block text-[14px] text-gray-600"></span>
                                        </div>
                                        <div class="flex items-center justify-between gap-x-2">
                                            <span class="block text-[14px] font-bold">{{ product.price }}</span>
                                            <span class="text-[12px] font-bold line-through"></span>
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <span class="text-[12px] font-bold text-gray-500">{{ product.category.name
                                                }}</span>
                                            <span
                                                class="text-[13px] font-bold uppercase p-1 bg-red-0 text-red-500"></span>
                                        </div>
                                    </div>
                                </router-link>

                            </div>

                            <div v-else>
                                <div class="w-full flex  justify-center items-center">
                                    <img class="w-full lg:max-w-[400px]" src="/images/svgs/not-found.svg" alt="">
                                </div>
                                <div
                                    class="w-full px-3 lg:px-0 text-center lg:text-[initial] pb-4 lg:pb-0 flex justify-center flex-col items-center">
                                    <span class="text-2xl text-gray-700 mb-2 block font-bold">No items found for this
                                        search</span>
                                    <p class="text-gray-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Cumque, consectetur.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

</template>


<script>
import { ref, watch, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import Navbar from '@/components/home/Navbar.vue';
import Loader from '@/components/loader/Loader.vue';

export default {
    components: {
        Navbar,
        Loader ,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const searchTerm = ref(route.query.q || '');
        const searchResults = ref([]);
        const noResultsFound = ref(false);
        const isLoading = ref(false);
        const path = store.getters['getImagePaths/getPath'];
        const parentCategories = computed(() => store.getters['categories/parentCategories']);
        const allAttributes = computed(() => store.getters['attributes/allAttributes']);
        const selectedProperties = ref([]);

        const performSearch = async () => {
            if (searchTerm.value.trim()) {
                store.dispatch('loader/setLoading', true);
                try {
                    const response = await store.dispatch('products/searchProducts', searchTerm.value);
                    searchResults.value = response.data.data;
                    console.log(searchResults.value);
                    noResultsFound.value = response.data.data.length === 0;
                } catch (error) {
                    console.error(error);
                } finally{
                store.dispatch('loader/setLoading', false);
            }
            }
        };

        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };




        const applyFilters = () => {
            try {
                const selectedPropertyIds = selectedProperties.value.map(propertyId => parseInt(propertyId));
                const allProducts = store.getters['products/searchResults'];

                if (!allProducts) {
                    throw new Error('No products available for filtering');
                }

                let filteredProducts;

                if (selectedPropertyIds.length === 0) {
                    filteredProducts = allProducts;
                } else {
                    filteredProducts = allProducts.filter(product => {
                        if (!product.attributes) {
                            return false;
                        }

                        return product.attributes.some(attribute => {
                            return selectedPropertyIds.includes(attribute.properties.id);
                        });
                    });
                }

                searchResults.value = filteredProducts;
            } catch (error) {
                console.error('Failed to apply filters:', error);
            } 
        };


        watch(selectedProperties, applyFilters);


        watch(
            () => route.query.q,
            (newQuery) => {
                searchTerm.value = newQuery || '';
                performSearch();
            }
        );



        onMounted(async () => {
            await store.dispatch('attributes/fetchAllAttributes');
            performSearch();
        });

        return {
            searchTerm,
            searchResults,
            noResultsFound,
            isLoading,
            parentCategories,
            path,
            allAttributes,
            selectedProperties,
            truncateText
        };
    },
};
</script>