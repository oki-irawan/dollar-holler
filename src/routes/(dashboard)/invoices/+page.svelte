<script>
	import { invoices, loadInvoices } from '$lib/store/InvoiceStore';
	import { onMount } from 'svelte';

	import SearchField from '$lib/components/SearchField.svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import InvoiceHeader from '$lib/components/InvoiceHeader.svelte';
	import { centToDollars, sumInvoices } from '$lib/utils/helpers/moneyHelpers';

	onMount(() => loadInvoices());
</script>

<svelte:head>
	<title>Invoices | The Dollar Holler</title>
</svelte:head>

<!--Search Bar-->
<div
	class="mb-7 flex flex-col-reverse items-start justify-between gap-y-6 md:mb-16 md:flex-row md:items-center md:gap-y-4"
>
	<!--	Serach Field	-->
	<SearchField />

	<button
		class="center relative translate-y-0 whitespace-nowrap rounded-lg bg-lavenderIndigo py-2 px-5 font-sansSerif text-base font-black text-white shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover lg:py-3 lg:px-10 lg:text-xl"
	>
		+ Invoice
	</button>
</div>

<!--	Invoice Table	-->
<div>
	<!--	Header	-->
	<InvoiceHeader />

	{#each $invoices as invoice}
		<InvoiceRow {invoice} />
	{/each}
</div>

<CircledAmount label="Total" amount={`$${centToDollars(sumInvoices($invoices))}`} />
