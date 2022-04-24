<template>
    <div>
        {{category}}
        <Card
            title='Image, Video, Audio, or 3D Model'
            subtitle= 'File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG, GLB, GLTF. Max size: 100 MB'
            styles='mt-3 w-96'
        >
            <ImageUpload/>
        </Card>

        <Card
            title='Collection'
            subtitle="This is the collection where your item will appear."
            styles='mt-1'
        >
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
                v-model="name"
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
import { mapActions, mapGetters } from 'vuex';
export default Vue.extend({
    components: {
        ImageUpload,
        Card,
        Input,
        Select
    },
    data(){
        return {
            name: '' as string,
            description: '' as string,
            quantity: 0,
        }
    },

    computed:{

        ...mapGetters(
            {
                category: 'manage/category',
                getCategories: 'ProductCategory/getCategories',
            },
        ),

        categoryData: {
            get () {
                return this.category;
            },
            set (value) {
                this.setCategory(value);
            }
        }
    },

    methods:{
        ...mapActions({
            setCategory: 'manage/setCategory',
            fetchCategories: 'ProductCategory/fetchCategories',
        }),
    },

    

    mounted(){
        this.fetchCategories();
    }
})
</script>