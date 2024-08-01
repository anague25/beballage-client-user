<template>
    <main class="flex relative ">
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
                            <span class="text-gray-600 text-base">Deballage, Liste des Attributs
                            </span>
                        </div>

                    </div>
                    <div id="modal"
                        class="absolute invisible w-full h-full top-0 left-0 bg-black bg-opacity-40 flex justify-center items-center">
                        <div class="mb-4 flex gap-x-4 mt-7">
                        </div>
                        <div
                            class="bg-white rounded-lg shadow-sm w-[90%] lg:w-[40%] h-fit lg:h-[40%] px-4 py-4 lg:py-6 lg:px-6">
                            <button id="cancelButtons" class="  text-black font-bold font-bold "
                                type="button">X</button>


                            <div class="flex justify-between">
                                <h1 class="w-full h-full text-[24px] font-medium text-center">Do you really want to
                                    cancel this order?</h1>

                            </div>
                            <div class="mb-4 flex gap-x-4 mt-7">
                                <button id="cancelButton"
                                    class="w-full rounded-md py-3 bg-red-600 text-black font-medium"
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
                                                <th class="px-4 py-3 ">Nom </th>
                                                <th class="px-4 py-3 ">Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class=" py-3 border" v-if="attributes.length > 0"
                                                v-for="attribute in attributes" :key="attribute.id">

                                                <td class=" px-3 py-4font-semibold text-black ">
                                                    {{ attribute.name }}</td>
                                                <td class="px-4 py-3 text-sm border">

                                                    <a href="#" @click="editAttribute(attribute)"
                                                        class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  text-white"
                                                        style="background-color: green; border-color: green; ">Modifier
                                                    </a>
                                                    <a href="#" @click="confirmDelete(attribute.id)"
                                                        class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">Supprimer
                                                    </a>


                                                </td>
                                            </tr>

                                            <tr class=" py-3 border" v-else>

                                                <td class=" px-3 py-4font-semibold text-black ">
                                                    Exemple</td>
                                                <td class="px-4 py-3 text-sm border">

                                                    <a id="" href="#"
                                                        class="inline-block  px-1 border-2 rounded-lg font-bold  text-white"
                                                        style="background-color: green; border-color: green; ">Modifier
                                                    </a>
                                                    <a id="" href="#"
                                                        class="inline-block   px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">delete
                                                    </a>


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


                    <div class="max-w-screen-lg mx-auto">
                        <div class="bg-white p-4 rounded shadow">
                            <h2 class="text-lg font-semibold mb-4" v-if="!editingAttribute">Créer un nouvel attribut
                            </h2>
                            <h2 class="text-lg font-semibold mb-4" v-else>Mettre à jour l'attribut</h2>

                            <form v-if="!editingAttribute" @submit.prevent="createNewAttribute">
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2" for="attributeName">
                                        Nom</label>
                                    <input
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        id="attributeName" type="text" placeholder="Enter the attribute name"
                                        v-model="name">
                                    <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Soumettre</button>
                                </div>
                            </form>

                            <form v-else @submit.prevent="updateAttribute">
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                        for="updateAttributeName">
                                        Nom</label>
                                    <input
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        id="updateAttributeName" type="text" placeholder="Enter the attribute name"
                                        v-model="editingAttribute.name">
                                    <span v-if="errors.name" class="text-red-500 m-1">{{ errors.name[0] }}</span>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Modifier</button>
                                </div>
                            </form>
                        </div>
                    </div>

                    <!-- <div class="max-w-screen-lg mx-auto">
                        <div class="bg-white p-4 rounded shadow">
                            <h2 class="text-lg font-semibold mb-4">Product Attributes</h2>
                            <form @submit.prevent="createNewAttribute">
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                        for="attributeName">Attribute
                                        Name</label>
                                    <input
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        id="attributeName" type="text" placeholder="Enter the attribute name"
                                        v-model="name">
                                    <span v-if="errors.name" class="text-danger m-1">{{ errors.name[0] }}</span>
                                </div>

                                <div>
                                    <button type="submit"
                                        class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> -->
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
import Swal from 'sweetalert2';
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
        const authUser = computed(() => store.getters['auth/user']);
        const name = ref('');
        const attributes = ref('');
        const errors = ref({});
        const editingAttribute = ref(null);


        watch(authUser, (newVal, oldVal) => {
            console.log(newVal);
            console.log(oldVal);

        })

        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };

        const createNewAttribute = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                console.log(authUser.value.id);
                await store.dispatch('attributes/createAttribute', { name: name.value, user_id: authUser.value.id });
                name.value = '';
                const response = await axios.get('/api/user-attributes');
                attributes.value = response.data.attributes;
            } catch (validationErrors) {
                errors.value = validationErrors;
            } finally {
                store.dispatch('loader/setLoading', false);
                console.log('Setting loader to false');

            }
        };


        const confirmDelete = (attributeId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    store.dispatch('attributes/deleteAttribute', attributeId);
                    const response = await axios.get('/api/user-attributes');
                    attributes.value = response.data.attributes;
                }
            });
        };

        const editAttribute = (attribute) => {
            console.log(attribute);
            editingAttribute.value = { ...attribute };
        };

        const updateAttribute = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('attributes/updateAttribute', { ...editingAttribute.value });
                const response = await axios.get('/api/user-attributes');
                attributes.value = response.data.attributes;
                editingAttribute.value = null;
                toast.success();
            } catch (validationErrors) {
                errors.value = validationErrors;
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };


        onMounted(async () => {

            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('auth/fetchUser');
                const response = await axios.get('/api/user-attributes');
                attributes.value = response.data.attributes;
                console.log(attributes.value);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        });




        return {
            truncateText,
            authUser,
            createNewAttribute,
            name,
            errors,
            attributes,
            editAttribute,
            updateAttribute,
            editingAttribute,
            confirmDelete,


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
