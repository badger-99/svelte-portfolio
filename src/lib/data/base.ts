const firstName = 'Alfred';
const lastName = 'Makongoro';
const initials = 'AM';
const meta = 'Alfred M.';
const title = 'Software Engineer';
const about =
	"I'm a full-stack software engineer, working mostly in TypeScript with React, Next.js and SvelteKit. I build apps that people actually rely on, and I care a lot about the stuff they never see: checking what comes in, keeping only the data that's needed, and making sure things still work on day two. I also like picking the right tool for the job, instead of bending the job to fit the tool I already know. Whatever the project, my goal is always the same: turning ideas into something real.";

const BaseData = {
	firstName,
	lastName,
	initials,
	meta,
	title,
	get fullName() {
		return `${firstName} ${lastName}`;
	},
	about
};

export default BaseData;
