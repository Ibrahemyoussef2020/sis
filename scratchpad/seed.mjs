// Seed CMS data files from the Vue app's dummydata (run locally with node).
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SRC = 'D:/sis-site/src/dummydata';
const OUT = 'D:/sis-cms/data';
mkdirSync(resolve(OUT, 'sections'), { recursive: true });

const sections = ['hero', 'about', 'services', 'architecture', 'methodology',
  'roadmap', 'projects', 'sectors', 'capabilities', 'timeline', 'contact'];

for (const s of sections) {
  const mod = await import(`file://${SRC}/${s}.js`);
  writeFileSync(resolve(OUT, 'sections', `${s}.json`),
    JSON.stringify(mod.default, null, 2));
  console.log('seeded section:', s);
}

// partners: logos are bundled imports in the app; seed with /uploads URLs that we will copy to the server
const u = (n) => `/uploads/partners/${n}`;
const partnersSeed = {
  technology: [
    { name: 'Siemens', logo: u('Siemens.png'), color: '#009999' },
    { name: 'Rockwell Automation', logo: u('Rockwell_Automation_Logo.png'), color: '#CD163F' },
    { name: 'Schneider Electric', logo: u('schnider.jpg'), color: '#179EE7' },
    { name: 'ABB', logo: u('ABB.png'), color: '#00A650' },
    { name: 'Mitsubishi Electric', logo: u('Mitsubishi_Electric.png'), color: '#CE1620' },
    { name: 'Huawei', logo: u('Huawei.png'), color: '#CF0A2C' },
  ],
  ecosystem: [
    { name: 'AVEVA', logo: u('aveva.jpg'), color: '#00B6CB' },
    { name: 'PTC', logo: u('PTC.png'), color: '#1A1A1A' },
    { name: 'Egypt 4 Industry', logo: u('Egypt_4_Industry.jpg'), color: '#C8102E' },
    { name: 'Odoo', logo: u('odoo.svg'), color: '#7C2562' },
  ],
};
writeFileSync(resolve(OUT, 'sections', 'partners.json'), JSON.stringify(partnersSeed, null, 2));
console.log('seeded section: partners');

// clients (ClientsSection hardcodes imports; seed from ourClints webp set)
const clients = ['delta', 'emitsal', 'energeya', 'gcf', 'giza_systems', 'henkel', 'omis', 'orascom_const', 'plast_company', 'tabreed', 'uniha']
  .map(n => ({ name: n.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()), logo: `/uploads/clients/${n}.webp` }));
writeFileSync(resolve(OUT, 'sections', 'clients.json'), JSON.stringify({ items: clients }, null, 2));
console.log('seeded section: clients');

// settings: slides (hero images), header, footer, seo, social, captcha, email
const settings = {
  slides: [
    { image: '/uploads/slides/slider-1-1.webp', title: '', enabled: true },
    { image: '/uploads/slides/factory.webp', title: '', enabled: true },
    { image: '/uploads/slides/controlling.webp', title: '', enabled: true },
    { image: '/uploads/slides/controlling-2.webp', title: '', enabled: true },
  ],
  header: {
    logo: '', logo_alt: 'Superior Integrated Solutions',
    links: [
      { label: 'Home', to: '/', enabled: true },
      { label: 'About', to: '/about', enabled: true },
      { label: 'Projects', to: '/projects', enabled: true },
      { label: 'Sectors', to: '/sectors', enabled: true },
      { label: 'Capabilities', to: '/capabilities', enabled: true },
      { label: 'Timeline', to: '/timeline', enabled: true },
      { label: 'Partners', to: '/partners', enabled: true },
      { label: 'Contact', to: '/contact', enabled: true },
    ],
  },
  footer: {
    about_text: 'Superior Integrated Solutions (SiS) bridges OT and IT across the MENA region with industrial automation, IIoT, and digital transformation.',
    copyright: '© {year} Superior Integrated Solutions. All rights reserved.',
    links: [
      { label: 'About', to: '/about', enabled: true },
      { label: 'Projects', to: '/projects', enabled: true },
      { label: 'Contact', to: '/contact', enabled: true },
    ],
    show_social: true,
  },
  seo: {
    site_title: 'Superior Integrated Solutions | SiS',
    title_template: '{page} — SiS',
    description: 'Superior Integrated Solutions (SiS) bridges OT and IT across the MENA region with industrial automation, IIoT, and digital transformation.',
    keywords: 'industrial automation, SCADA, IIoT, OT IT integration, MENA, PLC, digital transformation',
    og_image: '', head_inject: '',
    pages: [
      { route: '/about', title: 'About Us — SiS', description: 'Who we are: specialist provider of industrial automation, IIoT and data-driven engineering across MENA.' },
      { route: '/projects', title: 'Projects & Use Cases — SiS', description: 'Real industrial projects: Khalda Petroleum, Saudi Aramco, Béjaïa RO Plant and more.' },
      { route: '/sectors', title: 'Sectors — SiS', description: 'Oil & Gas, Water, Chemical, FMCG and Heavy Industries solutions.' },
      { route: '/capabilities', title: 'Capabilities — SiS', description: 'SCADA upgrades, ERP integration, commissioning, safety systems, cybersecurity.' },
      { route: '/timeline', title: 'Our Journey — SiS', description: 'A trajectory of growth since 2020.' },
      { route: '/partners', title: 'Partners — SiS', description: 'Technology and ecosystem partners: Siemens, Rockwell, Schneider, ABB and more.' },
      { route: '/contact', title: 'Contact Us — SiS', description: "Let's digitalise your universe — get in touch." },
    ],
  },
  social: [
    { network: 'linkedin', url: 'https://www.linkedin.com/company/sis-eg', enabled: true },
    { network: 'facebook', url: '', enabled: false },
    { network: 'youtube', url: '', enabled: false },
    { network: 'whatsapp', url: 'https://wa.me/201007568651', enabled: true },
  ],
  captcha: { provider: 'math', site_key: '', secret_key: '', v3_threshold: 0.5 },
  injections: { enabled: true, head_code: '', body_code: '' },
  themes: {
    active: 'aitech',
    list: [
      { id: 'aitech', name: 'AiTech (default design)', builtin: true, colors: {}, css: '' },
    ],
  },
  email: {
    mode: 'mail', to_email: 'sales@sis-eg.org', from_email: 'no-reply@sis.iptvpro.org',
    from_name: 'SIS Website', smtp_host: '', smtp_port: 587, smtp_secure: 'tls', smtp_user: '', smtp_pass: '',
  },
};
writeFileSync(resolve(OUT, 'settings.json'), JSON.stringify(settings, null, 2));
writeFileSync(resolve(OUT, 'submissions.json'), '[]');
console.log('seeded settings');
