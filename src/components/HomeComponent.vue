<template>
    <div class="home-component">
<!--        <WelcomeComponent/>-->
<!--        <DeleteButtonComponent/>-->
        <CymulateComponent/>
    </div>
</template>

<script>
    // import WelcomeComponent from './WelcomeComponent';
    // import DeleteButtonComponent from './DeleteButtonComponent';

    import CymulateComponent from './CymulateComponent';

    export default {
        name: "HomeComponent",
        components: {
            // WelcomeComponent,
            // DeleteButtonComponent,
            CymulateComponent
        }
    }
</script>

<style scoped>

</style>