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
                            <span class="text-gray-600 text-base">Liste des propriétés de Deballage
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
                                                <th class="px-4 py-3 ">Attribut </th>
                                                <th class="px-4 py-3 ">Action </th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr class=" py-3 border" v-if="properties.length > 0"
                                                v-for="property in properties" :key="property.id">

                                                <td class=" px-3 py-4font-semibold text-black ">
                                                    {{ property.name }}</td>
                                                <td class=" px-3 py-4font-semibold text-black ">
                                                    {{ property.attribute?.name }}</td>
                                                <td class="px-4 py-3 text-sm border">

                                                    <a href="#" @click="editProperty(property)"
                                                        class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  text-white"
                                                        style="background-color: green; border-color: green; ">Modifier
                                                    </a>
                                                    <a href="#" @click="confirmDelete(property.id)"
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
                            <h2 class="text-lg font-semibold mb-4" v-if="!editingProperty">Créer une nouvelle propriété
                            </h2>
                            <h2 class="text-lg font-semibold mb-4" v-else>Mettre à jour la propriété</h2>

                            <form v-if="!editingProperty" @submit.prevent="createNewProperty">
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2" for="attributeName">
                                        Nom</label>
                                    <input
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        id="attributeName" type="text" placeholder="Enter the attribute name"
                                        v-model="name">
                                    <span v-if="errors.name" class="text-red-500 m-1">{{ errors.name[0] }}</span>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                        for="attribute_id">Nom de
                                        l'attribut</label>
                                    <select
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        v-model="attribute_id" id="attribute_id">
                                        <option value="">None</option>
                                        <option v-for="attribute in attributes" :key="attribute.id"
                                            :value="attribute.id">
                                            {{
                                                attribute.name
                                            }}</option>
                                    </select>
                                    <span v-if="errors.attribute_id" class="text-red-500 m-1">{{ errors.attribute_id[0]
                                        }}</span>
                                </div>
                                <div>
                                    <button type="submit"
                                        class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Soumettre</button>
                                </div>
                            </form>

                            <form v-else @submit.prevent="updateProperty">
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                        for="updateAttributeName">Nom</label>
                                    <input
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        id="updateAttributeName" type="text" placeholder="Enter the attribute name"
                                        v-model="editingProperty.name">
                                    <span v-if="errors.name" class="text-red-500 m-1">{{ errors.name[0] }}</span>
                                </div>
                                <div class="mb-4">
                                    <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                        for="attribute_id">Nom de
                                        l'attribut</label>
                                    <select
                                        class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        v-model="editingProperty.attribute_id" id="attribute_id">
                                        <option value="">None</option>
                                        <option v-for="attribute in attributes" :key="attribute.id"
                                            :value="attribute.id">
                                            {{
                                                attribute.name
                                            }}</option>
                                    </select>
                                    <span v-if="errors.attribute_id" class="text-red-500 m-1">{{ errors.attribute_id[0]
                                        }}</span>
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
        const properties = ref('');
        const attributes = ref('');
        const errors = ref({});
        const editingProperty = ref(null);
        const attribute_id = ref('');



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

        const createNewProperty = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                console.log(authUser.value.id);
                await store.dispatch('properties/createProperty', { name: name.value, user_id: authUser.value.id, attribute_id: attribute_id.value });
                name.value = '';
                const response = await axios.get('/api/user-properties');
                properties.value = response.data.properties;
            } catch (validationErrors) {
                errors.value = validationErrors;
            } finally {
                store.dispatch('loader/setLoading', false);
                console.log('Setting loader to false');

            }
        };

        const confirmDelete = (propertyId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // console.log(neighborhoodId)
                    store.dispatch('properties/deleteProperty', propertyId);
                    const response = await axios.get('/api/user-properties');
                    properties.value = response.data.properties;
                }
            });
        };

        const editProperty = (property) => {
            console.log(property);
            editingProperty.value = { ...property };
        };

        const updateProperty = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('properties/updateProperty', { ...editingProperty.value });
                const response = await axios.get('/api/user-properties');
                properties.value = response.data.properties;
                editingProperty.value = null;
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
                const response = await axios.get('/api/user-properties');
                properties.value = response.data.properties;
                const responseAttribute = await axios.get('/api/user-attributes');
                attributes.value = responseAttribute.data.attributes;
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
            createNewProperty,
            name,
            errors,
            properties,
            editProperty,
            updateProperty,
            editingProperty,
            attributes,
            attribute_id,
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
