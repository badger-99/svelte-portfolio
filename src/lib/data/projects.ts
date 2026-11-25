import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from './types';
import github from 'svelte-awesome/icons/github';
import globe from 'svelte-awesome/icons/globe';

const items: Array<Project> = [
	{
		slug: 'stresstest',
		color: '#3b82f6',
		description:
			'StressTest is a stress check-in built on the Perceived Stress Scale (PSS-10), one of the most widely used stress questionnaires. A language model writes a short personal summary from your answers. Results stay in your browser, and the AI receives your answers but never your name.',
		shortDescription: 'A PSS-10 stress check-in with an AI-written summary. No account needed.',
		links: [
			{
				to: 'https://github.com/badger-99/stress_test',
				label: 'Source Code',
				newTab: true,
				icon: github
			},
			{ to: 'https://stresstest.alfredm.me/', label: 'Website', newTab: true, icon: globe }
		],
		logo: Assets.StressTest,
		name: 'StressTest',
		skills: getSkills('ts', 'nextjs', 'tailwindcss', 'vercel', 'zod'),
		type: 'Web Application',
		screenshots: [
			{
				label: 'Home',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-1.png'
			},
			{
				label: 'Check-in',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-2.png'
			},
			{
				label: 'Results',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-3.png'
			},
			{
				label: 'History',
				src: 'src/lib/assets/screenshots/stresstest/Screenshot-4.png'
			}
		]
	},
	{
		slug: 'project-nehemiah',
		color: '#ffd00d',
		description:
			'A contribution tracker for Capstone Fellowship, in daily use by the church in English and Kiswahili, with SMS reminders and email receipts. I designed and specified the system and shipped it with AI-assisted development, including unit and end-to-end test suites.',
		shortDescription:
			'A bilingual (English/Kiswahili) contribution tracker in daily use by a church.',
		links: [
			{
				to: 'https://projectnehemiah.capstonechurches.org',
				label: 'Website',
				newTab: true,
				icon: globe
			}
		],
		logo: Assets.ProjectNehemiah,
		name: 'Project Nehemiah',
		skills: getSkills('nextjs', 'ts', 'supabase', 'tailwindcss', 'vitest', 'playwright'),
		type: 'Volunteer Project'
	},
	{
		slug: 'svelte-portfolio',
		color: '#ff7a00',
		description: 'Personal Portfolio',
		shortDescription:
			'This portfolio website, in case you like it and want to make your own based on it! :)',
		links: [
			{
				to: 'https://github.com/badger-99/svelte-portfolio',
				label: 'Source Code',
				newTab: true,
				icon: github
			}
		],
		logo: Assets.Svelte,
		name: 'Svelte Portfolio',
		skills: getSkills('svelte', 'ts', 'tailwindcss'),
		type: 'Website'
	},
	{
		slug: 'workspace-reservation',
		color: 'red',
		description: 'Collaborative Project',
		shortDescription:
			'Back-end half of a fullstack project that allows coworking space owners to manage their workspaces, and users to make bookings.',
		links: [
			{
				to: 'https://github.com/badger-99/workspace-reservation-back-end',
				label: 'Source Code',
				newTab: true,
				icon: github
			},
			{
				to: 'https://github.com/Zilola-Nazarova/workspace-reservation-front-end',
				label: 'Front-end repo',
				newTab: true,
				icon: github
			}
		],
		logo: Assets.Unknown,
		name: 'Workspace Reservation',
		skills: getSkills('ruby', 'rails', 'rspec', 'swagger'),
		type: 'Collaborative Project'
	}
];

const title = 'Projects';

const ProjectsData = { title, items };

export default ProjectsData;
