<script lang="ts">
	import Header from '$components/nav/Header.svelte';
	import Footer from '$components/nav/Footer.svelte';
</script>

<Header position="sticky" />
<slot />
<Footer />
