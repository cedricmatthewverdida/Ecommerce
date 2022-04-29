import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  productimage: [],
  productimagecollection: [],
  productcategory: '' as string,
  productname: '' as string,
  productdesc: '' as string,
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  productimage: state => state.productimage,
  productimagecollection: state => state.productimagecollection,
  productcategory: state => state.productcategory,
  productname: state => state.productname,
  productdesc: state => state.productdesc,
}

export const mutations: MutationTree<RootState> = {
  SET_PRODUCTIMAGE: (state, productimage: []) => (state.productimage = productimage),
  SET_PRODUCTIMAGECOLLECTION: (state, productimagecollection: []) => (state.productimagecollection = productimagecollection),
  SET_PRODUCTCATEGORY: (state, productcategory: string) => (state.productcategory = productcategory),
  SET_PRODUCTNAME: (state, productname: string) => (state.productname = productname),
  SET_PRODUCTDESC: (state, productdesc: string) => (state.productdesc = productdesc),
}

export const actions: ActionTree<RootState, RootState> = {

  setProductImageCollection ({ commit }, productimagecollection: []) {
    commit('SET_PRODUCTIMAGECOLLECTION', productimagecollection);
  },

  setProductImage({ commit }, productimage: []) {
    commit('SET_PRODUCTIMAGE', productimage);
  },

  setProductCategory({ commit }, productcategory: string) {
    commit('SET_PRODUCTCATEGORY', productcategory);
  },

  setProductName({ commit }, productname: string) {
    commit('SET_PRODUCTNAME', productname);
  },

  setProductDesc({ commit }, productdesc: string) {
    commit('SET_PRODUCTDESC', productdesc);
  }

}