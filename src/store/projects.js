import { defineStore } from 'pinia';

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
        { 
            id: 1, 
            name: 'Modern Residence',
            location: 'San Francisco, CA',
            year: 2020,
            photographer: 'Michelle Williams', 
            firstDescription: 'The property revealed a multifunctional space where you can make a choice: either to relax or to get together with colleagues. The space is filled of contemporary items and light which provide dimensional and living style with natural materials.', 
            secondDescription: 'In the center of this room there is a functional writing surface, a coffee table, showing the perfect living space and a unique detail point this villa. The side elements are decorated along with the natural colors. Decoration was located inside the office volume.', 
            images: [
                '/src/assets/project1/01.jpg', 
                '/src/assets/project1/02.jpg', 
                '/src/assets/project1/03.jpg', 
                '/src/assets/project1/04.jpg', 
                '/src/assets/project1/05.jpg',
                '/src/assets/project1/06.jpg', 
            ]     
        },
        { id: 2, 
            name: 'Urban Office Complex', 
            location: 'New York, NY',
            year: 2019,
            photographer: 'Michelle Williams',
            firstDescription: 'The property revealed a multifunctional space where you can make a choice: either to relax or to get together with colleagues. The space is filled of contemporary items and light which provide dimensional and living style with natural materials.', 
            secondDescription: 'In the center of this room there is a functional writing surface, a coffee table, showing the perfect living space and a unique detail point this villa. The side elements are decorated along with the natural colors. Decoration was located inside the office volume.',
            images: [
                '/src/assets/project2/01.jpg', 
                '/src/assets/project2/02.jpg', 
                '/src/assets/project2/03.jpg', 
                '/src/assets/project2/04.jpg', 
                '/src/assets/project2/05.jpg',
                '/src/assets/project2/06.jpg', 
            ]    
        },
        { id: 3, 
            name: 'Sustainable Community Center', 
            location: 'Portland, OR',
            year: 2018,
            photographer: 'Michelle Williams',
            firstDescription: 'The property revealed a multifunctional space where you can make a choice: either to relax or to get together with colleagues. The space is filled of contemporary items and light which provide dimensional and living style with natural materials.', 
            secondDescription: 'In the center of this room there is a functional writing surface, a coffee table, showing the perfect living space and a unique detail point this villa. The side elements are decorated along with the natural colors. Decoration was located inside the office volume.',
            images: [
                '/src/assets/project3/01.jpg', 
                '/src/assets/project3/02.jpg', 
                '/src/assets/project3/03.jpg', 
                '/src/assets/project3/04.jpg', 
                '/src/assets/project3/05.jpg',
                '/src/assets/project3/06.jpg', 
            ]    
        },
        ],
        loading: false,
        error: null
  }),

  getters: {
    getAllProjects: (state) => state.projects,
    
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id) || null;
    },
    
    isLoading: (state) => state.loading
  },
  
  actions: {
    // Simula la carga de proyectos desde una API
    async fetchProjects() {
      this.loading = true;
      this.error = null;
      
      try {
        // En una aplicación real, aquí haríamos una llamada a la API
        // Por ahora, simplemente simulamos un retraso
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Los proyectos ya están en el estado, así que no necesitamos hacer nada más
        // En una app real: this.projects = await api.getProjects()
      } catch (error) {
        this.error = error.message || 'Error al cargar los proyectos';
        console.error('Error fetching projects:', error);
      } finally {
        this.loading = false;
      }
    },
    
    // Simula la carga de un proyecto específico
    async fetchProjectById(id) {
      this.loading = true;
      this.error = null;
      
      try {
        // En una aplicación real, aquí haríamos una llamada a la API
        await new Promise(resolve => setTimeout(resolve, 300));
        
        // En una app real: const project = await api.getProject(id)
        // return project
        return this.getProjectById(id);
      } catch (error) {
        this.error = error.message || `Error al cargar el proyecto con ID ${id}`;
        console.error(`Error fetching project with ID ${id}:`, error);
        return null;
      } finally {
        this.loading = false;
      }
    }
  }
});
