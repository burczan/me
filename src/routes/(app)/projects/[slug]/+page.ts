import { redirect } from "@sveltejs/kit";
import { projects } from "$lib/data";
import { base } from "$app/paths";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const project = projects.find((project) => {
    return project.slug === params.slug;
  });

  if (project) {
    return {
      project,
    };
  }

  redirect(303, `${base}/projects/`);
};
