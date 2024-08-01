<template>
    <main class="flex relative">
        <Navbar></Navbar>
        <section class="flex flex-col lg:flex-row w-full lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>
                <Loader></Loader>
                <!-- repalce -->
                <div class="w-full dash-content">

                    <div class="py-5 lg:px-[25px] px-4">
                        <div class="flex flex-col lg:flex-row justify-between lg:items-center">
                            <div class="flex gap-3 mt-3 lg:mt-0">
                                <router-link to="/list-product"
                                    class="inline-block py-2 px-3 border-2 rounded-lg border-red-600 bg-red-600 text-white">Liste
                                    des produits</router-link>
                            </div>
                        </div>
                    </div>
                </div>

                <section class="container mx-auto p-6 font-mono ">

                    <h3 class="text-[20px] font-bold text-gray-800 text-center"> détails du produit</h3>

                    <div class="w-[100%] lg:flex gap-x-4 block">
                        <div class=" lg:w-[50%]">
                            <div class="  flex justify-start items-center mt-4">
                                <div class="bg-white p-4 rounded shadow w-full">
                                    <h2 class="text-lg font-semibold mb-4">Modifier le produit</h2>
                                    <form @submit.prevent="updateExistingProduct" enctype="multipart/form-data">
                                        <!-- Form Group (username)-->
                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block" for="name"><b>Nom du
                                                    produit</b></label>
                                            <input type="text"
                                                class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                v-model="name" id="name" placeholder="Enter Property Name">
                                            <span v-if="errors.name" class="text-red-400 mt-1 text-xs font-thin">{{
                                                errors.name[0] }}</span>

                                        </div>


                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block"
                                                for="name"><b>Price</b></label>
                                            <input type="number"
                                                class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                v-model="price" id="price" placeholder="Enter Product Price">
                                            <span v-if="errors.price" class="text-red-400 mt-1 text-xs font-thin">{{
                                                errors.price[0] }}</span>
                                        </div>

                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block"
                                                for="quantity"><b>Quantité</b></label>
                                            <input type="text"
                                                class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                v-model="quantity" id="name" placeholder="Enter Product Quantity">
                                            <span v-if="errors.quantity" class="text-red-400 mt-1 text-xs font-thin">{{
                                                errors.quantity[0]
                                                }}</span>
                                        </div>

                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block"
                                                for="description"><b>Description</b></label>
                                            <textarea class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                v-model="description" id="description"
                                                placeholder="Enter Product Description "></textarea>
                                            <span v-if="errors.description"
                                                class="text-red-400 mt-1 text-xs font-thin">{{
                                                    errors.description[0]
                                                }}</span>
                                        </div>


                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block"
                                                for="category_id"><b>Choisissez la catégorie</b></label>
                                            <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                v-model="category_id" id="category_id" autocomplete="off">
                                                <option value="">None</option>
                                                <option v-for="category in categories" :key="category.id"
                                                    :value="category.id">
                                                    {{ category.name }}</option>
                                            </select>
                                            <span v-if="errors.category_id"
                                                class="text-red-400 mt-1 text-xs font-thin">{{
                                                    errors.category_id[0]
                                                }}</span>
                                        </div>

                                        <!-- Champs pour les attributs et propriétés -->
                                        <div class="form-group" v-for="(field, index) in attribute_fields" :key="index">
                                            <label class="text-sm font-medium mb-2 block"
                                                :for="'attribute_' + index"><b>Attribut:</b></label>
                                            <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                :id="'attribute_' + index" v-model="field.attribute_id"
                                                @change="fetchProperties(field.attribute_id, index)">
                                                <option v-for="attribute in attributes" :value="attribute.id">{{
                                                    attribute.name }}
                                                </option>
                                            </select>

                                            <label class="text-sm font-medium mb-2 block"
                                                :for="'property_' + index"><b>Propriété:</b></label>
                                            <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                :id="'property_' + index" v-model="field.property_id">
                                                <option v-for="property in properties[index]" :value="property.id">{{
                                                    property.name }}
                                                </option>
                                            </select>

                                            <button
                                                class="hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white"
                                                type="button" @click.prevent="removeField(index)">Supprimer</button>
                                        </div>
                                        <button
                                            class="hover:bg-green-800 transition-all rounded-[4.8px] mt-6 w-full bg-green-700 text-white"
                                            type="button" @click.prevent="addField">Ajouter un attribut</button>


                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block" for="image"><b>Image
                                                    principale</b></label>
                                            <input type="file"
                                                class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                @change="onFileChange" id="image" placeholder="Enter Product Image">
                                            <img v-if="imageUrl" :src="imageUrl" alt="Selected Image" class="mt-2"
                                                width="50" height="50" />
                                            <span v-if="errors.image" class="text-red-400 mt-1 text-xs font-thin">{{
                                                errors.image[0] }}</span>
                                        </div>


                                        <div class="form-group">
                                            <label class="text-sm font-medium mb-2 block" for="images"><b>Images du
                                                    produit</b></label>
                                            <input type="file"
                                                class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                                id="images" multiple @change="handleFileUpload" />
                                            <span v-if="errors.images" class="text-red-400 mt-1 text-xs font-thin">{{
                                                errors.image[0] }}</span>
                                        </div>


                                        <!-- Save changes button-->
                                        <button
                                            class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white"
                                            type="submit">Mettre a jour</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="lg:w-[50%] rounded overflow-hidden mr-3 mt-4 bg-white p-4 rounded shadow w-full">
                            <div class="bg-white p-4 rounded shadow w-full">
                                <div class="h-[300px]">
                                    <img :src="path + product.image" alt="Image 1"
                                        class="w-full relative h-full object-cover">
                                </div>
                                <form @submit.prevent="createProductImage" enctype="multipart/form-data"
                                    class="flex gap-x-4">
                                    <input multiple @change="handleFileUploadProduct"
                                        class="border-[1px] mt-2 border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                        type="file">
                                    <span v-if="errorsImages.images" class="text-red-400 mt-1 text-xs font-thin">{{
                                        errorsImages.images[0] }}</span>
                                    <button type="submit"
                                        class="mt-4 bg-red-600 text-white font-bold py-3 px-4 rounded">Télécharger</button>
                                </form>
                            </div>
                            <div v-if="ProductsImages && ProductsImages.length > 0"
                                class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 grid-flow-row-dense lg:grid-rows-2 py-4 gap-x-5 gap-y-2">


                                <div v-for="images in ProductsImages" class=" rounded-md shadow-md bg-white">
                                    <div class=" items-center px-4">
                                        <button @click="DeleteProductImage(images.id)"
                                            class="text-red-600 p-2 bg-red-100 rounded flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-trash-2">
                                                <path d="M3 6h18" />
                                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                <line x1="10" x2="10" y1="11" y2="17" />
                                                <line x1="14" x2="14" y1="11" y2="17" />
                                            </svg>
                                        </button>
                                    </div>
                                    <span class="block"><img :src="path + images.images" alt=""></span>
                                </div>
                            </div>

                            <!-- <div class="mt-5 py-7">
                                <form action="/upload" method="post" enctype="multipart/form-data" class="flex gap-x-4">
                                    <input type="file" id="files" name="files[]" multiple
                                        class="border-[1px] mt-2 border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline">
                                    <button type="submit"
                                        class="mt-4 bg-red-600  text-white font-bold py-3 px-4 rounded">Upload</button>
                                </form>

                            </div> -->
                        </div>
                    </div>



                </section>
            </div>
        </section>
    </main>

    <Footer></Footer>
