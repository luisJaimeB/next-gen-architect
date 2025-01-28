<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12">
      <!-- Gallery Section -->
      <div class="max-w-7xl mx-auto mb-24">
        <div class="grid gap-8">
          <!-- Main Image -->
          <div class="aspect-[16/9] bg-gray-100 relative overflow-hidden rounded-lg shadow-lg">
            <img 
              :src="images[currentImageIndex]" 
              :alt="`Project image ${currentImageIndex + 1}`"
              class="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-105"
            />
            
            <!-- Navigation Arrows -->
            <button 
              @click="previousImage" 
              class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft class="w-6 h-6" />
            </button>
            <button 
              @click="nextImage" 
              class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 text-white p-3 rounded-full hover:bg-white/40 transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight class="w-6 h-6" />
            </button>
          </div>

          <!-- Thumbnails -->
          <div class="flex gap-4 overflow-x-auto pb-4 snap-x">
            <button
              v-for="(image, index) in images"
              :key="index"
              @click="currentImageIndex = index"
              class="relative shrink-0 w-32 aspect-[4/3] snap-start rounded-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              :class="currentImageIndex === index ? 'ring-2 ring-black' : ''"
            >
              <img 
                :src="image" 
                :alt="`Thumbnail ${index + 1}`"
                class="w-full h-full object-cover"
              />
            </button>
          </div>
        </div>
      </div>

      <!-- Project Information -->
      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-16 mb-24">
          <!-- Left Column -->
          <div class="space-y-8">
            <h1 class="text-5xl font-light tracking-wide leading-tight">Proyecto Residencial<br>Harmony Heights</h1>
            <p class="text-gray-600 leading-relaxed text-lg">
              Una fusión perfecta de diseño moderno y funcionalidad, este proyecto residencial redefine el lujo contemporáneo. Cada detalle ha sido cuidadosamente considerado para crear un espacio que no solo impresiona visualmente, sino que también mejora la calidad de vida de sus habitantes.
            </p>
            <div class="flex gap-4">
              <span class="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">Residencial</span>
              <span class="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">Moderno</span>
              <span class="inline-block bg-gray-100 rounded-full px-4 py-2 text-sm font-semibold text-gray-700">Sostenible</span>
            </div>
          </div>

          <!-- Right Column -->
          <div class="space-y-8 bg-gray-50 p-8 rounded-lg">
            <div class="grid gap-6">
              <div class="border-b pb-4">
                <h3 class="text-sm font-medium mb-2 text-gray-500">TIPO DE PROYECTO</h3>
                <p class="text-xl text-gray-800">Diseño Residencial</p>
              </div>
              <div class="border-b pb-4">
                <h3 class="text-sm font-medium mb-2 text-gray-500">AÑO DE FINALIZACIÓN</h3>
                <p class="text-xl text-gray-800">2023</p>
              </div>
              <div class="border-b pb-4">
                <h3 class="text-sm font-medium mb-2 text-gray-500">SERVICIOS PRESTADOS</h3>
                <p class="text-xl text-gray-800">Diseño Arquitectónico, Interiorismo, Paisajismo</p>
              </div>
              <div class="pb-4">
                <h3 class="text-sm font-medium mb-2 text-gray-500">ÁREA DEL PROYECTO</h3>
                <p class="text-xl text-gray-800">750 m²</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Project Description -->
        <div class="prose max-w-none mb-24">
          <h2 class="text-4xl font-light tracking-wide mb-8">Visión del Proyecto</h2>
          <p class="text-gray-600 leading-relaxed text-lg mb-6">
            Harmony Heights nació de la visión de crear un espacio que no solo fuera un hogar, sino un santuario de paz y creatividad en medio del bullicio urbano. Nuestro equipo de arquitectos se propuso diseñar una residencia que aprovechara al máximo la luz natural, incorporara elementos sostenibles y creara una conexión fluida entre los espacios interiores y exteriores.
          </p>
          <p class="text-gray-600 leading-relaxed text-lg mb-6">
            El diseño se caracteriza por sus líneas limpias y su paleta de colores neutros, complementada por toques de madera cálida y acero para añadir carácter y profundidad. Grandes ventanales enmarcan vistas panorámicas, mientras que los espacios abiertos fomentan la interacción y la flexibilidad en el uso diario.
          </p>
          <p class="text-gray-600 leading-relaxed text-lg">
            La sostenibilidad fue un pilar fundamental en este proyecto. Implementamos sistemas de energía solar, recolección de agua de lluvia y materiales de bajo impacto ambiental, demostrando que el lujo y la responsabilidad ecológica pueden coexistir armoniosamente.
          </p>
        </div>

        <!-- Project Navigation -->
        <div class="flex justify-between items-center pt-8 border-t">
          <button class="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group">
            <ChevronLeft class="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>
              <div class="text-sm text-gray-500">Proyecto Anterior</div>
              <div class="font-medium">Torre Corporativa Skyline</div>
            </span>
          </button>
          <button class="flex items-center gap-3 text-gray-600 hover:text-black transition-colors group">
            <span class="text-right">
              <div class="text-sm text-gray-500">Siguiente Proyecto</div>
              <div class="font-medium">Centro Cultural Nexus</div>
            </span>
            <ChevronRight class="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
  import { ref } from 'vue'
  import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
  import { useRoute } from 'vue-router';
  import { useProjectsStore } from '../store/projects';

  const route = useRoute();
  const store = useProjectsStore();
  const project = store.getProjectById(route.params.id);
  
  // Sample images array - replace with your actual project images
  const images = [
    '/src/assets/project1/01.jpg?height=900&width=1600&text=Harmony+Heights+Exterior',
    '/src/assets/project1/02.jpg?height=900&width=1600&text=Living+Room',
    '/src/assets/project1/03.jpg?height=900&width=1600&text=Kitchen+and+Dining',
    '/src/assets/project1/04.jpg?height=900&width=1600&text=Master+Bedroom',
    '/src/assets/project1/05.jpg?height=900&width=1600&text=Sustainable+Features'
  ]
  
  const currentImageIndex = ref(0)
  
  const nextImage = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }
  
  const previousImage = () => {
    currentImageIndex.value = currentImageIndex.value === 0 
      ? images.length - 1 
      : currentImageIndex.value - 1
  }
  </script>
  
  <style scoped>
  /* Hide scrollbar for Chrome, Safari and Opera */
  .overflow-x-auto::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .overflow-x-auto {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
</style>
  
  