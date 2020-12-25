import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isTypeCredit: false,
        transactions: [
            {type: 'debit', description: 'Vue Class', amount: 4500},
            {type: 'credit', description: 'Payroll', amount: 100000},
        ],
    },
    getters: {
        getTransactions: (state) => state.transactions,
    },
    mutations: {
        toggleTypeOfTransaction: (state) => state.isTypeCredit = !state.isTypeCredit,
        addTransaction: (state, transaction) =>
            state.transactions.unshift({
                ...transaction,
                type: state.isTypeCredit ? 'credit' : 'debit',
            }),
    },
    actions: {
        toggleTypeOfTransaction({commit}) {
            commit('toggleTypeOfTransaction');
        },
        addTransaction({commit}, transaction) {
            commit('addTransaction', transaction);
        }
    },
});

export {store};
