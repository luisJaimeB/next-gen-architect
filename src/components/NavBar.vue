<template>
  <nav class="fixed w-full bg-white z-50 shadow-sm">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <div class="flex items-center">
        <router-link to="/" class="flex items-center">
          <img src="/src/assets/logo-nav-negro01.png" alt="Company Logo" class="h-8 w-auto mr-2" />
        </router-link>
      </div>
      <ul class="flex space-x-8 text-sm tracking-wide">
        <li><router-link to="/" class="hover:text-gray-700 transition-colors">Home</router-link></li>
        <li><router-link to="/projects" class="hover:text-gray-700 transition-colors">Projects</router-link></li>
        <li><router-link to="/contact" class="hover:text-gray-700 transition-colors">Contact</router-link></li>
        <li><router-link to="/about" class="hover:text-gray-700 transition-colors">About us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// No additional script needed for this component
</script>