<script>
	import View from '$lib/components/icons/View.svelte';
	import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
	import Tag from '$lib/components/Tag.svelte';

	import { sumLineItems, centToDollars } from '$lib/utils/helpers/moneyHelpers';
	import { convertDate, isLate } from '$lib/utils/helpers/dateHelpers';
	import { InvoiceStatus } from '../../../enums';

	export let invoice;

	function getInvoiceTagStatus() {
		if (invoice.invoiceStatus === 'draft') return 'draft';
		else if (invoice.invoiceStatus === InvoiceStatus.sent && !isLate(invoice.dueDate))
			return InvoiceStatus.sent;
		else if (invoice.invoiceStatus === InvoiceStatus.sent && isLate(invoice.dueDate)) return 'late';
		else if (invoice.invoiceStatus === InvoiceStatus.paid) return InvoiceStatus.paid;
	}
</script>

<div
	class="invoice-table invoice-row items-center rounded-lg bg-white py-3 shadow-tableRow lg:py-6"
>
	<div class="status"><Tag className="ml-auto lg:ml-0" label={getInvoiceTagStatus()} /></div>
	<div class="dueDate text-sm lg:text-lg">{convertDate(invoice.dueDate)}</div>
	<div class="invoiceNumber text-sm lg:text-lg">{invoice.invoiceNumber}</div>
	<div class="clientName truncate whitespace-nowrap text-base font-bold lg:text-lg">
		{invoice.client.name}
	</div>
	<div class="amount text-right font-mono text-sm font-bold lg:text-lg">
		${centToDollars(sumLineItems(invoice.lineItems))}
	</div>
	<div class="center viewButton hidden text-sm lg:block lg:text-lg">
		<a href="#" class="text-pastelPurple hover:text-daisyBush"><View /> </a>
	</div>
	<div class="center moreButton hidden text-sm lg:block lg:text-lg">
		<button class="text-pastelPurple hover:text-daisyBush"><ThreeDots /></button>
	</div>
</div>

<style lang="postcss">
	.invoice-row {
		grid-template-areas:
			'invoiceNumber invoiceNumber'
			'clientName amount'
			'dueDate status';
	}
	@media (min-width: 1024px) {
		.invoice-row {
			grid-template-areas: 'status dueDate invoiceNumber clientName amount viewButton moreButton';
		}
	}

	.invoice-row .status {
		grid-area: status;
	}
	.invoice-row .dueDate {
		grid-area: dueDate;
	}
	.invoice-row .invoiceNumber {
		grid-area: invoiceNumber;
	}
	.invoice-row .clientName {
		grid-area: clientName;
	}
	.invoice-row .amount {
		grid-area: amount;
	}
	.invoice-row .viewButton {
		grid-area: viewButton;
	}
	.invoice-row .moreButton {
		grid-area: moreButton;
	}
</style>
