<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-3xl font-bold mb-12">Make it with passion.</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <router-link 
        v-for="(project, index) in projects" 
        :key="index"
        :to="{ name: 'project-details', params: { id: project.id } }" 
        class="relative overflow-hidden group cursor-pointer rounded-md"
      >
        <img 
          :src="project.images[0]" 
          :alt="project.name" 
          class="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <!-- Overlay con información del proyecto -->
        <div 
          class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100"
        >
          <h3 class="text-white text-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {{ project.name }}
          </h3>
          <p class="text-white/80 mt-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
            {{ project.description }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>
  
<script setup>
import { onMounted, computed } from 'vue';
import { useProjectStore } from '../store/projects';

const projectStore = useProjectStore();

// Obtener datos del store
const projects = computed(() => projectStore.getAllProjects);
const loading = computed(() => projectStore.loading);
const error = computed(() => projectStore.error);

// Método para cargar los proyectos
const loadProjects = async () => {
  await projectStore.fetchProjects();
};

// Cargar proyectos al montar el componente
onMounted(() => {
  loadProjects();
});

</script>
  