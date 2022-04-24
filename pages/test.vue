<template>
    <div>
        <Logo/>
    </div>
</template>
<script lang="ts">
import Vue from 'vue'
import Moralis from 'moralis';
import Logo from '@/components/Main/Logo.vue';
export default Vue.extend({
    components: {
        Logo
    },
    methods:{
        async createItem(){
            const params =  { 
                name: "The Matrix",
                price: 23,
                sale: {
                    percent: 40,
                    price: '$10.00'
                }
             };
            const ratings = await Moralis.Cloud.run("createProduct", params);
            console.log(ratings);
        }
    },
    // mounted(){
    //    this.createItem();
    // }
})
</script>