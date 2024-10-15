import {
  CrochetManagementSystem,
  EngineeringtheIntangible,
} from "$lib/app/sections/projects";
import type {
  About,
  Article,
  Education,
  Experience,
  Interest,
  Project,
  SoftSkill,
  SpokenLanguages,
  TechSkills,
} from "$lib/types";

export const about: About = {
  name: "Natalia Pospieszyńska",
  role: "Backend Software Engineer",
  location: {
    city: "Trutnov",
    region: "Hradec Králové",
    country: "Czechia",
    icon: "fa-solid fa-location-dot",
    mapUrl:
      "https://en.mapy.cz/turisticka?source=dist&id=36&ds=1&x=15.8373076&y=50.5704668&z=10",
  },
  contact: {
    linkedin: {
      href: "https://www.linkedin.com/in/nataliapospieszynska/",
      displayValue: "/nataliapospieszynska",
      faIconClass: "fa-brands fa-linkedin",
    },
    github: {
      href: "https://github.com/burczan",
      displayValue: "/burczan",
      faIconClass: "fa-brands fa-github",
    },
    web: {
      href: "https://burczan.github.io/me/",
      displayValue: "burczan.github.io/me",
      faIconClass: "fa-solid fa-globe",
    },
  },
};

export const education: Education = [
  {
    school: "Polish Naval Academy",
    city: "Gdynia",
    country: "Poland",
    field: "Cybersecurity",
    degree: "Postgraduate studies",
    dateRange: "2019–2020",
    website: "https://www.amw.gdynia.pl",
  },
  {
    school: "Adam Mickiewicz University",
    city: "Poznań",
    country: "Poland",
    field: "Philosophy",
    subfield: "Social Communication",
    degree: "Master studies",
    dateRange: "2013–2016",
    website: "https://amu.edu.pl/",
  },
  {
    school: "Post-Secondary Vocational School",
    city: "Poznań",
    country: "Poland",
    field: "Sound Engineering",
    degree: "Technician",
    dateRange: "2011–2013",
  },
  {
    school: "Adam Mickiewicz University",
    city: "Poznań",
    country: "Poland",
    field: "Instructional Technology",
    degree: "Bachelor's degree",
    dateRange: "2010–2013",
    website: "https://amu.edu.pl/",
  },
];

