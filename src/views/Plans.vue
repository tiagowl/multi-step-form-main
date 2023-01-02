<template>
    <Content navigate="/addons" :go-back="true" :nextAction="{mutation: 'choosePlan', payload: plans[planIndex]}" title="Select your plan" subTitle="You have the option of monthly or yearly biling." >
        <ul class="list-group list-group-horizontal-sm mb-3">
            <li v-for="(plan, index) in plans" class="list-group-item border-0 list-width me-sm-2 ps-0">
                <div style="cursor: pointer" @click="choosePlan(index)" :class="['card', 'pb-sm-0', 'plan-card',{'card-border': choose === false && planIndex !== index, 'border-card': choose && planIndex === index,'bg-card': choose && planIndex === index }]">
                    <div class="card-body d-flex flex-sm-column pb-0">
                        <div :style="{backgroundColor: plan.bg}" class="mb-5 me-3 mt-sm-2 rounded-circle circle d-flex justify-content-center align-items-center">
                            <i :class="['bi', `bi-${plan.icon}`, 'text-white', 'fs-4']"></i>
                        </div>
                        <div class="d-flex flex-column">
                            <p style="color: hsl(213, 96%, 18%)" class="fw-bold" >{{ plan.name }}</p>
                            <p class="text-secondary price-mobile" >{{ plan.price }}</p>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
        <div class="card switch-width border-0 mb-sm-5" style="background-color: hsl(217, 100%, 97%)">
            <div class="card-body pt-1 pb-1 d-flex justify-content-center align-items-center">
                <p class="mt-3 me-2" >Monthly</p>
                <div class="form-check form-switch">
                    <input v-model="monthly" class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Yearly</label>
                </div>
            </div>
        </div>
    </Content>
</template>

<script setup >

import {ref, watch} from "vue";
import Content from "@/components/Content.vue";

const monthly = ref(false);
const choose = ref(false);
const planIndex = ref(0);

const plans = ref([
    {icon: "joystick", name: "Arcade", price: "$9/mo", bg: "orange", duration: "monthly", priceValue: 9},
    {icon: "controller", name: "Advanced", price: "$12/mo", bg: "deeppink", duration: "monthly", priceValue: 12},
    {icon: "dpad-fill", name: "Pro", price: "$15/mo", bg: "cornflowerblue", duration: "monthly", priceValue: 15}
])

watch(monthly, (newValue, oldValue)=>{
    if(newValue === false){
        plans.value[0].price = "$9/mo";
        plans.value[0].priceValue = 9;
        plans.value[0].duration = "monthly";
        plans.value[1].price = "$12/mo";
        plans.value[1].duration = "monthly";
        plans.value[1].priceValue = 12;
        plans.value[2].price = "$15/mo";
        plans.value[2].duration = "monthly";
        plans.value[2].priceValue = 15;
    }else{
        plans.value[0].price = "$90/yr";
        plans.value[0].duration = "yearly";
        plans.value[0].priceValue = 90;
        plans.value[1].price = "$120/yr";
        plans.value[1].duration = "yearly";
        plans.value[1].priceValue = 120;
        plans.value[2].price = "$150/yr";
        plans.value[2].duration = "yearly";
        plans.value[2].priceValue = 150;
    }
})



const choosePlan = (index) => {
    choose.value = true;
    planIndex.value = index;
}

</script>

<style scoped>

.circle{
    height: 3.5rem;
    width: 3.5rem;
}

.switch-width{
    width: 75%;
}

.card-border{
    border-color: rgb(218, 217, 217);
}

.card:hover{
    border-color: blue;
}

.border-card{
    border-color: blue;
}

.bg-card{
    background-color: hsl(217, 100%, 97%);
}

.list-width{
    width: 25% !important;
}

@media(max-width: 414px){
    .plan-card{
        height: 5rem;
    }

    .circle{
        height: 3rem;
        width: 3rem;
        margin-bottom: 2rem;
    }

    .price-mobile{
        position: absolute;
        top: 2.5rem;
    }

    .list-width{
        width: 100% !important;
        padding-right: 0;
    }

    .switch-width{
        width: 100%;
    }
}

</style>