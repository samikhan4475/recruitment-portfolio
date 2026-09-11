import { Briefcase, Building, Code, Droplet, Factory, Utensils } from "lucide-react";

const industriesData = [
  {
    title: "Oil & Gas",
    description:
      "Technical & operational roles for exploration, drilling and production teams.",
       icon: Droplet

  },
  {
    title: "Petrochemical",
    description:
      "Engineers, plant operators and QA/QC specialists for petrochemical plants.",
    icon: Factory
  },
  {
    title: "IT & Non-IT",
    description:
      "Developers, analysts and enterprise support roles across tech and business.",
    icon: Code ,
  },
  {
    title: "Facility Management",
    description:
      "MEP technicians, facility managers and support staff for FM contracts.",
    icon: Building,
  },
  {
    title: "F&B",
    description:
      "Culinary, hospitality and F&B operations talent for restaurants & hotels.",
    icon: Utensils ,
  },
  {
    title: "Corporate & Admin",
    description:
      "HR, finance, admin and back-office professionals for corporate teams.",
    icon: Briefcase,
  },
];
export {
industriesData
}