<template>
  <div>
    <div class="hero min-h-screen" style="background-image: url(https://api.lorem.space/image/fashion?w=1000&h=800);">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div class="max-w-md">
          <h1 class="mb-5 text-5xl font-bold">Sammy store</h1>
          <p class="mb-5">
            manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.
          </p>
          <NuxtLink to="/collection"
            >
            <button class="btn btn-secondary">Shop now</button>
            </NuxtLink
          >
          
        </div>
      </div>
    </div>


    
    <Carousel/>


    <div class="container mx-auto px-5">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        <div v-for="(item,key) in 3" :key="key">
          <div class="card bg-base-100 shadow-xl image-full">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div class="card-body">
              <h2 class="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="hero min-h-[50%] bg-base-200 my-10 rounded-lg">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src="https://api.lorem.space/image/pizza?w=500&h=500" class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">New Product</h1>
            <p class="py-6">
              Redragon's new 60% layout wired keyboard in a refreshing style with a no-brainer deal economic offer. Compact 61 keys with selected keycaps, dedicated for FPS Gamers and efficient working.
            </p>
            <button class="btn btn-primary">Shop now</button>
          </div>
        </div>
      </div>


    </div>

  </div>
</template>


<script lang="ts">
import Vue from 'vue';
import Carousel from '@/components/Main/Carousel.vue';
export default Vue.extend({
  components:{
    Carousel
  }
})
</script>