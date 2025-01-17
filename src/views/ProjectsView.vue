<template>
    <div class="projects-view">
      <h1>Projects</h1>
      <ProjectList />
    </div>
  </template>
  
  <script lang="ts">
  import ProjectList from "@/components/ProjectList.vue";
  
  export default {
    name: "ProjectsView",
    components: { ProjectList },
  };
  </script>
  
  <style scoped>
    .projects-view {
        
    }
  </style>
  