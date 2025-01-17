<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import NavigationMenu from '@/components/NavigationMenu.vue'


</script>

<template>
  <div id="app">
    <div id="nav">
      <!-- <RouterLink :to="{ name: 'Home' }">Home</RouterLink>|
      <RouterLink :to="{ name: 'About' }">About</RouterLink> -->
      <NavigationMenu />
    </div>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h4 {
  font-size: 20px;
}
</style>
