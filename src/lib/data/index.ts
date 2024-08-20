import {
  AnkiScripts,
  CrochetAdminTools,
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
  SoftSkill,
  SpokenLanguages,
  Technology,
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
    field: "Cybersecurity",
    degree: "Postgraduate studies",
    dateRange: "2019 - 2020",
  },
  {
    school: "Adam Mickiewicz University",
    city: "Poznań",
    field: "Philosophy",
    subfield: "Social Communication",
    degree: "Master studies",
    dateRange: "2013 - 2016",
  },
  {
    school: "Post-Secondary Vocational School",
    city: "Poznań",
    field: "Sound Engineering",
    degree: "Technician",
    dateRange: "2011 - 2013",
  },
  {
    school: "Adam Mickiewicz University",
    city: "Poznań",
    field: "Instructional Technology",
    degree: "Bachelor's degree",
    dateRange: "2010 - 2013",
  },
];

export const experience: Experience = [
  {
    role: "Backend Engineer",
    company: "Capbase",
    startDate: "Apr 2021",
    endDate: "Jul 2022",
    description: [
      "Implemented and enhanced new product features in TypeScript, Node.js and React, improving user experience and addressing customer feedback.",
      "Developed and optimized an internal API with Express.js and AWS, enabling seamless data integration.",
      "Diagnosed and resolved technical issues, improving application stability.",
      "Wrote and maintained comprehensive unit and integration tests, ensuring high code quality and bugs reduction.",
    ],
    techSkills: [
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
    startDate: "Dec 2019",
    endDate: "Aug 2020",
    description: [
      "Developed reusable components in React and TypeScript for a newly created frontend, ensuring consistency and efficiency across the application.",
      "Implemented unit and integration tests using Jest and React Testing Library, improving code reliability and reducing bugs.",
    ],
    techSkills: [
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
    startDate: "Jan 2019",
    endDate: "Nov 2019",
    description: [
      "Remotely mentored QA specialist, introducing her to programming and test automation practices, enhancing the team's technical capabilities.",
      "Developed and maintained various automated tests in JavaScript and Ruby, improving test coverage and ensuring product quality.",
      "Contributed to frontend development by implementing basic functionalities in React, supporting the development team in delivering features.",
    ],
    techSkills: [
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
    startDate: "Feb 2018",
    endDate: "Dec 2018",
    description: [
      "Conducted manual functional and API testing using Burp Suite and Postman, ensuring the reliability and accuracy of software features before deployment.",
      "Collaborated closely with developers to implement new functionalities, providing critical feedback during the development process to enhance product quality and ensure seamless integration of new features.",
      "Learned and applied test automation using JavaScript and Ruby, developing my skills in writing automated tests and contributing to the overall improvement of the testing process.",
      "Performed production environment testing after each release, using manual testing techniques to identify and resolve post-deployment issues, maintaining system stability.",
    ],
    techSkills: [
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
    startDate: "Apr 2017",
    endDate: "Jan 2018",
    description: [
      "Performed manual testing to identify and document defects, ensuring the quality of software products before release.",
      "Proposed and implemented more efficient testing procedures, streamlining the testing process and reducing the time needed for test execution.",
      "Suggested improvements to projects by actively finding and reporting bugs, contributing to the overall enhancement of software quality.",
      "Actively learned new concepts and techniques in software testing, expanding my knowledge of manual and API testing, and applying these insights to improve testing effectiveness.",
    ],
    techSkills: ["API testing", "Manual testing"],
  },
];

export const futureTechstack: Technology[] = [
  "C",
  "C++",
  ".NET",
  "Java",
  "Python",
  "Rust",
  "Solidity",
  "(but not limited to)",
];

export const generalInterests: GenerallyInterestedIn = [
  "Algorithms and Data Structures",
  "Artificial Intelligence",
  "Blockchain",
  "Crocheting",
  "Data Science",
  "Databases",
  "DevOps",
  "Distributed Systems",
  "Mathematics",
  "Resilience Engineering",
  "Security",
];

export const softSkills: SoftSkill[] = [
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

export const techSkills: TechSkill[] = [
  "API testing",
  "AWS",
  "Bash",
  "Crochet Hook",
  "JavaScript",
  "Linux",
  "Node.js",
  "React",
  "Svelte",
  "Test automation",
  "TypeScript",
  "Unit testing",
];

export const projects: Project[] = [
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
];

export const faIconClass = {
  contact: "fa-solid fa-address-book",
  currentTechstack: "fa-solid fa-gears",
  education: "fa-solid fa-graduation-cap",
  experience: "fa-solid fa-person-digging",
  favourite: "fa-solid fa-heart",
  futureTechstack: "fa-solid fa-book-open-reader",
  generalInterests: "fa-solid fa-brain",
  headline: "fa-solid fa-code",
  softSkills: "fa-solid fa-people-pulling",
  spokenLanguages: "fa-solid fa-language",
  summary: "fa-solid fa-user-pen",
};
