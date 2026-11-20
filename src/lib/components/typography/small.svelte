<script lang="ts">
	export let className = '';
</script>

<small {...$$restProps} class={`text-sm leading-none font-medium ${className}`}>
	<slot />
</small>
