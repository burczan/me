import { projects } from "$lib/data";
import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    projects,
  };
}) satisfies PageLoad;
