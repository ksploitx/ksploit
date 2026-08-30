import { ExperienceEntry } from "@/types";

export const experience: ExperienceEntry[] = [
  {
    id: "wyreflow-tech-lead",
    codename: "WYREFLOW://",
    title: "Technical Lead – Backend",
    company: "Wyreflow Technologies",
    duration: "TODO: Month YYYY – Month YYYY", // ← fill in your actual dates
    location: "TODO: City, Country / Remote", // ← fill in your actual location
    bullets: [
      "Coordinated backend team through daily agenda-setting, task prioritization, and blocker resolution across a 24-module Node.js/Express/MongoDB codebase.",
      "Led architectural review and code approval process, identifying and prioritizing production risks including missing payment webhook handling and absent rate limiting.",
      "Owned API testing via Swagger and drove integration alignment with the frontend team across shared release milestones.",
      "Translated product requirements into scoped backend deliverables, authoring a phased technical roadmap sequencing infrastructure hardening and feature development.",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Swagger"],
  },
];
