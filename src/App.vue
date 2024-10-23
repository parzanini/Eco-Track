<script setup>
import Navbar from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView, useRoute } from 'vue-router';
</script>

<template>
  <Navbar />
  <Router-view />
  <Footer v-if="useRoute().name !== 'Home'" />
</template>

