import { GetterTree, ActionTree, MutationTree } from 'vuex';
import Server from 'moralis';
export const state = () => ({
    categories: [] as Object[],
    category: '' as string,
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getCategories: state => state.categories,
    getCategory: state => state.category,
}

export const mutations: MutationTree<RootState> = {
    SET_CATEGORIES: (state, categories: Object[]) => (state.categories = categories),
    SET_CATEGORY: (state, category: string) => (state.category = category),
}

export const actions: ActionTree<RootState, RootState> = {
    

    setCategory({ commit }, category: string) {
        commit('SET_CATEGORY', category);
    },

    async fetchCategories({ commit }) {
        try {
            const categories = await Server.Cloud.run('getAllCategory');
            commit('SET_CATEGORIES', categories);
        } catch (error) {
            console.log(error);
        }
    },

    async createCategory({ commit, state }, category: string) {
        try {
            const createdCategory = await Server.Cloud.run('createCategory', { name : category });
            commit('SET_CATEGORIES', [...state.categories, createdCategory]);
        } catch (error) {
            console.log(error);
        }
    }
}