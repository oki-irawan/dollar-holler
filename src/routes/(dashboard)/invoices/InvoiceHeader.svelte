<script lang="ts">
	export let className = '';
</script>

<div class={`tableHeader invoice-table hidden text-daisyBush lg:grid ${className}`}>
	<h3>Status</h3>
	<h3>Issue Date</h3>
	<h3>ID</h3>
	<h3>Client</h3>
	<h3 class="text-right">Amount</h3>
	<div />
	<div />
</div>

<style>
	.tableHeader h3 {
		@apply text-xl font-black leading-snug;
	}
</style>
