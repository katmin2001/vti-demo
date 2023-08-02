<script setup>
import { ref, computed } from 'vue'
import Home from './components/home/home.vue'
import Detail from './components/detail/detail.vue'

const routes = {
  '/': Home,
  '/detail': Detail
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
  <a href="#/detail">Detail</a>
  <component :is="currentView" />
</template>

<style scoped></style>
