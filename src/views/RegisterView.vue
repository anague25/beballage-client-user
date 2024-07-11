<template>
    <main
        class="w-full py-[100px] px-[16px] md:h-full md:py-8 lg:py-[120px] h-full xl:h-full flex items-center bg-[#F1F3F6] md:px-[40px]">
        <Loader></Loader>
        <div
            class="flex md:max-h-[1200px] flex-col md:flex-row w-full lg:max-w-[900px] max-w-[1480px] xl:max-w-[1300px] mx-auto rounded-xl overflow-hidden">
            <div class=" bg-white relative top-[50%] px-7 md:px-[20px] md:py-[50px] py-7 w-full md:w-[50%] mx-auto">
                <div class="lg:max-w-[80%] w-full md:order-[initial] lg:mx-auto">
                    <div class="logo flex justify-center"><a href="/index.html"><img src="/images/pngs/logo-white.png"
                                alt=""></a></div>
                    <div class="py-5 flex items-center flex-col ">
                        <h1 class=" text-[20px] font-bold">Join Deballage for free</h1>
                        <p class="font-thin text-sm mt-2 text-center">Join thousands across Africa to shop or sell your
                            products with ease.</p>
                    </div>
                    <form @submit.prevent="registerUser">
                        <div class="pt-[0px] flex flex-col gap-y-[10px]">
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 inline-block" for="user_first_name">First
                                    Name</label>
                                <input type="text" class=" block w-full py-3 px-3 border-[1.5px] border-gray-400"
                                    placeholder="Your first name" id="user_first_name" v-model="firstName">
                                <span v-if="errors.firstName" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.firstName[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 inline-block" for="user_last_name">Last
                                    Name</label>
                                <input class=" block w-full py-3 px-3 border-[1.5px] border-gray-400" type="text"
                                    placeholder="Your last name" id="user_last_name" v-model="lastName">
                                <span v-if="errors.lastName" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.lastName[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 inline-block" for="phone">Phone
                                    Number</label>
                                <input class=" block w-full py-3 px-3 border-[1.5px] border-gray-400" type="tel"
                                    placeholder="+237684369812" id="phone" v-model="phone">
                                <span v-if="errors.phone" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.phone[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_email">Email</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="email"
                                    placeholder="useremail@gmail.com" id="user_email" v-model="email">
                                <span v-if="errors.email" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.email[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="gender">Gender</label>

                                <select class="block w-full py-3 px-3 border-[1.5px] border-gray-400" id="gender"
                                    v-model="gender">
                                    <option value="" class="text-sm"></option>
                                    <option value="M">Man</option>
                                    <option value="W">Woman</option>
                                </select>
                                <span v-if="errors.gender" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.gender[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="profile">Profile</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="file"
                                    id="profile" @change="onFileChangeProfile">
                                <span v-if="errors.profile" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.profile[0] }} </span>
                                <img v-if="imageUrlProfile" :src="imageUrlProfile" alt="Selected Image" class="mt-2"
                                    width="50" height="50" />
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="user_password">Password</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="password"
                                    placeholder="your password" v-model="password" id="user_password">
                                <span v-if="errors.password" class="text-red-400 mt-1 text-xs font-thin">{{
                                    errors.password[0] }} </span>
                            </div>
                            <div class="form-group">
                                <label class="text-sm font-medium mb-2 block" for="confirm_user_password">Confirm
                                    password</label>
                                <input class="block w-full py-3 px-3 border-[1.5px] border-gray-400" type="password"
                                    placeholder="your password" id="confirm_user_password"
                                    v-model="password_confirmation">
                            </div>
                        </div>

                        <div class="">
                            <button type="submit"
                                class="py-[12px] hover:bg-red-800 transition-all rounded-[4.8px] mt-6 w-full bg-red-700 text-white">S'inscrire
                            </button>
                            <div class="text-center py-3">
                                <small class="font-extralight text-[14px]">Deja un compte?</small>
                                <h4><router-link to="/login"
                                        class="text-red-700 font-bold transition-all hover:underline">Se connecter
                                    </router-link></h4>
                            </div>
                        </div>
                    </form>

                </div>
            </div>
            <div class="h-[100px] md:h-[inherit] w-full md:w-[50%] order-first md:order-[initial]">

                <img class="object-cover hidden md:block w-full h-full" src="/images/jpgs/login-2.jpeg" alt="">
                <img class="md:hidden block w-full h-full object-cover" src="/images/jpgs/login-mobile.jpeg" alt="">
            </div>
        </div>
    </main>
</template>

<script>

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import Loader from '@/components/loader/Loader.vue';

export default {
    components: {
        Loader
    },
    setup() {
        const store = useStore();
        const router = useRouter();

        const errors = ref('');
        const email = ref('');
        const password = ref('');
        const firstName = ref('');
        const lastName = ref('');
        const phone = ref('');
        const gender = ref('');
        const profile = ref('');
        const imageUrlProfile = ref('');
        const password_confirmation = ref('');

        const registerUser = async () => {
            const formData = new FormData();
            formData.append('email', email.value);
            formData.append('password', password.value);
            formData.append('password_confirmation', password_confirmation.value);
            formData.append('firstName', firstName.value);
            formData.append('lastName', lastName.value);
            formData.append('phone', phone.value);
            formData.append('gender', gender.value);
            formData.append('profile', profile.value);
            formData.append('phone', phone.value);
            store.dispatch('loader/setLoading', true);
            try {
                await store.dispatch('auth/register', formData);
                router.push('/login');
            } catch (error) {
                errors.value = error;
                // Gérer les erreurs (affichage d'erreurs, etc.)
            }finally{
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

        return {
            email,
            password,
            firstName,
            lastName,
            phone,
            gender,
            profile,
            registerUser,
            onFileChangeProfile,
            password_confirmation,
            imageUrlProfile,
            errors,
        };
    },
};



</script>