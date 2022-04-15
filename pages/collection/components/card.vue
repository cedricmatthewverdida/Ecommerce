<template>
    <div class="card w-96 bg-base-100 rounded-xl shadow hover:shadow-lg">

        <figure class="px-10 pt-10">
            <div class="indicator ml-2">
            <span v-if="isSale(item)" class="indicator-item indicator-start badge badge-error">
                {{item.sale.percent }}% off
            </span>
                <img 
                    :src="item.image" 
                    :alt="item.name"
                    class="rounded-xl"
                />
            </div>
            
        </figure>

        <div class="card-body">
            <h2 class="card-title">{{item.name}}</h2>
            <h3 class="card-title">
                {{!isSale(item) ? item.price : item.sale.price}}
            </h3>
            <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
            <div class="card-actions justify-between">
                <button class="btn btn-circle btn-ghost" @click="emit('buy')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
                <button class="btn btn-primary" @click="emit('buy')">Buy Now</button>
            </div>
        </div>
    </div>

</template>
<script lang="ts">

import Vue, { PropType } from 'vue';

export default Vue.extend({

    props:{
        item: Object as PropType<Object>,
    },

    methods: {
        emit:function(event:string){
            this.$emit(event, this.item);
        },

        isSale:function (obj: {sale: Object}){
            return Object.keys(obj.sale).length !== 0;
        }
    },


})
</script>