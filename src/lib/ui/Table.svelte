<script lang="ts">
	import type { Row } from '$lib/types';
	export let headings: string[] | undefined = undefined;
	export let rows: Row[];
	export let className: string | undefined = undefined;
	export let variant: 'default' | 'striped' | 'bordered' = 'default';
	export let caption:
		| {
				title: string;
				description?: string;
		  }
		| undefined = undefined;
	import Button from '$ui/Button.svelte';
	import NewGif from '$images/new.gif';
</script>

{#if variant == 'default'}
	<div class="my-5 overflow-x-auto border border-base text-sm">
		<table class="w-full text-left">
			{#if headings}
				<thead class="border-b border-base bg-muted uppercase">
					<tr>
						{#each headings as heading}
							<th scope="col" class="px-6 py-3 font-bold"> {heading} </th>
						{/each}
					</tr>
				</thead>
			{/if}
			<tbody>
				{#each rows as row, index}
					<tr class={index != rows.length - 1 ? 'border-b border-base' : ''}>
						{#each row as item}
							{#if typeof item == 'string' || typeof item == 'number'}
								<td class=" px-6 py-4 font-medium">
									{item}
								</td>
							{:else if item.type == 'link'}
								{@const { href, title } = item}
								<td class="bg-dominant px-6 py-4">
									{#if href.length > 0}
										<a
											{href}
											target="_blank"
											rel="noreferrer noopener"
											class="font-semibold hover:text-skin-accent hover:underline"
										>
											{title}
										</a>
									{:else}
										-
									{/if}
								</td>
							{:else}
								{@const { href, title, pre, caption, latest } = item}
								<td class="relative bg-dominant px-6 py-4">
									{#if latest}
										<img src={NewGif} alt="new-gif" class="absolute left-1 h-5" />
									{/if}
									{#if pre}
										<p>{pre}</p>
									{/if}
									{#if href.length > 0}
										<a
											{href}
											target="_blank"
											rel="noreferrer noopener"
											class="font-semibold hover:text-skin-accent hover:underline"
										>
											{title}
										</a>
									{:else}
										-
									{/if}
									<p>{caption}</p>
								</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{:else if variant == 'striped'}
	<div class="my-5 overflow-x-auto rounded border-t border-base {className}">
		<table class="w-full border-l border-base text-left">
			{#if caption}
				<caption class="border-x border-base bg-white p-5 text-left text-lg font-semibold">
					{caption.title}
					{#if caption.description}
						<p class="mt-1 text-sm font-normal text-skin-muted">
							{caption.description}
						</p>
					{/if}
				</caption>
			{/if}
			{#if headings}
				<thead class="border-b border-base bg-muted-secondary text-center">
					<tr>
						{#each headings as heading}
							<th scope="col" class="border-r border-base px-6 py-3 font-bold"> {heading} </th>
						{/each}
					</tr>
				</thead>
			{/if}
			<tbody>
				{#each rows as row}
					<tr class="border-b border-base">
						{#each row as item}
							{#if typeof item == 'string' || typeof item == 'number'}
								<td class="border-r border-base bg-muted px-6 py-4">
									{item}
								</td>
							{:else if item.type == 'link'}
								{@const { href, title } = item}
								<td class="border-r border-base bg-dominant px-6 py-4">
									{#if href.length > 0}
										<Button {href} variant="rounded" size="sm">
											{title}
										</Button>
									{:else}
										-
									{/if}
								</td>
							{:else}
								{@const { href, title, pre, caption, latest } = item}
								<td
									class="relative space-y-2 border-r border-base bg-dominant px-6 py-4 text-center"
								>
									{#if latest}
										<img src={NewGif} alt="new-gif" class="absolute left-1 h-5" />
									{/if}
									{#if pre}
										<p>{pre}</p>
									{/if}
									{#if href.length > 0}
										<Button {href} variant="rounded" size="sm">
											{title}
										</Button>
									{:else}
										-
									{/if}
									<p>{caption}</p>
								</td>
							{/if}
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
