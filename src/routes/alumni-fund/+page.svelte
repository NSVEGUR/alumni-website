<script>
	import Main from '$layouts/Main.svelte';
	import Cover from '$ui/Cover.svelte';
</script>

<Cover
	data={{
		title: 'Alumni Fund',
		src: '',
		links: [],
		type: 'default'
	}}
/>
<Main>
	<section class="mx-auto max-w-7xl pb-16">
		<p class="pb-10">
			Your contribution isn't just a gift; it's an investment in our institutes's legacy and
			success. Let's work together to make a positive impact and ensure our alma mater continues to
			shine. Join us in supporting the pride we share as alumni and keeping our institute excellent
			for years to come!
		</p>
		<iframe
			src="https://docs.google.com/forms/d/e/1FAIpQLSdan_VViGmDcIufVM2EG-1E_i-Vr37jgMQMwG34DZ8O-Te4OQ/viewform?embedded=true"
			width="640"
			height="520"
			title="alumni-fund-form"
			class="mx-auto max-w-full"
		>
			Loading…
		</iframe>
	</section>
</Main>
