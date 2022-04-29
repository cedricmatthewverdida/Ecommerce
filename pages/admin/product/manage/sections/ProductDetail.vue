<template>
    <div>
        <Card
            title='Image, Video, Audio, or 3D Model'
            subtitle= 'File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB'
            styles='mt-3 md:w-96'
        >
            <ImageUpload v-model="productimageData"/>
        </Card>

        <Card
            title='Collection'
            subtitle="Provide an image (PNG, JPG, or GIF) for this collection"
            styles='mt-1 md:w-96'
        >
            <MultipleUpload v-model="productimagecollectionData"/>
        </Card>

        <Card
            title='Category'
            subtitle='Product Category'
            styles='mt-1'
        >
            <Select
            :items="getCategories"
            title="Category"
            display="attributes.name"
            v-model="categoryData"
            />
        </Card>

        <Card
            title='Name'
            styles='mt-1'
        >
            <Input
                placeholder='Enter your product name'
                type='text'
                styles='form-control inputContainer'
                v-model="productnameData"
            />
        </Card>

        <Card
            title='Description'
            subtitle='The description will be included on the items detail page underneath its image. Markdown syntax is supported.'
            styles='mt-1'
        >
            <textarea class="textarea textarea-bordered" placeholder="Bio"></textarea>
        </Card>

    </div>
</template>


<script lang="ts">
import Vue from 'vue';
import ImageUpload from '../components/ImageUpload.vue';
import Card from '@/components/Card/Card.vue';
import Input from '@/components/Input/TextField.vue';
import Select from '@/components/Input/Select.vue';
import MultipleUpload from '../components/MultipleUpload.vue';
import { mapActions, mapGetters } from 'vuex';
export default Vue.extend({
    components: {
        ImageUpload,
        Card,
        Input,
        Select,
        MultipleUpload
    },

    computed:{

        ...mapGetters(
            {
                productcategory: 'manage/productcategory',
                productname: 'manage/productname',
                productdesc: 'manage/productdesc',
                getCategories: 'ProductCategory/getCategories',
                productimage: 'manage/productimage',
                productimagecollection: 'manage/productimagecollection',
            },
        ),

        productimageData: {
            get() {
                return this.productimage;
            },
            set(value) {
                this.setProductImage(value);
            },
        },

        productimagecollectionData: {
            get() {
                return this.productimagecollection;
            },
            set(value) {
                this.setProductImageCollection(value);
            },
        },

        categoryData: {
            get () {
                return this.productcategory;
            },
            set (value) {
                this.setProductCategory(value);
            }
        },

        productnameData: {
            get () {
                return this.productname;
            },
            set (value) {
                this.setProductName(value);
            }
        },

        productdescData: {
            get () {
                return this.productdesc;
            },
            set (value) {
                this.setProductDesc(value);
            }
        },


    },

    methods:{
        ...mapActions({
            setProductCategory: 'manage/setProductCategory',
            setProductName: 'manage/setProductName',
            setProductImage: 'manage/setProductImage',
            setProductImageCollection: 'manage/setProductImageCollection',
            setProductDesc: 'manage/setProductDesc',
            fetchCategories: 'ProductCategory/fetchCategories',
        }),
        
    },

    

    mounted(){
        this.fetchCategories();
    }
})
</script>