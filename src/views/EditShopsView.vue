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
                            <h1 class="w-full h-full text-[24px] font-medium">Modifier la boutique</h1>
                        </div>
                        <form @submit.prevent="updateExistingShop" enctype="multipart/form-data">
                            <!-- Form Group (username)-->
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="name"><b>Nom de la
                                        boutique</b></label>
                                <input type="text" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="name" id="name" placeholder="Enter Shop Name">
                                <span v-if="errors.name" class="text-red-400 mt-1 text-xs font-thin">{{ errors.name[0]
                                    }}</span>
                            </div>

                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block"
                                    for="description"><b>Description</b></label>
                                <textarea class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="description" id="description"
                                    placeholder="Enter Shop Description "></textarea>
                                <span v-if="errors.description" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.description[0]
                                }}</span>
                            </div>


                            <!-- Champs dynamiques cities-beighborhood -->
                            <div class="form-group" v-for="(field, index) in city_fields" :key="index">
                                <label class="text-sm font-medium mb-2 block" :for="'city_' + index"><b>City</b></label>
                                <select :id="'city_' + index"
                                    class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="field.city_id" @change="fetchNeighborhoods(field.city_id, index)">
                                    <option v-for="city in cities" :key="city.id" :value="city.id">{{
                                        city.name }}</option>
                                </select>
                                <label :for="'neighborhood_' + index"><b>Quartier</b></label>
                                <select :id="'neighborhood_' + index"
                                    class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="field.neighborhood_id">
                                    <option v-for="neighborhood in neighborhoods[index]" :key="neighborhood.id"
                                        :value="neighborhood.id">{{
                                            neighborhood.name }}</option>
                                </select>
                                <button
                                    class="hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white"
                                    type="button" @click="removeFieldCityNeighborhood(index)">Supprimer</button>
                            </div>
                            <button
                                class="hover:bg-green-800 transition-all rounded-[4.8px] mt-6 w-full bg-green-700 text-white"
                                type="button" @click="addFieldCityNeighborhood">Ajouter</button>


                            <!-- Champs dynamiques category-subcategory -->
                            <div class="form-group" v-for="(field, index) in category_fields" :key="index">
                                <label class="text-sm font-medium mb-2 block"
                                    :for="'category_' + index"><b>Catégorie</b></label>
                                <select :id="'category_' + index"
                                    class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="field.category_id" @change="fetchSubCategories(field.category_id, index)">
                                    <option v-for="category in categories" :key="category.id" :value="category.id">{{
                                        category.name }}</option>
                                </select>
                                <label class="text-sm font-medium mb-2 block"
                                    :for="'subCategory_' + index"><b>Sous-catégorie</b></label>
                                <select :id="'subCategory_' + index"
                                    class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    v-model="field.subCategory_id">
                                    <option v-for="subCategory in subCategories[index]" :key="subCategory.id"
                                        :value="subCategory.id">{{
                                            subCategory.name }}</option>
                                </select>
                                <button
                                    class=" hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white"
                                    type="button" @click="removeFieldCategorySubCategory(index)">Supprimer</button>
                            </div>
                            <button
                                class=" hover:bg-green-800 transition-all rounded-[4.8px] mt-6 w-full bg-green-700 text-white"
                                type="button" @click="addFieldCategorySubCategory">Ajouter</button>



                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="image"><b>Image de profil</b></label>
                                <input type="file" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    @change="onFileChangeProfile" id="image" placeholder="Enter Profie Image">
                                <img v-if="imageUrlProfile" :src="imageUrlProfile" alt="Selected Image" class="mt-2"
                                    width="50" height="50" />
                                <span v-if="errors.profile" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.profile[0]
                                }}</span>
                            </div>

                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="image"><b>Image de
                                        couverture</b></label>
                                <input type="file" class="block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    @change="onFileChangeCover" id="image" placeholder="Enter Cover Image">
                                <img v-if="imageUrlCover" :src="imageUrlCover" alt="Selected Image" class="mt-2"
                                    width="50" height="50" />
                                <span v-if="errors.cover" class="text-red-400 mt-1 text-xs font-thin">{{ errors.cover[0]
                                    }}</span>
                            </div>

                            <!-- Save changes button-->
                            <button type="submit"
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">Modifier</button>
                        </form>
                    </div>
                </div>


            </div>
        </section>
    </main>

    <Footer></Footer>
</template>

