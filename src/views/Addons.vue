<template>

    <Content navigate="/summary" title="Pick add-ons" subTitle="Add-ons help enhance your gaming experience." :goBack="true" >
        <ul class="list-group w-75 mb-5">
            <li class="list-group-item border-0 ps-0">
                <div class="card">
                    <div class="card-body d-flex justify-content-between">
                        <div class="form-check">
                            <input class="form-check-input mt-3 me-3" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label text-secondary" for="flexCheckDefault">
                               <strong class="addon-title" >Online Service</strong> <br>
                                Access to multiplayer games
                            </label>
                        </div>
                        <p class="text-secondary mt-3" >+$1/mo</p>
                    </div>
                </div>
            </li>
            <li class="list-group-item border-0 ps-0">
                <div class="card">
                    <div class="card-body d-flex justify-content-between">
                        <div class="form-check">
                            <input class="form-check-input mt-3 me-3" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label text-secondary" for="flexCheckDefault">
                               <strong class="addon-title" >Larger storage</strong> <br>
                                Extra 1TB of cloud save
                            </label>
                        </div>
                        <p class="text-secondary mt-3" >+$2/mo</p>
                    </div>
                </div>
            </li>
            <li class="list-group-item border-0 ps-0">
                <div class="card">
                    <div class="card-body d-flex justify-content-between">
                        <div class="form-check">
                            <input class="form-check-input mt-3 me-3" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label text-secondary" for="flexCheckDefault">
                               <strong class="addon-title" >Customizable profile</strong> <br>
                                Custom theme on your profile
                            </label>
                        </div>
                        <p class="text-secondary mt-3" >+$2/mo</p>
                    </div>
                </div>
            </li>
        </ul>
    </Content>

</template>

<script setup>

import Content from '@/components/Content.vue';

</script>

<style>
    .addon-title{
        color: hsl(213, 96%, 18%);
    }
</style>