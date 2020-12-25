<template>
  <div class="add-transaction">
    <h1 class="text-center">Add Transaction</h1>
    <div class="add-transaction__toggle">
      <TypeToggle></TypeToggle>
      <AddTransaction></AddTransaction>
    </div>
  </div>
</template>

<script>
import TypeToggle from '../components/TypeToggle';
import AddTransaction from "@/components/AddTransaction";

export default {
  components: {
    TypeToggle,
    AddTransaction,
  }
};
</script>

