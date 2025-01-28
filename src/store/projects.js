import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
        { 
            id: 1, 
            name: 'Modern Residence', 
            description: 'A sleek, eco-friendly home design', 
            images: [
                '/src/assets/project1/01.jpg', 
                '/src/assets/project1/02.jpg', 
                '/src/assets/project1/03.jpg', 
                '/src/assets/project1/04.jpg', 
                '/src/assets/project1/05.jpg', 
            ]     
        },
        { id: 2, 
            name: 'Urban Office Complex', 
            description: 'Innovative workspace solution for a tech company', 
            images: [
                '/src/assets/project1/01.jpg', 
                '/src/assets/project1/02.jpg', 
                '/src/assets/project1/03.jpg', 
                '/src/assets/project1/04.jpg', 
                '/src/assets/project1/05.jpg', 
            ]    
        },
        { id: 3, 
            name: 'Sustainable Community Center', 
            description: 'Multi-purpose facility with green technologies', 
            images: [
                '/src/assets/project1/01.jpg', 
                '/src/assets/project1/02.jpg', 
                '/src/assets/project1/03.jpg', 
                '/src/assets/project1/04.jpg', 
                '/src/assets/project1/05.jpg', 
            ]    
        },
        ],
  }),
  getters: {
    getProjectById: (state) => (id) => state.projects.find((project) => project.id === parseInt(id)),
  },
});
