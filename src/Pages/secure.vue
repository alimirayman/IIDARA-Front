<template>
  <router-view></router-view>
</template>

<script>
export default {
  methods: {
    async checkLogin () {
      try {
        await this.$store.dispatch('LOGIN')
        await this.$store.dispatch('GET_KARIGOR')
        await this.$store.dispatch('GET_CARDS', [0, 1, 2])
      } catch (err) {
        this.$store.dispatch('LOGOUT')
        this.$router.push({name: 'LoginPage'})
        console.log(err)
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>
