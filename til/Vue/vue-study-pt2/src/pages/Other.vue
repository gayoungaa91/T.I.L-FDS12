<template>
  <div>
    other // {{otherCnt}}
  </div>
</template>

<script>
export default {
  computed: {
    otherCnt() {
      return this.$store.state.moduleA.countA
    }
  }
}
</script>

<style>

</style>