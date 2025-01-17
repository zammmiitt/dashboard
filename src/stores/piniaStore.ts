import { defineStore } from 'pinia';

export const useMainStore = defineStore('main', {
  state: () => ({
    projects: [
      {
        id: 1,
        projectName: 'Green Energy Initiative',
        description: 'A project aimed at developing sustainable energy solutions using solar and wind technology.',
        location: 'San Francisco, CA',
        estimatedCompletionDate: '2025-06-15',
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        show: false,
      },
      {
        id: 2,
        projectName: 'Smart City Infrastructure',
        description: 'Implementing IoT-based solutions to improve city management and enhance residents\' quality of life.',
        location: 'Austin, TX',
        estimatedCompletionDate: '2026-02-20',
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        show: false,
      },
      {
        id: 3,
        projectName: 'Eco-Friendly Housing',
        description: 'Designing affordable and environmentally friendly residential complexes.',
        location: 'Seattle, WA',
        estimatedCompletionDate: '2024-11-30',
        image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        show: false,
      },
    ],
  }),
  actions: {
    toggleShow(id: number) {
      this.projects.forEach((project) => {
        project.show = project.id === id ? !project.show : false; // Only one card open at a time
      });
    },
  },
});
