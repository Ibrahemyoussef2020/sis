import { createRouter, createWebHistory } from "vue-router";

const defaultTitle = "SiS - Superior Integrated Solutions";
import MainLayout from "@/layouts/MainLayout.vue";
import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
// Services, Architecture and Methodology are sections on the home page now
import ProjectsPage from "@/pages/ProjectsPage.vue";
import CapabilitiesPage from "@/pages/CapabilitiesPage.vue";
import TimelinePage from "@/pages/TimelinePage.vue";
import ContactPage from "@/pages/ContactPage.vue";

const routes = [
  {
    path: "/",
    component: MainLayout,
    children: [
      { path: "", name: "home", component: HomePage, meta: { title: defaultTitle } },
      { path: "about", name: "about", component: AboutPage, meta: { title: "About Us | SiS" } },
      // removed separate routes for services/architecture/methodology
      { path: "projects", name: "projects", component: ProjectsPage, meta: { title: "Projects | SiS" } },
      {
        path: "capabilities",
        name: "capabilities",
        component: CapabilitiesPage,
        meta: { title: "Capabilities | SiS" },
      },
      { path: "timeline", name: "timeline", component: TimelinePage, meta: { title: "Timeline | SiS" } },
      { path: "contact", name: "contact", component: ContactPage, meta: { title: "Contact Us | SiS" } },
    ],
  },
];

export const router = createRouter({
  history: createWebHistory(),
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

router.afterEach((to) => {
  document.title = to.meta?.title || defaultTitle;
});
