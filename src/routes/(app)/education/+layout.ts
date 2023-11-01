import { education } from "$lib/data";
import type { LayoutLoad } from "./$types";

export const load = (async () => {
  return {
    education,
  };
}) satisfies LayoutLoad;
