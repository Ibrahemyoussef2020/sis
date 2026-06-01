export default {
  title: "The SiS Capability Matrix",
  columns: ["SCADA Upgrades", "ERP Integration", "Hardware Commissioning", "Safety & Shutdown Systems", "Network Cybersecurity"],
  rows: [
    { client: "Henkel", capabilities: [true, false, true, false, false] },
    { client: "BariQ", capabilities: [true, true, true, true, false] },
    { client: "Gas Cool", capabilities: [true, false, true, false, true] },
    { client: "Emisal", capabilities: [true, true, true, true, false] },
    { client: "Saline Water", capabilities: [true, false, true, true, true] },
    { client: "Saudi Aramco", capabilities: [true, false, true, true, true] },
    { client: "Béjaïa RO", capabilities: [true, false, true, true, true] }
  ]
}
