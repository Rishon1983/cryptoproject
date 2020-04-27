<template>
    <div class="about-component">
        <img class="logo" alt="dev logo" src="@/assets/dev.jpg">
        <div class="bitcoin-container">
            <header>Check Bitcoin price</header>
        </div>
        <input class="input-file" type="file" @change="uploadFile">
        <div class="buttons-container">
            <button @click="getBitcoinFunction">GET Bitcoin Data</button>
            <button @click="getSomeFunction">Get</button>
            <button @click="postSomeFunction">Post</button>
        </div>
        <div class="bitcoin-data">
            <div v-for="(data, index) in bitcoinData" :key="index">
                <div>1 {{data.description}}: {{data.rate + ' ' + data.description}}</div>
            </div>
            <div v-if="Object.keys(bitcoinData).length > 0">
                <button @click="clearBitcoinData">Clear</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    // import Vue from 'vue';

    export default {
        name: "AboutComponent",
        data() {
            return {
                bitcoinData: {}
            }
        },
        methods: {
            getBitcoinFunction() {
                axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
                    .then(response => {
                        // handle success
                        console.log(response);
                        if (response.data && response.data.bpi) {
                            this.bitcoinData = response.data.bpi;
                        }
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .finally(function () {
                        // always executed
                    });
            },
            getSomeFunction() {
                // fetch('http://localhost/api/someFunc?param1=1234').then(data => {
                fetch('http://localhost/api/someFunc').then(data => {
                    console.log(data._bodyText);
                })
            },
            postSomeFunction() {
                // const body = new FormData();
                // body.append('param1', '1');
                // body.append('param2', '2');

                const headers = {
                    'Content-Type': 'application/x-www-form-urlencoded'
                };

                const sendData = {
                    headers: headers,
                    method: 'POST',
                    body: 'param1=123'
                };

                fetch('http://localhost/api/someFunc', sendData).then(res => {
                    console.log(res);
                })
            },
            uploadFile(event) {

                let file = event.target.files[0];
                const form = new FormData();

                form.append('file', file);

                const headers = {
                    'Authorization': 'Basic gL0j3Tprg2BBLDtJKFc910Yxh7Np7GRw',
                };

                const sendData = {
                    method: 'POST',
                    headers: headers,
                    body: form
                };

                fetch('https://api.tinify.com/shrink', sendData).then(data => {
                    console.log(data)
                })
            },
            clearBitcoinData() {
                this.bitcoinData = {};
                // Vue.set(this.$data, 'bitcoinData', {});
            }
        }
    }
</script>

<style lang="scss" scoped>
    .about-component {
        .logo {
            width: 20%;
        }

        .input-file {
            display: none;
        }

        .buttons-container {
            display: flex;
            align-items: center;
            justify-content: center;

            button {
                height: 40px;
                margin: 10px;
            }
        }
    }

</style>