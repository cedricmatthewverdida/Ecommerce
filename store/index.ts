

import Server from 'moralis';
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

    async loginEmailAuth({ commit }, credential: { email: string, password: string }) {
        try{
            const send = await Server.User.logIn(
                credential.email, credential.password
            );
            if(!send) {
                commit('SET_USER', send);
            }
        }catch(error){
            this.$notify({
                title: 'Login Failed',
                text: 'Hello user!'
            });
        }
    },

    async nuxtServerInit  ({ commit }, { req }) {
        console.log("Hello")
    }
}

function $notify(arg0: { title: string; text: string; }) {
    throw new Error('Function not implemented.');
}

