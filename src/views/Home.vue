<template>
  <div class="container mx-auto px-4">

    <div class="max-w-6xl mx-auto px-4 py-16">
      <!-- Header -->
      <div class="mb-16">
        <p class="text-sm uppercase tracking-wide text-gray-500 mb-2">LAST PROJECTS</p>
        <h2 class="text-4xl font-light tracking-wide">Make it with passion.</h2>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="space-y-24">
      <div class="group">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div class="order-2 md:order-1">
            <p class="text-sm text-gray-500 mb-2">2015</p>
            <h3 class="text-2xl mb-4">Seascape Villa</h3>
            <p class="text-gray-600 mb-6 pr-8">
              The Seascape Villa project constitutes one of the first urban interventions in this very unique context, a landscape dominated by mountains and sea.
            </p>
            <a href="#" class="inline-flex items-center text-sm hover:opacity-75 transition-opacity">
              READ
              <ArrowRightIcon class="w-4 h-4 ml-2" />
            </a>
          </div>
          <div class="order-1 md:order-2">
            <img 
              src="/src/assets/buildings1.jpg?height=600&width=800" 
              alt="Seascape Villa" 
              class="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      <div class="group">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img 
              src="/src/assets/city-1.jpg?height=600&width=800" 
              alt="European Lard Station" 
              class="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
          <div class="md:pl-8">
            <p class="text-sm text-gray-500 mb-2">2016</p>
            <h3 class="text-2xl mb-4">European Lard Station</h3>
            <p class="text-gray-600 mb-6">
              Hemicycle and offices for the Headquarters of the European Parliament including a 750-seat hemicycle, 1132 offices for members of Parliament, 18 commission halls and catering center and service areas.
            </p>
            <a href="#" class="inline-flex items-center text-sm hover:opacity-75 transition-opacity">
              READ
              <ArrowRightIcon class="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
  <testimonials />
</template>

<script setup>
import Testimonials from '/src/components/Testimonials.vue'

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

</style>