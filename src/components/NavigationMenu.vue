<template>
    <v-app>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
      <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
          title="John Leider"
          nav
        >
          <template v-slot:append>
            <v-btn
              icon="mdi-chevron-left"
              variant="text"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
        <v-list-item
            v-for="route in filteredRoutes"
            :key="route.name"
            :value="route.name"
            :title="route.name"
            @click="navigate(route.path)"
            prepend-icon="mdi-circle-outline"
        >
            <template v-slot:prepend>
                <v-icon>{{ route.meta?.icon || 'mdi-circle-outline' }}</v-icon>
            </template>
        </v-list-item>

        <!-- Dropdown Menu for Projects -->
        <!-- <v-list-group prepend-icon="mdi-folder" value="false" title="Projects">
            <template v-slot:activator="props">
                <v-list-item title="Projects"></v-list-item>
            </template> 
            
            <v-list-item
                v-for="project in projects"
                :key="project.id"
                :title="project.projectName"
                @click="navigateToProject(project.id)"
            ><
                <template v-slot:prepend>
                     <v-icon>mdi-file-outline</v-icon>
                </template>
            </v-list-item>
        </v-list-group> -->
      </v-list>
    </v-navigation-drawer>
  
      <v-app-bar>
        <v-toolbar-title>My Dashboard</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <div>
          <router-view></router-view>
        </div>
      </v-main>
    </v-app>
  </template>
  


<script>
  import router from "@/router";
  import { useMainStore } from "@/stores/piniaStore";
  
  export default {
    data() {
      return {
        drawer: true,
        rail: true,
        routes: router.options.routes, // Get routes from router
      };
    },
    computed: {
        filteredRoutes() {
            return this.routes.filter((route) => !route.meta?.hidden);
        },
        projects() {
            const store = useMainStore();
            return store.projects;
        },
    },

    methods: {
        navigate(path) {
            this.$router.push(path);
        },
        navigateToProject(id) {
            this.$router.push({ name: "ProjectIndepth", params: { id } });
        },
    },
  };
</script>
  