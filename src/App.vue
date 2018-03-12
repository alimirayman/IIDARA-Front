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
  mounted () {
    this.testBenchMock()
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css');
/* @import url('https://fonts.googleapis.com/icon?family=Material+Icons'); */

#app{
  --primary: #444;
}

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
  box-shadow: 0px 6px 24px -12px;
}
img.circle{
  border-radius: 50%;
}
.pointer{
  cursor: pointer;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.swipe-down-enter-active, .swipe-down-leave-active {
  /* z-index: 1000; */
  /* perspective: 1000px; */
  transform-origin: top;
  transform: rotateX(0deg);
  /* transition: all .3s; */
}
.swipe-down-enter, .swipe-down-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: rotateX(-90deg);
  /* perspective: 1000px; */
  transform-origin: top;
  opacity: 0.6;
  /* z-index: 0; */
}
</style>
