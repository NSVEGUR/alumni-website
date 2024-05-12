// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			sitemap: {
				type: 'link';
				title: string;
				href: string;
				description?: string;
				parent?: string;
			}[];
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export { };
