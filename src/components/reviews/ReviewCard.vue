<template>
    <div class="review-card border rounded p-4 mb-4 shadow-lg">
        <div class="flex items-center mb-2">
            <div class="mr-4">
                <img :src="path + review.user.profile" alt="User Avatar" class="w-10 h-10 rounded-full" />
            </div>
            <div>
                <h4 class="font-semibold">{{ review.user.firstName }}</h4>

                <div class="flex items-center">
                    <svg v-for="star in 5" :key="star" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5"
                        :class="{ 'text-yellow-500 fill-current': star <= review.rating, 'text-gray-300': star > review.rating }"
                        viewBox="0 0 20 20" fill="currentColor">
                        <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.971a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.383 2.462a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.539 1.118L10 14.347l-3.383 2.462c-.784.57-1.84-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.616 9.398c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69L9.049 2.927z" />
                    </svg>
                </div>
            </div>
        </div>
        <p class="text-gray-600">{{ review.comment }}</p>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    props: {
        review: {
            type: Object,
            required: true
        }
    },
    computed: {
        userAvatar() {
            // Assuming each review has a user object with an avatar URL
            return this.review.user.avatar || 'https://via.placeholder.com/150';
        }
    },
    setup() {
        const store = useStore();
        const path = store.getters['getImagePaths/getPath'];

        return {
            path,
        }
    }
};
</script>

<style scoped>
.review-card {
    max-width: 400px;
}
</style>