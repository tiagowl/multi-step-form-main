<template>
  <div class="container bg-white mt-sm-5 h-75 ps-sm-4 rounded-4 pt-sm-3 mb-5 pb-sm-3">
    <div class="row">
      <div class="col-md-3 bg-transparent rounded-sm-4">
        <ul class="list-group steps mt-4">
          <li class="list-group-item d-flex justify-content-start bg-transparent border-0 mb-2">
            <div class="d-flex">
              <div :class="['circle-size', 'fs-6', 'border', 'border-white', 'rounded-circle', 'd-flex', 'justify-content-center', 'align-items-center',{'background-circle': route.path === '/', 'text-white': route.path !== '/', 'text-dark': route.path === '/'}]" >1</div>
              <div class="d-sm-flex d-none flex-column ms-2">
                <p class="step-text-size text-gray" >STEP 1</p>
                <p class="step-text-size text-white" >YOUR INFO</p>
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start bg-transparent border-0 mb-2">
            <div class="d-flex">
              <div :class="['circle-size', 'fs-6', 'border', 'border-white', 'rounded-circle', 'd-flex', 'justify-content-center', 'align-items-center',{'background-circle': route.path === '/plans', 'text-white': route.path !== '/plans', 'text-dark': route.path === '/plans'}]" >2</div>
              <div class="d-sm-flex d-none flex-column ms-2">
                <p class="step-text-size text-gray" >STEP 2</p>
                <p class="step-text-size text-white" >SELECT PLAN</p>
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start bg-transparent border-0 mb-2">
            <div class="d-flex">
              <div :class="['circle-size', 'fs-6', 'border', 'border-white', 'rounded-circle', 'd-flex', 'justify-content-center', 'align-items-center',{'background-circle': route.path === '/addons', 'text-white': route.path !== '/addons', 'text-dark': route.path === '/addons'}]" >3</div>
              <div class="d-sm-flex d-none flex-column ms-2">
                <p class="step-text-size text-gray" >STEP 3</p>
                <p class="step-text-size text-white" >ADD-ONS</p>
              </div>
            </div>
          </li>
          <li class="list-group-item d-flex justify-content-start bg-transparent border-0 mb-2">
            <div class="d-flex">
              <div :class="['circle-size', 'fs-6', 'border', 'border-white', 'rounded-circle', 'd-flex', 'justify-content-center', 'align-items-center',{'background-circle': route.path === '/summary', 'text-white': route.path !== '/summary', 'text-dark': route.path === '/summary'}]" >4</div>
              <div class="d-sm-flex d-none flex-column ms-2">
                <p class="step-text-size text-gray" >STEP 4</p>
                <p class="step-text-size text-white" >SUMMARY</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="col-md-9 main-padding pt-sm-5 pt-4" style="height: auto">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup>

import {useRoute} from "vue-router";

const route = useRoute();

console.log(route.path);

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: auto;
  font-family: "ubuntu";
}

.circle-size{
  height: 2.5rem;
  width: 2.5rem;
}

.step-text-size{
  font-size: 0.9rem;
  margin-bottom: -0.4rem;
}

.text-gray{
  color: rgb(180, 178, 178);
}

.col-md-3{
  background-image: url("../assets/images/bg-sidebar-desktop.svg");
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
}

.background-circle{
  background-color: hsl(217, 100%, 97%);
}

.main-padding{
  padding-left: 8rem;
}

.form-label{
  font-size: 0.9rem;
  color: hsl(213, 96%, 18%)
}

@font-face {
  font-family: "ubuntu";
  src: url("../assets/fonts/Ubuntu-Regular.ttf");
}

@media(max-width: 414px){
  .col-md-3{
    background-image: url("../assets/images/bg-sidebar-mobile.svg");
    background-position: top;
    background-size: cover;
    height: 25vh !important;    
  }

  .main-padding{
    padding-left: 2rem;
    padding-right: 2rem;
    padding-bottom: 2rem;
  }

  .col-md-9{
    position: absolute;
    background-color: white;
    width: 85vw;
    top: 6rem;
    left: 1.7rem;
    border-radius: 1rem
  }

  .list-group-item{
    margin-right: 1rem;
  }

  .steps{
    display: flex !important;
    flex-direction: row;
  }
}
</style>
