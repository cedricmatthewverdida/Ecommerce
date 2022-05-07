import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  productimage: <any>[],
  productimagecollection: <Object>[],
  productcategory: <Object>[],
  productname: '' as string,
  productdesc: '' as string,
});

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  getProductImage: state => state.productimage,
  getProductImageCollection: state => state.productimagecollection,
  getProductCategory: state => state.productcategory,
  getProductName: state => state.productname,
  getProductDesc: state => state.productdesc,

  validateDetail: (state) => {
    if (
      state.productcategory === '' ||
      state.productname === '' ||
      state.productdesc === '' ||
      state.productimage.length === 0
    ) {
      return true;
    } else {
      return false;
    }
  }

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