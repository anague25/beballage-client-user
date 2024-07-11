<template>
    <div class="dash-nav bg-white w-full flex justify-between px-[25px] py-4 lg:py-[11.5px] shadow-md">
        <div class="flex gap-3">
            <button id="openButton"><img src="/images/svgs/icon_menu.svg"
                    alt="icon of showing a hamburger menu"></button>

            <div class="hidden lg:flex gap-2">
                <a href="#" class="w-[42.2px] h-[42.2px] rounded-full flex justify-center items-center bg-gray-200"><img
                        src="/images/svgs/la_globe.svg" alt="icon showing the globe"></a>
                <a href="#" class="w-[42.2px] h-[42.2px] rounded-full flex justify-center items-center bg-gray-200"><img
                        src="/images/svgs/ph_printer.svg" alt="icon showing a printer"></a>
            </div>
        </div>
        <div class="flex items-center gap-5">
            <button onclick="showNotification()"><img class="w-[24px]" src="/images/svgs/icon-bell.svg"
                    alt="icon illustrating the notification icons"></button>
            <div id="notification" class="notification-page">
                <button class=" close-button " onclick="hideNotification()">X</button>
                <h2 class="text-xl font-bold mb-4">Notification</h2>
                <p>This is a notification message.</p>
                <button class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    <i class="fa fa-cart-arrow-down inline-block mr-2 text-[18px] text-gray-800" aria-hidden="true"></i>
                    <a href="./notifications.html" class="font-medium text-white">View all notification</a>
                </button>
            </div>
            <button class="flex gap-1 items-center">
                <img class="w-[24px]" src="/images/svgs/icon-language.svg"
                    alt="icon showing that this page is localize">
                <span class="block text-gray-500 font-medium">EN</span>
            </button>
            <div class="hidden lg:flex gap-2 ">
                <div class="w-[44px] h-[44px] bg-gray-300 rounded-full flex justify-center items-center">
                    <img class="w-[20px]" :src="path + authUser.profile" alt="icon of an avatar">
                </div>
                <div class="">
                    <span class="block text-sm font-medium mb-0">{{ authUser.firstName }} {{ authUser.lastName }}</span>
                    <span class="block text-[12px] text-gray-400">Customer</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Swal from 'sweetalert2';
import { TopNav } from '@/assets/js/dashboard'
export default {
    setup() {
        const route = useRoute();
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];
        const token = computed(() => store.getters['auth/isAuthenticated']);
        const authUser = computed(() => store.getters['auth/user']);

        onMounted(async () => {
            if (token.value) {
                await store.dispatch('auth/fetchUser');
            }
            TopNav();
        });



        return {
            path,
            token,
            authUser,

        };
    }

}

</script>