</template>

<script>
import { ref, onMounted, reactive, computed } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';
import Swal from 'sweetalert2';
import Footer from '@/components/userDashboard/Footer.vue';
import Navbar from '@/components/userDashboard/Navbar.vue';
import TopNavbar from '@/components/userDashboard/TopNavbar.vue';
import Loader from '@/components/loader/Loader.vue';


export default {
    components: {
        Footer,
        Navbar,
        TopNavbar,
        Loader,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const router = useRouter();
        const attribute_fields = ref([]);
        const quantity = ref('');
        const errors = ref({});
        const attributes = ref([]);
        const properties = ref([]);
        const categories = ref([]);
        const ProductsImages = ref([]);
        const category_id = ref('');
        const name = ref('');
        const image = ref('');
        const errorsImages = ref({});
        const imageUrl = ref('');
        const images = ref([]);
        const price = ref('');
        const description = ref('');
        const shop_id = ref('');
        const path = store.getters['getImagePaths/getPath'];
        const product = computed(() => store.getters['ProductSeller/product']);




        const loadProduct = async () => {
            if (product.value.name) {
                name.value = product.value.name;
                price.value = product.value.price;
                quantity.value = product.value.quantity;
                description.value = product.value.description;
                // name.value = product.name;
                console.log(product.value)
                if (product.value.image) {
                    imageUrl.value = path + product.value.image;
                }
                if (product.value.shop) {
                    shop_id.value = product.value.shop.id;
                }
                if (product.value.category) {
                    category_id.value = product.value.category.id;
                }

                if (product.value.attributes) {
                    product.value.attributes.forEach(attribute => {
                        attribute_fields.value.push({
                            attribute_id: attribute.id,
                            property_id: attribute.pivot.property_id
                        });
                        fetchProperties(attribute.id, attribute_fields.value.length - 1);
                    });
                }


            }
        };


        const updateExistingProduct = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();

                formData.append('id', route.params.id);
                formData.append('name', name.value);
                formData.append('price', price.value);
                formData.append('quantity', quantity.value);
                formData.append('description', description.value);
                formData.append('shop_id', product.value.shop.id);
                formData.append('category_id', category_id.value);

                if (image.value) {
                    formData.append('image', image.value);
                }

                attribute_fields.value.forEach((field, index) => {
                    formData.append(`attribute_fields[${index}][attribute_id]`, field.attribute_id);
                    formData.append(`attribute_fields[${index}][property_id]`, field.property_id);
                });


                images.value.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });

                // console.log(image.value);

                await store.dispatch('ProductSeller/updateProduct', formData);
                Swal.fire({
                    title: 'Succès!',
                    text: 'Produit modifier avec success.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/list-product');
                });
            } catch (validationErrors) {
                console.log(validationErrors);
                errors.value = validationErrors;
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };


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

        const DeleteProductImage = async (id) => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('ProductsImages/deleteProductsImage', id);
                Swal.fire({
                    title: 'Succès!',
                    text: 'Produit supprimer avec success.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    fetchAllProductsImages(route.params.id);
                });
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };

        const createProductImage = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                const id = route.params.id

                const formData = new FormData();

                images.value.forEach((image, index) => {
                    formData.append(`images[${index}]`, image);
                });
                formData.append('id', id);

                await store.dispatch('ProductsImages/createProductsImage', formData);
                Swal.fire({
                    title: 'Succès!',
                    text: 'Les images du produit ont parfaitement ete ajoutees!.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    fetchAllProductsImages(route.params.id);
                });
            } catch (errors) {
                errorsImages.value = errors;
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchAllProductsImages = async (id) => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('ProductsImages/fetchAllProductsImages', id);
                ProductsImages.value = store.getters['ProductsImages/allProductsImages'];
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


        // const addDefaultField = () => {
        //     attribute_fields.push({ attribute_id: '', property_id: '' });
        // };


        const addField = () => {
            attribute_fields.value.push({ attribute_id: '', property_id: '' });
        };

        const removeField = (index) => {
            attribute_fields.value.splice(index, 1);
        };

        const handleFileUpload = (event) => {
            const files = Array.from(event.target.files);
            images.value = files;
        };

        const handleFileUploadProduct = (event) => {
            const files = Array.from(event.target.files);
            images.value = files;
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
            await fetchAllAtributes();
            await fetchAllCategories();
            await fetchAllProductsImages(route.params.id);
            await store.dispatch('ProductSeller/fetchProductById', route.params.id);
            loadProduct();
        });


        return {
            name,
            errors,
            updateExistingProduct,
            shop_id,
            product,
            categories,
            price,
            quantity,
            description,
            category_id,
            properties,
            category_id,
            errors,
            attributes,
            image,
            imageUrl,
            onFileChange,
            attribute_fields,
            fetchProperties,
            addField,
            removeField,
            handleFileUpload,
            path,
            ProductsImages,
            DeleteProductImage,
            createProductImage,
            errorsImages,
            handleFileUploadProduct,
        };
    }
};
</script>

<style></style>
