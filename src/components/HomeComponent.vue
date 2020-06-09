<template>
    <div class="home-component">
        <CymulateComponent/>
    </div>
</template>

<script>

    import CymulateComponent from './CymulateComponent';

    export default {
        name: "HomeComponent",
        components: {
            CymulateComponent
        }
    }
</script>

<style>
    div, input {
        box-sizing: border-box;
    }
</style>