import { defineStore } from "pinia";
import hero from "@/dummydata/hero";
import about from "@/dummydata/about";
import services from "@/dummydata/services";
import architecture from "@/dummydata/architecture";
import methodology from "@/dummydata/methodology";
import roadmap from "@/dummydata/roadmap";
import projects from "@/dummydata/projects";
import sectors from "@/dummydata/sectors";
import capabilities from "@/dummydata/capabilities";
import partners from "@/dummydata/partners";
import contact from "@/dummydata/contact";
import industries from "@/dummydata/industries";

export const useSiteStore = defineStore("site", {
  state: () => ({
    loaded: false,
    hero: null,
    about: null,
    services: null,
    architecture: null,
    methodology: null,
    roadmap: null,
    projects: null,
    sectors: null,
    capabilities: null,
    partners: null,
    contact: null,
    industries: null,
  }),
  actions: {
    loadAll() {
      this.hero = hero;
      this.about = about;
      this.services = services;
      this.architecture = architecture;
      this.methodology = methodology;
      this.roadmap = roadmap;
      this.projects = projects;
      this.sectors = sectors;
      this.capabilities = capabilities;
      this.partners = partners;
      this.contact = contact;
      this.industries = industries;
      this.loaded = true;
    },
  },
});
