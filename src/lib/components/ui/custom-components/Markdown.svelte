<script lang="ts">
	import { Marked } from 'marked';
	import { gfmHeadingId } from 'marked-gfm-heading-id';
	import { mangle } from 'marked-mangle';
	import DOMPurify from 'dompurify';
	import Prism from 'prismjs';
	import 'prismjs/components/prism-typescript';
	import 'prismjs/themes/prism-tomorrow.css';
	import { onMount } from 'svelte';

	const { content }: { content: string } = $props();

	// A private instance: calling use() on the shared `marked` would stack the extensions on every mount.
	const marked = new Marked(gfmHeadingId(), mangle());

	let container: HTMLDivElement;

	// DOMPurify needs a real DOM, so the HTML is only built after mount. Starting empty on both server
	// and client matters: hydration keeps the server's {@html} output, so it must change *after* hydrating.
	let mounted = $state(false);
	onMount(() => (mounted = true));

	const html = $derived(mounted ? DOMPurify.sanitize(marked.parse(content, { async: false })) : '');

	$effect(() => {
		if (html) Prism.highlightAllUnder(container);
	});
</script>

<div bind:this={container} class="markdown-container mx-auto prose dark:prose-invert">
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- sanitized by DOMPurify above -->
	{@html html}
</div>
