import Vue from 'vue';
import Vuex from 'vuex';
import main from './modules/main';
import cymulate from './modules/cymulate';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    modules: {
        main,
        cymulate
    },
    strict: debug
})