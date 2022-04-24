<template>
    <div class="input-group">
        <select class="select select-bordered" v-model="input">

            <option disabled selected>
                {{title}}
            </option>

            <option
            v-for="(item,key) in items"
            :key="key"
            >
                {{toDisplay(item)}}
            </option>
            
        </select>
    </div>
</template>

<script lang="ts">
import Vue , { PropType } from 'vue';
import _ from 'lodash';
export default Vue.extend({

    props:{
        items: Array as PropType<Object>,
        title: String as PropType<String>,
        value: String as PropType<any>,
        display: String as PropType<string>,
    },

    data(){
        return {
            selected: null
        }
    },

    methods:{
        toDisplay: function (item:any): string {
            return _.get(item,this.display)
        }
    },

    computed:{
        input: {

            get () {
                return this.value;
            },

            set (value:String) {
                this.$emit('input', value)
            }
        }
    }
})
</script>