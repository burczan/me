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

export type SoftSkill = string;

export type TechSkill = string;

export type Technology = string;

export type CurrentTechstack = {
  tech: Technology;
  favourite: boolean;
}[];

export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string[];
  descriptionShortened: string[];
  technologies?: TechSkill[] | Technology[];
}[];

export type GenerallyInterestedIn = string[];

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
  title: ProjectTitle;
  shortDescription: string;
  status: string;
  techstack?: Technology[];
  repository: {
    private: boolean;
    github?: string;
  };
  component: ComponentType;
};

export type ProjectComponent = Pick<Project, "title" | "component">;
