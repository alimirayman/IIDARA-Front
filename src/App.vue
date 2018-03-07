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
  }
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css');
.btn{
  border-radius: 0;
}
.bg-dark{
  background-color: #444 !important;
}
</style>
