<template>
  <div class="wrapper">
    <div class="input-field">
      <label for="description">Description</label>
      <input type="text"
             id="description"
             name="transaction_description"
             placeholder="Enter your description"
             v-model="form.description"
      >
    </div>

    <div class="input-field">
      <label for="amount">Amount</label>
      <div>
        <span class="currency">$</span>
        <input type="text"
               id="amount"
               name="transaction_amount"
               v-model="form.amount"
        >
      </div>
    </div>
    <button @click.prevent="addTransaction">Add</button>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "AddTransaction",

  data() {
    return {
      form: {
        description: '',
        amount: '',
      }
    }
  },

  methods: {
    addTransaction: function () {
      this.$store.dispatch('addTransaction', this.form);
      this.clearFields();
    },
    clearFields: function () {
      this.form.description = '';
      this.form.amount = '';
    }
  },
  computed: mapState({
    isTypeCredit: state => state.isTypeCredit,
  }),
}
</script>

<style scoped>

</style>