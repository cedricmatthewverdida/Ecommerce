<template>
    <div class="grid grid-cols-1 space-y-2">
        <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg w-96 h-24 p-3 group text-center">
                <small v-if="imageUrl.length === 0" class="mt-5 ">Upload</small>
                <div class="grid grid-cols-4 gap-4" v-if="imageUrl.length !==0">
                <div 
                v-for="(img,key) in imageUrl"
                :key="key">
                    <img :src="img" class="object-fill h-16 w-24 rounded" alt="">
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

    data () {
        return {
            image: [],
            imageUrl: [],
        }
    },

    methods: {
        onFileChange(e) {
            // this.imageUrl = []
            // if(e.target.files.length > 0) {
            //     for(let i = 0; i < e.target.files.length; i++) {
            //         this.image.push(e.target.files[i])
            //         this.imageUrl.push(URL.createObjectURL(e.target.files[i]))
            //     }
            // }else{
            //     this.image = []
            //     this.imageUrl = []
            // }
            const file = e.target.files[0]
            this.$emit('input', file)
        },
    },

    computed: {

        ...mapGetters({
            getProductImageCollection: 'manage/getProductImageCollection',
        }),

        display : function (){
           return URL.createObjectURL(this.getProductImage);
        }
        
    },

    watch: {
        imageUrl(newUrl) {
            if (newUrl) {
                this.$emit('input', newUrl)
            }
        },
    },
})
</script>