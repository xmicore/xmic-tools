<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NavBar from './components/NavBar.vue'
import 'normalize.css'
import './assets/variables.css'

defineProps({
  msg: String
})

</script>

<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<style>
body {
  font-family: var(--font-family-primary);
  background-color: #ccc;
}
</style>

<style scoped>
.container {
        padding: 0 2rem;
}
</style>

