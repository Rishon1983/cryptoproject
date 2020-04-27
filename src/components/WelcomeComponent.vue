<template>
    <div class="main-component">
        <h1>{{ messageTitle }}</h1>
        <label>
            <input class="title-msg-input" :value="message" :title="message"
                   @input="updateMessage($event.target.value)">
        </label>
    </div>
</template>

<script>
    import {mapState, mapActions} from 'vuex';

    export default {
        name: 'WelcomeComponent',
        props: {},
        computed: {
            ...mapState({
                messageTitle: state => state.main.msgTitle,
                message: state => state.main.msg
            })
        },
        methods: {
            ...mapActions('main', [
                'updateMessage'
            ]),
        },
        created() {
            this.$store.dispatch('main/getMainMessage');
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    .main-component {
        .title-msg-input {
            height: 30px;
            padding: 0 5px;
        }
    }
</style>
