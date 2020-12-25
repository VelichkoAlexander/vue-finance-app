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
    <Modal
        title="Are you sure?"
        v-show="isModalShow"
        @close="modalClose">
      <div slot="body">
        <p> This action can't be undone. </p>
        <div class="modal-footer-wrapper">
        <button @click="modalClose">Cancel</button>
        <button @click="modalDo">OK</button>
      </div>
      </div>
    </Modal>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

import TransactionsItem from '../components/TransactionItem';
import Modal from "@/components/ui/Modal";

export default {
  name: "Transactions",
  components: {
    TransactionsItem,
    Modal,
  },
  computed: mapGetters({
    transactions: 'getTransactions',
    isModalShow: 'getTransactionsModalState',
  }),
  methods: {
    modalClose: function () {
      return this.$store.dispatch('removeTransactionModal');
    },
    modalDo: function () {
      return this.$store.dispatch('resolveModal');
    }
  }
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

.modal-footer-wrapper {
  display: flex;
  justify-content: space-around;

  button {
    max-width: 45%;
    margin: 0;
  }
}
</style>