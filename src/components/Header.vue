<template>
  <div>
    <header class="shadow-inset">
      <div class="container">
        <div class="d-flex justify-content-around" :class="{'justify-content-between' : !user}">
          <router-link tag="div" :to="{name: 'DashBoard'}" class="blackBox px-5 font-poiret pointer">
            <h1>iidara</h1>
          </router-link>
          <div class="blackBox dropdown" @click="menu = !menu" v-if="user">
            <div class="px-3 d-flex font-poiret pointer">
              <img :src="user.avatar" class="img-fluid circle my-2" alt="">
              <div class=" ml-2 mt-3">
                {{ user.name }} <br>
                {{ user.role }}
              </div>
            </div>
            <transition name="swipe-down">
              <div class="dropdown-menu bg-light" v-if="menu">
                <router-link
                  :to="`/p/${user.username}`"
                  class="dropdown-item"
                  >Profile</router-link>
                <a class="dropdown-item" href="#">Start Working</a>
                <!-- <div class="dropdown-divider"></div> -->
                <div class="dropdown-item text-red pointer" @click="logout">Logout</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data () {
    return {
      menu: false
    }
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'LOGOUT'
    ]),
    async logout () {
      await this.LOGOUT()
      this.$router.push({name: 'LoginPage'})
    }
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Poiret+One');
  .font-poiret{
    font-family: 'Poiret One', cursive;
  }
  h1{
    font-size: 60px
  }
  header{
    position: relative;
    z-index: 5000;
    background-color: rgba(255,255,255,0.3);
    background-blend-mode: overlay;
    background-image: url('../assets/pattern_v2.png');
    background-size: 400px
  }
  .blackBox{
    /* display: inline-block; */
    background: #444;
    color: #fff;
  }
  img{
    height: 60px;
  }
  .dropdown{
    perspective: 50em
  }
  .dropdown-menu{
    padding: 0 0;
    display: block;
    right: 0;
    border-radius: 0;
    border-width: 2px;
    border-color: var(--primary);
    transition: all 0.3s ease-in-out;
  }
  .dropdown-divider{
    border-color: var(--primary)
  }
  .dropdown-item.active, .dropdown-item:active {
    background: var(--primary)
  }
  .dropdown-item:first-child{
    padding-top: 0.5rem;
  }
  .dropdown-item:last-child{
    padding-bottom: 0.5rem;
  }
</style>
