import { activities } from "$lib/server/activities";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {

	const id = params.id;
	const activity = activities.find(activity => activity.id === Number(id));
	if (!activity) {
		return error(404, "activity not found");
	}
	return {
		activity,
		maxId: activities.length,
	};
};