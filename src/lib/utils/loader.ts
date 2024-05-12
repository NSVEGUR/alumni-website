import { writable } from 'svelte/store';

const loader = () => {
	const { subscribe, update, set } = writable({
		status: 'IDLE',
		message: ''
	});
	function setNavigating (isNavigating: boolean) {
		update(() => {
			return {
				status: isNavigating ? 'NAVIGATING' : 'IDLE',
				message: ''
			};
		});
	}
	function setLoading (isLoading: boolean, message = '') {
		update(() => {
			return {
				status: isLoading ? 'LOADING' : 'IDLE',
				message: isLoading ? message : ''
			};
		});
	}
	return { subscribe, update, set, setNavigating, setLoading };
};

export const loading = loader();
