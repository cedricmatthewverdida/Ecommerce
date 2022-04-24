
<template>
    <div :class="styles">
        <label class="label">
            <span class="label-text">
                {{ label }}
            </span>
        </label>
        <input v-model="input" :type="type" :placeholder="placeholder" class="input input-bordered">
    </div>
</template>

<script lang="ts">

import Vue , { PropType } from 'vue';

export default Vue.extend({

    props:{
        value: [String,Number] as PropType<any>,
        label: String as PropType<string>,
        placeholder: String as PropType<string>,
        type: String as PropType<string>,
        styles: String as PropType<string>,
    },

    methods: {
        emit:function(event:string,value:any): void{
            this.$emit(event, value);
        },
    },

    computed: {
        input: {

            get () {
                return this.value
            },

            set (value:String) {
                this.$emit('input', value)
            }
        }
    },  
})
</script>