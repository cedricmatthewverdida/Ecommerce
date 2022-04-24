import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  category: '' as string,
  productname: '' as string,
  productdesc: '' as string,
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  category: state => state.category,
  productname: state => state.productname,
  productdesc: state => state.productdesc,
}

export const mutations: MutationTree<RootState> = {
  SET_CATEGORY: (state, category: string) => (state.category = category),
  SET_PRODUCTNAME: (state, productname: string) => (state.productname = productname),
  SET_PRODUCTDESC: (state, productdesc: string) => (state.productdesc = productdesc),
}

export const actions: ActionTree<RootState, RootState> = {

  setCategory({ commit }, category: string) {
    commit('SET_CATEGORY', category);
  },

  setProductName({ commit }, productname: string) {
    commit('SET_PRODUCTNAME', productname);
  },

  setProductDesc({ commit }, productdesc: string) {
    commit('SET_PRODUCTDESC', productdesc);
  }

}