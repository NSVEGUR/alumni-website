<script lang="ts">
	import { loading } from '$utils/loader';
	import Logo from '$images/alumni-logo.png';
	$: if ($loading.status === 'NAVIGATING') {
		setTimeout(() => {
			if ($loading.status === 'NAVIGATING') {
				$loading.status = 'LOADING';
			}
		}, 400);
	}
</script>

{#if $loading.status === 'LOADING'}
	<div
		role="status"
		class="fixed inset-0 z-[10000] flex h-screen w-screen items-center justify-center bg-dominant"
	>
		<div class="relative flex flex-col items-center justify-center gap-5">
			<img src={Logo} alt="logo" class="h-16" />
			<div class="loader-line bg-gray-400 before:bg-accent" />
			<p>
				{$loading.message ? $loading.message : 'Loading Please Wait...'}
			</p>
		</div>
	</div>
{/if}

<style>
	.loader-line {
		width: 200px;
		height: 3px;
		position: relative;
		overflow: hidden;
		/* background-color: #ddd; */
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
	}

	.loader-line:before {
		content: '';
		position: absolute;
		left: -50%;
		height: 3px;
		width: 40%;
		/* background-color: coral; */
		-webkit-animation: lineAnim 1s linear infinite;
		-moz-animation: lineAnim 1s linear infinite;
		animation: lineAnim 1s linear infinite;
		-webkit-border-radius: 20px;
		-moz-border-radius: 20px;
		border-radius: 20px;
	}

	@keyframes lineAnim {
		0% {
			left: -40%;
		}
		50% {
			left: 20%;
			width: 80%;
		}
		100% {
			left: 100%;
			width: 100%;
		}
	}
</style>
