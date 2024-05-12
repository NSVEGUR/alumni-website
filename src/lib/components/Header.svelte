<script lang="ts">
	import InstituteLogo from '$images/institute-logo.webp';
	import AlumniLogo from '$images/alumni-logo.png';
	export let links: {
		title: string;
		href: string;
		active: string;
	}[];
	export let url: string;
</script>

<header class="flex h-32 items-center justify-between bg-dominant px-20 shadow-sm">
	<div>
		<img src={AlumniLogo} alt="Alumni Logo" class="h-20" />
	</div>
	<nav class="flex justify-center gap-10">
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
	<div>
		<img src={InstituteLogo} alt="Institute Logo" class="h-24" />
	</div>
</header>
