import axios from "@/plugins/axios";
import toast from "@/plugins/Notification.js"

const state = {
    favorites: [],
};

const mutations = {
    ADD_FAVORITE(state, favorite) {
        state.favorites.push(favorite);
    },
};

const actions = {
    async addToFavorites({ commit }, item) {
        console.error(item);
        try {
            const response = await axios.post('/api/favorites', {
                favoritable_type: item.type,
                favoritable_id: item.id,
            });
            commit('ADD_FAVORITE', response.data.data);
            toast.success();
            return response;
        } catch (error) {
            throw error;
        }
    },
};

const getters = {
    favorites: (state) => state.favorites,
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
