<template>
    <button @click="updateMessage()">Default message</button>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        name: "DeleteButtonComponent",
        methods: {
            ...mapActions('main', [
                'updateMessage'
            ]),
        },
    }
</script>

<style scoped>
    button {
        height: 30px;
        margin: 20px;
    }
</style>