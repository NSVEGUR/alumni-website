import type { PageServerLoad } from "./$types";
import { articles } from "$lib/server/articles";
import { activities } from "$lib/server/activities";
import { MANAGEMENT, CORE_TEAM, MENTORS } from "$lib/server/team";

export const load: PageServerLoad = async () => {
	return {
		articles: articles.map(({ id, title, created_at }) => ({
			id, title, time: created_at
		})),
		activities: activities.map(({ id, title, time }) => ({
			id, title, time
		})),
		team: {
			MANAGEMENT,
			CORE_TEAM,
			MENTORS,
		}
	};
};