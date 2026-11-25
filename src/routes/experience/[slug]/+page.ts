import { error } from '@sveltejs/kit';
import ExperienceData from '#lib/data/experience.ts';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const experience = ExperienceData.items.find((item) => item.slug === params.slug);

	if (!experience) error(404, 'Experience not found');

	return { experience };
};
