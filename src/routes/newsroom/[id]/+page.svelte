<script lang="ts">
	import { goto } from '$app/navigation';
	import Main from '$layouts/Main.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { article, maxId } = data;
</script>

<Main>
	<section class="mx-auto mb-12 min-h-screen max-w-7xl rounded-lg border border-background mt-10">
		<div class="flex items-center justify-between border-b border-background px-8 py-4">
			<button
				title="Go to previous article"
				disabled={article.id === 1}
				class={article.id === 1 ? 'cursor-not-allowed text-skin-muted' : '' + 'underline'}
				on:click={() => {
					if (article.id > 1) goto(`/newsroom/${article.id - 1}`);
				}}
			>
				Previous
			</button>
			<button
				title="Go to next article"
				disabled={article.id === maxId}
				class={article.id === maxId ? 'cursor-not-allowed text-skin-muted' : '' + 'underline'}
				on:click={() => {
					if (article.id < maxId) goto(`/newsroom/${article.id + 1}`);
				}}
			>
				Next
			</button>
		</div>
		<article class="p-10">
			<header class="mb-4">
				<h2 class="mb-1 font-lora text-xl font-bold md:text-3xl">{article.title}</h2>
				<p class="text-xs text-secondary-text md:text-sm">
					Posted on {article.created_at}
				</p>
			</header>
			<figure class="w-full max-w-md sm:float-left sm:mr-8">
				<img
					class="w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10"
					src={article.image_link}
					alt={article.alt_text}
					width={article.image_width}
					height={article.image_height}
				/>
				<figcaption class="mt-1 text-center text-sm text-skin-muted">
					{article.alt_text}
				</figcaption>
			</figure>
			<div class="pt-2 text-justify">{@html article.content}</div>
		</article>
	</section>
</Main>
