<template>

  <div id="app">
    <navigation></navigation>
    <BalanceBar></BalanceBar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import BalanceBar from '@/components/BalanceBar'
import {store} from './store/index';
import {router} from '@/router';

export default {
  name: 'finance-app',
  router,
  store,
  components: {
    Navigation,
    BalanceBar
  }
}
</script>

<style lang="scss">

* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

body {
  margin: 0;
  padding: 0;
  font-family: $system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $gray;
}

h1 {
  @include heading-3($black);
}

h4 {
  margin: 0;
  line-height: 34px;
  font-size: 24px;
  text-align: center;
  color: #ffffff;
}

p {
  @include large-text-bold($purple);
}

.wrapper {
  margin: 0 auto;
  padding: 0 15px;
  width: 425px;
}

.text-center {
  text-align: center;
}

.input-field {
  margin-bottom: 20px;

  label {
    display: inline-block;
    margin-bottom: 10px;
  }

  div {
    position: relative;
    .currency {
      position: absolute;
      display: flex;
      align-items: center;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      font-size: 25px;
      padding: 5px;
      color: rgba($black, 0.3);
    }
  }
}

input {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: $black;
  padding-left: 20px;

  &::placeholder {
    color: rgba($black, 0.3);
  }
  &:focus {
    border: 1px solid $blue;
    box-shadow: 0 0 0 1px $blue;
    outline: none;
  }
}

button {
  background: #56ccf2;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  margin-top: 20px;
  margin-bottom: 40px;
  cursor: pointer;

  &:hover {
    box-shadow: none;
  }
}

a {
  line-height: 25px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
}

.red {
  color: $pink
}

.green {
  color: $dark-green;
}
</style>
