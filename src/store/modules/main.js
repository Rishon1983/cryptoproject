import mainData from "@/api/mainData";

// initial state
const state = {
    msgTitle: 'Welcome to GorAlex',
    msg: ''
};

// getters are functions.
const getters = {};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
    getMainMessage({commit}) {
        mainData.getMainMsg(msg => {
            commit('setMainMessage', {msg: msg, msgTitle: 'Add your message:'});
        })
    },
    updateMessage({commit}, msg) {
        commit('setMainMessage', {msg: msg, msgTitle: msg || 'Add your message:'});
    }
};
// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    setMainMessage(state, messageData) {
        state.msgTitle = messageData.msgTitle;
        state.msg = messageData.msg;
    }
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