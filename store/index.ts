

import Server from 'moralis';
import { GetterTree, ActionTree, MutationTree } from 'vuex';

export const state = () => ({
  user: [] as Object[]
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    user: state => state.user,
    isAuthenticated: state => state.user.length != 0
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
            if(send) {
                commit('SET_USER', send);
                return {
                    status: true,
                    title: "Authenticated",
                    message: 'Successfully logged in'
                }
            }
        }catch(error:any) {
            return {
                status: false,
                title: "Authentication Error",
                message: error.message
            }
        }
    },


    async registerEmailAuth({ commit }, credential: { username: string, email: string, password: string }) {
   
        const user = new Server.User();
            user.set('username', credential.username);
            user.set('email', credential.email);
            user.set('password', credential.password);
        try {
            await user.signUp();
            // Hooray! Let them use the app now.
            commit('SET_USER', user);
            } catch (error: any) {
            // Show the error message somewhere and let the user try again.
            alert("Error: " + error.code + " " + error.message);
        }
    },


    verify ({ commit }) {
        const currentUser = Server.User.current();
        if (currentUser) {
            commit('SET_USER', currentUser);
        }
    },



    async nuxtServerInit  ({ commit }, { req }) {
        console.log("Running")
    }
}

