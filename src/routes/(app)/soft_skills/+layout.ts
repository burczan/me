import { softSkills } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    softSkills,
  };
}) satisfies LayoutLoad;
