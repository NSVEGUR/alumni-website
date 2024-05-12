<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class="flex h-screen w-screen flex-col items-center justify-center bg-dominant">
	<div class="flex items-center gap-5">
		<p class="border-r border-base pr-5 text-5xl font-bold">
			{$page.status}
		</p>
		<p class="text-xl font-medium text-complementary">
			{$page.error?.message ?? 'Some Unknown Error Occurred, Please Contact Our Automation Team'}
		</p>
	</div>
</main>
