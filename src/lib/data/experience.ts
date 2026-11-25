import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from './types';

const title = 'Experience';

const items: Array<Experience> = [
	{
		slug: 'lightray-tech',
		company: 'Lightray Technologies',
		description: `
For a year and a half I was the only developer at Lightray Technologies, an early-stage AI startup. I built the company's finance AI chat app from an empty Next.js project. It was the front end for Lightray's own finance language model. I owned every technical decision and worked directly with the founder and the ML engineer.

## What I built

- **Answers you can click.** The model used tool calls to answer investors with interactive components inside the chat: a trending-stocks list where clicking a stock opened its price chart in the same window, stock news, company financials and a stock screener. Each came with a short caption written by the model.
- **The chat itself.** Streamed responses, saved chat history and shareable chat links.
- **Phone verification** with Twilio. One-time codes were stored only as SHA-256 hashes and limited to 3 attempts per number every 15 minutes, alongside Supabase sign-in and Cloudflare Turnstile bot checks.
- **API keys.** A settings section where users could create named keys for the company's model API and revoke them one at a time or all at once.
- **Payments.** Stripe Checkout for buying inference credits, with a per-account summary of token usage.

## Keeping up with the SDK

When the Vercel AI SDK team paused development of \`ai/rsc\`, I migrated the chat to its client-side \`useChat\` pattern.

## Beyond the app

I spotted the need for a tool that adds MCP (Model Context Protocol) servers to VS Code, taught myself extension development, and built a working prototype.
		`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date('2024-03-01'), to: new Date('2025-09-30') },
		skills: getSkills(
			'nextjs',
			'react',
			'ts',
			'tailwindcss',
			'supabase',
			'postgresql',
			'vercel',
			'ai-sdk',
			'twilio'
		),
		name: 'Lead (Solo) Developer',
		color: 'silver',
		links: [],
		logo: Assets.LightrayTechnologies,
		shortDescription: 'Creating AI-Powered web applications.'
	},
	{
		slug: 'microverse',
		company: 'Microverse',
		description: `
My foundation comes from Microverse, an intensive full-stack development program where I completed 1,300+ hours of hands-on work, collaborating daily with developers across multiple countries.

## What I learned

Algorithms, data structures and full-stack development, through projects built with Ruby, Rails, JavaScript, React and Redux.

## How we worked

- Remote pair programming every day, with partners in different countries and time zones.
- Industry-standard gitflow: feature branches and pull requests for every change.
- Daily standups with an international team of developers.

## Leading a team

I led a multi-national remote team to build Workspace Reservation, a booking platform for co-working spaces (React, Redux, Ruby on Rails, PostgreSQL). It's on my [Projects page](/projects).
		`,
		contract: ContractType.FullTime,
		type: 'Software Development',
		location: 'Remote',
		period: { from: new Date('2023-04-24'), to: new Date('2023-12-17') },
		skills: getSkills(
			'html',
			'css',
			'js',
			'react',
			'redux',
			'jest',
			'postgresql',
			'ruby',
			'rails',
			'rspec',
			'swagger',
			'sass'
		),
		name: 'Full-Stack Web Development Program',
		color: 'purple',
		links: [],
		logo: Assets.Microverse,
		shortDescription: 'Hands-on learning at a remote software development academy.'
	}
];

const ExperienceData = { title, items };

export default ExperienceData;
