import { articles } from "$lib/server/articles";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {

	const id = params.id;
	const article = articles.find(article => article.id === Number(id));
	if (!article) {
		return error(404, "Article not found");
	}
	return {
		article,
		maxId: articles.length,
	};
};