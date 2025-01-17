<template>
    <div class="project-indepth">
      <h1>{{ project?.projectName }}</h1>
      <v-img :src="project?.image" height="300px" cover></v-img>
      <p><strong>Description:</strong> {{ project?.description }}</p>
      <p><strong>Location:</strong> {{ project?.location }}</p>
      <p><strong>Estimated Completion Date:</strong> {{ project?.estimatedCompletionDate }}</p>
      <v-btn color="primary" @click="goBack">Back to Projects</v-btn>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useMainStore } from '@/stores/piniaStore';
  import router from '@/router';
  
  export default defineComponent({
    name: 'ProjectIndepthView',
    setup() {
      const store = useMainStore();
      const route = useRoute();
      const router = useRouter();
  
      const project = computed(() => {
        const projectId = parseInt(route.params.id as string, 10);
        return store.projects.find((p) => p.id === projectId);
      });
  
      const goBack = () => {
        router.push('/projects');
      };
  
      return {
        project,
        goBack,
      };
    },
  });
  </script>
  
  <style scoped>
  .project-indepth {
    padding: 1rem;
    text-align: center;
  }
  </style>
  