<template>
  <div id="app">
    <!-- <template v-if="!$store.getters.authenticated"> -->
      <!-- Main content start -->
      <!-- <main class="main-content">
        <router-view/>
      </main> -->
      <!-- Main content end -->
    <!-- </template> -->
    
    <template >
      <!-- App bar start -->
      <nav class="app-bar">
        <AppBar/>
      </nav>
      <!-- App bar end -->

      <!-- Sidebar Nav start -->
      <nav class="app-sidebar">
        <SideBar/>
      </nav>
      <!-- Sidebar Nav end -->

      <!-- Main content start -->
      <main class="main-content">
        <router-view/>
      </main>
      <!-- Main content end -->
    </template>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import AppBar from './layout/Appbar.vue'
import AppBar from './layout/Appbar.vue/Appbar.vue';
import SideBar from './layout/SideBar.vue'

export default {
  name: 'App',
  components: {
    AppBar,
    SideBar
  },
  data: () => ({
    auth: false,
  }),
  
  mounted() {
    if(!this.$store.getters.authenticated) {
      this.redirectIfLoggedIn()
    } else {
      this.auth = true
    }
  },
  methods: {
    redirectIfLoggedIn() {
      this.auth = false;
      // this.$router.push({name:'LoginScreen'});
    },
  },
}
</script>

<style>

</style>
