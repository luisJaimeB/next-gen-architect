<template>
    <nav class="fixed w-full bg-white z-50 shadow-sm">
      <div class="container mx-auto px-4 py-6">
        <ul class="flex justify-end space-x-12 text-sm tracking-wide">
          <li><router-link to="/" class=" hover:text-gray-700 transition-colors">Home</router-link></li>
          <li><router-link to="/projects" class=" hover:text-gray-700 transition-colors">Projects</router-link></li>
          <li><router-link to="/contact" class=" hover:text-gray-700 transition-colors">Contact</router-link></li>
          <li><router-link to="/about" class=" hover:text-gray-700 transition-colors">About us</router-link></li>
        </ul>
      </div>
    </nav>
</template>
  