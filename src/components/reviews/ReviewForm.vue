<template>
    <div class="review-form">
        <ul class="flex gap-x-1 items-center">
            <li v-for="star in 5" :key="star" class="text-gray-400" @click="setRating(star)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-star"
                    :class="{ 'star-filled': star <= rating, 'text-start-color': star <= rating, 'text-gray-400': star > rating }">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
            </li>
        </ul>
        <span v-if="errors.rating" class="text-red-500 m-1">{{ errors.rating[0] }}</span>

        <textarea v-model="comment" placeholder="Write your review here..."
            class="textarea block w-full py-3 px-3 border-[1.5px] border-gray-400"></textarea>
        <span v-if="errors.comment" class="text-red-500 m-1 block">{{ errors.comment[0] }}</span>

        <button @click="submitReview"
            class="submit-button text-white bg-red-700 py-1 px-2 rounded-lg">Soumettre</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
import axios from '@/plugins/axios.js';
import toast from '@/plugins/Notification.js'
export default {
    props: {
        reviewableId: {
            type: Number,
            required: true
        },
        reviewableType: {
            type: String,
            required: true
        }
    },
    setup(props, { emit }) {
        const rating = ref(0);
        const comment = ref('');
        const store = useStore();
        const errors = ref({});

        const setRating = (value) => {
            rating.value = value;
        };

        const submitReview = async () => {
            errors.value = {};
            store.dispatch('loader/setLoading', true);
            try {
                const response = await axios.post('/api/reviews', {
                    reviewable_id: props.reviewableId,
                    reviewable_type: props.reviewableType,
                    rating: rating.value,
                    comment: comment.value
                });
                toast.success();
                console.log('Review submitted:', response.data);
                emit('reviewSubmitted'); // Emit event to parent component
            } catch (error) {
                console.error('Error submitting review:', error);
                if (error.response && error.response.data && error.response.data.errors) {
                    errors.value = error.response.data.errors;
                }
            } finally {
                store.dispatch('loader/setLoading', false);
            }
        };

        return {
            rating,
            comment,
            setRating,
            submitReview,
            errors,
        };
    }
};
</script>

<style>
.text-start-color {
    color: rgb(200, 0, 0);
}

.text-gray-400 {
    color: gray;
}

.textarea {
    width: 100%;
    height: 50px;
    margin-top: 10px;
}

.submit-button {
    margin-top: 10px;
}

.star-filled {
    fill: rgb(200, 0, 0);
}
</style>