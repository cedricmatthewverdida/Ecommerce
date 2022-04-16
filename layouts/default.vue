<template>
      <div class="flex flex-col h-screen justify-between">
            <TheHeader/>
            <Nuxt/>
            <client-only>
                  <notifications position="bottom right"/>
            </client-only>
            <TheFooter/>
      </div>
</template>

<script lang="ts">
import Vue from 'vue'
import TheHeader from '@/components/Main/Header.vue';
import TheFooter from '@/components/Main/Footer.vue';
export default Vue.extend({
      components:{
            TheHeader,
            TheFooter
      }
})
</script>