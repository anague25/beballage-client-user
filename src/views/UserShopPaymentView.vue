<template>
    <main class="flex relative">
        <Navbar></Navbar>
        <section class=" lg:flex-row w-full lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>
                <Loader></Loader>
                <div class="py-5 lg:px-[25px] px-4">
                    <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                        <div class="">
                            <GreetingUser>
                                <template #greeting>Bonne journée,
                                    {{ authUser.firstName }} {{ authUser.lastName }}</template>
                            </GreetingUser>
                            <span class="text-gray-600 text-base">Liste des paiements de la boutique
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div id="modal"
                class="absolute invisible w-full h-full top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center">
                <div class="mb-4 flex gap-x-4 mt-7">
                </div>
                <div
                    class="bg-white rounded-lg shadow-sm w-[90%] lg:w-[40%] h-fit lg:h-[40%] px-4 py-4 lg:py-6 lg:px-6">
                    <button id="cancelButtons" class="  text-black font-bold font-bold " type="button">X</button>


                    <div class="flex justify-between">
                        <h1 class="w-full h-full text-[24px] font-medium text-center">Do you really want to cancel this
                            order?</h1>

                    </div>
                    <div class="mb-4 flex gap-x-4 mt-7">
                        <button id="cancelButton" class="w-full rounded-md py-3 bg-red-600 text-black font-medium"
                            type="button">NO</button>
                        <input class="w-full rounded-md py-3 bg-black text-white" type="submit" value="YES">
                    </div>

                </div>
            </div>
            <section class="container mx-auto p-6 font-mono ">
                <div class="w-full ">
                    <div class="bg-white p-4 rounded shadow">
                        <div class="table-container ">
                            <table class="w-full">
                                <thead>
                                    <tr
                                        class="text-md font-semibold tracking-wide text-left text-white bg-red-600 uppercase border-b border-gray-600">
                                        <th class="px-4 py-3 text-center">Produit </th>
                                        <th class="px-4 py-3 text-center">Nom de boutique</th>
                                        <th class="px-4 py-3 text-center">Quantité</th>
                                        <th class="px-4 py-3 text-center">Montant</th>
                                        <th class="px-4 py-3 text-center">Commande</th>
                                        <!-- <th class="px-4 py-3 text-center">Action</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="payments.length > 0" v-for="payment in payments">
                                        <tr v-for="productItem in payment.order?.order_items" class=" py-3 border">


                                            <td class="px-3 py-4font-semibold text-black text-center">{{
                                                productItem.product.name
                                                }}
                                            </td>
                                            <td class="px-3 py-4font-semibold text-black text-center">
                                                {{ productItem.product.shop?.name }}
                                            </td>
                                            <td class="px-3 py-4font-semibold text-black text-center">
                                                {{ productItem.quantity }}
                                            </td>
                                            <td class="px-3 py-4font-semibold text-black text-center">
                                                {{ payment.order?.totalAmount }}
                                            </td>
                                            <td class="px-3 py-4font-semibold text-black text-center">
                                                {{ payment.order?.number }}
                                            </td>

                                            <!-- <td class="px-4 py-3 text-ms font-semibold border text-center">
                                                    <a href="#" @click="editCategory(category)"
                                                        class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  text-white"
                                                        style="background-color: green; border-color: green; ">edit
                                                    </a>
                                                    <a href="#" @click="confirmDelete(category.id)"
                                                        class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">delete
                                                    </a>
                                                </td> -->
                                        </tr>
                                    </template>

                                    <template v-else>
                                        <tr class=" py-3 border">


                                            <td class=" px-3 py-4font-semibold text-black text-center">Iphone</td>
                                            <td class="px-4 py-3 border">

                                                <div class=" w-12 h-12 mr-3  md:block">
                                                    <img class="object-cover w-full h-full  "
                                                        src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                                                        alt="" loading="lazy" />
                                                </div>

                                            </td>
                                            <td class="px-4 py-3 text-ms font-semibold border text-center">22</td>
                                            <td class="px-4 py-3 text-ms font-semibold border text-center">
                                                <a href="#"
                                                    class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  text-white"
                                                    style="background-color: green; border-color: green; ">edit
                                                </a>
                                                <a href="#"
                                                    class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">delete
                                                </a>
                                            </td>


                                        </tr>
                                    </template>
                                    <!-- Add more rows here -->
                                </tbody>
                            </table>
                            <div class="flex justify-end gap-x-3 mt-7 p-fixed mb-6 z-10 ">
                                <button class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    onclick="previousPage()">Previous</button>
                                <button class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                    onclick="nextPage()">Next</button>
                            </div>
                        </div>

                    </div>
                </div>


            </section>


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
import Swal from 'sweetalert2';
import GreetingUser from '@/components/slots/GreetingUser.vue';

export default {
    components: {
        Navbar,
        Loader,
        TopNavbar,
        GreetingUser,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const authUser = computed(() => store.getters['auth/user']);
        const payments = ref('');





        watch(authUser, (newVal, oldVal) => {
            console.log(newVal);
            console.log(oldVal);

        });




        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };




        onMounted(async () => {

            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('auth/fetchUser');
                const response = await axios.get('/api/shop-payments');
                payments.value = response.data;
                console.log(payments.value);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        });




        return {
            truncateText,
            authUser,
            payments,



        };
    }
};
</script>


<style>
/* Custom CSS for table overflow */
.table-container {
    width: 100%;
    /* Set the width of the container */
    max-height: 400px;
    /* Set the maximum height to show overflow */
    overflow-x: auto;
    /* Enable scrollbars if content overflows */
}

.table-fixed {
    table-layout: fixed;
    /* Set table layout to fixed */
}
</style>
