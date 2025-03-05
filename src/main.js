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
  { path: '/', name: 'home', component: Home },
  { path: '/projects', name: 'projects', component: Projects },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '/about', name: 'about', component: AboutUs },
  { path: '/project/:id', name: 'project-details', component: ProjectDetail, props: true },
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
});

const pinia = createPinia()

// Crear y montar la aplicación
createApp(App).use(pinia).use(router).mount('#app');
