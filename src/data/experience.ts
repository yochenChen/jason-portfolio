import type { ExperienceItem } from "../types";

export const experiences: ExperienceItem[] = [
  {
    company: "Chengli Innovation Co., Ltd.",
    role: "Software Development Engineer",
    period: "Nov 2022 - Aug 2024",
    location: "Taipei, Taiwan",
    stack: ["ASP.NET Core MVC", "Angular", "SQL Server", "Azure DevOps"],
    highlights: [
      "Led a team of 5 engineers to deliver a cloud-based procurement notification system for Taipei 101 within 2 months.",
      "Improved communication efficiency by 30% through workflow redesign and backend system integration.",
      "Revamped a large-scale ERP system with multilingual support and improved page load performance by 25%.",
      "Built a corporate information portal with real-time progress visualization to support cost and revenue analysis.",
      "Introduced Azure DevOps CI/CD pipelines, accelerating development and deployment cycles by 40%.",
    ],
  },
  {
    company: "Digihua Intelligent Systems Co., Ltd.",
    role: "Development / Technical R&D Engineer",
    period: "Dec 2020 - Mar 2022",
    location: "Taichung, Taiwan",
    stack: ["C#", "WinForms", "SQL", "DevExpress", "NPOI"],
    highlights: [
      "Developed multilingual import/export modules supporting 5+ languages for ERP environments.",
      "Implemented 10+ customized ERP features including data validation, report syntax verification, and import automation.",
      "Deployed and customized APS systems for 5+ enterprise clients with complex data integration needs.",
      "Collaborated with cross-regional stakeholders and presented technical solutions to management.",
    ],
  },
];