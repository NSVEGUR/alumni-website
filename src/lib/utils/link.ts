export const isTargetBlank = (href: string) =>
	href.includes('.') || href.includes('https://') || href.includes('http://');
