<template>
    <main class="flex relative">
        <Navbar></Navbar>
        <section class="flex flex-col lg:flex-row w-full lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>

                <div class="py-5 lg:px-[25px] px-4">
                    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div v-if="authUser?.shop?.id" class="">
                            <h1 class="text-[24px] lg:text-[30px] font-bold text-gray-800">{{ authUser.firstName }}
                                {{ authUser.lastName }}</h1>
                            <span class="text-gray-600 text-base">Deballage Compte vendeur</span>
                        </div>
                        <div v-else class="">
                            <h1 class="text-[24px] lg:text-[30px] font-bold text-gray-800">Good Day, USer</h1>
                            <span class="text-gray-600 text-base">Deballage Buyer Account</span>
                        </div>

                        <div>
                            <div class="flex gap-3 mt-3 lg:mt-0">
                                <router-link v-if="authUser?.shop?.id" to="/edit-shop"
                                    class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white">Modifier
                                    votre boutique
                                </router-link>
                                <router-link v-if="authUser?.shop?.id" to="/create-product"
                                    class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white">Ajouter
                                    un produit
                                </router-link>
                                <a v-if="token" class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white"
                                    href="#" @click="confirmLogout">Se
                                    Deconnecter</a>

                                <router-link v-if="token && !authUser.cniRecto"
                                    class="inline-block py-3 px-3 ml-1 rounded-full bg-red-700 text-white"
                                    :to="'/seller/register/' + authUser?.id">Devenir vendeur</router-link>

                                <router-link v-if="!authUser?.shop?.id && authUser?.cniRecto" to="/create-shop"
                                    class="inline-block py-2 px-3 border-2 rounded-lg border-red-600 bg-red-600 text-white">Creer
                                    une boutique

                                    &plus; </router-link>
                            </div>





                        </div>
                    </div>
                    <div class="">
                        <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-3 gap-y-3 lg:gap-x-5 mt-6">
                            <div class="shadow-md rounded-lg p-6">
                                <span class="font-semibold text-[14px] text-gray-500">Shopping basket</span>
                                <span class="block text-[20px] lg:text-[24px] my-2 font-medium text-gray-800">0
                                    Products</span>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-500 text-xs font-light">Products</span>
                                    <span><img src="/images/svgs/cart.svg.svg" alt="icon of shopping cart"></span>
                                </div>
                            </div>
                            <div class="shadow-md rounded-lg p-6">
                                <span class="font-semibold text-[14px] text-gray-500">My whishlist</span>
                                <span class="block text-[20px] lg:text-[24px] my-2 font-medium text-gray-800">0
                                    Products</span>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-500 text-xs font-light">Products</span>
                                    <span><img src="/images/svgs/wishlist.svg.svg" alt="icon of shopping cart"></span>
                                </div>
                            </div>
                            <div class="shadow-md rounded-lg p-6">
                                <span class="font-semibold text-[14px] text-gray-500">Products already</span>
                                <span class="block text-[20px] lg:text-[24px] my-2 font-medium text-gray-800">0
                                    Products</span>
                                <div class="flex justify-between items-center">
                                    <span class="text-gray-500 text-xs font-light">Product(s) Ordered</span>
                                    <span><img src="/images/svgs/product.svg.svg" alt="icon of shopping cart"></span>
                                </div>
                            </div>
                            <div class="shadow-md rounded-lg p-6">
                                <span class="font-semibold text-[14px] text-gray-500">Shopping basket</span>
                                <span class="block text-[20px] lg:text-[24px] my-2 font-medium text-gray-800">0
                                    Products</span>
                                <div class="flex justify-between items-center text-gray-500">
                                    <span class="text-xs font-light">Products</span>
                                    <span><img src="/images/svgs/cart.svg.svg" alt="icon of shopping cart"></span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-7 grid grid-cols-1 lg:grid-cols-12 lg:gap-8">
                            <div class="p-0 mt-4 lg:mt-0 lg:p-6 col-span-4">
                                <div class="">
                                    <h3 class="font-bold text-[17px]">Delivery Progress</h3>
                                    <p class="text-gray-500">Follow-up delivery process for your purchased order on
                                        Aleigro</p>
                                </div>
                                <div class=""></div>
                            </div>
                            <div class="p-0 lg:p-6 mt-4 lg:mt-0 col-span-8">
                                <div class="">
                                    <h3 class="font-bold text-[17px]">Your Spending Chart</h3>
                                    <p class="text-gray-500">See where you are spending more in your digital shopping
                                        experience.</p>
                                </div>
                                <div class="mt-4">
                                    <canvas id="myChart"></canvas>
                                </div>
                            </div>
                        </div>

                        <div class="mt-7 grid grid-cols-12 gap-8">
                            <div class="p-0 lg:p-6 mt-4 lg:mt-0 col-span-12">
                                <div class="">
                                    <h3 class="font-bold text-[17px]">Delivery Progress</h3>
                                    <p class="text-gray-500">Follow-up delivery process for your purchased order on
                                        Aleigro</p>
                                </div>
                                <div class=""></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <Footer></Footer>

</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import Footer from '@/components/userDashboard/Footer.vue';
import Navbar from '@/components/userDashboard/Navbar.vue';
import TopNavbar from '@/components/userDashboard/TopNavbar.vue';
import { myChart } from '@/assets/js/chart.js'
export default {
    components: {
        Footer,
        Navbar,
        TopNavbar
    },
    setup() {
        const route = useRoute();
        const router = useRouter();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

        onMounted(async () => {
            if (token.value) {
                // console.log('le token exist');
                await store.dispatch('auth/fetchUser');
            }
            store.dispatch('products/fetchAllProductsWithoutPaginate');
            store.dispatch('categories/fetchAllCategories');
            myChart();
        });


        const confirmLogout = async () => {
            const confirmed = await Swal.fire({
                title: 'Êtes-vous sûr de vouloir vous déconnecter ?',
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Oui, déconnectez-moi',
                cancelButtonText: 'Annuler'
            });

            if (confirmed.isConfirmed) {
                console.log('le logout ');
                await store.dispatch('auth/logout');

                const confirm = await Swal.fire('Déconnexion réussie', '', 'success');
                if (confirm) {
                    router.push('/');
                }
            }
        };




        return {
            path,
            token,
            authUser,
            confirmLogout,

        };
    }

}

</script>