<template>
    <div id="cymulate" class="cymulate-component">
        <h1> Cymulate test </h1>
        <div class="content">
            <div class="buttons-container">
                <div class="button-container">
                    <button @click="settingsAction({settingsId: null, action: 'get'})" class="button">Get</button>
                </div>
                <div class="button-container">
                    <button @click="settingsAction({settingsId: null, action: 'create'})" class="button">Create</button>
                </div>
                <div class="button-container">
                    <button @click="updateSettings" class="button">Update</button>
                    <label>
                        <input v-model="updateId" placeholder="SettingsId">
                    </label>
                </div>
                <div class="button-container">
                    <button @click="deleteSettings" class="button">Delete
                    </button>
                    <label>
                        <input v-model="deleteId" placeholder="SettingsId">
                    </label>
                </div>
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
        data() {
            return {
                updateId: '',
                deleteId: ''
            }
        },
        computed: {
            ...mapState({
                cymulateSettings: state => state.cymulate.cymulateSettings,
            })
        },
        methods: {
            ...mapActions('cymulate', [
                'settingsAction'
            ]),
            updateSettings() {
                if (this.updateId !== '' && typeof this.updateId === 'string') {
                    this.settingsAction({settingsId: this.updateId, action: 'update'});
                } else {
                    alert('please, check updateId');
                }
            },
            deleteSettings() {
                if (this.deleteId !== '' && typeof this.updateId === 'string') {
                    this.settingsAction({settingsId: this.deleteId, action: 'delete'});
                } else {
                    alert('please, check settingsId');
                }
            }
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
            .buttons-container {
                display: flex;
                flex-direction: column;
                align-items: baseline;

                .button-container {
                    display: flex;
                    align-items: center;

                    button {
                        height: 35px;
                        width: 90px;
                        padding: 0 20px;
                        margin: 10px;
                        cursor: pointer;
                    }

                    input {
                        height: 35px;
                        padding: 0 5px;
                    }
                }
            }
        }
    }
</style>
