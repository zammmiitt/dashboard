import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectIndepthView from '../views/ProjectIndepthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
      meta: { icon: 'mdi-home' },
    },
    {
      path: '/about',
      name: 'About',
      component: AboutView,
      meta: { icon: 'mdi-account' },
    },
    {
      path: '/projects',
      name: 'Projects',
      component: ProjectsView,
      meta: { icon: 'mdi-sitemap' },
    },
    {
      path: '/project/:id',
      name: 'ProjectIndepth',
      component: ProjectIndepthView,
      props: true,
      meta: { hidden: true }, // Hides this route from the main navigation menu

    },
     
  ],
})

export default router
