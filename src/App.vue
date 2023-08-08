<script setup>
import { ref, computed } from 'vue'
import Home from './components/home/home.vue'
import Detail from './components/detail/detail.vue'
import Login from './components/login/login.vue'
import Signup from './components/signup/signup.vue'
import Cart from './components/cart/cart.vue'
</script>

<template>
  <router-view></router-view>
</template>

<style>
.carousel__next{
  right: -20px !important;
}
.carousel__prev{
  left: -20px !important;
}
</style>
