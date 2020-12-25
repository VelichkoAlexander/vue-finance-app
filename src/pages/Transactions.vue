<template>
  <div class="wrapper">
    <h1 class="text-center">My transactions</h1>
    <div class="transactions-list">
      <TransactionsItem
          v-for="(transaction, index) in transactions"
          :key="index"
          :transaction="transaction"
      ></TransactionsItem>
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

</style>