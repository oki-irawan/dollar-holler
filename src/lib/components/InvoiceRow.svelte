<script>
	import View from '$lib/components/icons/View.svelte';
	import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
	import Tag from '$lib/components/Tag.svelte';
</script>

<div class="invoice-table items-center rounded-lg bg-white py-6 shadow-tableRow">
	<div><Tag label="draft" /></div>
	<div class="text-lg">5 / 20 / 2020</div>
	<div class="text-lg">5475</div>
	<div class="text-lg font-bold">Agostinelli</div>
	<div class="font-mono text-lg font-bold">$504.00</div>
	<div class="center text-lg">
		<a href="#" class="text-pastelPurple hover:text-daisyBush"><View /> </a>
	</div>
	<div class="center text-lg">
		<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
	</div>
</div>
