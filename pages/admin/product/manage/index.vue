
<template>
   <div class="container md:mx-auto md:px-10">

       

        <Card
            styles='my-3 shadow-xl'
        >
            <ul class="steps">
                <li 
                v-for="(step, key) in steps" 
                :key="key" 
                :class=" currentStep >= key ? 'step step-primary' : 'step ' "
                >
                    {{step}}
                </li>
            </ul>

            <ProductDetail v-if="currentStep == 0"/>

            <div slot="footer">
                <button class="btn btn-primary" @click="nextStep">
                    {{ currentStep != 3 ? 'Next' : 'Create Product' }}
                </button>
                <button v-if="currentStep > 0" class="btn btn-primary" @click="previousStep">Previous</button>
            </div>

        </Card>

   </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Card from '@/components/Card/Card.vue';
import ProductDetail from './sections/ProductDetail.vue';
export default Vue.extend({
    layout: 'admin',
    components: {
        Card,
        ProductDetail
    },
    data () {
        return {
            currentStep: 0 ,
            steps:[
                'Detail',
                'Property',
                'Stock / Availability',
                'Pricing'
            ] as string[]
        }
    },

    computed:{
        stepIndicator (): string {
            return this.steps[this.currentStep];
        }
    },

    methods:{

        nextStep: function (): void{
            if(this.currentStep < this.steps.length - 1){
                this.currentStep++;
            }
        },

        previousStep: function (): void{
            if(this.currentStep > 0){
                this.currentStep--;
            }
        }
    }
})
</script>

<style scoped>
    .inputContainer{
        width: 100%;
    }
    .container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    }
</style>