import {
  AnkiScripts,
  CrochetAdminTools,
  EngineeringtheIntangible,
  Intraview,
  PlantUML,
  Toiper,
  UnderPressure,
} from "$lib/app/sections/projects";
import type {
  About,
  CurrentTechstack,
  Education,
  Experience,
  GenerallyInterestedIn,
  Project,
  ProjectLegacy,
  SoftSkill,
  SpokenLanguages,
  TechSkill,
} from "$lib/types";

export const about: About = {
  name: "Natalia Pospieszyńska",
  role: "Software Engineer",
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

export const currentTechstack: CurrentTechstack = [
  {
    tech: "AWS",
    favourite: false,
  },
  {
    tech: "Bash",
    favourite: false,
  },
  {
    tech: "Crochet Hook",
    favourite: true,
  },
  {
    tech: "JavaScript",
    favourite: false,
  },
  {
    tech: "Linux",
    favourite: true,
  },
  {
    tech: "Node.js",
    favourite: true,
  },
  {
    tech: "React",
    favourite: false,
  },
  {
    tech: "Svelte",
    favourite: true,
  },
  {
    tech: "TypeScript",
    favourite: true,
  },
];

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
    role: "Backend Engineer",
    company: "Capbase",
    startDate: "04/2021",
    endDate: "07/2022",
    description: [
      "Implemented and enhanced new product features in TypeScript, Node.js and React, improving user experience and addressing customer feedback.",
      "Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration.",
      "Diagnosed and resolved technical issues, improving application stability.",
      "Wrote and maintained comprehensive unit and integration tests, ensuring high code quality and bugs reduction.",
    ],
    descriptionShortened: [
      "Implemented and enhanced new features in TypeScript, Node.js and React.",
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
    role: "Frontend Engineer",
    company: "Beta District",
    startDate: "12/2019",
    endDate: "08/2020",
    description: [
      "Developed reusable components in React and TypeScript for a newly created frontend, ensuring consistency and efficiency across the application.",
      "Implemented unit and integration tests using Jest and React Testing Library, improving code reliability and reducing bugs.",
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
    role: "Test Engineer",
    company: "Beta District",
    startDate: "01/2019",
    endDate: "11/2019",
    description: [
      "Remotely mentored QA specialist, introducing her to programming and test automation practices, enhancing the team's technical capabilities.",
      "Developed and maintained various automated tests in JavaScript and Ruby, improving test coverage and ensuring product quality.",
      "Contributed to frontend development by implementing basic functionalities in React, supporting the development team in delivering features.",
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
      "Conducted manual functional and API testing using Burp Suite and Postman, ensuring the reliability and accuracy of software features before deployment.",
      "Collaborated closely with developers to implement new functionalities, providing critical feedback during the development process to enhance product quality and ensure seamless integration of new features.",
      "Learned and applied test automation using JavaScript and Ruby, developing my skills in writing automated tests and contributing to the overall improvement of the testing process.",
      "Performed production environment testing after each release, using manual testing techniques to identify and resolve post-deployment issues, maintaining system stability.",
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
      "Performed manual testing to identify and document defects, ensuring the quality of software products before release.",
      "Proposed and implemented more efficient testing procedures, streamlining the testing process and reducing the time needed for test execution.",
      "Suggested improvements to projects by actively finding and reporting bugs, contributing to the overall enhancement of software quality.",
      "Actively learned new concepts and techniques in software testing, expanding my knowledge of manual and API testing, and applying these insights to improve testing effectiveness.",
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

export const generalInterests: GenerallyInterestedIn = [
  "Algorithms and Data Structures",
  "Artificial Intelligence",
  "Blockchain",
  "Data Science",
  "Databases",
  "DevOps",
  "Distributed Systems",
  "Mathematics",
  "Psychology",
  "Security",
];

export const softSkills: SoftSkill[] = [
  "Adaptability",
  "Analytical skills",
  "Asking questions",
  "Attention to detail",
  "Continuous learning",
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

export const technologies: TechSkill[] = [
  "AWS",
  "Bash",
  "JavaScript",
  "Linux",
  "Node.js",
  "React",
  "Svelte",
  "TypeScript",
];

export const projects: Project[] = [
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

export const projectsLegacy: ProjectLegacy[] = [
  {
    title: "Anki Scripts",
    shortDescription: "Scripts and styling for Anki flashcards.",
    status: "Maintained/active development.",
    repository: {
      private: true,
    },
    component: AnkiScripts,
  },
  {
    title: "Crocheting Admin Tools",
    shortDescription:
      "Personal database of yarns and crochet patterns. Various tools and calculators for patterns/projects/yarns management.",
    status: "Maintained/active development.",
    repository: {
      private: true,
    },
    component: CrochetAdminTools,
  },
  {
    title: "Intraview",
    shortDescription: "Prepare for behavioral interviews like a pro.",
    status: "Active development.",
    repository: {
      private: true,
      github: "Public soon",
    },
    component: Intraview,
  },
  {
    title: "PlantUML-is-your-friend",
    shortDescription: "Easy management of PlantUML diagrams.",
    status: "Maintained/active development.",
    repository: {
      private: false,
      github: "https://github.com/burczan/plantuml-is-your-friend",
    },
    component: PlantUML,
  },
  {
    title: "Toiper",
    shortDescription:
      "Compare price of two toilet paper rolls depending on amount of layers and leafs.",
    status:
      "Current versions deprecated. Working on improved comparison algorithm.",
    repository: {
      private: false,
      github: "https://github.com/burczan/toiper",
    },
    component: Toiper,
  },
  {
    title: "Under Pressure",
    shortDescription:
      "Display pressure values from last 4 hours for Liberec station and warn if change can be dangerous.",
    status: "Deprecated.",
    repository: {
      private: false,
      github: "https://github.com/burczan/under-pressure",
    },
    component: UnderPressure,
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
    level: "Limited working proficiency",
  },
  { language: "Spanish", level: "Elementary proficiency" },
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
