<template>
  <div class="min-h-screen flex flex-col bg-white text-black">
    <NavBar />
    
    <!-- Main content with flex-grow -->
    <main class="flex-grow pt-20">
      <router-view></router-view>
    </main>
    
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Footer from './components/Footer.vue';
import NavBar from './components/NavBar.vue';
</script>
