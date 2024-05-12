<script lang="ts">
	export let href: string;
	export let style = '';
	export let variant: 'default' | 'dotted' = 'default';
	import { isTargetBlank } from '$utils/link';
</script>

{#if variant == 'default'}
	{#if isTargetBlank(href)}
		<a
			{href}
			class="text-center text-skin-muted transition-all hover:scale-110 hover:text-skin-accent {style}"
			target="_blank"
			rel="noreferrer noopener"
		>
			<slot />
		</a>
	{:else}
		<a
			{href}
			class="text-center text-skin-muted transition-all hover:scale-110 hover:text-skin-accent {style}"
		>
			<slot />
		</a>
	{/if}
{:else if variant == 'dotted'}
	{#if isTargetBlank(href)}
		<a
			{href}
			class="border-b border-dotted border-base text-center text-skin-muted transition-all hover:scale-110 hover:text-skin-accent {style}"
			target="_blank"
			rel="noreferrer noopener"
		>
			<slot />
		</a>
	{:else}
		<a
			{href}
			class="border-b border-dotted border-base text-center text-skin-muted transition-all hover:scale-110 hover:text-skin-accent {style}"
		>
			<slot />
		</a>
	{/if}
{/if}
