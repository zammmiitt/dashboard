<template>
    <div class="project-list">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useMainStore } from '@/stores/piniaStore';
  import ProjectCard from './ProjectCard.vue';
  
  export default defineComponent({
    name: 'ProjectList',
    components: {
      ProjectCard,
    },
    setup() {
      const store = useMainStore();
      const projects = computed(() => store.projects);
  
      return {
        projects,
      };
    },
  });
  </script>
  
  <style scoped>
  .project-list {
    justify-content: space-evenly;
    display: flex;
    gap: 1rem;
    padding: 3rem;

  }
  </style>
  