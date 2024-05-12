<script>
	import Link from '$ui/Link.svelte';
	import Institute from '$images/institute-logo.webp';
	import AlumniLogo from '$images/alumni-logo.png';
</script>

<footer class="w-full border-t border-base bg-muted py-5">
	<div class="flex items-end justify-center gap-10 pb-5 -sm:hidden">
		<div class="flex items-center gap-2">
			<Link href="https://www.youtube.com/channel/UCC0_90UdP8T31E4CLBhPWWA">Youtube</Link>
			<Link href="https://www.facebook.com/iiitdmkanchee">Facebook</Link>
			<Link href="https://twitter.com/iiitdm_kancheep">Twitter</Link>
		</div>
		<a class="flex items-center gap-1 text-accent" href="/">
			<img src={AlumniLogo} alt="logo" class="h-14" />
			<img src={Institute} alt="logo" class="h-16" />
		</a>
		<div class="flex flex-col items-center">
			<div class="flex items-center gap-2">
				<Link href="https://www.instagram.com/iiitdmkancheepuram/">Instagram</Link>
				<Link
					href="https://www.linkedin.com/school/indian-institute-of-information-technology-design-&-manufacturing-kancheepuram/"
					>Linkedin</Link
				>
				<!-- svelte-ignore missing-declaration -->
				<Link
					href="https://www.researchgate.net/institution/Indian_Institute_of_Information_Technology_Design_Manufacturing_Kancheepuram_India"
					>Research-Gate</Link
				>
			</div>
		</div>
	</div>
	<a class="flex items-center justify-center gap-1 text-accent sm:hidden" href="/">
		<img src={AlumniLogo} alt="logo" class="h-14" />
		<img src={Institute} alt="logo" class="h-16" />
	</a>
	<div class="my-4 flex flex-wrap items-center justify-center gap-4 sm:hidden">
		<Link href="https://www.youtube.com/channel/UCC0_90UdP8T31E4CLBhPWWA">Youtube</Link>
		<Link href="https://www.facebook.com/iiitdmkanchee">Facebook</Link>
		<Link href="https://twitter.com/iiitdm_kancheep">Twitter</Link>
		<Link href="https://www.instagram.com/iiitdmkancheepuram/">Instagram</Link>
		<Link
			href="https://www.linkedin.com/school/indian-institute-of-information-technology-design-&-manufacturing-kancheepuram/"
			>Linkedin</Link
		>
		<Link
			href="https://www.researchgate.net/institution/Indian_Institute_of_Information_Technology_Design_Manufacturing_Kancheepuram_India"
			>Research-Gate</Link
		>
	</div>
	<p class="text-center text-sm font-medium -2xs:text-xs">
		© 2023, Alumni Affairs, IIITDM Kancheepuram
	</p>
	<p class="mt-2 p-2 text-center text-xs font-medium text-skin-muted">
		Developed by <span class="font-bold text-skin-accent">Automation Web Team IIITDM</span>
	</p>
</footer>
