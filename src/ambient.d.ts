type About = {
  name: string;
  role: string;
  location: {
    city: string;
    region: string;
    country: string;
    icon: string;
    mapUrl: string;
  };
  contact: {
    [key in "github" | "linkedin" | "web"]: {
      href: string;
      displayValue: string;
      faIconClass: string;
    };
  };
};

type Education = {
  school: string;
  city: string;
  field: string;
  subfield?: string;
  degree: string;
  dateRange: string;
}[];

type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  techSkills: TechSkill[];
}[];

type SoftSkill =
  | "Analytical skills"
  | "Attention to detail"
  | "Laziness"
  | "Mentoring"
  | "Open-mindedness"
  | "Problem solving"
  | "Remote working"
  | "Self learning";

type TechSkill =
  | CurrentTechnology
  | (
      | "API testing"
      | "Debugging"
      | "Manual testing"
      | "Test automation"
      | "Unit testing"
    );

type CurrentTechnology =
  | "AWS"
  | "Bash"
  | "Burp Suite"
  | "Crochet Hook"
  | "Express.js"
  | "GraphQL"
  | "JavaScript"
  | "Linux"
  | "Node.js"
  | "React"
  | "Redux"
  | "Ruby"
  | "Svelte"
  | "TypeScript";

type CurrentTechstack = {
  tech: CurrentTechnology;
  favourite: boolean;
}[];

type FutureTechnology =
  | "C"
  | "C++"
  | "C#"
  | "Java"
  | "Python"
  | "Rust"
  | "Solidity"
  | "(but not limited to)";

type GenerallyInterestedIn = string[];

type SpokenLanguages = {
  language: string;
  level:
    | "Elementary proficiency"
    | "Limited working proficiency"
    | "Full professional proficiency"
    | "Native proficiency";
}[];

type ProjectTitle =
  | "Toiper"
  | "Intraview"
  | "Anki Scripts"
  | "Under Pressure"
  | "Crocheting Admin Tools";

type Project<T> = {
  title: ProjectTitle;
  component: T;
};
