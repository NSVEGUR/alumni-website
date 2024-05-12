<script lang="ts">
	import Cover from '$ui/Cover.svelte';
	import Main from '$layouts/Main.svelte';
	export let title: string;
	export let imgs: string[];
	export let cols: 1 | 2 | 3 | 4 = 4;
	export let imgStyle = '';
</script>

<Cover
	data={{
		title,
		src: '',
		links: [],
		type: 'default'
	}}
/>

<Main>
	<div
		class="grid {cols == 1 && 'grid-cols-1'} {cols == 2 && 'grid-cols-2'} {cols == 3 &&
			'grid-cols-3'} {cols == 4 &&
			'grid-cols-4'} my-10 place-items-center gap-5 -sm:grid-cols-2 -xs:grid-cols-1"
	>
		{#each imgs as src, index}
			<img {src} alt="{title} - {index + 1}" class="object-fit h-48 w-full rounded {imgStyle}" />
		{/each}
	</div>
</Main>
