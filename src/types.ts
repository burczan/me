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
  skills: Skill[];
};

type Skill =
  | "API testing"
  | "AWS"
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

type Language = {
  language: string;
  level:
    | "Elementary proficiency"
    | "Limited working proficiency"
    | "Full professional proficiency"
    | "Native proficiency";
};
