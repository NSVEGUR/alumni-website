<script lang="ts">
	import Main from '$layouts/Main.svelte';
	import Cover from '$ui/Cover.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<Cover data={{ title: 'Gallery', src: '', links: [], type: 'default' }} />
<Main>
	<div class="border rounded-lg border-zinc-300 p-10 mb-10">
		<div class="grid grid-cols-3 -md:grid-cols-2 -sm:grid-cols-1 gap-10 w-full place-items-center">
			{#each data.images as image}
				<img src={image.src} alt={image.alt} class="w-full rounded-lg" />
			{/each}
		</div>
	</div>
</Main>
