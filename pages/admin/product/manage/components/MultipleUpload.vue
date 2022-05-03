<template>
    <div class="grid grid-cols-1 space-y-2">
        <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg w-96 h-24 p-3 group text-center">
                <small v-if="getProductImageCollection.length === 0" class="mt-5 ">Upload</small>
                <div class="grid grid-cols-4 gap-4" v-if="getProductImageCollection.length !==0">
                <div 
                v-for="(img,key) in display"
                :key="key">
                    <img :lazy-src="img" :src="img" class="object-fill h-16 w-24 rounded" :alt="key">
                </div>
                </div>
                <input @change="onFileChange" type="file" class="hidden" multiple>
            </label>
        </div>
    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import { mapGetters } from 'vuex';
export default Vue.extend({
    methods: {
        onFileChange(e) {

            this.$emit('input', [])
            const file = e.target.files;
            let temp = [];
            for(let i = 0; i < file.length; i++){
                if (file[i].type.match('image.*')) {
                    temp.push(e.target.files[i])
                }
            }
            this.$emit('input', temp)
        },
    },

    computed: {

        ...mapGetters({
            getProductImageCollection: 'manage/getProductImageCollection',
        }),

        display : function (){
            if(this.getProductImageCollection.length > 0) {
                let temp = [];
                for(let i = 0; i < this.getProductImageCollection.length; i++) {
                    temp.push(URL.createObjectURL(this.getProductImageCollection[i]));
                }
                return temp;
            }
        }
    },
})
</script>