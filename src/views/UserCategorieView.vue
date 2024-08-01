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
                            <span class="text-gray-600 text-base">Liste des catégories de déballage
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
                                        <th class="px-4 py-3 text-center">Nom </th>
                                        <th class="px-4 py-3 text-center">Image</th>
                                        <th class="px-4 py-3 text-center">Description</th>
                                        <th class="px-4 py-3 text-center">Action</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr v-if="categories.length > 0" v-for="category in categories"
                                        class=" py-3 border">


                                        <td class=" px-3 py-4font-semibold text-black text-center">{{ category.name }}
                                        </td>
                                        <td class="px-4 py-3 border">

                                            <div class=" w-12 h-12 mr-3  md:block">
                                                <img class="object-cover w-full h-full  " :src="path + category.image"
                                                    alt="" loading="lazy" />
                                            </div>

                                        </td>
                                        <td class="px-4 py-3 text-ms font-semibold border text-center">
                                            {{ category.description }}</td>

                                        <td class="px-4 py-3 text-ms font-semibold border text-center">
                                            <a href="#" @click="editCategory(category)"
                                                class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  text-white"
                                                style="background-color: green; border-color: green; ">Modifier
                                            </a>
                                            <a href="#" @click="confirmDelete(category.id)"
                                                class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">Supprimer
                                            </a>
                                        </td>


                                    </tr>
                                    <tr v-else class=" py-3 border">


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
                                                style="background-color: green; border-color: green; ">Modifier
                                            </a>
                                            <a href="#"
                                                class="inline-block mr-1  px-1 border-2 rounded-lg font-bold  border-red-600 bg-red-600 text-white">delete
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
                    <h2 class="text-lg font-semibold mb-4" v-if="!editingCategory">Créer une nouvelle Categorie</h2>
                    <h2 class="text-lg font-semibold mb-4" v-else>Mettre à jour la categorie</h2>
                    <form v-if="!editingCategory" @submit.prevent="createNewCategory">
                        <div class="mb-4">
                            <label class="block text-gray-600 text-[16px] font-medium mb-2" for="productName">Quel est
                                le nom de la
                                catégorie ?</label>
                            <input v-model="name"
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                id="productName" type="text" placeholder="Enter your product name">
                            <span v-if="errors.name" class="text-red-500 m-1">{{ errors.name[0] }}</span>

                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                for="productImage">Télécharger l'image
                                de la nouvelle catégorie</label>
                            <input
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                id="productImage" type="file" placeholder="Enter your product quantity"
                                @change="onFileChange">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.image" class="text-red-500 m-1">{{ errors.image[0] }}</span>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                for="AttributeDescribtion">Quels sont
                                les attributs de la catégorie ?</label>
                            <textarea v-model="description"
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                id="AttributeDescribtion" type="text" placeholder="Enter a description"></textarea>
                            <span v-if="errors.description" class="text-red-500 m-1">{{ errors.description[0] }}</span>

                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="parent_id"><b>Parent de la categorie</b></label>
                            <select
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                v-model="parent_id" id="parent_id">
                                <option value="">None</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                                    category.name
                                }}</option>
                            </select>
                            <span v-if="errors.parent_id" class="text-red-500 m-1">{{ errors.parent_id[0] }}</span>
                        </div>
                        <div>
                            <button type="submit"
                                class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Soumettre</button>
                        </div>
                    </form>
                    <form v-else @submit.prevent="updateCategory">
                        <div class="mb-4">
                            <label class="block text-gray-600 text-[16px] font-medium mb-2" for="productName">Quel est
                                le nom de la
                                catégorie ?</label>
                            <input v-model="editingCategory.name"
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                id="productName" type="text" placeholder="Enter your product name">
                            <span v-if="errors.name" class="text-red-500 m-1">{{ errors.name[0] }}</span>

                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                for="productImage">Télécharger l'image
                                de la catégorie</label>
                            <input
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                id="productImage" type="file" placeholder="Enter your product quantity"
                                @change="onFileChange">
                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                height="50" />
                            <span v-if="errors.image" class="text-red-500 m-1">{{ errors.image[0] }}</span>
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                for="AttributeDescribtion">Quels sont
                                les attributs de la catégorie ?</label>
                            <textarea v-model="editingCategory.description"
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                id="AttributeDescribtion" type="text" placeholder="Enter a description"></textarea>
                            <span v-if="errors.description" class="text-red-500 m-1">{{ errors.description[0] }}</span>

                        </div>
                        <div class="mb-3">
                            <label class="small mb-1" for="parent_id"><b>Parent de la categorie</b></label>
                            <select
                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                v-model="editingCategory.parent_id" id="parent_id">
                                <option value="">None</option>
                                <option v-for="category in categories" :key="category.id" :value="category.id">{{
                                    category.name
                                }}</option>
                            </select>
                            <span v-if="errors.parent_id" class="text-red-500 m-1">{{ errors.parent_id[0] }}</span>
                        </div>
                        <div>
                            <button type="submit"
                                class="bg-black hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Modifier</button>
                        </div>
                    </form>
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
        GreetingUser,
    },
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const authUser = computed(() => store.getters['auth/user']);
        const name = ref('');
        const categories = ref([]);
        const errors = ref({});
        const editingCategory = ref(null);
        const description = ref('');
        const image = ref('');
        const imageUrl = ref(null);
        const parent_id = ref('');





        watch(authUser, (newVal, oldVal) => {
            console.log(newVal);
            console.log(oldVal);

        });


        const onFileChange = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                image.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrl.value = e.target.result;
                };
                reader.readAsDataURL(image.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };


        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };



        const createNewCategory = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                console.log(authUser.value.id);
                const formData = new FormData();
                formData.append('name', name.value);
                formData.append('description', description.value);
                formData.append('image', image.value);
                formData.append('parent_id', parent_id.value);
                formData.append('user_id', authUser.value.id);


                await store.dispatch('categories/createCategory', formData);
                name.value = '';
                description.value = '';
                image.value = null;
                imageUrl.value = '';
                parent_id.value = '';
                const response = await axios.get('/api/user-categories');
                categories.value = response.data.categories;
            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            } finally {
                store.dispatch('loader/setLoading', false);
                console.log('Setting loader to false');

            }
        };

        const editCategory = (category) => {
            console.log(category);
            editingCategory.value = { ...category };
            imageUrl.value = path + editingCategory.value.image;
        };

        const confirmDelete = (categoryId) => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!'
            }).then(async (result) => {
                if (result.isConfirmed) {
                    // console.log(neighborhoodId)
                    store.dispatch('categories/deleteCategory', categoryId);
                    const response = await axios.get('/api/user-categories');
                    categories.value = response.data.categories;
                }
            });
        };

        const updateCategory = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                console.log(editingCategory.value);
                const formData = new FormData();
                formData.append('id', editingCategory.value.id);
                formData.append('name', editingCategory.value.name);
                formData.append('description', editingCategory.value.description);
                if (image.value) {

                    formData.append('image', image.value);
                }
                if (editingCategory.value.parent_id) {

                    formData.append('parent_id', editingCategory.value.parent_id);
                }
                await store.dispatch('categories/updateCategory', formData);
                const response = await axios.get('/api/user-categories');
                categories.value = response.data.categories;
                editingCategory.value = null;
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
                const response = await axios.get('/api/user-categories');
                categories.value = response.data.categories;
                console.log(categories.value);
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        });




        return {
            truncateText,
            authUser,
            createNewCategory,
            name,
            imageUrl,
            errors,
            categories,
            editCategory,
            updateCategory,
            editingCategory,
            onFileChange,
            parent_id,
            description,
            path,
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
