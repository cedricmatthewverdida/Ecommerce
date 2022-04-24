<template>
    <div class="grid grid-cols-1 space-y-2">
        <div class="flex items-center justify-center w-full">
            <label class="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                <div class="h-full w-full text-center flex flex-col items-center justify-center items-center  ">
                    <!---<svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-blue-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>-->
                    <div class="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                    <img class="has-mask h-36 object-center" src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg" alt="freepik image">
                    </div>
                    <p class="pointer-none text-gray-500 "><span class="text-sm">Drag and drop</span> files here <br /> or <a href="" id="" class="text-blue-600 hover:underline">select a file</a> from your computer</p>
                </div>
                <input type="file" class="hidden">
            </label>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    
})
</script>