<template>
  <article class="transition-item">
    <div :title="transaction.type">
      <PlusSign v-if=" 'debit' === transaction.type" :color="'#fff'" :bg-color="'#14f1d9'"></PlusSign>
      <MinusSign v-else :color="'#fff'" :bg-color="'#e1467c'"></MinusSign>
    </div>
    <div class="transition-item__desc">{{ transaction.description }}</div>
    <div>{{ formatMoney(transaction.amount)}}</div>
  </article>
</template>

<script>
import PlusSign from '@/components/ui/PlusSign';
import MinusSign from "@/components/ui/MinusSign";

export default {
  name: "Transaction-item",
  props: {
    transaction: {
      type: Object,
      default: null,
    }
  },
  components: {
    PlusSign,
    MinusSign,
  }
}
</script>

<style scoped lang="scss">
.transition-item {
  min-height: 60px;
  font-size: 20px;
  display: grid;
  grid-template-columns:  50px repeat(2, 1fr);
  grid-gap: 5px;
  align-items: center;

  div {
    text-align: center;
  }
}

.transition-item__desc {
  font-weight: 500;
}

</style>