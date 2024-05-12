export type Link = {
	type: 'link';
	href: string;
	title: string;
};

export type Article = {
	alt_text: string;
	content: string;
	created_at: string;
	id: number;
	image_height: number;
	image_link: string;
	image_width: number;
	summary_for_seo: string;
	title: string;
	video_link: string | null;
};

export type Activity = {
	alt_text: string;
	content: string;
	id: number;
	image_height: number;
	image_link: string;
	image_width: number;
	link: string;
	summary_for_seo: string;
	time: string;
	title: string;
	video_link: string | null;
};


export type MemberData = {
	imagePath: string;
	name: string;
	position:
	| 'Professor In Charge'
	| 'Secretary'
	| 'Joint Secretary'
	| 'Mentor, Events'
	| 'Mentor, PR & Marketing'
	| 'Mentor, Alumni Relations'
	| 'Overall Mentor'
	| 'Lead'
	| 'Admin'
	| 'Co Lead'
	| 'Co Lead, Data'
	| 'Co Lead, Outreach'
	| 'Co-ordinator'
	| 'Co-ordinator, Data'
	| 'Co-ordinator, Outreach'
	| 'Content Creator'
	| 'Social Media Manager'
	| 'Graphic Designer'
	| 'Writer';

	email?: string;
	linkedIn?: string;
};
