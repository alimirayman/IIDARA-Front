<template>
  <div>
    <!-- User Profile -->
    <section class="row">
      <div class="col-lg-8 col-md-12 mx-auto">
        <userProfile :username="username" class="my-5"></userProfile>
      </div>
    </section>
    <!-- User Cards -->
    <section class="row">
      <div class="col-lg-4 col-md-6" v-for="card in cards" :key="card.id">
        <singleCard :id="card.id"></singleCard>
      </div>
    </section>
  </div>
</template>

<script>
import userProfile from '@/components/UserProfile'
import singleCard from '@/components/SingleCard'
import {mapGetters} from 'vuex'

export default {
  props: ['username'],
  computed: {
    ...mapGetters([
      'getCardsById',
      'karigorByUsername'
    ]),
    cards () {
      return this.getCardsById(this.karigorByUsername(this.username).id)
    }
  },
  components: {
    userProfile,
    singleCard
  }
}
</script>
