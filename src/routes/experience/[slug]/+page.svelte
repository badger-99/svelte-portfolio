<script lang="ts">
	import ExperienceData from '#lib/data/experience.ts';
	import { computeExactDuration } from '#lib/utils.ts';

	import type { PageData } from './$types';

	import * as Avatar from '#lib/components/ui/avatar/index.js';
	import H1 from '#lib/components/typography/h1.svelte';
	import Markdown from '#lib/components/ui/custom-components/Markdown.svelte';
	import Title from '#lib/components/ui/custom-components/title.svelte';
	import { Badge } from '#lib/components/ui/badge/index.ts';
	import Banner from '#lib/components/ui/custom-components/Banner.svelte';
	import { Link, Type } from '@lucide/svelte';
	import { Separator } from '#lib/components/ui/separator/index.ts';

	export let data: PageData;

	$: computedTitle = `${data.experience.name} - ${ExperienceData.title}`;
</script>

<Title title={computedTitle} />

<div class="flex flex-1 flex-col overflow-x-hidden pb-10">
	<div class="flex flex-col items-center overflow-x-hidden">
		<Banner img={data.experience.logo}>
			<div class="flex flex-col items-center justify-center py-20">
				<div class="text-[0.9em]">
					<H1>{data.experience.name}</H1>
				</div>
				<p class="my-2 text-center font-light text-muted-foreground">
					{data.experience.company} · {data.experience.location} · {data.experience.type}
				</p>
				<p class="my-2 text-center text-[0.9em] font-light text-muted-foreground">
					{computeExactDuration(data.experience.period.from, data.experience.period.to)}
				</p>
				<div class="w-3/4">
					<Separator />
				</div>
				<div
					class="mb-2 flex flex-row flex-wrap items-center justify-center gap-2 text-[0.9em] text-muted-foreground"
				>
					{#each data.experience.links as item (item.to)}
						<Badge variant="outline" href={item.to}>
							<div class="flex flex-row items-center justify-center gap-2">
								<Link />
								<span>{item.label}</span>
							</div>
						</Badge>
					{/each}
				</div>
				<div class="mb-2 flex flex-row flex-wrap items-center justify-center gap-2">
					{#each data.experience.skills as item (item.slug)}
						<Badge variant="outline" class="inline-flex flex-row items-center justify-center">
							<Avatar.Root class="mr-2 size-3.75 rounded-none">
								<Avatar.Image src={item.logo} alt={item.name} />
								<Avatar.Fallback>{item.name[0]}</Avatar.Fallback>
							</Avatar.Root>
							<span class="text-[0.9em]">{item.name}</span>
						</Badge>
					{/each}
				</div>
			</div>
		</Banner>
		<div class="w-full overflow-x-hidden pt-3 pb-1">
			<div class="my-5 px-2.5">
				{#if data.experience.description}
					<Markdown content={data.experience.description} />
				{:else}
					<div
						class="my-auto flex flex-col items-center justify-center gap-3 p-5 text-muted-foreground"
					>
						<Type class="size-14" />
						<p class="font-light">No description...</p>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>
