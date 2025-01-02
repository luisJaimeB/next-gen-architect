<template>
  <div class="min-h-screen bg-white">
    <div class="container mx-auto px-4 py-12">
      <div class="grid md:grid-cols-2 gap-8 items-start max-w-6xl mx-auto">
        <!-- Image Section -->
        <div class="aspect-[3/4] bg-gray-200">
          <img 
            src="/src/assets/nextGenAbout.jpg" 
            alt="Profile"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Form Section -->
        <div class="space-y-8">
          <div class="space-y-4">
            <h1 class="text-3xl font-light tracking-wide">HOLA, SOMOS NEXT GEN ARCHITECTS</h1>
            <p class="text-gray-600">
              Párrafo. Haz clic para editar y agregar tu propio texto. Es fácil. Haz clic en "Editar Texto" o doble clic aquí para agregar tu contenido y cambiar la fuente. Puedes arrastrar y soltar este texto donde quieras en tu página. En este espacio puedes contar tu historia y permitir a tus usuarios saber más sobre ti.
            </p>
          </div>

          <form @submit.prevent="handleSubmit" class="space-y-6">
            <h2 class="text-2xl font-light tracking-wide">CONTÁCTANOS</h2>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="space-y-2">
                <label class="block text-sm">
                  Nombre <span class="text-gray-500">*</span>
                </label>
                <input 
                  type="text"
                  v-model="form.nombre"
                  required
                  class="w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>

              <div class="space-y-2">
                <label class="block text-sm">
                  Apellido <span class="text-gray-500">*</span>
                </label>
                <input 
                  type="text"
                  v-model="form.apellido"
                  required
                  class="w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div class="space-y-2">
              <label class="block text-sm">
                Email <span class="text-gray-500">*</span>
              </label>
              <input 
                type="email"
                v-model="form.email"
                required
                class="w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none transition-colors"
              />
            </div>

            <div class="space-y-2">
              <label class="block text-sm">Mensaje</label>
              <textarea 
                v-model="form.mensaje"
                rows="4"
                class="w-full border-b border-gray-300 py-2 focus:border-gray-900 focus:outline-none transition-colors resize-none"
              ></textarea>
            </div>

            <div class="flex justify-center">
              <button 
                type="submit"
                class="bg-black text-white px-8 py-2 hover:bg-gray-800 transition-colors"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nombre: '',
  apellido: '',
  email: '',
  mensaje: ''
})

const handleSubmit = () => {
  // Handle form submission here
  console.log('Form submitted:', form)
  // Reset form
  form.nombre = ''
  form.apellido = ''
  form.email = ''
  form.mensaje = ''
}
</script>