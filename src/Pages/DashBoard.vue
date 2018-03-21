<template>
  <div>
    <!-- Add Card -->
    <section>
      <addCard></addCard>
    </section>
    <!-- User Cards -->
    <section>
      <div class="display-3 text-center mb-4">Karigor</div>
      <div class="row">
        <div class="col-md-6 col-lg-4" v-for="k in karigor" :key="k.id">
          <userCardGroup :id="k.id"></userCardGroup>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import addCard from '@/components/AddCard'
import userCardGroup from '@/components/UserCards'
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters({
      karigor: 'karigor'
    })
  },
  components: {
    addCard,
    userCardGroup
  },
  created () {
    this.$store.dispatch('GET_CARDS', [0, 1, 2])
  }
}
</script>

<style>
  .color{
    color: #42b983;
  }
</style>
