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
  sockets: {
    connection () {
      console.log('socket connected')
    },
    cardChange () {
      this.$store.dispatch('GET_CARDS', [0, 1, 2])
    }
  },
  created () {
    let vm = this
    vm.checkLogin()
  }
}
</script>
