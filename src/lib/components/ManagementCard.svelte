<script lang="ts">
	import type { MemberData } from '$lib/types';

	export let member: MemberData;
</script>

<div
	class="flex w-full items-center gap-5 rounded-lg px-5 py-5 md:w-48 md:flex-col md:gap-3 md:px-0 bg-white ring-2 ring-black/5"
>
	<img
		src={member.imagePath}
		alt={`${member.name}'s photo`}
		height="120"
		width="120"
		class="skeleton rounded-full"
	/>
	<div class="flex flex-col gap-2 md:text-center">
		<div>
			<p class="font-medium">{member.position}</p>
			<p class="mb-2 mt-1 text-sm font-semibold text-contact-blue md:my-0 md:font-medium">
				{member.name}
			</p>
		</div>

		<div class="mt-2 flex md:justify-center {member.linkedIn ? 'gap-6' : ''}">
			<a
				href={`mailto:${member.email}`}
				target="_blank"
				rel="norefer"
				class="md:self-center"
				title={`Email of ${member.name}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					class="w-5 h-5"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
					/>
				</svg>
			</a>
			{#if member.linkedIn}
				<a
					href={member.linkedIn}
					target="_blank"
					rel="norefer"
					class="md:self-center"
					title={`LinkedIn profile of ${member.name}`}
				>
					<svg
						fill="#000000"
						version="1.1"
						id="Layer_1"
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 310 310"
						xml:space="preserve"
						class="w-4 h-4"
					>
						<g id="XMLID_801_">
							<path
								id="XMLID_802_"
								d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
		C77.16,101.969,74.922,99.73,72.16,99.73z"
							/>
							<path
								id="XMLID_803_"
								d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
		c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
							/>
							<path
								id="XMLID_804_"
								d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
		c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
		c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
		C310,145.43,300.549,94.761,230.454,94.761z"
							/>
						</g>
					</svg>
				</a>
			{/if}
		</div>
	</div>
</div>
