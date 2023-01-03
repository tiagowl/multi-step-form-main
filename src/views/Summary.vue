<template>

    <Content :go-back="true" title="Finishing up" subTitle="Double check everything looks OK before confirming" >
        <ul class="list-group list-width">
            <li class="list-group-item pt-3 me-0 pb-3 border-0 border-bottom d-flex justify-content-between align-items-center">
                <div>
                    <strong class="strong" >{{ store.state.plan.description }}({{ store.state.plan.duration }})</strong><br>
                    <a class="text-secondary" >Change</a>
                </div>
                <strong class="strong" >{{ store.state.plan.billing }}</strong>
            </li>
            <li v-for="addon in store.state.addons" class="list-group-item me-0 border-0 d-flex justify-content-between align-items-center">
                <p class="text-secondary mt-1" >{{ addon.title }}</p>
                <strong class="strong" >{{ addon.price }}</strong>
            </li>
        </ul>
        <div class="width-total-pricing d-flex justify-content-between mt-4 ps-3 pe-3 mb-sm-5" >
            <p class="text-secondary" >Total(per month)</p>
            <strong style="color: hsl(243, 100%, 62%)" >{{ store.getters.totalPrice }}</strong>
        </div>
    </Content>

</template>

<script setup >

import Content from '@/components/Content.vue';

import { useStore } from 'vuex';

const store = useStore();

</script>

<style scoped>

.list-group-item{
    background-color: hsl(217, 100%, 97%);;
}

.strong{
    color: hsl(213, 96%, 18%);
}

.width-total-pricing{
    width: 75% !important;
}

.list-width{
    width: 75%;
}

@media(max-width: 414px){
    .list-width{
        width: 100%;
    };
    .width-total-pricing{
        width: 100% !important;
    }
}

</style>