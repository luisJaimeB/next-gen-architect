<template>
    <div class="container mx-auto px-4">
      <div class="space-y-32">
        <article v-for="project in projects" :key="project.id" class="grid grid-cols-12 gap-8">
          <div class="col-span-3">
            <img :src="project.logo" alt="" class="w-12 h-12 mb-6">
            <h2 class="text-xl font-light mb-2">{{ project.title }}</h2>
            <p class="text-sm text-gray-500">{{ project.location }}</p>
          </div>
          <div class="col-span-9">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-[600px] h-[400px] object-cover"
            >
          </div>
        </article>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      id: 1,
      logo: '/src/assets/buildings1.jpg?height=48&width=48',
      title: 'Suzhou Museum of Contemporary Art',
      location: 'SUZHOU, CHINA',
      image: '/src/assets/buildings1.jpg?height=600&width=800'
    },
    {
      id: 2,
      logo: '/src/assets/city-1.jpg?height=48&width=48',
      title: 'University of Kansas School of Architecture and Design',
      location: 'KANSAS, UNITED STATES',
      image: '/src/assets/city-1.jpg?height=600&width=800'
    },
    {
      id: 3,
      logo: '/src/assets/library-1.jpg?height=48&width=48',
      title: 'Urban Development Center',
      location: 'TORONTO, CANADA',
      image: '/src/assets/library-1.jpg?height=600&width=800'
    }
  ];
  </script>
  
  <style scoped>
  .router-link-active {
    @apply font-medium;
  }
  </style>