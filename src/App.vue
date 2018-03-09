<template>
  <div id="app">
    <heading></heading>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import heading from './components/Header'

export default {
  name: 'App',
  components: {
    heading
  },
  methods: {
    async testBenchMock () {
      await this.$store.dispatch('LOGIN')
      await this.$store.dispatch('GET_KARIGOR')
    }
  },
  created () {
    this.testBenchMock()
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css');
/* @import url('https://fonts.googleapis.com/icon?family=Material+Icons'); */

.btn{
  border-radius: 0;
}
.btn:focus{
  box-shadow: none;
}
.bg-dark{
  background-color: #444 !important;
}
.shadow-inset{
  box-shadow: 0px -8px 16px -12px #444 inset;
}
.shadow-small{
  box-shadow: 0px 4px 14px -8px;
}
.shadow-large{
    box-shadow: 0px 8px 24px -12px;
}
</style>
