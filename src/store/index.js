import Vue from 'vue';
import Vuex from 'vuex';
import modal from '@/store/modules/modal';
import transaction from '@/store/modules/transaction';

Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        modal,
        transaction,
    }
});

export {store};
