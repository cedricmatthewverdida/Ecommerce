<template>
    <div class="card w-96 bg-base-100 rounded-xl shadow hover:shadow-lg">
    
        <figure class="px-10 pt-10">
            <div class="indicator ml-2">
            <span v-if="isSale(item)" class="indicator-item indicator-top indicator-start badge badge-error">
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
            <div class="rating rating-xs">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked>
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400">
                <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400">
            </div>
            <h3 class="card-subtitle">
                {{!isSale(item) ? item.price : item.sale.price}}
            </h3>
            <!-- <p>If a dog chews shoes whose shoes does he choose?</p> -->
            <div class="card-actions justify-between">
                <div class="flex">

                
                
                <div class="w-12">
                    <label class="btn btn-circle btn-ghost swap swap-rotate">
  
                    <!-- this hidden checkbox controls the state -->
                    <input type="checkbox"/>
                    
                    <!-- sun icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="swap-on h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>           
                    
                    <!-- moon icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="swap-off h-6 w-6" fill="#FF8080" viewBox="0 0 24 24" stroke="#FD5D5D" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                    </label>
                </div>
                
                <div class="w-32">
                    <div class="avatar-group -space-x-6">
                        <div class="avatar">
                            <div class="w-8">
                            <img src="https://api.lorem.space/image/face?hash=4818" />
                            </div>
                        </div>
                        <div class="avatar">
                            <div class="w-8">
                            <img src="https://api.lorem.space/image/face?hash=40311" />
                            </div>
                        </div>
                        <div class="avatar placeholder">
                            <div class="w-8 bg-neutral-focus text-neutral-content">
                            <span>+99</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>

                <button class="btn btn-ghost" @click="emit('buy')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    Buy Now
                </button>
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