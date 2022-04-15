<template>
    <div class="input-group">
        <select class="select select-bordered">

            <option disabled selected>
                {{title}}
            </option>

            <option
            v-for="(item,key) in items"
            :key="key"
            >
                {{item}}
            </option>
            
        </select>
    </div>
</template>

<script lang="ts">
import Vue , { PropType } from 'vue'
export default Vue.extend({

    props:{
        items: Object as PropType<Object>,
        title: String as PropType<String>,
    },

    data(){
        return {
            selected: null
        }
    },
})
</script>