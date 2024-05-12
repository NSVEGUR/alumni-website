<script lang="ts">
	import Alumni1 from '$images/slider/alumni-1.webp';
	import Alumni2 from '$images/slider/alumni-2.webp';
	import { onDestroy, onMount } from 'svelte';
	import { NormalSlider } from '$utils/slider';
	import ChevronLeft from '$svg/ChevronLeft.svelte';
	import ChevronRight from '$svg/ChevronRight.svelte';
	type Slide = {
		type: 'img' | 'iframe';
		src: string;
		title?: string;
	};
	const slides: Slide[] = [
		{
			type: 'img',
			src: Alumni1,
			title: Alumni1
		},
		{
			type: 'img',
			src: Alumni2,
			title: Alumni2
		}
	];
	const slider = new NormalSlider();
	onMount(() => {
		const wrapper = document.getElementById('landing-slider') as HTMLElement;
		slider.init(wrapper);
		slider.start();
	});
	onDestroy(() => {
		slider.stop();
	});
</script>

<section
	class="group relative flex h-[400px] w-screen items-center justify-center overflow-hidden -lg:h-[350px] -md:h-[250px] -sm:h-[200px]"
	id="landing-slider"
>
	{#each slides as { title, src, type }, index}
		<div
			style="transform: translateX({100 * index}%);"
			class="slide absolute flex h-full w-full flex-col transition-all duration-700"
		>
			{#if type == 'img'}
				<div class="relative h-full">
					<img class="absolute inset-0 h-full w-full object-cover" {src} alt={title} />
					<div class="absolute inset-0 h-full w-full bg-black/20 backdrop-blur-lg" />
					<img
						class=" absolute left-1/2 top-1/2 h-full -translate-x-1/2 -translate-y-1/2 object-contain"
						{src}
						alt={title}
					/>
				</div>
			{:else if type == 'iframe'}
				<div class="relative h-full">
					<iframe
						{src}
						width="100%"
						height="100%"
						frameborder="0"
						style="border:0"
						allowfullscreen={true}
						{title}
					/>
				</div>
			{/if}
		</div>
	{/each}
	<div class="absolute flex w-full justify-between">
		<button
			class="prev ml-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-skin-inverted"
		>
			<ChevronLeft strokeWidth="3" style="w-4 h-4" />
		</button>
		<button
			class="next mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-skin-inverted"
		>
			<ChevronRight strokeWidth="3" style="w-4 h-4" />
		</button>
	</div>
</section>
