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
        <app-bar>
          <template v-slot:toggle_btn>
            <div class="bar px-3">
                <label for="nav-toggle">
                    <span>
                        <img src="bar.svg" alt="" @click="openSidebar()" >
                    </span>
                </label>
            </div>
          </template>
        </app-bar>
      <!-- App bar end -->

      <!-- Sidebar Nav start -->
      <nav class="app-sidebar" :class="status ? 'app-sidebar--open' : ''">
        <SideBar v-if="isActive" />
      </nav>
      <!-- Sidebar Nav end -->

      <!-- Main content start -->
      <main class="main-content" :class="isActive ? 'main-content--active' : ''">
        <router-view/>
      </main>
      <!-- Main content end -->
      
      <!-- For check-in router -->
      
      <!-- Check in router end -->

    </template>
  </div>
</template>

<script>
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
    user: JSON.parse(localStorage.getItem('user')),
    isActive: false,
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
      openSidebar(){
          // console.log("open"),
          this.isActive = !this.isActive
      }
  },
}
</script>

<style>
.main-content--active{
  padding-left: 70px;
  z-index: 100 !important;
}

</style>
