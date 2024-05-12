<script lang="ts">
	import Button from '$ui/Button.svelte';
	import type { PeopleCover, DefaultCover } from '$lib/types';
	export let data: PeopleCover | DefaultCover;
	export let imgStyle = 'h-64';
</script>

{#if data.type === 'people'}
	{@const { name, designation, src, links } = data}
	<div
		class="mb-10 flex min-h-[30vh] items-center justify-center gap-10 bg-stripes bg-cover bg-no-repeat px-3 py-10 -sm:flex-col-reverse -sm:px-1"
	>
		<div class="text-right -sm:text-center">
			<h1 class="text-xl font-bold">{designation}</h1>
			<h1 class="text-3xl font-bold text-complementary">{name}</h1>
			<slot />
		</div>
		<div class="flex flex-col items-center justify-center">
			<img {src} alt={name} class="{imgStyle} max-h-60" />
			<div class="mt-5 flex gap-5 text-xs">
				{#each links as { href, title }}
					<Button {href} variant="rounded" theme="accent">{title}</Button>
				{/each}
			</div>
		</div>
	</div>
{:else}
	{@const { title, src, links } = data}
	{#if src.length > 0}
		<div
			class="mb-10 flex min-h-[30vh] items-center justify-center gap-10 bg-stripes-accent bg-cover bg-no-repeat px-3 py-10 text-skin-inverted -sm:flex-col -sm:px-1"
		>
			<div class="text-right -sm:text-center">
				<h1 class="text-5xl font-medium -sm:text-3xl">{title}</h1>
				<slot />
				<div class="mt-5 flex justify-end gap-5 text-xs -sm:justify-center">
					{#each links as { href, title }}
						<Button {href} variant="rounded" theme="light">{title}</Button>
					{/each}
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<img {src} alt={title} class={imgStyle} />
			</div>
		</div>
	{:else}
		<div
			class="mb-10 flex min-h-[30vh] items-center justify-center gap-10 bg-stripes-accent bg-cover bg-no-repeat px-3 py-10 text-skin-inverted -sm:px-1"
		>
			<div class="text-center">
				<h1 class="text-5xl font-medium -sm:text-3xl">{title}</h1>
				<slot />
				<div class="mt-5 flex justify-center gap-5 text-xs">
					{#each links as { href, title }}
						<Button {href} variant="rounded" theme="light">{title}</Button>
					{/each}
				</div>
			</div>
		</div>
	{/if}
{/if}
