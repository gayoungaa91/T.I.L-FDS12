<template>
  <div id="app">
    <!-- <dashboard></dashboard> -->
    <!-- <router-link to='/'>home</router-link>
    <router-link to='/page1'>page1</router-link>
    <router-link to='/page2'>page2</router-link>
    <router-link to='/location'>page3</router-link> -->
    현재 보고 계신 페이지는 {{url}} 입니다
    <Layout />
  </div>
</template>

<script>

import Layout from './Layout/Layout.vue';
// import Dashboard from './components/Dashboard.vue';

export default {
  name: 'App',
  components: {
    // 'dashboard': Dashboard
    Layout
  },
  data () {
    return {
      url: '/'
    }
  },
  watch: {
    '$route' (to, from) {
      console.log(to);
      console.log(from);
      this.url = to.path;
    }
  }
}

</script>

<style>
* {padding: 0; margin: 0; box-sizing: border-box;}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active { color: red; font-weight: bold;}
</style>
