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
      <div class="col-lg-4 col-md-6">
        <singleCard></singleCard>
      </div>
    </section>
  </div>
</template>

<script>
import userProfile from '@/components/UserProfile'
import singleCard from '@/components/SingleCard'
export default {
  props: ['username'],
  components: {
    userProfile,
    singleCard
  }
}
</script>
