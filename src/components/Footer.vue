<template>
    <footer class="mt-3 bg-gray-100 text-gray-600 py-8">
      <div class="container mx-auto text-center">
        <p>&copy; {{ currentYear }} Architect Name. All rights reserved.</p>
      </div>
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>