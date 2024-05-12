import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const images = [
		{
			src: '/gallery/0.webp',
			alt: 'Image 0',
		},
		{
			src: '/gallery/1.webp',
			alt: 'Image 1',
		},
		{
			src: '/gallery/2.webp',
			alt: 'Image 2',
		},
		{
			src: '/gallery/3.webp',
			alt: 'Image 3',
		},
		{
			src: '/gallery/4.webp',
			alt: 'Image 4',
		},
	];
	return {
		images
	};
};