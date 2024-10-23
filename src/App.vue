<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import { RouterView, useRoute } from 'vue-router';
</script>

<template>
  <Header />
  <Router-view />
  <Footer />
</template>

