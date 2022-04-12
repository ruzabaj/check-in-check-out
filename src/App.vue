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
      <nav class="app-bar"></nav>
      <!-- App bar end -->

      <!-- Sidebar Nav start -->
      <nav class="app-sidebar"></nav>
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

export default {
  name: 'App',
  components: {
    
  },
  data: () => ({
    auth: false,
  }),
  methosds: {
    redirectIfLoggedIn() {
      this.auth = false;
      // this.$router.push({name:'LoginScreen'});
    },
  },
  mounted() {
    if(!this.$store.getters.authenticated) {
      this.redirectIfLoggedIn()
    } else {
      this.auth = true
    }
  }
}
</script>

<style>

</style>