<script>
import { ref, onMounted, computed } from 'vue';
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
        const category_fields = ref([]);
        const city_fields = ref([]);
        const errors = ref({});
        const categories = ref([]);
        const cities = ref([]);
        const neighborhoods = ref([]);
        const subCategories = ref([]);
        const name = ref('');
        const user_id = ref('');
        const profile = ref('');
        const cover = ref('');
        const imageUrlProfile = ref('');
        const imageUrlCover = ref('');
        const description = ref('');
        const path = store.getters['getImagePaths/getPath'];
        const shop = computed(() => store.getters['shops/shop']);
        const authUser = computed(() => store.getters['auth/user']);








        const loadShop = async () => {
            if (shop.value) {
                name.value = shop.value.name;
                description.value = shop.value.description;
                if (shop.value.cover) {
                    imageUrlCover.value = path + shop.value.cover;
                }
                if (shop.value.profile) {
                    imageUrlProfile.value = path + shop.value.profile;
                }
                if (shop.value.user) {
                    user_id.value = shop.value.user.id;
                }
                if (shop.value.cities) {
                    shop.value.cities.forEach(city => {
                        city_fields.value.push({
                            city_id: city.id,
                            neighborhood_id: city.pivot.neighborhood_id
                        });
                        fetchNeighborhoods(city.id, city_fields.value.length - 1);
                    });
                }
                if (shop.value.categories) {
                    shop.value.categories.forEach(category => {
                        category_fields.value.push({
                            category_id: category.id,
                            subCategory_id: category.pivot.subCategory_id
                        });
                        fetchSubCategories(category.id, category_fields.value.length - 1);
                    });
                }
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


        const fetchAllCities = async () => {
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('cities/fetchAllCities');
                cities.value = store.getters['cities/allCities'];
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };

        const fetchSubCategories = async (categoryId, index) => {
            console.log(categoryId);
            await store.dispatch('categories/fetchSubCategoriesByCategory', categoryId);
            subCategories.value[index] = store.state.categories.subCategoriesByCategory[categoryId];
        };

        const fetchNeighborhoods = async (cityId, index) => {
            await store.dispatch('neighborhoods/fetchNeighborhoodsByCity', cityId);
            neighborhoods.value[index] = store.state.neighborhoods.neighborhoodsByCity[cityId];
        };




        const addFieldCategorySubCategory = () => {
            category_fields.value.push({ category_id: '', subCategory_id: '' });
        };

        const addFieldCityNeighborhood = () => {
            city_fields.value.push({ city_id: '', neighborhood_id: '' });
        };

        const removeFieldCategorySubCategory = (index) => {
            category_fields.value.splice(index, 1);
        };
        const removeFieldCityNeighborhood = (index) => {
            city_fields.value.splice(index, 1);
        };




        const updateExistingShop = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();
                formData.append('id', shop.value.id);
                formData.append('name', name.value);
                formData.append('description', description.value);
                formData.append('user_id', shop.value.user.id);

                if (profile.value) {
                    formData.append('profile', profile.value);
                }
                if (cover.value) {
                    formData.append('cover', cover.value);
                }

                city_fields.value.forEach((field, index) => {
                    formData.append(`city_fields[${index}][city_id]`, field.city_id);
                    formData.append(`city_fields[${index}][neighborhood_id]`, field.neighborhood_id);
                });

                category_fields.value.forEach((field, index) => {
                    formData.append(`category_fields[${index}][category_id]`, field.category_id);
                    formData.append(`category_fields[${index}][subCategory_id]`, field.subCategory_id);
                });


                for (let [key, value] of formData.entries()) {
                    console.log(`${key}: ${value}`);
                }
                await store.dispatch('shops/updateShop', formData);
                Swal.fire({
                    title: 'Succès!',
                    text: ' Votre boutique a ete modifier avec succes.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    router.push('/user-dashboard');
                });

            } catch (validationErrors) {
                errors.value = validationErrors;
                console.log(validationErrors);
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };


        const onFileChangeProfile = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                profile.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlProfile.value = e.target.result;
                };
                reader.readAsDataURL(profile.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };

        const onFileChangeCover = (e) => {
            const files = e.target.files;
            if (files.length > 0) {
                cover.value = files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageUrlCover.value = e.target.result;
                };
                reader.readAsDataURL(cover.value); // Utilisez image.value plutôt que imageUrl.value
            }
        };

        onMounted(async () => {
            await store.dispatch('auth/fetchUser');
            await store.dispatch('shops/fetchShop', authUser.value.shop.id);
            await fetchAllCategories();
            await fetchAllCities();
            loadShop();
        });


        return {
            name,
            subCategories,
            neighborhoods,
            user_id,

            categories,
            cities,
            description,
            errors,
            updateExistingShop,
            cover,
            profile,
            imageUrlProfile,
            imageUrlCover,
            onFileChangeProfile,
            onFileChangeCover,
            category_fields,
            city_fields,
            fetchSubCategories,
            fetchNeighborhoods,
            addFieldCityNeighborhood,
            addFieldCategorySubCategory,
            removeFieldCategorySubCategory,
            removeFieldCityNeighborhood,
            fetchAllCities,
        };
    }
};
</script>


<style></style>