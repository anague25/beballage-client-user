<template>
    <main class="flex">
        <Navbar></Navbar>
        <section class="flex flex-col w-ful lg:px-0 lg:w-[80%]">
            <div class="w-full dash-content">
                <TopNavbar></TopNavbar>
                <Loader></Loader>

                <div class="py-5 px-6 lg:px-[25px]">
                    <div class="flex justify-between items-center">
                        <div class="">
                            <GreetingUser>
                                <template #greeting>Bonne journée,
                                    {{ authUser.firstName }} {{ authUser.lastName }}</template>
                            </GreetingUser>
                            <span class="text-gray-600 text-base">Gérez votre compte d'acheteur personnalisé ici</span>
                        </div>

                    </div>
                    <div class="pt-6 lg:pt-16 w-full px-5">
                        <div class="flex w-full flex-col lg:flex-row gap-8 items-start">
                            <div
                                class="w-[80px] lg:w-[220px] h-[80px] lg:h-[180px] rounded-full flex justify-center items-center bg-gray-200">
                                <img class="w-[40px] lg:w-[80px]" src="/images/svgs/icon_user.svg"
                                    alt="avatar icon for a user">
                            </div>
                            <div class="w-full">
                                <p class="font-bold">{{ authUser.firstName }} {{ authUser.lastName }} <span
                                        class="ml-3 inline-block p-1 rounded-sm text-[10px] font-medium bg-red-100 text-red-800">Premium
                                        user</span></p>
                                <ul class="space-y-2 mt-3">
                                    <li class="flex items-center gap-2 text-gray-700">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span class="font-light">{{ authUser.phone }} </span>
                                    </li>
                                    <li class="flex items-center gap-2 text-gray-700">
                                        <i class="fa fa-envelope" aria-hidden="true"></i>
                                        <span class="font-light">{{ authUser.email }}</span>
                                    </li>
                                </ul>
                                <div class="flex flex-col w-full lg:flex-row gap-6 mt-6 text-center lg:w-[50%]">
                                    <div class="p-2 w-full  border-[1px] rounded">
                                        <span class="font-light text-gray-600">Solde du portefeuille</span>
                                        <span class="mt-2 block text-[16px] font-bold text-gray-800">0 FCFA</span>
                                    </div>
                                    <div class="p-2 w-full border-[1px] rounded">
                                        <span class="font-light text-gray-600">Commandes</span>
                                        <span class="mt-2 block text-[16px] font-bold text-gray-800">0</span>
                                    </div>
                                    <div class="p-2 w-full border-[1px] rounded">
                                        <span class="block font-light text-gray-600">Livré</span>
                                        <span class="text-[16px] font-bold text-gray-800 mt-2">0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-10">
                            <div class="flex justify-between items-center">
                                <h3 class="text-[20px] font-bold text-gray-800">Détails du profil</h3>
                            </div>
                            <div class="max-w-screen-lg mx-auto">
                                <div class="bg-white p-4 rounded shadow">
                                    <h2 class="text-lg font-semibold mb-4">Editer le profil</h2>
                                    <form @submit.prevent="updateUser" enctype="multipart/form-data">
                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="productName">Modifiez votre
                                                nom</label>
                                            <input v-model="firstName"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="productName" type="text" placeholder="Enter your  first name">
                                            <span v-if="errors.firstName" class="text-red-500 m-1">{{
                                                errors.firstName[0] }}</span>
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="productPrenom">Modifiez
                                                votre prenom</label>
                                            <input v-model="lastName"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="productPrenom" type="text" placeholder="Enter your  last name">
                                            <span v-if="errors.lastName" class="text-red-500 m-1">{{ errors.lastName[0]
                                                }}</span>
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="phone">Modifiez votre
                                                numéro de téléphone</label>
                                            <input v-model="phone"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="phone" type="number" placeholder="Enter your number">
                                            <span v-if="errors.phone" class="text-red-500 m-1">{{ errors.phone[0]
                                                }}</span>
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="email">Modifiez votre
                                                email</label>
                                            <input v-model="email"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="email" type="email" placeholder="Enter your email">
                                            <span v-if="errors.email" class="text-red-500 m-1">{{ errors.email[0]
                                                }}</span>
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="password">Modifiez votre
                                                mot de passe</label>
                                            <input v-model="password"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="password" type="password" placeholder="Enter your email">
                                            <span v-if="errors.password" class="text-red-500 m-1">{{ errors.password[0]
                                                }}</span>
                                        </div>
                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="password_confirmation">mot
                                                de passe
                                                de confirmation</label>
                                            <input v-model="password_confirmation"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="password_confirmation" type="password"
                                                placeholder="Enter your email">
                                            <span v-if="errors.password_confirmation" class="text-red-500 m-1">{{
                                                errors.password_confirmation[0]
                                                }}</span>
                                        </div>

                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="gender">Genre</label>
                                            <select
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                v-model="gender" id="gender">
                                                <option value="M">Homme</option>
                                                <option value="W">Femme</option>

                                            </select>
                                            <span v-if="errors.gender" class="text-red-500 m-1">{{
                                                errors.gender[0]
                                                }}</span>
                                        </div>

                                        <div class="mb-4">
                                            <label class="block text-gray-600 text-[16px] font-medium mb-2"
                                                for="imageUrlProfile">Téléchargez
                                                une photo de profil.</label>
                                            <input @change="onFileChangeProfile"
                                                class="border-[1px] border-gray-600 appearance-none rounded-[8px] w-full py-3 px-3 text-gray-500 leading-tight focus:outline-none focus:border-[1px] border-gray-600-outline"
                                                id="imageUrlProfile" type="file" placeholder="Enter your profile image">
                                            <img v-if="imageUrlProfile" :src="imageUrlProfile" alt="Selected Image"
                                                class="mt-2" width="50" height="50" />
                                            <span v-if="errors.profile" class="text-red-500 m-1">{{
                                                errors.profile[0]
                                                }}</span>
                                        </div>
                                        <div>
                                            <button type="submit"
                                                class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sauvegarder
                                                les
                                                modifications</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
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
        const firstName = ref('');
        const lastName = ref('');
        const password = ref('');
        const password_confirmation = ref('');
        const email = ref('');
        const phone = ref('');
        const profile = ref('');
        const gender = ref('');
        const imageUrlProfile = ref('');
        const errors = ref({});



        // watch(authUser, (newVal, oldVal) => {
        //     console.log(newVal);
        //     console.log(oldVal);

        // })

        const dataUser = () => {
            firstName.value = authUser.value.firstName;
            lastName.value = authUser.value.lastName;
            email.value = authUser.value.email;
            phone.value = authUser.value.phone;
            gender.value = authUser.value.gender;
            imageUrlProfile.value = path + authUser.value.profile;
        }

        const truncateText = (text, length) => {
            if (text.length <= length) {
                return text;
            }
            return text.substring(0, length) + '...';
        };


        const updateUser = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const formData = new FormData();
                formData.append('id', authUser.value.id);
                formData.append('firstName', firstName.value);
                formData.append('lastName', lastName.value);
                formData.append('email', email.value);
                formData.append('gender', gender.value);
                formData.append('phone', phone.value);

                if (password.value) {
                    formData.append('password', password.value);
                    formData.append('password_confirmation', password_confirmation.value);
                }

                if (profile.value) {
                    formData.append('profile', profile.value);
                }


                await store.dispatch('users/updateUser', formData);
                toast.success();
                imageUrlProfile.value = ''
                await store.dispatch('auth/fetchUser');
            } catch (validationErrors) {
                errors.value = validationErrors;
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


        onMounted(async () => {

            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('auth/fetchUser');
                dataUser();
            } catch (error) {
                console.log(error);
            } finally {
                store.dispatch('loader/setLoading', false);
            }


        });




        return {
            truncateText,
            authUser,
            firstName,
            lastName,
            password,
            password_confirmation,
            email,
            phone,
            gender,
            imageUrlProfile,
            onFileChangeProfile,
            errors,
            updateUser,
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
