<template>
  <div>
    <div class="row">
      <div class="col-4">
        <img :src="karigor.avatar" :alt="karigor.name" class="img-fluid circle">
      </div>
      <div class="col-8 p-3">
        <h1>{{ karigor.name }}</h1>
        <h2>{{ karigor.role }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  props: ['username'],
  computed: {
    ...mapGetters({
      karigorByUsername: `karigorByUsername`
    }),
    karigor () {
      return this.karigorByUsername(this.username) || {}
    }
  }
}
</script>

<style scoped>
img{
  max-height: 150px;
}
</style>
