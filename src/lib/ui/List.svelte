<script lang="ts">
	import type { Link } from '$lib/types';
	export let list: {
		[key: string]:
			| Link[]
			| {
					[key: string]: Link[];
			  };
	};
</script>

<ul class="my-5 flex flex-col items-center justify-center gap-5">
	{#each Object.entries(list) as [title, links]}
		<li class="h-full w-full overflow-hidden rounded border border-base bg-muted">
			<div class="h-2 w-full bg-accent" />
			<div class="p-10 -sm:p-3">
				<h1
					class="font-heading text-3xl font-medium {Array.isArray(links)
						? 'text-complementary'
						: 'text-accent'} border-b border-base -sm:text-2xl"
				>
					{title}
				</h1>
				{#if Array.isArray(links)}
					<ul class="my-5 flex flex-col gap-2">
						{#each links as { href, title }}
							<li
								class="relative rounded-lg border border-base bg-dominant p-4 shadow-sm hover:bg-muted-secondary hover:shadow-md"
							>
								<a {href} class="m-0 block h-full w-full" target="_blank" rel="noreferrer noopener"
									>{title}</a
								>
							</li>
						{/each}
					</ul>
				{:else}
					{#each Object.entries(links) as [subtitle, subLinks]}
						<h1
							class="my-5 text-center font-heading text-3xl font-medium text-complementary -sm:text-2xl"
						>
							{subtitle}
						</h1>
						<section class="my-5 rounded bg-muted px-3 py-5">
							<ul class="space-y-2">
								{#each subLinks as { href, title }}
									<li class="text-lg" />
									<li
										class="relative rounded-lg border border-base bg-dominant p-4 shadow-sm hover:bg-muted-secondary hover:shadow-md"
									>
										<a {href} class="m-0 block h-full w-full" target="_blank">{title}</a>
									</li>
								{/each}
							</ul>
						</section>
					{/each}
				{/if}
			</div>
		</li>
	{/each}
</ul>
