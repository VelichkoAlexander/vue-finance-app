import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isTypeCredit: false,
        transactionModal: false,
        transactionModalResolve: null,
        transactions: [
            {type: 'debit', description: 'Vue Class', amount: 4500},
            {type: 'credit', description: 'Payroll', amount: 100000},
        ],
    },
    getters: {
        getTransactions: (state) => state.transactions,
        getTotal: (state) => state.transactions.reduce((acc, current) => {
            if('debit' === current.type) {
                return acc + current.amount;
            }
            return acc - current.amount;
        }, 0),
        getTransactionsModalState: (state) => state.transactionModal,
    },
    mutations: {
        toggleTypeOfTransaction: (state) => state.isTypeCredit = !state.isTypeCredit,
        addTransaction: (state, transaction) =>
            state.transactions.unshift({
                ...transaction,
                type: state.isTypeCredit ? 'credit' : 'debit',
            }),
        removeTransaction: (state, transactionIndex) => state.transactions.splice(transactionIndex, 1),
        hideTransactionModal: (state) => {
            state.transactionModalResolve = null;
            state.transactionModal = false;
        },
        showTransactionModal: (state, payload) => {
            state.transactionModalResolve = payload.resolve;
            state.transactionModal = true;
        },
        resolveModal: (state) => state.transactionModalResolve(),
    },
    actions: {
        toggleTypeOfTransaction({commit}) {
            commit('toggleTypeOfTransaction');
        },
        addTransaction({commit}, transaction) {
            commit('addTransaction', transaction);
        },
        removeTransaction({commit}, transactionIndex) {
            commit('removeTransaction', transactionIndex);
        },
        removeTransactionModal({commit}) {
            commit('hideTransactionModal');
        },
        showModal({commit}) {
            return new Promise((resolve) => {
                console.log(resolve)
                commit('showTransactionModal', {resolve});
            })
        },
        resolveModal: function (context) {
            context.commit('resolveModal');
            context.commit('hideTransactionModal');
        }
    },
});

export {store};
