export default {
    state: {
        transactionModal: false,
        transactionModalResolve: null,
    },
    getters: {
        getTransactionsModalState: (state) => state.transactionModal,
    },
    mutations: {
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
    }

}