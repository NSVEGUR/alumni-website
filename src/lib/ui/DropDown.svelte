<script lang="ts">
	import ChevronDown from '$svg/ChevronDown.svelte';
	import ChevronRight from '$svg/ChevronRight.svelte';
	import { slide } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	export let active = false;
	const dispatch = createEventDispatcher();
</script>

<li>
	<button
		class="w-full rounded border border-base bg-muted p-2 text-left"
		on:click={() => {
			active = !active;
			dispatch('click', active);
		}}
	>
		<div class="flex items-center justify-start gap-2">
			{#if active}
				<ChevronDown style="h-4 w-4 text-skin-accent font-bold" strokeWidth="2.5" />
			{:else}
				<ChevronRight style="h-4 w-4 text-skin-accent font-bold" strokeWidth="2.5" />
			{/if}
			<slot name="parent"><!-- optional fallback --></slot>
		</div>
		{#if active}
			<div transition:slide class="my-5 ml-5">
				<slot name="child"><!-- optional fallback --></slot>
			</div>
		{/if}
	</button>
</li>
