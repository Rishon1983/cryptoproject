<template>
    <div id="cymulate" class="cymulate-component">
        <h1> Cymulate test </h1>
        <h3 v-if="login">Hi, {{userName}} !</h3>
        <div v-if="login" class="content">
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
        <div v-if="!login" class="content login">
            <div class="login-container">
                <h3>Login</h3>
                <div class="login-input-container">
                    <label>
                        <input v-model="loginName" placeholder="name">
                    </label>
                </div>
                <div class="login-input-container">
                    <label>
                        <input v-model="loginPassword" placeholder="password">
                    </label>
                </div>
                <button @click="loginAction">Login</button>
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
                deleteId: '',
                loginName: 'Cymulate',
                loginPassword: 'Cymulate'
            }
        },
        computed: {
            ...mapState({
                cymulateSettings: state => state.cymulate.cymulateSettings,
                cymulateSettingsHeaderAction: state => state.cymulate.cymulateSettingsHeaderAction,
                login: state => state.cymulate.login,
                userName: state => state.cymulate.userName
            })
        },
        methods: {
            ...mapActions('cymulate', [
                'settingsAction',
                'loginClient'
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
            },
            loginAction() {
                if (this.loginName !== '' && this.loginPassword !== '') {
                    this.loginClient({username: this.loginName, password: this.loginPassword});
                } else {
                    alert('please, put name and password');
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

            &.login {
                display: flex;
                align-items: center;
                justify-content: center;

                .login-container {
                    width: 300px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    box-shadow: 0 0 8px 2px #ccc;

                    .login-input-container {
                        height: 30px;
                        margin: 10px 0 25px 0;

                        input {
                            height: 35px;
                            margin: 10px;
                            padding: 0 10px;
                        }
                    }

                    button {
                        width: 100px;
                        height: 30px;
                        margin: 10px 0 30px 0;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
