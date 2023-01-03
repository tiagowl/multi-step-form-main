<template>
    <h1 style="color: hsl(213, 96%, 18%)" >{{ props.title }}</h1>
    <p class="text-secondary mb-4" >{{ props.subTitle }}</p>
    <slot></slot>
    <div class="d-flex next-step justify-content-end w-75" :class="['d-flex', 'w-75', {'justify-content-end': props.goBack === false, 'justify-content-between': props.goBack === true}]">
        <p @click="router.back()" v-if="props.goBack === true" class="mt-5" style="cursor: pointer" >Go Back</p>
        <button @click="navigate" class="btn text-white mt-sm-5 h-25 mt-4 me-4 me-sm-0" style="background-color: hsl(243, 100%, 62%)">Next step</button>
    </div>
</template>

<script setup>

import {defineProps} from 'vue';
import {useRouter} from 'vue-router';
import {useStore} from "vuex";

const router = useRouter();
const store = useStore();

const navigate = () => {
    store.commit(props.nextAction.mutation, props.nextAction.payload)
    return router.push({path: props.navigate});
}

const props = defineProps({title: String, subTitle: String, goBack: Boolean, navigate: String, nextAction: {mutation: String, payload: Object | Array}});

</script>

<style>

@media(max-width: 414px){
    .next-step{
        position: absolute;
        background-color: white;
        width: 150% !important;
        left: 3;
        margin-left: -10rem;
        margin-top: 10.2rem;
    }
}

</style>