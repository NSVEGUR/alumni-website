<script lang="ts">
	import type { Link } from '$lib/types';
	import ChevronRight from '$svg/ChevronRight.svelte';
	import Button from '$ui/Button.svelte';
	import { getRelativeTime } from '$utils/date';
	export let title: string;
	export let notifications: {
		id: number;
		title: string;
		time: string;
	}[];
	export let type: 'activity' | 'article';
	export let href: string;
</script>

<div class="relative rounded border bg-muted shadow-md w-full">
	<div
		class="absolute -top-5 left-2 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-skin-inverted"
	>
		<slot name="icon"><!-- optional fallback --></slot>
	</div>
	<div class="h-full w-full overflow-hidden rounded">
		<div class="h-2 w-full bg-accent" />
		<div class="p-10 -sm:px-3">
			<h1 class="font-heading text-2xl font-medium text-accent">{title}</h1>
			<ul class="my-5 flex flex-col gap-4">
				{#each notifications as { title, id, time }}
					{#if type == 'article'}
						<li class="border-b border-zinc-300 pb-2">
							<a href={href + '/' + id} class="flex justify-between items-end space-x-3">
								<h3 class="flex-1 text-black">{title}</h3>
								<p class="text-sm text-skin-muted">
									{time}
								</p>
							</a>
						</li>
					{:else}
						<li class="border-b border-zinc-300 pb-2">
							<a href={href + '/' + id} class="flex justify-between items-end space-x-3">
								<div class="flex flex-col">
									<span class="text-lg uppercase">{time.split(' ')[1].split(',')[0]}</span>
									<span class="text-2xl font-semibold">
										{time[0].padStart(2, '0')}
									</span>
								</div>
								<div class="flex-1 flex flex-col">
									<span class="text-xs uppercase text-skin-muted">
										{getRelativeTime(new Date(time))}
									</span>
									<h3>{title}</h3>
								</div>
							</a>
						</li>
					{/if}
				{/each}
			</ul>
			<Button {href} variant="more">
				<span> View More </span>
				<ChevronRight style="h-4 w-4" />
			</Button>
		</div>
	</div>
</div>
