
<template>
    <div>
        <Nuxt/>
        <client-only>
            <notifications position="bottom right"/>
        </client-only>
    </div>
</template>


<script lang="ts">
import Vue from 'vue'
import { mapGetters } from 'vuex'
export default Vue.extend({

    computed:{
        ...mapGetters([
            'isAuthenticated'
        ])
    },

    created(){
        if(this.isAuthenticated){
            this.$router.push('/')
        }
    }

})
</script>