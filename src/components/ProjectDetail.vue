<template>
  <div class="container mx-auto px-4 py-12 max-w-5xl">
    <!-- Navegación superior -->
    <router-link 
      :to="{ name: 'projects' }" 
      class="inline-flex items-center mb-8 text-gray-500 hover:text-gray-900 transition-colors text-sm"
    >
      ← Back to projects
    </router-link>

    <!-- Loader -->
    <div v-if="loading" class="flex justify-center items-center py-20">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="text-center py-20">
      <p class="text-red-500">{{ error }}</p>
      <button @click="loadProject" class="mt-4 px-4 py-2 bg-gray-900 text-white rounded-md">
        Reintentar
      </button>
    </div>

    <!-- Contenido del proyecto -->
    <div v-else-if="project">
      <!-- Encabezado del proyecto -->
      <div class="text-center mb-16">
        <p class="text-gray-500 text-sm mb-4">PROJECT {{ project.id.toString().padStart(2, '0') }}</p>
        <h1 class="text-3xl font-light mb-4">{{ project.name }}</h1>
        <p class="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <!-- Barra de información -->
      <div class="grid grid-cols-4 gap-8 mb-16">
        <div class="text-center grid bg-gray-200 py-8">
          <p class="text-gray-900 text-sm mb-1">YEAR</p>
          <p class="text-gray-500">{{ project.year }}</p>
        </div>
        <div class="text-center grid bg-gray-200 py-8">
          <p class="text-gray-900 text-sm mb-1">LOCATION</p>
          <p class="text-gray-500">{{ project.location }}</p>
        </div>
        <div class="text-center grid bg-gray-200 py-8">
          <p class="text-gray-900 text-sm mb-1">CREATIVE DIRECTOR</p>
          <p class="text-gray-500">Studio Design</p>
        </div>
        <div class="text-center grid bg-gray-200 py-8">
          <p class="text-gray-900 text-sm mb-1">PHOTOGRAPHER</p>
          <p class="text-gray-500">{{ project.photographer }}</p>
        </div>
      </div>

      <!-- Galería de imágenes -->
      <div class="space-y-8">
        <!-- Imagen principal -->
        <div>
          <img 
            :src="project.images[0]" 
            :alt="project.name"
            class="w-full h-auto object-cover rounded-sm"
          />
        </div>

        <!-- Grid de 2 columnas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              :src="`${project.images[1]}?height=900&width=1600&text=Harmony+Heights+Exterior`"
              alt="Office space"
              class="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div class="flex items-center">
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ project.firstDescription }}
            </p>
          </div>
        </div>

        <!-- Grid de 2 columnas invertido -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="flex items-center order-2 md:order-1">
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ project.secondDescription }}
            </p>
          </div>
          <div class="order-1 md:order-2">
            <img 
              :src="`${project.images[2]}?height=900&width=1600&text=Harmony+Heights+Exterior`"
              alt="Reading corner"
              class="w-full h-auto object-cover rounded-sm"
            />
          </div>
        </div>

        <!-- Imagen ancha -->
        <div>
          <img 
            :src="`${project.images[3]}?height=600&width=1200`"
            alt="Workspace detail"
            class="w-full h-auto object-cover rounded-sm"
          />
        </div>

        <!-- Grid final de 2 columnas -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img 
              :src="`${project.images[4]}?height=600&width=800`"
              alt="Living room"
              class="w-full h-auto object-cover rounded-sm"
            />
          </div>
          <div>
            <img 
              :src="`${project.images[5]}?height=600&width=800`"
              alt="Bathroom"
              class="w-full h-auto object-cover rounded-sm"
            />
          </div>
        </div>
      </div>

      <!-- Pie de página -->
      <div class="text-center mt-16">
        <p class="text-gray-500 text-sm">The project is made for interior design.</p>
      </div>
    </div>

    <!-- Proyecto no encontrado -->
    <div v-else class="text-center py-20">
      <p class="text-xl text-gray-700">Proyecto no encontrado</p>
      <router-link 
        :to="{ name: 'projects' }" 
        class="mt-4 inline-block px-4 py-2 bg-gray-900 text-white rounded-md"
      >
        Volver a proyectos
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useProjectStore } from '../store/projects';

const route = useRoute();
const projectStore = useProjectStore();

// Obtener el ID del proyecto de los parámetros de la ruta
const projectId = computed(() => Number(route.params.id));

// Obtener datos del store
const loading = computed(() => projectStore.loading);
const error = computed(() => projectStore.error);
const project = ref(null);

// Método para cargar el proyecto
const loadProject = async () => {
  project.value = await projectStore.fetchProjectById(projectId.value);
};

// Cargar el proyecto al montar el componente o cuando cambie el ID
onMounted(() => {
  loadProject();
});

// Observar cambios en el ID del proyecto para recargar los datos
watch(projectId, () => {
  loadProject();
});
</script>