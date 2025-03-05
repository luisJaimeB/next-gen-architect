<template>
    <section class="max-w-7xl mx-auto px-4 py-24">
        <!-- Header -->
        <div class="mb-24">
        <p class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-4">TESTIMONIALS</p>
        <h2 class="text-[2.5rem] font-light leading-tight">They love us.</h2>
        </div>
  
        <!-- Testimonials Container -->
        <div class="grid md:grid-cols-[300px,1fr] gap-20">
            <!-- Names List -->
            <div class="relative">
            <!-- Vertical Line -->
                <div class="absolute top-0 left-0 w-[1px] h-full bg-gray-200"></div>
                
                <!-- Names -->
                <div class="space-y-8">
                    <button
                    v-for="testimonial in testimonials"
                    :key="testimonial.id"
                    @click="currentTestimonial = testimonial"
                    class="block text-left w-full pl-8 py-1 text-sm transition-all duration-300 relative hover:text-gray-600"
                    :class="currentTestimonial.id === testimonial.id ? 'text-black font-normal' : 'text-gray-400'"
                    >
                    <!-- Active Indicator Line -->
                    <div
                        v-if="currentTestimonial.id === testimonial.id"
                        class="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-[1px] bg-black"
                    ></div>
                    <span class="transition-all duration-300">{{ testimonial.name }}</span>
                    </button>
                </div>
            </div>
  
            <!-- Testimonial Content -->
            <div class="relative min-h-[300px]">
            <TransitionGroup 
                name="testimonial"
                class="h-full"
            >
                <div
                v-if="currentTestimonial"
                :key="currentTestimonial.id"
                class="absolute inset-0"
                >
                <div class="relative bg-white rounded-lg shadow-lg p-12 transition-all duration-300">
                    <!-- Quote Mark -->
                    <div class="absolute -top-10 left-10 text-[120px] leading-none font-serif text-gray-100">"</div>
                    
                    <!-- Testimonial Text -->
                    <div class="relative z-10 max-w-2xl">
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        {{ currentTestimonial.text }}
                    </p>
                    <p class="font-medium text-sm">-{{ currentTestimonial.name }}</p>
                    </div>
                </div>
                </div>
            </TransitionGroup>
            </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const testimonials = [
    {
      id: 1,
      name: 'Jennifer Hilbertson',
      text: 'Incredible as always. This guys have excellent taste,modeling, texturing & rendering skills. The design fits in with what I would perceive as being Icelandic, the high wooden roof design and linear slatted interior elements and colours.'
    },
    {
      id: 2,
      name: 'Mark Eganberg',
      text: 'Working with this architecture studio has been an absolute pleasure. Their attention to detail and innovative approach to design has transformed our vision into reality.'
    },
    {
      id: 3,
      name: 'Lesley Grand',
      text: 'The teams ability to blend functionality with aesthetic beauty is remarkable. They listened to our needs and delivered beyond our expectations.'
    },
    {
      id: 4,
      name: 'John Frick',
      text: 'Their sustainable approach to architecture and commitment to environmental consciousness while maintaining luxury and style is exactly what we were looking for.'
    }
  ]
  
  const currentTestimonial = ref(testimonials[0])
  </script>
  
  <style scoped>
  .testimonial-enter-active,
  .testimonial-leave-active {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .testimonial-enter-from {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .testimonial-leave-to {
    opacity: 0;
    transform: translateY(-20px);
  }
  
  .testimonial-enter-to,
  .testimonial-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
  
  .testimonial-leave-active {
    position: absolute;
    width: 100%;
  }
  </style>