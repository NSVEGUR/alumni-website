<script lang="ts">
	import { isTargetBlank } from '$utils/link';

	export let variant: 'envelope' | 'rounded' | 'more';
	export let theme: 'light' | 'accent' = 'accent';
	export let size: 'sm' | 'base' = 'base';
	export let style = '';
	export let href: string;
</script>

{#if variant == 'envelope'}
	{#if isTargetBlank(href)}
		<a
			{href}
			target="_blank"
			rel="noreferrer noopener"
			class="group relative inline-flex min-h-[75px] w-[225px] items-center justify-center overflow-hidden rounded-md bg-muted p-2 text-center font-medium shadow-md transition-all -md:w-[150px] -md:text-sm -sm:w-[125px] -sm:text-xs {style}"
		>
			<span
				class="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-md bg-accent-secondary transition-all delay-200 duration-500 ease-in-out group-hover:mb-[75px] group-hover:translate-x-0"
			/>
			<span
				class="relative w-full text-center text-skin-base transition-colors duration-200 ease-in-out group-hover:text-skin-inverted"
				><slot /></span
			>
		</a>
	{:else}
		<a
			{href}
			class="group relative inline-flex min-h-[75px] w-[225px] items-center justify-center overflow-hidden rounded-md bg-muted p-2 text-center font-medium shadow-md transition-all -md:w-[150px] -md:text-sm -sm:w-[125px] -sm:text-xs {style}"
		>
			<span
				class="absolute bottom-0 left-0 h-full w-full -translate-x-full translate-y-full rounded-md bg-accent-secondary transition-all delay-200 duration-500 ease-in-out group-hover:mb-[75px] group-hover:translate-x-0"
			/>
			<span
				class="relative w-full text-center text-skin-base transition-colors duration-200 ease-in-out group-hover:text-skin-inverted"
				><slot /></span
			>
		</a>
	{/if}
{:else if variant == 'rounded'}
	{#if isTargetBlank(href)}
		<a
			{href}
			target="_blank"
			rel="noreferrer noopener"
			class="rounded-full border {theme == 'accent'
				? 'border-muted bg-accent text-skin-inverted hover:bg-dominant hover:text-skin-accent'
				: 'border-base bg-dominant text-skin-accent hover:bg-accent hover:text-skin-inverted'}  text-center uppercase tracking-wider transition-all duration-200 hover:scale-110 {size ==
			'sm'
				? 'px-2 py-[2px] text-xs'
				: 'px-3 py-2'} {style}"
		>
			<slot />
		</a>
	{:else}
		<a
			{href}
			class="rounded-full border {theme == 'accent'
				? 'border-muted bg-accent text-skin-inverted hover:bg-dominant hover:text-skin-accent'
				: 'border-base bg-dominant text-skin-accent hover:bg-accent hover:text-skin-inverted'}  text-center uppercase tracking-wider transition-all duration-200 hover:scale-110 {size ==
			'sm'
				? 'px-2 py-[2px] text-xs'
				: 'px-3 py-2'} {style}"
		>
			<slot />
		</a>
	{/if}
{:else if variant == 'more'}
	{#if isTargetBlank(href)}
		<a
			{href}
			target="_blank"
			rel="noreferrer noopener"
			class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent {theme ==
			'accent'
				? 'bg-accent text-skin-inverted hover:border-accent'
				: ' bg-dominant text-skin-accent hover:border-dominant'} px-5 text-center font-medium shadow transition duration-300 ease-out {style}"
		>
			<span
				class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center {theme ==
				'accent'
					? 'bg-dominant text-skin-accent'
					: 'bg-accent text-skin-base'}  duration-300 group-hover:translate-x-0"
			>
				<svg
					class="h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/></svg
				>
			</span>
			<span
				class="ease absolute flex h-full w-full transform items-center justify-center {theme ==
				'accent'
					? 'text-skin-inverted'
					: 'text-skin-accent'}  transition-all duration-300 group-hover:translate-x-full"
			>
				<slot />
			</span>
			<span class="invisible relative"><slot /></span>
		</a>
	{:else}
		<a
			{href}
			class="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-transparent {theme ==
			'accent'
				? 'bg-accent text-skin-inverted hover:border-accent'
				: ' bg-dominant text-skin-accent hover:border-dominant'} px-5 text-center font-medium shadow transition duration-300 ease-out {style}"
		>
			<span
				class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center {theme ==
				'accent'
					? 'bg-dominant text-skin-accent'
					: 'bg-accent text-skin-base'}  duration-300 group-hover:translate-x-0"
			>
				<svg
					class="h-4 w-4"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M14 5l7 7m0 0l-7 7m7-7H3"
					/></svg
				>
			</span>
			<span
				class="ease absolute flex h-full w-full transform items-center justify-center {theme ==
				'accent'
					? 'text-skin-inverted'
					: 'text-skin-accent'}  transition-all duration-300 group-hover:translate-x-full"
			>
				<slot />
			</span>
			<span class="invisible relative"><slot /></span>
		</a>
	{/if}
{/if}
