import { WEB3_FORMS_ACCESS_KEY } from "$env/static/private";
import { error, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
	contact: async function ({ request, fetch }) {
		const formData = await request.formData();
		const data = Object.fromEntries(formData);
		console.log("Data: ", data);
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			body: JSON.stringify({
				...data,
				access_key: WEB3_FORMS_ACCESS_KEY,
			})
		});
		const result = await response.json();
		if (result.success) {
			return {
				status: 200,
				body: result,
			};
		} else {
			return error(400, 'Failed to submit the form');
		}
	}
};