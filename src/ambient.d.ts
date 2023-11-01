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
  techSkills: TechSkill[] | CurrentTechnology[];
}[];

type SoftSkill = string;

type TechSkill = string;

type CurrentTechstack = {
  tech: string;
  favourite: boolean;
}[];

type FutureTechstack = string;

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
