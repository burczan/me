type Education = {
  school: string;
  degree: string;
  dateRange: string;
};

type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: TechSkill[];
};

type TechSkill =
  | "API testing"
  | "AWS"
  | "Bash"
  | "Burp Suite"
  | "Express.js"
  | "GraphQL"
  | "JavaScript"
  | "Linux"
  | "Manual testing"
  | "Mentoring"
  | "Node.js"
  | "React"
  | "Redux"
  | "Ruby"
  | "Test automation"
  | "TypeScript"
  | "Unit testing";

type SoftSkill =
  | "Analytical skills"
  | "Attention to detail"
  | "Laziness"
  | "Mentoring"
  | "Open-mindedness"
  | "Problem solving"
  | "Remote working"
  | "Self learning";

type SpokenLanguages = {
  language: string;
  level:
    | "Elementary proficiency"
    | "Limited working proficiency"
    | "Full professional proficiency"
    | "Native proficiency";
}[];

type Project = {
  title: string;
};

type Resume = {
  about: {
    name: string;
    role: string;
    location: string;
    description: string;
  };
  experience: Experience[];
  education: Education[];
  projects: Project[];
  spokenLanguages: SpokenLanguages;
  techstack: {
    currentTechstack: string[];
    happyToLearn: string[];
    generallyInterested: string[];
  };
  softSkills: SoftSkill[];
};
