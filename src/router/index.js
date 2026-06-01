import { createRouter, createWebHashHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
// Services, Architecture and Methodology are sections on the home page now
import RoadmapPage from '@/pages/RoadmapPage.vue'
import ProjectsPage from '@/pages/ProjectsPage.vue'
import SectorsPage from '@/pages/SectorsPage.vue'
import CapabilitiesPage from '@/pages/CapabilitiesPage.vue'
import TimelinePage from '@/pages/TimelinePage.vue'
import PartnersPage from '@/pages/PartnersPage.vue'
import ContactPage from '@/pages/ContactPage.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      { path: '', name: 'home', component: HomePage },
      { path: 'about', name: 'about', component: AboutPage },
      // removed separate routes for services/architecture/methodology
      { path: 'roadmap', name: 'roadmap', component: RoadmapPage },
      { path: 'projects', name: 'projects', component: ProjectsPage },
      { path: 'sectors', name: 'sectors', component: SectorsPage },
      { path: 'capabilities', name: 'capabilities', component: CapabilitiesPage },
      { path: 'timeline', name: 'timeline', component: TimelinePage },
      { path: 'partners', name: 'partners', component: PartnersPage },
      { path: 'contact', name: 'contact', component: ContactPage },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  },
})
