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
                            <span class="text-gray-600 text-base">Liste de mes commandes de déballage</span>
                        </div>
                        <div class="flex gap-3 mt-3 lg:mt-0">
                        </div>
                    </div>
                </div>

                <section class="container mx-auto p-6 font-mono ">


                    <div class="w-full ">
                        <div class="bg-white p-4 rounded shadow">
                            <div class="table-container ">
                                <table v-if="orders.length > 0" class="w-full">
                                    <thead>
                                        <tr
                                            class="text-md font-semibold tracking-wide text-left text-white bg-red-600 uppercase border-b border-gray-600">
                                            <th class="px-4 py-3">Nom du produit</th>
                                            <th class="px-4 py-3">Quantité</th>
                                            <th class="px-4 py-3">Prix</th>
                                            <th class="px-4 py-3">Montant</th>
                                            <th class="px-4 py-3">Boutique</th>
                                            <th class="px-4 py-3">Commande</th>
                                            <th class="px-4 py-3">Status</th>
                                            <th class="px-4 py-3">Ville</th>
                                            <th class="px-4 py-3">Methode de paiement</th>
                                            <th class="px-4 py-3">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <template v-for="order in orders" :key="order.id">
                                            <tr v-for="item in order.order_items" :key="item.id" class=" py-3 border">

                                                <td class="px-4tive w-8 h-8 mr-3 rounded-full md:block">
                                                    <div>
                                                        <p class="font-semibold px-4 py-3 text-sm  text-black ">
                                                            {{ item.product.name }}</p>
                                                    </div>
                                                </td>
                                                <td class="px-4 py-3 text-ms font-semibold border">{{
                                                    item.quantity }}</td>
                                                <td class="px-4 py-3 text-xs border">
                                                    <span
                                                        class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                        {{
                                                            item.price }} </span>
                                                </td>
                                                <td class="px-4 py-3 text-sm border">{{ order.totalAmount }}</td>
                                                <td class="px-4 py-3 text-sm border">{{ item.product.shop.name }}</td>
                                                <td class="px-4 py-3 text-sm border">{{ order.number }}</td>
                                                <td class="px-4 py-3 text-sm border">{{ order.state }}</td>
                                                <td class="px-4 py-3 text-ms font-semibold border">{{
                                                    order.deliveries?.city }}</td>
                                                <td class="px-4 py-3 text-ms font-semibold border">{{
                                                    order.payment.payment_method }}</td>
                                                <td class="px-4 py-3 text-sm border">
                                                    <div class="flex gap-x-3">
                                                        <a id="" href=""
                                                            class="inline-block py- px-1 border-1 rounded-lg border-red-600 bg-red-600 text-white "
                                                            style="background-color: green;">Annuler </a>
                                                        <a id="" href=""
                                                            class="inline-block py- px-1 border-1 rounded-lg border-red-600 bg-red-600 text-white">Supprimer
                                                        </a>
                                                    </div>
                                                </td>

                                            </tr>
                                        </template>
                                        <!-- Add more rows here -->
                                    </tbody>
                                </table>
                                <table v-else class="w-full">
                                    <thead>
                                        <tr
                                            class="text-md font-semibold tracking-wide text-left text-white bg-red-600 uppercase border-b border-gray-600">
                                            <th class="px-4 py-3">Product Name</th>
                                            <th class="px-4 py-3">Quantity</th>
                                            <th class="px-4 py-3">Price</th>
                                            <th class="px-4 py-3">Amount</th>
                                            <th class="px-4 py-3">Shop</th>
                                            <th class="px-4 py-3">Order</th>
                                            <th class="px-4 py-3">Status</th>
                                            <th class="px-4 py-3">City</th>
                                            <th class="px-4 py-3">Street</th>
                                            <th class="px-4 py-3">DescX</th>
                                            <th class="px-4 py-3">Action</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class=" py-3 border">

                                            <td class="px-4tive w-8 h-8 mr-3 rounded-full md:block">
                                                <div>
                                                    <p class="font-semibold px-4 py-3 text-sm  text-black ">
                                                        Sufyan</p>
                                                </div>
                                            </td>
                                            <td class="px-4 py-3 text-ms font-semibold border">22</td>
                                            <td class="px-4 py-3 text-xs border">
                                                <span
                                                    class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                                                    Acceptable </span>
                                            </td>
                                            <td class="px-4 py-3 text-sm border">6/4/2000</td>
                                            <td class="px-4 py-3 text-sm border">6/4/2000</td>
                                            <td class="px-4 py-3 text-sm border">6/4/2000</td>
                                            <td class="px-4 py-3 text-sm border">6/4/2000</td>
                                            <td class="px-4 py-3 text-ms font-semibold border">22</td>
                                            <td class="px-4 py-3 text-ms font-semibold border">22</td>
                                            <td class="px-4 py-3 text-ms font-semibold border">22</td>
                                            <td class="px-4 py-3 text-sm border">
                                                <div class="flex gap-x-3">
                                                    <a id="" href=""
                                                        class="inline-block py- px-1 border-1 rounded-lg border-red-600 bg-red-600 text-white "
                                                        style="background-color: green;">Cancel </a>
                                                    <a id="" href=""
                                                        class="inline-block py- px-1 border-1 rounded-lg border-red-600 bg-red-600 text-white">Delete
                                                    </a>
                                                </div>
                                            </td>

                                        </tr>
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
import GreetingUser from '@/components/slots/GreetingUser.vue';



export default {
    components: {
        Navbar,
        Loader,
        TopNavbar,
        GreetingUser
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const orders = ref([]);
        const authUser = computed(() => store.getters['auth/user']);



        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };

        onMounted(async () => {
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.get('/api/user/orders');
                await store.dispatch('auth/fetchUser');
                orders.value = response.data;
                console.log(response.data);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        });


        return {
            orders,
            truncateText,
            authUser,

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
