<template>
    <div class="dropdown">
        <Input
            placeholder='Enter your product name'
            type='text'
        />
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
        </ul>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input/TextField.vue'
export default Vue.extend({
    components:{
        Input
    }
})
</script>