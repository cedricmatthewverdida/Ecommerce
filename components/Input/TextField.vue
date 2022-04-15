
<template>
    <div class="form-control w-full max-w-xs">
        <label class="label">
            <span class="label-text">
                {{ option.label }}
            </span>
        </label>
        <input v-model="input" :type="option.type" :placeholder="option.placeholder" class="input input-bordered w-full max-w-xs">
    </div>
</template>

<script lang="ts">

import Vue , { PropType } from 'vue';

export default Vue.extend({

    props:{
        option: Object as PropType<
        {
            label: string,
            placeholder?: string,
            type: string,
        }>,
        value: String as PropType<any>,
    },

    methods: {
        emit:function(event:string,value:any){
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