<script setup>
import { ref, computed } from 'vue'
import Home from './components/home/home.vue'
import Detail from './components/detail/detail.vue'
import Login from './components/login/login.vue'
import Signup from './components/signup/signup.vue'
const routes = {
  '/': Home,
  '/detail': Detail,
  '/login': Login,
  '/signup': Signup
}
const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/']
})
</script>

<template>
  <a href="#/">Home</a> |
  <a href="#/detail">Detail</a> |
  <a href="#/login">Login</a> |
  <a href="#/signup">Sign up</a>
  <component :is="currentView" />
</template>

<style scoped></style>
