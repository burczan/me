import type { ComponentType } from "svelte";

export type About = {
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

export type Education = {
  school: string;
  city: string;
  country: string;
  field: string;
  subfield?: string;
  degree: string;
  dateRange: string;
  website?: string;
}[];

export type TechSkills = {
  [key: string]: {
    display: string;
    skills: string[];
  };
};

export type SoftSkill = string;

export type Interest = {
  name: string;
  description: string;
};

export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  descriptionShortened: string[];
  technologies?: string[];
}[];

export type SpokenLanguages = {
  language: string;
  level:
    | "Elementary proficiency"
    | "Limited working proficiency"
    | "Full professional proficiency"
    | "Native proficiency";
}[];

export type ProjectTitle =
  | "Anki Scripts"
  | "Crocheting Admin Tools"
  | "Intraview"
  | "PlantUML-is-your-friend"
  | "Toiper"
  | "Under Pressure";

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  started: string;
  ended: string;
  component: ComponentType;
};
