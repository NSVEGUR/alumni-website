<script lang="ts">
	import About from '$components/About.svelte';
	import NotificationCard from '$components/NotificationCard.svelte';
	import Slider from '$components/Slider.svelte';
	import Team from '$components/Team.svelte';
	import Main from '$layouts/Main.svelte';
	import Calendar from '$svg/Calendar.svelte';
	import Newspaper from '$svg/Newspaper.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<Slider />
<Main>
	<div class="py-10 w-full flex flex-col">
		<div class="flex gap-5 -md:flex-col">
			<NotificationCard
				title="Newsroom"
				notifications={data.articles}
				href="/newsroom"
				type="article"
			>
				<Newspaper slot="icon" />
			</NotificationCard>
			<NotificationCard
				title="Events"
				notifications={data.activities}
				href="/events"
				type="activity"
			>
				<Calendar slot="icon" />
			</NotificationCard>
		</div>
		<About />
		<Team {data} />
	</div>
</Main>
