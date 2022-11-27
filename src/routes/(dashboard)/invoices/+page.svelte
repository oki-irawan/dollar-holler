<script>
	import SearchField from '$lib/components/SearchField.svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';
	import InvoiceRow from '$lib/components/InvoiceRow.svelte';
	import InvoiceHeader from '$lib/components/InvoiceHeader.svelte';
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<!--Search Bar-->
<div class="mb-16 flex items-center justify-between">
	<!--	Serach Field	-->
	<SearchField />

	<button
		class="center relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo py-3 px-10 font-sansSerif text-xl font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover"
	>
		+ Invoice
	</button>
</div>

<!--	Invoice Table	-->

<!--	Header	-->
<InvoiceHeader />

<!--	Invoice List	-->
<InvoiceRow />

<CircledAmount label="Total" amount="$1,144.00" />
