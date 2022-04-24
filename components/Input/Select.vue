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
            if(this.display != undefined){
                return _.get(item,this.display);
            }
            return item;
        }
    },

    computed:{
        input: {
            get () {
                return this.value;
            },

            set (value:String) {
                if(this.value != ''){
                    this.$emit('input',value);
                }else{
                    this.$emit('input', this.title);
                }
            }
        }
    }
})
</script>