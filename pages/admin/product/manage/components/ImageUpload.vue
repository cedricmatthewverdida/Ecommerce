<template>
    <div class="grid grid-cols-1 space-y-2">
        <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-80 p-3 group text-center">
                <div v-if="!imageUrl" class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img class="has-mask mt-5 h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image">
                    </div>
                </div>
                <div v-else>
                    <img :src="imageUrl" class="object-fill h-72 w-96 rounded" alt="">
                </div>
                <input @change="onFileChange" type="file" class="hidden">
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({

    data () {
        return {
            image: null,
            imageUrl: null,
        }
    },

    methods: {
        onFileChange(e) {
            const file = e.target.files[0]
            this.image = file
            this.imageUrl = URL.createObjectURL(file)
        },
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