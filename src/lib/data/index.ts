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
    tech: "Crochet Hook",
    favourite: true,
  },
  {
    tech: "Bash",
    favourite: false,
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
    school: "Post-Secondary School",
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
      "Delivering new features and improvements to the product",
      "Developing an API for the internal usage",
      "Debugging",
      "Writing unit and integration tests",
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
      "Building reusable components for the newly created frontend",
      "Writing unit and integration tests",
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
      "Remote mentoring of QA specialist, including introduction into programming and test automation",
      "Writing various kinds of automated tests",
      "Developing functionalities in React",
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
      "Manual functional and API testing",
      "Working in close cooperation with the developers for the implementation of new functionalities",
      "Testing the production environment after each release",
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
      "Manual testing",
      "Proposing and implementing more efficient testing procedures",
      "Making suggestions for improvements to projects",
      "Finding and reporting bugs",
    ],
    techSkills: ["API testing", "Manual testing"],
  },
];

export const futureTechstack: FutureTechnology[] = [
  "C",
  "C++",
  "C#",
  "Java",
  "Python",
  "Rust",
  "Solidity",
  "(but not limited to)",
];

export const generallyInterested: GenerallyInterestedIn = [
  "Algorithms and Data Structures",
  "Blockchain",
  "Crocheting",
  "DevOps",
  "Distributed Systems",
  "Electronics",
  "Knitting",
  "Machine Learning",
  "Math",
  "Neuroscience",
  "Resilience Engineering",
  "Security",
  "Theoretical Computer Science",
  "Tunisian Crochet",
  "Web3",
];

export const softSkills: SoftSkill[] = [
  "Analytical skills",
  "Attention to detail",
  "Laziness",
  "Mentoring",
  "Open-mindedness",
  "Problem solving",
  "Remote working",
  "Self learning",
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
  generallyInterested: "fa-solid fa-brain",
  headline: "fa-solid fa-code",
  softSkills: "fa-solid fa-people-pulling",
  spokenLanguages: "fa-solid fa-language",
  summary: "fa-solid fa-user-pen",
};
