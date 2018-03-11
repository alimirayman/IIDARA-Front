<template>
  <div>
    <div class="card shadow-small bg-light border-0 mb-5">
      <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
      <ul class="list-group list-group-flush">
        <li class="list-group-item" v-for="card in cards" :key="card.id">
          {{ card.title }} ({{ card.allocated_time }})
        </li>
      </ul>
      <div class="card-body row">
        <div class="col-sm-4 text-center">
          <img :src="karigor.avatar" class="img-fluid circle" :alt="karigor.name">
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
import {mapGetters} from 'vuex'
export default {
  props: ['id'],
  computed: {
    ...mapGetters({
      userCards: 'userCards',
      karigorByID: 'karigorByID'
    }),
    cards () {
      return this.userCards(this.id) || {}
    },
    karigor () {
      return this.karigorByID(this.id) || {}
    }
  }
}
</script>

<style scoped>
img{
  max-height: 50px;
}
li{
  position: relative;
  margin: 10px 10px 0;
  border: 0;
  background: #eee;
  /* padding-bottom: 0; */
  transition: all 0.3s ease-out;
  transform-origin: bottom;
  cursor: pointer;
}
li:hover{
  padding-bottom: 30px;
  /* transform: translateY(-30px); */
}
li:hover::after{
  /* transform: translateY(30px); */
}
li::after{
  content: "";
  height: 20px;
  width: calc(100% + 20px);
  border-top: 1px solid rgba(0,0,0,0.125);
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  position: absolute;
  bottom: -20px;
  left: -10px;
  box-shadow: 0px -8px 16px -8px rgba(0,0,0,0.36);
  transition: all 0.3s ease-out;
  transform-origin: bottom;
}
</style>
