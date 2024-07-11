<template>
    <main class="flex relative">
        <Navbar></Navbar>
        <section class="flex flex-col lg:flex-row w-full lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>
                <Loader></Loader>
                <div class="py-5 lg:px-[25px] px-4">
                    <table class="border-collapse border border-slate-400 ...">
                        <thead>
                            <tr
                                class="text-md font-semibold tracking-wide text-left text-white bg-red-600 uppercase border-b border-gray-600">
                                <th class="borderpx-4 py-3">Image</th>
                                <th class="border px-4 py-3">Name</th>
                                <th class="border px-4 py-3">Quantity</th>
                                <th class="border px-4 py-3">Price</th>
                                <th class="border px-4 py-3">Description</th>
                                <th class="border border px-4 py-3">Action</th>
                            </tr>
                        </thead>
                        <tbody v-if="authUser?.shop?.products && authUser?.shop?.products.length > 0">
                            <tr v-for="product in authUser.shop.products">
                                <td class="border px-4 py-3 text-sm">
                                    <div class=" w-12 h-12 mr-3  md:block">
                                        <img class="object-cover w-full h-full " :src="path + product.image" alt=""
                                            loading="lazy" />
                                    </div>
                                </td>
                                <td class="border px-4 py-3 text-sm">{{ product.name }}</td>
                                <td class="border px-4 py-3 text-sm">{{ product.quantity }}</td>
                                <td class="border px-4 py-3 text-sm">{{ product.price }}</td>
                                <td class="border px-4 py-3 text-sm">{{ product.description }}</td>
                                <td class="px-4 py-3 text-sm border">
                                    <div class="flex gap-x-3">

                                        <router-link id="" :to="'/edit-product/' + product.id"
                                            class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                            style="background-color: green; border-color: green; ">edit
                                        </router-link>
                                        <a id="" href="#" type="button" @click="confirmDelete(product.id)"
                                            class="inline-block   px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">delete
                                        </a>
                                        <!-- <a id="" href=""
                                            class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                            style="background-color : rgba(255, 0, 255, 0.911); border-color: rgba(255, 0, 255, 0.911); ">attributes
                                        </a>
                                        <a id="" href=""
                                            class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                            style="background-color: blue; border-color: blue; ">
                                            reviews </a> -->
                                    </div>
                                </td>
                            </tr>

                        </tbody>
                        <tbody v-else>
                            <tr>
                                <td class="border px-4 py-3 text-sm">
                                    <div class=" w-12 h-12 mr-3  md:block">
                                        <img class="object-cover w-full h-full "
                                            src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                            alt="" loading="lazy" />
                                    </div>
                                </td>
                                <td class="border px-4 py-3 text-sm">Indianapolis</td>
                                <td class="border px-4 py-3 text-sm">Indianapolis</td>
                                <td class="border px-4 py-3 text-sm">Indianapolis</td>
                                <td class="border px-4 py-3 text-sm">Indianapolis</td>
                                <td class="px-4 py-3 text-sm border">
                                    <div class="flex gap-x-3">
                                        <a id="" href="#"
                                            class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                            style="background-color: green; border-color: green; ">edit
                                        </a>
                                        <a id="" href="#"
                                            class="inline-block   px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">delete
                                        </a>
                                        <!-- <a id="" href=""
                                            class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                            style="background-color : rgba(255, 0, 255, 0.911); border-color: rgba(255, 0, 255, 0.911); ">attributes
                                        </a>
                                        <a id="" href=""
                                            class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                            style="background-color: blue; border-color: blue; ">
                                            reviews </a> -->
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td colspan="6">
                                    <h1 class="text-[24px] text-center lg:text-[30px] font-bold text-red-600">Aucun
                                        produit
                                        enregistre
                                        pour le moment</h1>
                                </td>
                            </tr>
                        </tbody>

                    </table>

                </div>

            </div>
        </section>
    </main>

    <Footer></Footer>

</template>

<script>
import Footer from '@/components/userDashboard/Footer.vue';
import Navbar from '@/components/userDashboard/Navbar.vue';
import TopNavbar from '@/components/userDashboard/TopNavbar.vue';
import { useRoute } from 'vue-router';
import { computed, ref, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import Loader from '@/components/loader/Loader.vue';

export default {
    components: {
        Footer,
        Navbar,
        TopNavbar,
        Loader
    },

    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);
        const products = ref([]);
        if (authUser.value?.shop) {
            products.value = authUser.value.shop.products;

            console.log('tbaleoao ' + products.value);
        }

        onMounted(async () => {

            store.dispatch('loader/setLoading', true);
            try{
                await store.dispatch('auth/fetchUser');
            }catch (error) {
                console.log(error);
            }finally{
                store.dispatch('loader/setLoading', false);
            }
        });


        const confirmDelete = async (productId) => {
            Swal.fire({
                title: 'Etes-vous sure?',
                text: "Cette action est irreverssible!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Oui, Supprimer!'
            }).then((result) => {
                if (result.isConfirmed) {
                    // console.log(neighborhoodId)
                    store.dispatch('ProductSeller/deleteProduct', productId);
                    store.dispatch('auth/fetchUser');
                }
            });
        };



        return {
            path,
            token,
            authUser,
            products,
            confirmDelete,

        };
    }


}



</script>
