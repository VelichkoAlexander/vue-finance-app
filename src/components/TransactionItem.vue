<template>
  <article class="transition-item">
    <div :title="transaction.type">
      <PlusSign v-if=" 'debit' === transaction.type" :color="'#fff'" :bg-color="'#14f1d9'"></PlusSign>
      <MinusSign v-else :color="'#fff'" :bg-color="'#e1467c'"></MinusSign>
    </div>
    <div class="transition-item__desc">{{ transaction.description }}</div>
    <div>{{ formatMoney(transaction.amount) }}</div>
    <div>
      <button
          class="transition-item__delete-btn"
          type="button"
          @click.prevent="removeTransaction(getKey())"
      >
        <DeleteIcon></DeleteIcon>
      </button>
    </div>
  </article>
</template>

<script>
import PlusSign from '@/components/ui/PlusSign';
import MinusSign from "@/components/ui/MinusSign";
import DeleteIcon from "@/components/ui/DeleteIcon";

export default {
  name: "Transaction-item",
  props: {
    transaction: {
      type: Object,
      default: null,
    },
  },
  components: {
    PlusSign,
    MinusSign,
    DeleteIcon,
  },
  methods: {
    getKey: function () {
      return this.$vnode.key;
    },
    removeTransaction: function (index) {
      this.$store.dispatch('showModal')
          .then(() => {
            return this.$store.dispatch('removeTransaction', index)})
      // this.$store.dispatch('removeTransaction', index);
    }
  }
}
</script>

<style scoped lang="scss">
.transition-item {
  min-height: 60px;
  margin-bottom: 15px;
  font-size: 20px;
  display: grid;
  grid-template-columns:  50px repeat(2, 1fr) 50px;
  grid-gap: 5px;
  align-items: center;

  div {
    text-align: center;
  }

  &__desc {
    font-weight: 500;
  }

  &__delete-btn {
    padding: 0;
    margin: 0 auto;
    max-width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $light-gray;
  }
}


</style>