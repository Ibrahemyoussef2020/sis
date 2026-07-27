import { createRouter, createWebHistory } from "vue-router";
import { navigating } from "@/stores/navigationState";

const defaultTitle = "SiS - Superior Integrated Solutions";
import MainLayout from "@/layouts/MainLayout.vue";

const HomePage = () => import("@/pages/HomePage.vue");
const AboutPage = () => import("@/pages/AboutPage.vue");
const ProjectsPage = () => import("@/pages/ProjectsPage.vue");
const ArchitecturePage = () => import("@/pages/ArchitecturePage.vue");
const ContactPage = () => import("@/pages/ContactPage.vue");

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "home", component: HomePage, meta: { title: defaultTitle } },
      { path: "about", name: "about", component: AboutPage, meta: { title: "About Us | SiS" } },
      // removed separate routes for services/architecture/methodology
      { path: "projects", name: "projects", component: ProjectsPage, meta: { title: "Projects | SiS" } },
      { path: "architecture", name: "architecture", component: ArchitecturePage, meta: { title: "Architecture | SiS" } },
      { path: "contact", name: "contact", component: ContactPage, meta: { title: "Contact Us | SiS" } },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    }
    return { top: 0 };
  },
});

router.beforeEach(() => { navigating.value = true })

router.afterEach((to) => {
  document.title = to.meta?.title || defaultTitle;
  navigating.value = false
});