export const experience: Experience = [
  {
    role: "Backend Software Engineer",
    company: "Capbase",
    startDate: "04/2021",
    endDate: "07/2022",
    description: [
      "Implemented and enhanced several product features in TypeScript, Node.js, and React, improving user experience and addressing customer feedback.",
      "Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration and improving internal workflows.",
      "Diagnosed and resolved technical issues, improving application stability and ensuring smooth performance.",
      "Wrote and maintained comprehensive unit and integration tests, leading to high code quality and fewer bugs in production.",
    ],
    descriptionShortened: [
      "Implemented and enhanced several product features in TypeScript, Node.js, and React.",
      "Developed and optimized an internal API with Express.js and AWS.",
      "Diagnosed and resolved technical issues.",
      "Wrote and maintained comprehensive unit and integration tests.",
    ],
    technologies: [
      "AWS",
      "Bash",
      "Express.js",
      "Linux",
      "Node.js",
      "React",
      "TypeScript",
    ],
  },
  {
    role: "Frontend Software Engineer",
    company: "Beta District",
    startDate: "12/2019",
    endDate: "08/2020",
    description: [
      "Developed reusable components in React and TypeScript, improving code consistency and speeding up the development process for future features.",
      "Implemented unit and integration tests using Jest and React Testing Library, ensuring high code reliability and significantly reducing bug occurrences.",
    ],
    descriptionShortened: [
      "Developed reusable components in React and TypeScript for a newly created frontend.",
      "Implemented unit and integration tests using Jest and React Testing Library.",
    ],
    technologies: [
      "GraphQL",
      "JavaScript",
      "React",
      "Redux",
      "TypeScript",
      "Unit testing",
    ],
  },
  {
    role: "Software Test Engineer",
    company: "Beta District",
    startDate: "01/2019",
    endDate: "11/2019",
    description: [
      "Remotely mentored a QA specialist, introducing programming and test automation practices, which enhanced the team's testing efficiency and technical capabilities.",
      "Developed and maintained automated tests in JavaScript and Ruby, improving test coverage and helping ensure consistent product quality throughout the release cycle.",
      "Contributed to frontend development by implementing basic functionalities in React, supporting the timely delivery of key features alongside the development team.",
    ],
    descriptionShortened: [
      "Remotely mentored QA specialist.",
      "Developed and maintained automated tests in JavaScript and Ruby.",
      "Contributed to frontend development by implementing basic functionalities in React.",
    ],
    technologies: [
      "API testing",
      "JavaScript",
      "React",
      "Ruby",
      "Test automation",
    ],
  },
  {
    role: "QA Specialist",
    company: "Beta District",
    startDate: "02/2018",
    endDate: "12/2018",
    description: [
      "Conducted manual functional and API testing using Burp Suite and Postman, ensuring reliability and preventing major issues before deployment to production.",
      "Collaborated closely with developers to implement new functionalities, providing critical feedback that improved product quality and streamlined the development process.",
      "Learned and applied test automation using JavaScript and Ruby, contributing to enhanced test coverage and overall improvement in the team's testing process.",
      "Performed post-release production environment testing using manual testing techniques, identifying and resolving issues that maintained system stability and reliability.",
    ],
    descriptionShortened: [
      "Conducted manual functional and API testing using Burp Suite and Postman.",
      "Collaborated closely with developers to implement new features.",
      // "Developing my skills in writing automated tests.",
      "Performed production environment testing after each release.",
    ],
    technologies: [
      "API testing",
      "Burp Suite",
      "JavaScript",
      "Manual testing",
      "Ruby",
      "Test automation",
    ],
  },
  {
    role: "Junior QA Specialist",
    company: "Beta District",
    startDate: "04/2017",
    endDate: "01/2018",
    description: [
      "Performed manual testing to identify and document defects, ensuring high-quality software products and preventing critical issues before release.",
      "Proposed and implemented more efficient testing procedures, streamlining the process and reducing test execution time.",
      "Actively identified and reported bugs, suggesting improvements that contributed to enhancing the overall quality and performance of software projects.",
      "Actively learned new concepts and techniques in manual and API testing, applying these insights to improve the team's testing effectiveness and product quality.",
    ],
    descriptionShortened: [
      "Performed manual testing to identify and document defects.",
      "Proposed and implemented more efficient testing procedures.",
      "Suggested improvements to projects by finding and reporting bugs.",
      "Actively learned new concepts and techniques in software testing.",
    ],
    technologies: ["API testing", "Manual testing"],
  },
  {
    role: "Instructional Designer",
    company: "LLidero",
    startDate: "05/2014",
    endDate: "06/2016",
    description: [
      "Designed and developed educational courses tailored to various learner needs, applying instructional design principles and pedagogical techniques to create effective learning experiences.",
      "Set clear learning goals and objectives for each course, ensuring alignment with educational standards and learner outcomes.",
      "Conducted thorough testing of courses, demonstrating strong attention to detail to identify and resolve any issues, ensuring the quality and effectiveness of instructional materials.",
      "Collaborated with subject matter experts to gather content and ensure accuracy, integrating their expertise into the course design to enhance the learning experience.",
    ],
    descriptionShortened: [
      "Designed and developed educational courses tailored to various learner needs.",
      "Set clear learning goals and objectives for each course.",
      // "Conducted thorough testing of courses.",
      "Collaborated with subject matter experts to gather content and ensure accuracy.",
    ],
  },
];

