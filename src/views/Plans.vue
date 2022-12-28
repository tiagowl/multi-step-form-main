<template>
    <Content navigate="/addons" :go-back="true" :nextAction="{mutation: '', payload: {}}" title="Select your plan" subTitle="You have the option of monthly or yearly biling." >
        <ul class="list-group list-group-horizontal mb-3">
            <li class="list-group-item border-0 w-25 me-2 ps-0">
                <div class="card card-border pb-0">
                    <div class="card-body pb-0">
                        <div style="background-color: orange" class="mb-5 mt-2 rounded-circle circle d-flex justify-content-center align-items-center">
                            <i class="bi bi-joystick text-white fs-4"></i>
                        </div>
                        <p style="color: hsl(213, 96%, 18%)" class="fw-bold" >Arcade</p>
                        <p class="text-secondary" >$9/mo</p>
                    </div>
                </div>
            </li>
            <li class="list-group-item border-0 w-25 me-2 ps-0">
                <div class="card card-border pb-0">
                    <div class="card-body pb-0">
                        <div style="background-color: deeppink" class="mb-5 mt-2 rounded-circle circle d-flex justify-content-center align-items-center">
                            <i class="bi bi-controller text-white fs-4"></i>
                        </div>
                        <p style="color: hsl(213, 96%, 18%)" class="fw-bold" >Advanced</p>
                        <p class="text-secondary" >$12/mo</p>
                    </div>
                </div>
            </li>
            <li class="list-group-item border-0 w-25 ps-0">
                <div class="card card-border pb-0">
                    <div class="card-body pb-0">
                        <div style="background-color: cornflowerblue;" class="mb-5 mt-2 rounded-circle circle d-flex justify-content-center align-items-center">
                            <i class="bi bi-dpad-fill text-white fs-4"></i>
                        </div>
                        <p style="color: hsl(213, 96%, 18%)" class="fw-bold" >Pro</p>
                        <p class="text-secondary" >$15/mo</p>
                    </div>
                </div>
            </li>
        </ul>
        <div class="card w-75 border-0 mb-5" style="background-color: hsl(217, 100%, 97%)">
            <div class="card-body pt-1 pb-1 d-flex justify-content-center align-items-center">
                <p class="mt-3 me-2" >Monthly</p>
                <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    <label class="form-check-label" for="flexSwitchCheckDefault">Yearly</label>
                </div>
            </div>
        </div>
    </Content>
</template>

<script setup >

import {ref} from "vue";
import Content from "@/components/Content.vue";

const monthly = ref(true);

const plans = ref([
    {icon: "joystick", name: "Arcade", price: `${monthly.value ? "$9/mo" : "$90/yr"}`, bg: "orange"},
    {icon: "controller", name: "Advanced", price: `${monthly.value ? "$12/mo" : "$120/yr"}`, bg: "deeppink"},
    {icon: "dpad-fill", name: "Pro", price: `${monthly.value ? "$15/mo" : "$150/yr"}`, bg: "cornflowerblue"}
])

</script>

<style scoped>

.circle{
    height: 3.5rem;
    width: 3.5rem;
}

.card-border{
    border-color: rgb(218, 217, 217);
}

.card:hover{
    border-color: blue;
}

</style>