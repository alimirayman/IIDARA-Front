<template>
  <div>
    <div class="card shadow-small bg-light border-0 mb-5">
      <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item shadow-inset" v-for="card in cards" :key="card.id">
          {{ card.title }} ({{ card.allocated_time }})
        </li>
      </ul>
      <div class="card-body row">
        <div class="col-sm-4 text-center">
          <img :src="karigor.avatar" class="img-fluid" :alt="karigor.name">
        </div>
        <div class="col-sm-8">
          <h5 class="card-title">{{ karigor.name }}</h5>
          <p class="card-text">{{ karigor.role }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  props: ['id'],
  computed: {
    cards () {
      return this.$store.getters.userCards(this.id)
    },
    karigor () {
      return this.$store.getters.karigorInd(this.id)
    }
  }
}
</script>

<style scoped>
img{
  border-radius: 50% !important;
  max-height: 50px;
}
</style>
