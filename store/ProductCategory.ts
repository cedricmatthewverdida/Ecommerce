import { GetterTree, ActionTree, MutationTree } from 'vuex';
import Server from 'moralis';
export const state = () => ({
    categories: [] as Object[]
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    getCategories: state => state.categories,
}

export const mutations: MutationTree<RootState> = {
    SET_CATEGORIES: (state, categories: Object[]) => (state.categories = categories),
}

export const actions: ActionTree<RootState, RootState> = {
    async fetchCategories({ commit }) {
        try {
            const categories = await Server.Cloud.run('getAllCategory');
            commit('SET_CATEGORIES', categories);
        } catch (error) {
            console.log(error);
        }
    }
}