export const interests: Interest[] = [
  {
    name: "Mathematics",
    description:
      "Uncovering the hidden order and underlying patterns that govern the universe.",
  },
  {
    name: "Philosophy",
    description:
      "Searching the meaning behind the order and chaos that mathematics reveals.",
  },
  {
    name: "Psychology",
    description:
      "Exploring the complexities of human thought, mirroring the pursuit of order amid the chaos revealed by mathematics and questioned by philosophy.",
  },
  {
    name: "Theoretical Computer Science",
    description:
      "Investigating the limits of computation, where chaos, order, and meaning intersect in the search for knowledge.",
  },
];

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
      "REST API",
      "GraphQL",
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
  diagrammingDocumentation: {
    display: "Diagramming & Technical Documentation",
    skills: ["PlantUML", "Structurizr", "Graphviz", "TikZ", "LaTeX"],
  },
  softwareEngineering: {
    display: "Software Engineering",
    skills: [
      "Algorithms and Data Structures",
      "Code Review",
      "Debugging",
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
    skills: ["Git", "GitHub", "Linear", "Obsidian"],
  },
  operatingSystems: {
    display: "Operating Systems",
    skills: ["Linux"],
  },
};

export const softSkills: SoftSkill[] = [
  "Adaptability",
  "Analytical skills",
  "Asking questions",
  "Attention to detail",
  "Collaboration",
  "Continuous learning",
  "Critical thinking",
  "Growth mindset",
  "Mentoring",
  "Open-mindedness",
  "Openness to feedback",
  "Persistence",
  "Problem solving",
  "Remote working",
  "Resilience",
  "Self-motivation",
];

export const projects: Project[] = [
  {
    slug: "crochet-management-system",
    title: "Crochet Management System Design",
    shortTitle: "Crochet Management System Design",
    started: "09/2024",
    ended: "09/2024",
    component: CrochetManagementSystem,
  },
  {
    slug: "engineering-intangible",
    title:
      "Engineering the Intangible: The Essential Handbook for Engineers Who Refuse to Lose Their Minds While Navigating a World Where the Only Certainty Is That Your Stack Will Never Stop Changing",
    shortTitle: "Engineering the Intangible",
    started: "07/2024",
    ended: "Present (Research Phase)",
    component: EngineeringtheIntangible,
  },
];

export const articles: Article[] = [
  {
    title: "Assumptions in System Design: Avoiding the Hidden Traps",
    abstract:
      "In system design, assumptions—whether explicit or hidden—play a crucial role in shaping the success and stability of complex systems. However, when left unchecked, especially when influenced by cognitive biases, these assumptions can lead to serious risks and system failures. This article takes a closer look at the challenge of identifying and managing hidden assumptions that can impact performance, scalability, and reliability. Traditional methods like cross-team reviews and standard testing often miss these implicit assumptions until they create critical issues. To help mitigate these risks, this article presents practical strategies such as scenario planning, designing for failure, and validating assumptions through thorough testing. A real-world example—the failure of NASA's Mars Climate Orbiter—highlights the importance of these practices. A simple, unexamined assumption about units of measurement led to a 125 million mission loss. By proactively managing assumptions, teams can reduce errors, improve communication, and build systems that are far more resilient and reliable.",
    comment:
      "This article is an introduction to a series on assumptions in system design, covering topics such as managing technical, security, and business assumptions, mitigating cognitive biases, and best practices for validating assumptions throughout the system lifecycle.",
    started: "10/2024",
    ended: "10/2024",
    pdfFileName: "assumptions_in_system_design.pdf",
  },
];

export const spokenLanguages: SpokenLanguages = [
  {
    language: "Polish",
    level: "Native proficiency",
  },
  {
    language: "English",
    level: "Full professional proficiency",
  },
  {
    language: "Czech",
    level: "Professional working proficiency",
  },
  {
    language: "Spanish",
    level: "Elementary proficiency",
  },
];

export const faIconClass = {
  aboutMe: "fa-solid fa-ghost",
  contact: "fa-solid fa-address-book",
  education: "fa-solid fa-user-graduate",
  experience: "fa-solid fa-person-digging",
  externalLink: "fa-solid fa-link",
  favourite: "fa-solid fa-heart",
  futureTechstack: "fa-solid fa-book-open-reader",
  generalInterests: "fa-solid fa-book-open-reader",
  headline: "fa-solid fa-code",
  projects: "fa-solid fa-person-walking-luggage",
  softSkills: "fa-solid fa-people-pulling",
  spokenLanguages: "fa-solid fa-language",
  summary: "fa-solid fa-user-pen",
  // technologies: "fa-solid fa-gears",
  technologies: "fa-solid fa-user-astronaut",
};
