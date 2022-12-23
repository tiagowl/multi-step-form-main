<template>

    <Content :go-back="true" title="Finishing up" subTitle="Double check everything looks OK before confirming" >
        <ul class="list-group w-75">
            <li class="list-group-item pt-3 pb-3 border-0 border-bottom d-flex justify-content-between align-items-center">
                <div>
                    <strong class="strong" >Arcade(Monthly)</strong><br>
                    <a class="text-secondary" >Change</a>
                </div>
                <strong class="strong" >$9/mo</strong>
            </li>
            <li class="list-group-item border-0 d-flex justify-content-between align-items-center">
                <p class="text-secondary mt-1" >Online service</p>
                <strong class="strong" >+$1/month</strong>
            </li>
            <li class="list-group-item border-0 d-flex justify-content-between align-items-center">
                <p class="text-secondary mt-1" >Larger storage</p>
                <strong class="strong" >+$2/month</strong>
            </li>
        </ul>
        <div class="w-75 d-flex justify-content-between mt-4 ps-3 pe-3 mb-5" >
            <p class="text-secondary" >Total(per month)</p>
            <strong style="color: hsl(243, 100%, 62%)" >+$12/mo</strong>
        </div>
    </Content>

</template>

<script setup >

import Content from '@/components/Content.vue';

</script>

<style scoped>

.list-group-item{
    background-color: hsl(217, 100%, 97%);;
}

.strong{
    color: hsl(213, 96%, 18%);
}

</style>