export default {
    state: {
        isTypeCredit: false,
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
    },
    mutations: {
        toggleTypeOfTransaction: (state) => state.isTypeCredit = !state.isTypeCredit,
        addTransaction: (state, transaction) =>
            state.transactions.unshift({
                ...transaction,
                type: state.isTypeCredit ? 'credit' : 'debit',
            }),
        removeTransaction: (state, transactionIndex) => state.transactions.splice(transactionIndex, 1),

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
    },
}