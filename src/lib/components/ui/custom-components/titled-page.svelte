<script lang="ts">
	import ResponsiveContainer from '#lib/components/ui/custom-components/responsive-container.svelte';
	import H1 from '#lib/components/typography/h1.svelte';
	import Title from '#lib/components/ui/custom-components/title.svelte';

	export let title = 'Title';
</script>

<Title {title} />

<ResponsiveContainer className="flex flex-col flex-1 pb-8 mx-auto">
	<H1 className="text-center py-16">{title}</H1>
	<div class="mb-25 flex flex-1 flex-col gap-5 px-8">
		<slot />
	</div>
</ResponsiveContainer>
