// initial state
// import mainData from "@/api/mainData";
import axios from "axios";

const state = {
    cymulateUsers: [
        {
            id: 'tyfyfy898',
            username: 'Alex1',
            password: 'ubuyg6755r6'
        }
    ],
    cymulateSettings: []
};

// getters are functions.
const getters = {};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    settingsAction({commit}, data) {

        console.log('data:', data)
        axios.post('http://localhost:80/api/v1/' + data.action + 'CymulateSettings', data).then(res => {
            console.log(res);
            commit(data.action + 'Settings', res.data.result);
        })

        // const headers = {
        //     'Content-Type': 'application/x-www-form-urlencoded'
        // };
        // const sendData = {
        //     headers: headers,
        //     method: 'POST',
        //     body: data.settingsId
        // };

        // fetch('/api/v1/' + data.action + 'CymulateSettings', sendData).then(res => {
        //     console.log(res);
        //     commit(data.action + 'Settings', res);
        // })
    },
};
// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    getSettings(state, res) {
        state.cymulateSettings = res.settingsArray;
    },
    updateSettings(state, res) {
        state.cymulateSettings.forEach(settings => {
            if (settings.key === res.settings.key) {
                settings = res.settings;
            }
        })
    },
    deleteSettings(state, res) {
        state.cymulateSettings.filter(settings => {
            return settings.key !== res.settings.key;
        })
    },
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}