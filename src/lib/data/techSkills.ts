import type { TechSkills } from "$lib/types";

export const techSkills: TechSkills = {
  programmingLanguages: {
    display: "Programming Languages",
    skills: ["JavaScript", "TypeScript", "Ruby", "Bash"],
  },
  frontendDevelopment: {
    display: "Frontend Development",
    skills: ["React", "Svelte", "Vanilla JS", "HTML", "CSS", "Tailwind"],
  },
  backendDevelopment: {
    display: "Backend Development & Databases",
    skills: [
      "Node.js",
      "Express.js",
      "REST API design and implementation",
      "SQL",
      "NoSQL",
      "AWS DynamoDB",
      "PostgreSQL",
    ],
  },
  cloudPlatforms: {
    display: "Cloud Platforms",
    skills: ["Amazon Web Services (AWS)"],
  },
  systemDesignArchitecture: {
    display: "System Design & Architecture",
    skills: [
      "Distributed Systems",
      "System Architecture",
      "Microservices",
      "Serverless",
    ],
  },
  softwareEngineering: {
    display: "Software Engineering",
    skills: [
      "Algorithms and Data Structures",
      "Code Review",
      "Debugging",
      "Problem Solving",
      "Refactoring",
      "Software Craftsmanship (KISS, DRY, YAGNI, etc.)",
    ],
  },
  testingAutomation: {
    display: "Testing & Automation",
    skills: [
      "API Testing (Postman)",
      "Jest",
      "Puppeteer",
      "Security Testing (Burp Suite)",
      "Test Automation (Frontend/Backend)",
      "Unit Testing",
    ],
  },
  versionControlCollaboration: {
    display: "Version Control & Collaboration",
    skills: ["Git", "GitHub", "Linear", "Jira"],
  },
  operatingSystems: {
    display: "Operating Systems",
    skills: ["Linux"],
  },
};
