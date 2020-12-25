<template>
  <div class="wrapper">
    <h1 class="text-center">My transactions</h1>
    <div v-if="transactions.length" class="transactions-list">
      <TransactionsItem
          v-for="(transaction, index) in transactions"
          :key="index"
          :transaction="transaction"
      ></TransactionsItem>
    </div>
    <div v-else class="message">
      <h2>You don't have any transactions.</h2>
      <router-link to="/transactions/create" class="link">Add transaction</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import TransactionsItem from '../components/TransactionItem'

export default {
  name: "Transactions",
  components: {
    TransactionsItem,
  },
  computed: mapGetters({
    transactions: 'getTransactions',
  })
}
</script>

<style scoped lang="scss">
.message {
  text-align: center;

  a {
    font-weight: bold;
    color: $dark-gray;
    line-height: 25px;
    font-size: 16px;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
}
</style>