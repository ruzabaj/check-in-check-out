<template>
  <div id="app">
    <template v-if="!$store.getters.authenticated">
      <!-- Main content start -->
      <main class="main-content">
        <router-view/>
      </main>
      <!-- Main content end -->
    </template>
    
    <template v-else>
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
// import { CHECK_AUTH } from './store/modules/auth';

export default {
  name: 'App',
  components: {
    AppBar,
    SideBar
  },
  data: () => ({
    auth: false,
    user: JSON.parse(localStorage.getItem('user'))
  }),
  
  mounted() {
    if(!this.$store.getters.authenticated) {
      this.redirectIfLoggedIn()
    }
    else if(this.user.token) {
      this.$store.commit('CHECK_AUTH', true);
      this.auth = true;
    } 
    else {
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
