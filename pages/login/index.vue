<template>
    <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="text-center lg:text-left">
        <h1 class="text-5xl font-bold">Login now!</h1>
        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
            
            <Input
                :option="{
                    label: 'Email / Username',
                    placeholder: 'Enter your email / username',
                    type: 'email',
                }"
                v-model="credential.email"
            />

            <Input
                :option="{
                    label: 'Password',
                    placeholder: 'Enter your password',
                    type: 'password',
                }"
                v-model="credential.password"
            />

            <div class="form-control mt-6">
                <button class="btn btn-primary" @click="login">Login</button>
            </div>
        </div>
        </div>
    </div>
    </div>
</template>


<script lang="ts">

import Vue from 'vue';
import Input from '@/components/Input/TextField.vue';
import { mapActions } from 'vuex';
export default Vue.extend({
    components:{
        Input
    },
    layout: 'plain',
    data(){
        return {
            credential:{
                email: '',
                password: ''
            }
        }
    },
    methods: {

        ...mapActions([
            'loginEmailAuth'
        ]),

        login(){
            this.loginEmailAuth(this.credential);
        }
    }
})
</script>