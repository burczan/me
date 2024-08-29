import { redirect } from "@sveltejs/kit";
import { base } from "$app/paths";

export async function handle({ event, resolve }) {
  const response = await resolve(event);

  if (response.status === 404) {
    redirect(303, `${base}/404/`);
  }

  return response;
}
