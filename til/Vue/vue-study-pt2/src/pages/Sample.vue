<template>
  <div>
    <button v-on:click="addCnt">addCnt - mutation</button>
    <button v-on:click="addCntAction">addCnt - action</button>
    Sample // {{countFromA}}
  </div>
</template>

<script>
  export default {
    computer: {
      countFromA () {
        return this.$store.state.moduleA.countA
      }
    },
    methods: {
      addCnt () {
        this.$store.commit('increment');
      },
      addCntAction () {
        this.$store.dispatch('incrementAction')
      }
    }
  }
</script>

<style>

</style>