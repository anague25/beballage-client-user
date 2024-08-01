const state = {
    // path: 'http://127.0.0.1:8000/storage/',
    path: 'https://deballage.cm/api/public/storage/',
}

const getters = {
    getPath: (state) => state.path
}

export default {
    namespaced: true,
    state,
    getters,
};
