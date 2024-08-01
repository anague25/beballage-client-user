<template>
    <main class="flex relative">
        <Navbar></Navbar>
        <section class="flex flex-col lg:flex-row w-full lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>
                <Loader></Loader>
                <div class="flex justify-start  items-center">
                    <div
                        class="bg-white rounded-lg shadow-sm w-[90%] lg:w-[60%] h-[91%] ml-4 mt-4 mb-4 px-4 py-4 lg:py-6 lg:px-6 ">
                        <div class="">
                            <h1 class="w-full h-full text-[24px] font-medium">Ajouter un nouveau produit</h1>
                        </div>
                        <form @submit.prevent="createNewProduct" enctype="multipart/form-data">
                            <!-- Form Group (username)-->
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="name"><b>Nom du produit</b></label>
                                <input type="text" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="name" id="name" placeholder="Enter Property Name">
                                <span v-if="errors.name" class="text-red-400 mt-1 text-xs font-thin">{{ errors.name[0]
                                    }}</span>
                            </div>


                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="name"><b>Prix</b></label>
                                <input type="number" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="price" id="price" placeholder="Enter Product Price">
                                <span v-if="errors.price" class="text-red-400 mt-1 text-xs font-thin">{{ errors.price[0]
                                    }}</span>
                            </div>

                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="quantity"><b>Quantité</b></label>
                                <input type="text" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="quantity" id="name" placeholder="Enter Product Quantity">
                                <span v-if="errors.quantity" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.quantity[0] }}</span>
                            </div>

                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block"
                                    for="description"><b>Description</b></label>
                                <textarea class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="description" id="description"
                                    placeholder="Enter Product Description "></textarea>
                                <span v-if="errors.description" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.description[0] }}</span>
                            </div>


                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="category_id"><b>Choisissez la
                                        catégorie</b></label>
                                <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="category_id" id="category_id" autocomplete="off">
                                    <option value="">None</option>
                                    <option v-for="category in categories" :key="category.id" :value="category.id">
                                        {{ category.name }}</option>
                                </select>
                                <span v-if="errors.category_id" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.category_id[0] }}</span>
                            </div>


                            <!-- Champs dynamiques attribut-propriété -->
                            <div class="form-group" v-for="(field, index) in attribute_fields" :key="index">
                                <label class="text-sm font-medium mb-2 block"><b>Attribut</b></label>
                                <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="field.attribute_id" @change="fetchProperties(field.attribute_id, index)">
                                    <option v-for="attribute in attributes" :key="attribute.id" :value="attribute.id">
                                        {{ attribute.name }}</option>
                                </select>
                                <label class="text-sm font-medium mb-2 block"><b>Propriété</b></label>
                                <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="field.property_id">
                                    <option v-for="property in properties[index]" :key="property.id"
                                        :value="property.id">{{
                                            property.name }}</option>
                                </select>
                                <button
                                    class="hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white"
                                    type="button" @click="removeField(index)">Supprimer</button>
                            </div>
                            <button
                                class="hover:bg-green-800 transition-all rounded-[4.8px] mt-6 w-full bg-green-700 text-white"
                                type="button" @click="addField">Ajouter
                                Attribut-Propriété</button>




                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="image"><b>Image
                                        Principale</b></label>
                                <input type="file" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    @change="onFileChange" id="image" placeholder="Enter Product Image">
                                <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2" width="50"
                                    height="50" />
                                <span v-if="errors.image" class="text-red-400 mt-1 text-xs font-thin">{{ errors.image[0]
                                    }}</span>
                            </div>


                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="images"><b>Images du
                                        produit</b></label>
                                <input type="file" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    id="images" multiple @change="handleFileUpload" />
                                <span v-if="errors.images" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.image[0]
                                    }}</span>
                            </div>


                            <!-- Save changes button-->
                            <button
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white"
                                type="submit">Créer</button>
                        </form>
                    </div>
                </div>



            </div>
        </section>
    </main>

    <Footer></Footer>

</template>

<script>
import {
    ref,
    onMounted,
    reactive, computed
} from 'vue';
import {
    useStore
} from 'vuex';
import Swal from 'sweetalert2';
import { useRouter } from 'vue-router';
import Footer from '@/components/userDashboard/Footer.vue';
import Navbar from '@/components/userDashboard/Navbar.vue';
import TopNavbar from '@/components/userDashboard/TopNavbar.vue';
import Loader from '@/components/loader/Loader.vue';


export default {
    components: {
        Footer,
        Navbar,
        TopNavbar,
        Loader
    },
    setup() {
        const store = useStore();
        const router = useRouter();
        const attribute_fields = reactive([]);
        const quantity = ref('');
        const errors = ref({});
        const attributes = ref([]);
        const properties = ref([]);
        const categories = ref([]);
        const category_id = ref('');
        const name = ref('');
        const image = ref('');
        const imageUrl = ref('');
        const images = ref([]);
        const price = ref('');
        const description = ref('');
        const authUser = computed(() => store.getters['auth/user']);


        const fetchAllCategories = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('categories/fetchAllCategories');
                categories.value = store.getters['categories/allCategories'];
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);

            }
        };

        const fetchAllAtributes = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('attributes/fetchAllAttributes');
                attributes.value = store.getters['attributes/allAttributes'];
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);

            }
        };



        const fetchProperties = async (attributeId, index) => {
            await store.dispatch('properties/fetchPropertiesByAttribute', attributeId);
            properties.value[index] = store.state.properties.propertiesByAttribute[attributeId];
        };

        const addDefaultField = () => {
            attribute_fields.push({
                attribute_id: '',
                property_id: ''
            });
        };


        const addField = () => {
            attribute_fields.push({
                attribute_id: '',
                property_id: ''
            });
        };

        const removeField = (index) => {
            attribute_fields.splice(index, 1);
        };

        const handleFileUpload = (event) => {
            const files = Array.from(event.target.files);
            images.value = files;
        };


        const createNewProduct = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();
                formData.append('name', name.value);
                formData.append('price', price.value);
                formData.append('quantity', quantity.value);
                formData.append('description', description.value);
                formData.append('shop_id', authUser.value.shop.id);
                formData.append('category_id', category_id.value);
                formData.append('image', image.value);

                attribute_fields.forEach((field, index) => {
                    formData.append(`attribute_fields[${index}][attribute_id]`, field.attribute_id);
                    formData.append(`attribute_fields[${index}][property_id]`, field.property_id);
                });

                images.value.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });

                // console.log(image.value);
                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }
                await store.dispatch('ProductSeller/createProduct', formData);
                Swal.fire({
                    title: 'Succès!',
                    text: 'Produit cree avec succes.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/list-product');
                });


            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };



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

        onMounted(async () => {
            await store.dispatch('auth/fetchUser');
            await fetchAllAtributes();
            await fetchAllCategories();
            addDefaultField();
        });


        return {
            name,
            categories,
            price,
            quantity,
            description,
            category_id,
            properties,
            category_id,
            errors,
            createNewProduct,
            attributes,
            image,
            imageUrl,
            onFileChange,
            attribute_fields,
            fetchProperties,
            addField,
            removeField,
            handleFileUpload,

        };
    }
};
</script>