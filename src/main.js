import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

// Componentes
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

// Rutas
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Crear y montar la aplicación
createApp(App).use(router).mount('#app');
