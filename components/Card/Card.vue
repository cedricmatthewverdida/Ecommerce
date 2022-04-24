<template>
    <div :class="'card bg-base-100 '+styles">
        <div class="card-body">
            <h2 class="card-title" v-if="title != undefined">{{title}}</h2>
            <small v-if="subtitle != undefined">{{subtitle}}</small>
            <slot/>
            <div class="card-actions">
                <slot name="footer"/>
            </div>
        </div>

        
    </div>
</template>

<script lang="ts">
import Vue , { PropType } from 'vue';
export default Vue.extend({
    props:{
        title: String as PropType<string>,
        subtitle: String as PropType<string>,
        styles: String as PropType<string>
    },
})
</script>