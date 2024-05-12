import { activities } from "$lib/server/activities";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async () => {
	return {
		activities,
	};
};