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
                        <input v-model="updateId" placeholder="Update by settingsId">
                    </label>
                </div>
                <div class="button-container">
                    <button @click="deleteSettings" class="button">Delete
                    </button>
                    <label>
                        <input v-model="deleteId" placeholder="Delete by settingsId">
                    </label>
                </div>
            </div>
            <h2>{{cymulateSettingsHeaderAction}}</h2>
            <div class="output-container">
                <div v-for="settings in cymulateSettings" :key="settings.key" class="one-row-container">
                    <div class="one-row">
                        <span class="text">id:</span>
                        <span>{{settings._id}}</span>
                    </div>
                    <div class="one-row">
                        <span class="text">key:</span>
                        <span>{{settings.key}}</span>
                    </div>
                    <div class="one-row">
                        <span class="text">value:</span>
                        <span>{{settings.value}}</span>
                    </div>
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
                cymulateSettingsHeaderAction: state => state.cymulate.cymulateSettingsHeaderAction,
            })
        },
        methods: {
            ...mapActions('cymulate', [
                'settingsAction'
            ]),
            updateSettings() {
                if (this.updateId !== '' && typeof this.updateId === 'string') {
                    this.settingsAction({settingsId: this.updateId, action: 'update'});
                    this.clearInputsSettingsId();
                } else {
                    alert('please, check updateId');
                }
            },
            deleteSettings() {
                if (this.deleteId !== '' && typeof this.updateId === 'string') {
                    this.settingsAction({settingsId: this.deleteId, action: 'delete'});
                    this.clearInputsSettingsId();
                } else {
                    alert('please, check settingsId');
                }
            },
            clearInputsSettingsId() {
                this.updateId = '';
                this.deleteId = ''
            }
        },
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" lang="scss" scoped>
    #cymulate.cymulate-component {
        h2 {
            display: flex;
            justify-content: flex-start;
            margin-inline-start: 50px;
            font-weight: bold;
            text-decoration: underline;
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
                        width: 188px;
                        padding: 0 5px;
                    }
                }
            }

            .output-container {
                display: flex;
                flex-direction: column;
                align-items: baseline;

                .one-row-container {
                    display: flex;
                    flex-direction: column;
                    align-items: baseline;
                    border-bottom: 1px solid #ececec;
                    padding: 5px 15px;

                    .one-row {
                        .text {
                            font-weight: bold;
                            margin-inline-end: 10px;
                        }
                    }
                }
            }
        }
    }
</style>
