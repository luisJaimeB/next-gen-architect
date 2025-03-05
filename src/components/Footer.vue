<template>
  <footer class="relative mt-6 bg-black text-white py-20 overflow-hidden">
    <!-- Background Image Overlay -->
    <div 
      class="absolute inset-0 z-0 opacity-20"
      style="background-image: url('/src/assets/buildings1.jpg'); background-size: cover; background-position: center;"
    ></div>
    
    <!-- Content Container -->
    <div class="relative z-10 container mx-auto px-6 flex flex-col md:flex-row justify-between">
      <!-- Logo and Description Section -->
      <div class="flex flex-col space-y-6 max-w-md">
        <img 
          src="/src/assets/logo-foot-blanco01.png" 
          alt="Prague Architecture" 
          class="w-80"
        />
        <p class="text-gray-300 leading-relaxed">
          Exploramos ideas y diseñamos experiencias espaciales, fusionando arquitectura y creatividad para inspirar, 
          contar historias y mejorar vidas. Vemos el diseño como una herramienta para innovar, 
          crear soluciones únicas y transformar entornos.
        </p>
      </div>

      <!-- Contact Section -->
      <div class="flex flex-col items-start md:items-end mt-12 md:mt-0">
        <h3 class="text-sm tracking-widest mb-6">GET IN TOUCH</h3>
        <div class="flex flex-col items-start md:items-end space-y-2">
          <a href="tel:+7885896985" class="text-gray-300 hover:text-white transition-colors">
            +7 (885) 589 69 85
          </a>
          <a href="mailto:prague-architects@info.com" class="text-gray-300 hover:text-white transition-colors">
            prague-architects@info.com
          </a>
          <p class="text-gray-300">
            Litačka, Jungmannova 35/29, Nové Město,Czech Republic
          </p>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="relative z-10 container mx-auto px-6 mt-16 flex flex-col md:flex-row justify-between items-center">
      <p class="text-sm text-gray-400 uppercase tracking-wider">
        Materia Viva (C) 2025 All Rights Reserved
      </p>
      
      <!-- Social Media Links -->
      <div class="flex space-x-6 mt-6 md:mt-0">
        <a href="#" class="text-gray-400 hover:text-white transition-colors hover:opacity-75 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors hover:opacity-75 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
          </svg>
        </a>
        <a href="#" class="text-gray-400 hover:text-white transition-colors hover:opacity-75 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
/* Optional: Add hover effects or transitions */
a {
  transition: all 0.2s ease-in-out;
}
</style>