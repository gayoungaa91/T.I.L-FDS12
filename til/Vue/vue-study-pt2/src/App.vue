<template>
  <div id="app">
    <Sample />
    <Other  />
  </div>
</template>

<script>

import Sample from './pages/Sample.vue'
import Other from './pages/Other.vue'

export default {
  name: 'App',
  components: {
    Sample,
    Other
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
