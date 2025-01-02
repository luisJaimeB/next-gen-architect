<template>
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8">Projects</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in projects" 
          :key="project.id" 
          class="bg-white shadow-lg overflow-hidden cursor-pointer"
          @click="goToProject(project.id)"
        >
          <img :src="project.image" :alt="project.name" class="w-full h-48 object-cover">
          <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ project.name }}</h2>
            <p class="text-gray-600">{{ project.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const projects = ref([
    { id: 1, name: 'Modern Residence', description: 'A sleek, eco-friendly home design', image: '/src/assets/buildings1.jpg?height=300&width=400' },
    { id: 2, name: 'Urban Office Complex', description: 'Innovative workspace solution for a tech company', image: '/src/assets/city-1.jpg?height=300&width=400' },
    { id: 3, name: 'Sustainable Community Center', description: 'Multi-purpose facility with green technologies', image: '/src/assets/library-1.jpg?height=300&width=400' },
  ]);
  
  const router = useRouter();
  
  const goToProject = (id) => {
    router.push(`/projects/${id}`); // Redirige a la ruta específica del proyecto
  };
  </script>
  