<script>
	import { invoices, loadInvoices } from '$lib/store/InvoiceStore';
	import { onMount } from 'svelte';

	import SearchField from '$lib/components/SearchField.svelte';
	import CircledAmount from '$lib/components/CircledAmount.svelte';
	import InvoiceRow from './InvoiceRow.svelte';
	import InvoiceHeader from './InvoiceHeader.svelte';
	import { centToDollars, sumInvoices } from '$lib/utils/helpers/moneyHelpers';
	import BlankState from './BlankState.svelte';
	import Button from '$lib/components/Button.svelte';

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
	{#if $invoices.length > 0}
		<SearchField />
	{:else}
		<div />
	{/if}

	<Button label="+ Invoice" onClick={() => {}} />
</div>

<!--	Invoice Table	-->
<div>
	{#if $invoices === null}
		Loading ....
	{:else if $invoices.length <= 0}
		<BlankState />
	{:else}
		<!--	Header	-->
		<InvoiceHeader className="text-daisyBush  " />

		<!--	Row		-->
		<div class="flex flex-col-reverse">
			{#each $invoices as invoice}
				<InvoiceRow {invoice} />
			{/each}
		</div>

		<!--	Total Amount	-->
		<CircledAmount label="Total" amount={`$${centToDollars(sumInvoices($invoices))}`} />
	{/if}
</div>
