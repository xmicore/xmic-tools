<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import './assets/style.css'

defineProps({
  msg: String
})

</script>

<template>
  <div class="app">
    <div class="sidebar">
      <NavBar />
    </div>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  font-family: var(--font-family-primary);
  background-color: #ccc;
}

#app {
  height: 100%;
}
</style>

<style scoped>
.app {
  display: flex;
  height: 100%;
}
.sidebar {
  width: 200px;
  align-items: stretch;
}
.container {
  padding: 0.5rem 2rem;
  flex-grow: 1;
}
</style>

