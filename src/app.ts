type APP_Education = {
  school: string;
  degree: string;
  dateRange: string;
};

type APP_Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  skills: APP_Skill[];
};

type APP_Skill =
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

type APP_Language = {
  language: string;
  level:
    | "Elementary proficiency"
    | "Limited working proficiency"
    | "Full professional proficiency"
    | "Native proficiency";
};
