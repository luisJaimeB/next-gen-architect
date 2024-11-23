<template>
  <div class="min-h-screen bg-white text-black">
    <NavBar />
    
    <main class="pt-20">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
const menuItems = ['LANDSCAPE', 'ENGINEERING', 'ARCHITECTURE', 'PLANNING', 'PRODUCTS'];
</script>
