<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation';
import {store} from './store/index';
import {router} from '@/router';

export default {
  name: 'finance-app',
  router,
  store,
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #F0F3F5;
  margin-top: 60px;
}
</style>
