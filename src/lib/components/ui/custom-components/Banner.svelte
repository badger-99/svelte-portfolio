<script lang="ts">
	export let img = '';
	export let useDefaultDimensions = true;
	export let classes = '';
</script>

<div
	style={`--bg-img: url("${img}")`}
	class={`flex w-full flex-row ${
		useDefaultDimensions
			? 'min-h-[200px] px-4 sm:min-h-[250px] md:min-h-[300px] md:px-10 lg:min-h-[350px]'
			: ''
	} skill-cover items-center ${classes}`}
>
	<div class="flex flex-1 flex-col px-2">
		<slot />
	</div>
</div>

<style>
	.skill-cover {
		/* Solid page background on the left, fading to 60% over the logo on the right. */
		background:
			linear-gradient(
				90deg,
				var(--background) 0%,
				var(--background) 55%,
				color-mix(in oklch, var(--background) 60%, transparent) 130%
			),
			no-repeat 110% 45% / 50% var(--bg-img);

		border-block-end: 1px solid var(--border);
	}
</style>
