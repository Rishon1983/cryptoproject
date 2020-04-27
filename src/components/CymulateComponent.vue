<template>
    <div id="cymulate" class="cymulate-component">
        <h1> Cymulate test </h1>
        <div class="content">
            <div class="buttons-container">
                <button class="button">Get</button>
                <button class="button">Create</button>
                <button class="button">Update</button>
                <button class="button">Delete</button>
            </div>
            <div class="output-container">
                <div v-for="settings in cymulateSettings" :key="settings.key" class="one-user">
                    <div class="user-name">{{settings.value}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'CymulateComponent',
        props: {},
        computed: {
            ...mapState({
                cymulateSettings: state => state.cymulate.cymulateSettings,
            })
        },
        methods: {
            ...mapActions('main', [
                'updateMessage'
            ]),
        },
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
    #cymulate.cymulate-component {
        h1 {

        }

        .content {
        }
    }
</style>
