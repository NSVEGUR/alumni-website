<script lang="ts">
	export let alignment: 'center' | 'left' = 'center';
	export let color: 'accent' | 'complementary' | 'default' = 'complementary';
</script>

<h1
	class="my-5 {alignment == 'center' ? 'text-center' : 'text-left'} text-2xl font-medium {color ==
		'accent' && 'text-skin-accent'} {color == 'complementary' && 'text-complementary'} {color ==
		'default' && 'text-skin-base'}"
>
	<slot><!-- optional fallback --></slot>
</h1>
