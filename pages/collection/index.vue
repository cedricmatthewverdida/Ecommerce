<template>
  <div class="mx-auto" >

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-4">
      <div class="flex">
        <Search/>
        <Selects :items="sortBy" :title="`${'Sort By'}`"/>
      </div>
      <div class="flex flex-row-reverse ...">
        <Paginated/>
        <div class="mx-1">
          <Selects :items="category" :title="`${'Pick category'}`"/>
        </div>
      </div>
    </div>


    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div v-for="(item,key) in items" :key="key">
        <Card :item="item" @buy="BuyNow(item)"/>
      </div>
    </div>


    <div class="flex flex-row-reverse my-10">
        <Paginated/>
      <div class="mx-2">
        <Selects :items="category" :title="`${'Pick category'}`"/>
      </div>
    </div>


  </div>
</template>

<script lang="ts">

import Search from './components/Search.vue';
import Selects from './components/Select.vue';
import Paginated from './components/Pagination.vue';
import Card from './components/Card.vue';
export default{

  components: {
    Card,
    Paginated,
    Search,
    Selects
  },
  
  methods: {
    BuyNow: function(item:Object){
      console.log(item);
    }
  },

  data(){
    return {
      message: 'Hello World!',

      sortBy:[
        'Price hight to low',
        'Price low to high',
        'Alphabetical A-Z',
        'Alphabetical Z-A',
        'Newest first',
        'Oldest first'
      ],

      category: [
        'T-shirts',
        'Mugs',
        'Caps',
      ],
      
      items: [
        {
          id: 1,
          name: 'T-shirts Uniqlo X-Large',
          price: '$10.00',
          image: 'https://api.lorem.space/image/shoes?w=400&h=225',
          sale: {
            percent: 40,
            price: '$10.00'
          }
        },
        {
          id: 2,
          name: 'Mugs',
          price: '$20.00',
          image: 'https://api.lorem.space/image/furniture?w=400&h=225',
          sale: {
            percent: 20,
            price: '$20.00'
          },
          quantity:{
            inStock: 10,
            sold: 20
          },
        },
        {
          id: 3,
          name: 'Coffee',
          price: '$30.00',
          image: 'https://api.lorem.space/image/watch?w=400&h=225',
          sale: {
            percent: 10,
            price: '$30.00'
          },
          quantity:{
            inStock: 10,
            sold: 20
          },
        },
        {
          id: 4,
          name: 'Shoes',
          price: '$40.00',
          image: 'https://api.lorem.space/image/house?w=400&h=225',
          sale:{},
          quantity:{
            inStock: 10,
            sold: 20
          },
        },
        {
          id: 5,
          name: 'T-shirts',
          price: '$50.00',
          image: 'https://api.lorem.space/image/burger?w=400&h=225',
          sale:{},
          quantity:{
            inStock: 10,
            sold: 20
          },
        },
        {
          id: 6,
          name: 'Mugs',
          price: '$60.00',
          image: 'https://api.lorem.space/image/pizza?w=400&h=225',
          sale:{},
          quantity:{
            inStock: 10,
            sold: 20
          },
        },
        {
          id: 7,
          name: 'Coffee',
          price: '$70.00',
          image: 'https://api.lorem.space/image/pizza?w=400&h=225',
          sale:{},
          quantity:{
            inStock: 10,
            sold: 20
          },
        },
        {
          id: 8,
          name: 'Shoes',
          price: '$80.00',
          image: 'https://api.lorem.space/image/furniture?w=400&h=225',
          sale:{},
          quantity:{
            inStock: 0,
            sold: 20
          },
        }
      ]
    }
  }
}

</script>
