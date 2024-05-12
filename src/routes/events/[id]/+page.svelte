<script lang="ts">
	import { goto } from '$app/navigation';
	import Main from '$layouts/Main.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	const { activity, maxId } = data;
</script>

<Main>
	<section class="mx-auto mb-12 min-h-screen max-w-7xl rounded-lg border border-background mt-10">
		<div class="flex items-center justify-between border-b border-background px-8 py-4">
			<button
				title="Go to previous activity"
				disabled={activity.id === 1}
				class={activity.id === 1 ? 'cursor-not-allowed text-skin-muted' : '' + 'underline'}
				on:click={() => {
					if (activity.id > 1) goto(`/events/${activity.id - 1}`);
				}}
			>
				Previous
			</button>
			<button
				title="Go to next activity"
				disabled={activity.id === maxId}
				class={activity.id === maxId ? 'cursor-not-allowed text-skin-muted' : '' + 'underline'}
				on:click={() => {
					if (activity.id < maxId) goto(`/events/${activity.id + 1}`);
				}}
			>
				Next
			</button>
		</div>
		<article class="p-10">
			<header class="mb-4">
				<h2 class="mb-1 font-lora text-xl font-bold md:text-3xl">{activity.title}</h2>
			</header>
			<figure class="w-full max-w-md sm:float-left sm:mr-8">
				<img
					class="w-full overflow-hidden rounded-lg bg-gradient-to-br from-gray-100/80 via-gray-200/50 to-gray-400/10"
					src={activity.image_link}
					alt="event"
					width={activity.image_width}
					height={activity.image_height}
				/>
			</figure>
			<div class="pt-2 text-justify">{@html activity.content}</div>
		</article>
	</section>
</Main>
