<template>
  <div class="nav-wrapper nav-light" id="nav">
    <nav class="nav-1">
      <router-link to="/">Transaction</router-link>
      <router-link to="/transactions/create">+ Add</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped lang="scss">
.nav-light {
  background: #f0f3f5;
  box-shadow: 1px 3px 20px 4px #c6d0eb59;
}


#nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;
  margin-bottom: 30px;

  a {
    font-weight: bold;
    color: $dark-gray;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &.router-link-exact-active {
      color: $middle-blue;
    }
  }

  a,
  img {
    &:hover {
      cursor: pointer;
    }
  }
}

.nav-1 {
  margin: 0 auto;
  display: flex;
  min-height: 42px;
  align-items: center;

  a {
    margin-left: 20px;
    margin-right: 20px;
  }
}
</style>