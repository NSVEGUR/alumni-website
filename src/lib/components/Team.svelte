<script lang="ts">
	import Cube from '$svg/Cube.svelte';
	import UserGroup from '$svg/UserGroup.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from '../../routes/$types';
	import TeamDialog from './TeamDialog.svelte';
	import ManagementCard from './ManagementCard.svelte';

	export let data: PageData;

	let teams = [
		{
			name: 'Core Team',
			members: data.team.CORE_TEAM,
			icon: UserGroup,
			active: false
		},
		{
			name: 'Mentors',
			members: data.team.MENTORS,
			icon: Cube,
			active: false
		}
	];

	onMount(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const trigger = (event.target as HTMLElement).closest('.dialog-trigger');
			const content = (event.target as HTMLElement).closest('.dialog-content');
			if (!trigger && !content) {
				teams = teams.map((team) => ({ ...team, active: false }));
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	});
</script>

<div class="flex flex-col gap-10">
	<h2 class="text-accent text-3xl font-heading pl-10 pt-10 text-center">Team</h2>
	<div
		class="mx-auto mb-8 flex max-w-7xl flex-col items-center justify-center gap-4 px-5 md:flex-row md:gap-5 md:p-0"
	>
		{#each data.team.MANAGEMENT as member}
			<ManagementCard {member} />
		{/each}
	</div>
	<div class="flex justify-center items-start gap-5">
		{#each teams as { icon, name, active, members }, index}
			<button
				class="flex flex-col gap-5 dialog-trigger border rounded-md border-zinc-300 p-5 items-center w-64"
				on:click={() => {
					teams = teams.map((team, i) => {
						if (i === index) {
							return { ...team, active: !team.active };
						}
						return { ...team, active: false };
					});
				}}
			>
				<svelte:component this={icon} />
				<span>{name}</span>
			</button>
			{#if active}
				<TeamDialog {members} title={'Meet our ' + name} />
			{/if}
		{/each}
	</div>
</div>
