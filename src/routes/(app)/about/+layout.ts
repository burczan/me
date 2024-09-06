import {
  interests,
  projects,
  softSkills,
  spokenLanguages,
  technologies,
} from "$lib/data";
import { techSkills } from "$lib/data/techSkills";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    interests,
    projects,
    softSkills,
    spokenLanguages,
    technologies,
    techSkills,
  };
}) satisfies LayoutLoad;
