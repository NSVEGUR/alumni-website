<script lang="ts">
	import type { MemberData } from '$lib/types';

	export let members: MemberData[];
	export let title: string;
</script>

<div class="fixed bg-black/50 w-full h-full inset-0 flex items-center justify-center z-50" />
<div class="fixed inset-0 flex items-center justify-center z-50">
	<div class="bg-white p-6 rounded shadow-lg dialog-content">
		<h2 class="text-xl font-semibold mb-4">{title}</h2>
		<ul class="grid grid-cols-3 gap-4 pt-6">
			{#each members as member}
				<li class="flex flex-col items-center justify-center">
					<img
						src={member.imagePath}
						alt={`${member.name}'s photo`}
						width={64}
						height={64}
						class="skeleton bg-muted-secondary max-w-16 mb-1 max-h-16 flex-1 shrink overflow-hidden rounded-full object-cover"
					/>
					<p class="text-xs">{member.name}</p>
					<p class="hidden text-xs font-medium md:inline">
						{member.position}
					</p>
				</li>
			{/each}
		</ul>
	</div>
</div>
