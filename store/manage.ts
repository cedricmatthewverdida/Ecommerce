import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  category: '' as string
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  category: state => state.category,
}

export const mutations: MutationTree<RootState> = {
  SET_CATEGORY: (state, category: string) => (state.category = category),
}

export const actions: ActionTree<RootState, RootState> = {
  setCategory({ commit }, category: string) {
    commit('SET_CATEGORY', category);
  }
}