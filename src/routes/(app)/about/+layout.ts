import {
  interests,
  projects,
  softSkills,
  techSkills,
  spokenLanguages,
} from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    interests,
    projects,
    softSkills,
    spokenLanguages,
    techSkills,
  };
}) satisfies LayoutLoad;
