<template>
  <div
      class="toggle"
      @click.prevent="toggleTypeOfTransaction"
  >
    <div class="toggle-switch"
         :class="{'toggle-left' : !isTypeCredit, 'toggle-right' : isTypeCredit}"
      >
      <span v-if="isTypeCredit">Credit</span>
      <span v-else>Debit</span>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  computed: mapState({
    isTypeCredit: state => state.isTypeCredit,
  }),
  methods: {
    toggleTypeOfTransaction() {
      this.$store.dispatch('toggleTypeOfTransaction');
    }
  }
};

</script>


<style scoped lang="scss">
.toggle {
  cursor: pointer;

  border-radius: 10px;
  width: 175px;
  box-sizing: border-box;
  margin: 10px auto;
  display: flex;
  background: linear-gradient(346.78deg, #f7fcfc 0%, #fafcfa 100%);
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.1);
}

.toggle-switch {
  width: 50%;
  margin: 2px;
  padding: 15px 0;
  text-align: center;
  border-radius: 8px;
  background: #FFFFFF;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: .8s cubic-bezier(.2,.8,.2,1);
}

.toggle-left {
  transform: translateX(0);
}

.toggle-right {
  transform: translateX(95%);
}
</style>