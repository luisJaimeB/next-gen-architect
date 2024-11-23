<template>
    <div class="container mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold mb-8">Contact</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" v-model="form.name" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" v-model="form.email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black">
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" v-model="form.message" rows="4" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black"></textarea>
            </div>
            <button type="submit" class="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors">Send Message</button>
          </form>
        </div>
        <div>
          <h2 class="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p class="mb-4">Interested in working together? Feel free to reach out using the contact form or through the following channels:</p>
          <ul class="space-y-2">
            <li>Email: architect@example.com</li>
            <li>Phone: (123) 456-7890</li>
            <li>Address: 123 Design Street, Creative City, 12345</li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const form = ref({
    name: '',
    email: '',
    message: ''
  });
  
  const submitForm = () => {
    // Handle form submission here
    console.log('Form submitted:', form.value);
    // Reset form after submission
    form.value = { name: '', email: '', message: '' };
  };
  </script>