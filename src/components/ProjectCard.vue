<template>
    <v-card class="project-card">
      <v-img :src="project.image" height="200px" cover></v-img>
  
      <v-card-title>{{ project.projectName }}</v-card-title>
      <v-card-subtitle>Location: {{ project.location }}</v-card-subtitle>
      <v-card-subtitle>Estimated Completion Date: {{ project.estimatedCompletionDate }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" text="Explore" @click="goToProjectIndepth(project.id)"></v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :icon="project.show ? 'mdi-chevron-down' : 'mdi-chevron-up'"
          @click="toggle(project.id)"
        ></v-btn>
      </v-card-actions>
  
      <v-expand-transition>
        <div v-show="project.show" class="expandable-content">
          <v-divider />
          <v-card-text>{{ project.description }}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
</template>
  
<script lang="ts">
    import { defineComponent } from 'vue';
    import { useMainStore } from '@/stores/piniaStore';
    import router from '@/router';

    export default defineComponent({
        name: 'ProjectCard',
        props: {
            project: {
            type: Object,
            required: true,
            },
        },
        setup() {
            const store = useMainStore();
            const toggle = (id: number) => {
                store.toggleShow(id); // Call the action to toggle the specific project
            };
            const goToProjectIndepth = (id: number) => {
                router.push({ name: 'ProjectIndepth', params: { id } });
            };
            return {
                toggle,
                goToProjectIndepth,
            };
        },
    });
</script>
  
<style scoped>
    .project-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 500px; /* Set a fixed height for all cards */
        width: 400px;
        overflow: hidden;
        border-radius: 20px;
    }

    .expandable-content {
        /* overflow: auto; Allow scrolling for expanded content */
        max-height: 100px; /* Limit the height of the expanded content */
    }
</style>
  