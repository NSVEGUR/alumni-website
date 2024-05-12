<script lang="ts">
	import type { Member } from '$lib/types';
	export let member: Member;
</script>

{#if member.href == '#'}
	<div
		class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
	>
		<img src={member.src} alt={member.title} class="h-40 bg-muted" />
		{#if member.title.length > 0}
			<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.title}</h1>
		{/if}
		<p class="p-1 text-skin-muted">{member.description}</p>
		{#if member.email}
			<p class="p-1 text-skin-muted">
				<a class="text-skin-accent" href="mailto:{member.email}">{member.email}</a>
			</p>
		{/if}
		<slot />
	</div>
{:else}
	<a
		href={member.href}
		class="flex w-64 flex-col items-center justify-start rounded border-[1px] border-base bg-dominant p-5 text-center"
	>
		<img src={member.src} alt={member.title} class="h-40 bg-muted" />
		{#if member.title.length > 0}
			<h1 class="w-full bg-accent p-2 text-skin-inverted">{member.title}</h1>
		{/if}
		<p class="p-1 text-skin-muted">{member.description}</p>
		{#if member.email}
			<p class="p-1 text-skin-muted">
				<span class="text-skin-accent">{member.email}</span>
			</p>
		{/if}
		<slot />
	</a>
{/if}
