<template>
    <div class="dropdown">
        
        <div class="grid grid-cols-4 gap-4">
            <div>
                <Input
                    placeholder='Enter here'
                    type='text'
                    v-model="input"
                />
            </div>
        <!-- ... -->
            <div class="ml-12 mt-4" v-if="data.length === 0">
                <button @click="emit('create')" class="btn btn-ghost">
                    Create
                </button>
            </div>
        </div>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box divide-y">
            
            <li class="text-center opacity-75 p-3 small">
                Select {{ title }}
            </li>
            
            <div v-if="data.length != 0">
                <li
                v-for="(item,key) in data"
                :key="key"
                class="p-2"
                >
                    <a>
                        {{toDisplay(item)}}
                    </a>
                </li>
            </div>

            <div v-else>
                <li>
                        <small>No result found</small>
                </li>
            </div>
            
        </ul>
    </div>
</template>

<script lang="ts">
import Input from '@/components/Input/TextField.vue'
import Vue , { PropType } from 'vue';
import _ from 'lodash';
export default Vue.extend({


    components:{
        Input
    },

    props:{
        items: Array as PropType<Object>,
        title: String as PropType<String>,
        value: String as PropType<string>,
        display: String as PropType<string>,
    },

    methods:{
        toDisplay: function (item:any): string {
            if(this.display != undefined){
                return _.get(item,this.display);
            }
            return item;
        },
        emit:function(event:string): void{
            this.$emit(event, this.item);
        },
    },

    computed:{

        input: {
            get () {
                return this.value;
            },

            set (value:String) {
                this.$emit('input',value);
            }
        },

        data : function () {
            
            if(this.input.trim() == ''){
                return this.items;
            }

            return this.items.filter(item => {
                if(this.toDisplay(item).toLowerCase().includes(this.input.toLowerCase())){
                    return item;
                }
            });
        }

    },
})
</script>