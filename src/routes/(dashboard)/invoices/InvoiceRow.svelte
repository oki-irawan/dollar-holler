<script lang="ts">
	import View from '$lib/components/icons/View.svelte';
	import ThreeDots from '$lib/components/icons/ThreeDots.svelte';
	import Tag from '$lib/components/Tag.svelte';
	import Send from '$lib/components/icons/Send.svelte';
	import Trash from '$lib/components/icons/Trash.svelte';
	import Edit from '$lib/components/icons/Edit.svelte';
	import AdditionalOptions from '$lib/components/AdditionalOptions.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import Button from '$lib/components/Button.svelte';

	import { sumLineItems, centToDollars } from '$lib/utils/helpers/moneyHelpers';
	import { convertDate, isLate } from '$lib/utils/helpers/dateHelpers';
	import { InvoiceStatus } from '../../../enums';
	import { removeInvoice } from '$lib/store/InvoiceStore.js';

	export let invoice: Invoice;
	let isAdditionalMenuShowing = false;
	let isOptionDisabled = false;
	let isModalShowing = false;

	let totalAmountInvoice = centToDollars(sumLineItems(invoice.lineItems));

	function onEditHandler() {
		console.log('Editing');
	}
	function onSendHandler() {
		console.log('Sending');
	}
	function onDeleteHandler() {
		isAdditionalMenuShowing = false;
		isModalShowing = true;
	}

	function getInvoiceTagStatus() {
		if (invoice.invoiceStatus === 'draft') {
			return 'draft';
		} else if (invoice.invoiceStatus === InvoiceStatus.sent && !isLate(invoice.dueDate)) {
			isOptionDisabled = true;
			return InvoiceStatus.sent;
		} else if (invoice.invoiceStatus === InvoiceStatus.sent && isLate(invoice.dueDate)) {
			isOptionDisabled = true;
			return 'late';
		} else if (invoice.invoiceStatus === InvoiceStatus.paid) {
			isOptionDisabled = true;
			return InvoiceStatus.paid;
		}
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
		${totalAmountInvoice}
	</div>
	<div class="center viewButton hidden text-sm lg:block lg:text-lg">
		<a href="#" class="text-pastelPurple hover:text-daisyBush"><View /> </a>
	</div>
	<div class="center moreButton relative hidden text-sm lg:block lg:text-lg">
		<button
			class="text-pastelPurple hover:text-daisyBush"
			on:click={() => (isAdditionalMenuShowing = !isAdditionalMenuShowing)}
		>
			<ThreeDots />
		</button>

		{#if isAdditionalMenuShowing}
			<AdditionalOptions
				options={[
					{ label: 'Edit', icon: Edit, onClick: onEditHandler, disabled: isOptionDisabled },
					{ label: 'Delete', icon: Trash, onClick: onDeleteHandler, disabled: false },
					{ label: 'Send', icon: Send, onClick: onSendHandler, disabled: isOptionDisabled }
				]}
			/>
		{/if}
	</div>
</div>

<Modal isVisible={isModalShowing} on:close={() => (isModalShowing = false)}>
	<div class="flex h-full min-h-[175px] flex-col items-center justify-between gap-6">
		<h5 class="text-center text-xl font-bold text-daisyBush">
			Are you sure you want to delete this to
			<span class="text-scarlet">{invoice.client.name}</span> for
			<span class="text-scarlet">${totalAmountInvoice}</span>?
		</h5>
		<div class="flex justify-between gap-4">
			<Button
				label="Cancel"
				variant="secondary"
				isAnimated={false}
				onClick={() => (isModalShowing = false)}
			/>
			<Button
				label="Yes, Delete It"
				variant="destructive"
				isAnimated={false}
				onClick={() => {
					isModalShowing = false;
					removeInvoice(invoice);
				}}
			/>
		</div>
	</div>
</Modal>

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
