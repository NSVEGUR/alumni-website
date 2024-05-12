<script lang="ts">
	import '../app.css';
	import Header from '$components/Header.svelte';
	import Footer from '$components/Footer.svelte';
	import Transition from '$components/Transition.svelte';
	import { page } from '$app/stores';
	import { loading } from '$utils/loader';
	import { navigating } from '$app/stores';
	import Loading from '$lib/components/Loading.svelte';

	import type { LayoutData } from './$types';
	const links = [
		{
			title: 'Home',
			href: '/',
			active: '/'
		},
		{
			title: 'Events',
			href: '/events',
			active: 'events'
		},
		{
			title: 'Gallery',
			href: '/gallery',
			active: 'gallery'
		},
		{
			title: 'Newsroom',
			href: '/newsroom',
			active: 'newsroom'
		},
		{
			title: 'Contact Us',
			href: '/contact-us',
			active: 'contact-us'
		},
		{
			title: 'Alumni Fund',
			href: '/alumni-fund',
			active: 'alumni-fund'
		}
	];
	export let data: LayoutData;

	$: loading.setNavigating(!!$navigating);
</script>

<Loading />
{#key $page.data.url}
	<Header {links} url={data.url} />
{/key}
{#key data.url}
	<Transition duration={300}>
		<slot><!-- optional fallback --></slot>
	</Transition>
{/key}
<Footer />
