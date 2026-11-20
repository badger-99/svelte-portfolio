<script>
	import ResponsiveContainer from '#lib/components/ui/custom-components/responsive-container.svelte';
	import H1 from '#lib/components/typography/h1.svelte';
	import * as Avatar from '#lib/components/ui/avatar/index.js';
	import { Button } from '#lib/components/ui/button/index.ts';
	import Icon from 'svelte-awesome';
	import * as Tooltip from '#lib/components/ui/tooltip/index.js';
	import HomeData from '#lib/data/home.ts';
	import BaseData from '#lib/data/base.ts';
	import avatar from '#lib/assets/my_picture.jpg';
	import H2 from '#lib/components/typography/h2.svelte';
	import Cube from '#lib/components/ui/custom-components/cube.svelte';
	import { resolve } from '$app/paths';

	const typingSvgMed =
		'https://readme-typing-svg.demolab.com?font=system-ui+Avenir+Helvetica+arial+sans-serif&weight=500&size=33&height=50&duration=4000&pause=1000&color=A1A1A1&center=true&random=false&width=395&lines=Front-end+Fixer;Back-end+Builder;Full+Stack+Engineer';
	const typingSvgMed2 =
		'https://readme-typing-svg.demolab.com?font=system-ui+Avenir+Helvetica+arial+sans-serif&weight=500&size=33&height=50&duration=4000&pause=1000&color=A1A1A1&center=false&random=false&width=395&lines=Front-end+Fixer;Back-end+Builder;Full+Stack+Engineer';
</script>

<svelte:head>
	<title>{`${BaseData.meta}`}</title>
</svelte:head>

<section class="mb-25 flex items-center justify-center lg:mt-16">
	<div
		class="flex flex-col items-center lg:min-w-4xl lg:flex-row lg:items-start lg:justify-between"
	>
		<ResponsiveContainer
			className="flex flex-col justify-center gap-16 max-w-2xl lg:flex-1 lg:w-full"
		>
			<div
				class="flex flex-1 flex-col items-center justify-center gap-8 px-14 lg:flex-row lg:justify-between"
			>
				<div class="flex flex-col items-center justify-between gap-4 lg:flex-row lg:items-start">
					<div
						class="flex flex-col items-center justify-center gap-4 text-center lg:items-start lg:text-left"
					>
						<H1>{HomeData.hero.title}</H1>
						<div class="block lg:hidden">
							<Avatar.Root class="size-24">
								<Avatar.Image alt="avatar" src={avatar} />
								<Avatar.Fallback>{BaseData.initials}</Avatar.Fallback>
							</Avatar.Root>
						</div>
						<img src={typingSvgMed} alt="typing animation" class="mx-auto block lg:hidden" />
						<img src={typingSvgMed2} alt="typing animation" class="mx-auto hidden lg:block" />
						<div class="flex flex-row gap-3">
							{#each HomeData.hero.links as item (item.href)}
								<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external links -->
								<a href={item.href} target="_blank">
									<Tooltip.Provider>
										<Tooltip.Root>
											<Tooltip.Trigger>
												<Button
													variant="outline"
													size="icon-lg"
													class="transition-color cursor-pointer border border-foreground duration-300 hover:text-blue-600"
												>
													<Icon data={item.icon} style="width: 26px; height: 26px;" />
												</Button>
											</Tooltip.Trigger>
											<Tooltip.Content side="bottom">{item.label}</Tooltip.Content>
										</Tooltip.Root>
									</Tooltip.Provider>
								</a>
							{/each}
						</div>
					</div>
					<div class="hidden lg:block">
						<Avatar.Root class="size-24">
							<Avatar.Image alt="avatar" src={avatar} />
							<Avatar.Fallback>{BaseData.initials}</Avatar.Fallback>
						</Avatar.Root>
					</div>
				</div>
			</div>
			<div class="flex flex-1 flex-col gap-4 px-14 text-center lg:text-start">
				<H2>About Me</H2>
				<div
					class="prose text-md dark:prose-invert max-w-xl font-sans text-pretty text-muted-foreground"
				>
					{BaseData.about}
				</div>

				<div
					class="prose text-md dark:prose-invert max-w-xl font-sans text-pretty text-muted-foreground"
				>
					Take a look around — <a href={resolve('/projects')} class="home-link">
						check out my projects
					</a>,
					<a href={resolve('/experience')} class="home-link">see where I've worked</a>, or
					<a href={resolve('/contact')} class="home-link">say hello</a>.
				</div>
			</div>
		</ResponsiveContainer>
		<div class="relative max-lg:mt-20 max-lg:mb-50">
			<Cube />
		</div>
	</div>
</section>

<style>
	.home-link {
		color: #60a5fa; /* text-blue-400 */
		transition: color 300ms;
	}

	/* lg: breakpoint (Tailwind lg = min-width: 1024px) */
	@media (min-width: 1024px) {
		.home-link {
			color: var(--foreground); /* text-foreground */
		}
		.home-link:hover {
			color: #60a5fa; /* hover:text-blue-400 */
		}
	}
</style>
