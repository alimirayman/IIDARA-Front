<template>
  <div>
    <addCard></addCard>
  </div>
</template>

<script>
import addCard from '@/components/AddCard'
export default {
  components: {
    addCard
  },
  created () {
    this.$store.dispatch('GET_CARDS')
  }
}
</script>

<style>
  .color{
    color: #42b983;
  }
</style>
