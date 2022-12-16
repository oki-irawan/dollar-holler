import { writable } from 'svelte/store';
import data from '../../seed.json';

export const invoices = writable<Invoice[]>([]);

export const loadInvoices = () => {
	// invoices.set([]);
	invoices.set(data.invoices);
};

export const removeInvoice = (invoiceSeleted: Invoice) => {
	invoices.update((prevInvoices: Invoice[]) =>
		prevInvoices.filter((invoice: Invoice) => invoice.id !== invoiceSeleted.id)
	);
	return invoiceSeleted;
};
