


import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  user: [] as Object[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    user: state => state.user,
}  

export const mutations: MutationTree<RootState> = {
    SET_USER: (state, user: Object[]) => (state.user = user),
}

export const actions: ActionTree<RootState, RootState> = {
    async nuxtServerInit  ({ commit }, { req }) {
        console.log("Hello")
    }
}

