<template>
  <div class="transactions">
    <h1>My transactions</h1>
    <ul>
      <li v-for="(transaction, index) in transactions" :key="index">
        <div>{{ transaction.type }}</div>
        <div>{{ transaction.amount }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "Transactions",
  computed: mapGetters({
    transactions: 'getTransactions',
  })
}
</script>

<style scoped>

</style>