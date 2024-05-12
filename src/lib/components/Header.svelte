<script lang="ts">
	import InstituteLogo from '$images/institute-logo.webp';
	import AlumniLogo from '$images/alumni-logo.png';
	export let links: {
		title: string;
		href: string;
		active: string;
	}[];
	export let url: string;
	let isNavOpen = false;
</script>

<header class="flex h-32 -lg:h-20 items-center justify-between bg-dominant px-5 lg:px-20 shadow-sm">
	<div>
		<img src={AlumniLogo} alt="Alumni Logo" class="h-20 -lg:h-14" />
	</div>
	<button class="lg:hidden" on:click={() => (isNavOpen = !isNavOpen)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 24 24"
			stroke-width="1.5"
			stroke="currentColor"
			class="w-6 h-6"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
			/>
		</svg>
	</button>
	<nav
		class={`flex justify-center gap-5 bg-white -lg:flex-col -lg:px-2 -lg:h-screen -lg:w-screen -lg:left-0 -lg:top-0 -lg:fixed -lg:transition-all -lg:z-[999] -lg:duration-200 ${isNavOpen ? '-lg:translate-y-0' : '-lg:-translate-y-full'}`}
	>
		{#if isNavOpen}
			<div class="lg:hidden flex">
				<button class="absolute top-5 right-5" on:click={() => (isNavOpen = false)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		{/if}
		{#each links as { href, active, title }}
			<a
				{href}
				class="rounded-lg px-2 py-1 text-lg font-medium {(
					href === '/' ? url === '/' : url.includes(active)
				)
					? 'bg-accent text-skin-inverted'
					: 'hover:bg-muted-secondary'}">{title}</a
			>
		{/each}
	</nav>
	<div class="-lg:hidden">
		<img src={InstituteLogo} alt="Institute Logo" class="h-24" />
	</div>
</header>
