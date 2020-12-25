<template>
  <div class="wrapper" v-on:keyup.enter="addTransaction">
    <template v-if="errors">
      <ul class="errors-list">
        <li v-for="error in errors" :key="error">- {{ error }}</li>
      </ul>
    </template>
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
        <input type="number"
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
      },
      errors: [],
    }
  },

  methods: {
    addTransaction: function () {
      if (!this.validForm()) {
        return;
      }

      this.form.amount *= 100;

      this.$store.dispatch('addTransaction', this.form);
      this.$router.push({path: '/'});

      this.clearFields();
    },
    clearFields: function () {
      this.form.description = '';
      this.form.amount = '';
    },
    validForm: function () {
      this.errors = [];

      if (!this.form.description) {
        this.errors.push('Description is required');
      }

      if (!this.form.amount) {
        this.errors.push('Amount is required');
      }

      return (!this.errors.length);
    }
  },
  computed: mapState({
    isTypeCredit: state => state.isTypeCredit,
  }),
}
</script>

<style scoped lang="scss">
.errors-list {
  margin: 20px auto;
  padding: 0;

  li {
    list-style: none;
    color: $pink;
  }
}
</style>