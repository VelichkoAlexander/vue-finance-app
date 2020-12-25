<template>
  <div class="account-balance">Account Balance: <span>{{ formatMoney(getTotal) }}</span></div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: "BalanceBar",
  computed: {
    ...mapGetters([
      'getTotal'
    ])
  }
}
</script>

<style scoped lang="scss">
  .account-balance {
    text-align: center;
    font-style: italic;

    span {
      font-weight: 500;
    }
  }
</style>