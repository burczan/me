import { articles } from "$lib/data";
import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    articles,
  };
}) satisfies PageLoad;
