<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Cover from '$ui/Cover.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Cover data={{ title: 'Newsroom', src: '', links: [], type: 'default' }} />
<Main>
	<ul
		class="mx-auto mb-12 min-h-screen max-w-7xl divide-y-2 rounded-lg border border-background px-4 md:mb-16 md:px-8"
	>
		{#each data.articles as article}
			<li class="flex flex-col gap-4 py-5 md:flex-row md:items-center md:gap-8">
				<img
					src={article.image_link}
					alt={article.alt_text}
					width={article.image_width}
					height={article.image_height}
					class="aspect-square rounded-md object-cover md:my-4 md:max-w-[16rem]"
				/>
				<div class="flex-1">
					<h2 class="font-lora text-2xl font-bold">{article.title}</h2>
					<p class="my-2 line-clamp-5 text-sm">{article.summary_for_seo}</p>
					<a
						href={`/newsroom/${article.id}`}
						title={`link to ${article.title}`}
						class="text-accent text-sm underline"
					>
						Read More
					</a>
				</div>
			</li>
		{/each}
	</ul>
</Main>
