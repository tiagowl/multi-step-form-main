<template>

    <Content navigate="/summary" :nextAction="{mutation: 'addAddons', payload: addonsChecked}" title="Pick add-ons" subTitle="Add-ons help enhance your gaming experience." :goBack="true" >
        <ul class="list-group list-width mb-sm-5">
            <li v-for="(addon, index) in addons" class="list-group-item border-0 ps-0 pe-0">
                <div class="card">
                    <div :class="['card-body', 'd-flex', 'justify-content-between', {'bg-card': addonsIndex.includes(index), 'border-card': addonsIndex.includes(index)}]">
                        <div class="form-check">
                            <input @change="checkAddon(index)" class="form-check-input mt-sm-3 me-sm-3" type="checkbox" value="" id="flexCheckDefault">
                               <label class="form-check-label text-secondary" for="flexCheckDefault">
                               <strong class="addon-title" >{{ addon.title }}</strong> <br>
                                {{ addon.description }}
                            </label>
                        </div>
                        <p class="text-secondary mt-sm-3" >{{ addon.price }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </Content>

</template>

<script setup>

import {ref} from "vue";
import Content from '@/components/Content.vue';
import { useStore } from "vuex";

const store = useStore();
const addons = ref([
    {title: "Online Service", description: "Access to multiplayer games", price: store.state.plan.duration === "monthly" ? "+1/mo" : "+10/yr", priceValue: store.state.plan.duration === "monthly" ? 1 : 10},
    {title: "Larger storage", description: "Extra 1TB of cloud save", price: store.state.plan.duration === "monthly" ? "+2/mo" : "+20/yr", priceValue: store.state.plan.duration === "monthly" ? 2 : 20},
    {title: "Customizable profile", description: "Custom theme on your profile", price: store.state.plan.duration === "monthly" ? "+2/mo" : "+20/yr", priceValue: store.state.plan.duration === "monthly" ? 2 : 20}
])
const addonsChecked = ref([]);
const addonsIndex = ref([]);

const checkAddon = (index) => {
    addonsChecked.value.push(addons.value[index]);
    addonsIndex.value.push(index);
}

</script>

<style>
    .addon-title{
        color: hsl(213, 96%, 18%);
    }

    .border-card{
        border-color: blue;
    }

    .list-width{
        width: 75%;
    }

    .bg-card{
        background-color: hsl(217, 100%, 97%);
    }

    @media(max-width: 414px){
        .list-width{
            width: 100%;
        }

        .form-check-label{
            position: absolute;
        }

        .form-check-label,.addon-title{
            font-size: 0.85rem;
        }
    }
</style>