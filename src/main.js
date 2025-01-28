import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';

// Componentes
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import AboutUs from './views/AboutUs.vue';
import ProjectDetail from './components/ProjectDetail.vue';

// Rutas
const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact },
  { path: '/about', component: AboutUs },
  { path: '/projectsDetail', component: ProjectDetail}
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

const pinia = createPinia()

// Crear y montar la aplicación
createApp(App).use(pinia).use(router).mount('#app');
