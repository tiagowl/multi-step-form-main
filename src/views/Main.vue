<template>
        <Content navigate="/plans" :nextAction="{mutation: 'subscription', payload: {name: name, email: email, phone: phone}}" :goBack="false" title="Personal info" subTitle="Please provide your name, email address, and phone number." >
            <div class="mb-sm-3 mb-2">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control form-control-lg input-width" id="exampleFormControlInput1">
            </div>
            <div class="mb-sm-3 mb-2">
                <label for="exampleFormControlInput1" class="form-label">Email Adress</label>
                <input v-model="email" type="email" class="form-control form-control-lg input-width" id="exampleFormControlInput1">
            </div>
            <div class="mb-sm-5">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input v-model="phone" type="text" class="form-control form-control-lg input-width" id="exampleFormControlInput1">
            </div>
        </Content>
</template>

<script setup >
    import {ref} from "vue"
    import Content from '@/components/Content.vue';

    const name = ref("");
    const email = ref("");
    const phone = ref("");
</script>

<style>

.input-width{
    width: 75%;
}

@media(max-width: 414px){
    .input-width{
        width: 100%;
    }
}

</style>