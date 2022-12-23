<template>
        <Content navigate="/plans" :goBack="true" title="Personal info" subTitle="Please provide your name, email address, and phone number." >
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Name</label>
                <input type="text" class="form-control form-control-lg w-75" id="exampleFormControlInput1">
            </div>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email Adress</label>
                <input type="email" class="form-control form-control-lg w-75" id="exampleFormControlInput1">
            </div>
            <div class="mb-5">
                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                <input type="text" class="form-control form-control-lg w-75" id="exampleFormControlInput1">
            </div>
        </Content>
</template>

<script setup >
    import Content from '@/components/Content.vue';
</script>

<style>

</style>