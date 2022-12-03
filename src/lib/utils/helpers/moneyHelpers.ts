/**
 *	Summarize the total amount in particular invoice
 * @param {Array | undefined} lineItems
 * @return {number}
 */
export const sumLineItems = (lineItems: LineItem[] | undefined): number => {
	if (!lineItems) return 0;
	return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0);
};

/**
 * Converting the currency format from Cent to Dollar
 * @param cent
 * @return {string}
 */
export function centToDollars(cent: number): string {
	const dollars = cent / 100;
	const dollarWithDecimal = twoDecimals(dollars);
	return addThousandFormat(dollarWithDecimal);
}

export const twoDecimals = (value: number): string => {
	return value.toFixed(2);
};
export const addThousandFormat = (value: string): string => {
	return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Summarize the total amount of the entire Invoice
 * @param invoices
 */
export function sumInvoices(invoices: Invoice[] | undefined): number {
	if (!invoices) return 0;

	return invoices.reduce((preValue, curValue) => {
		const invoiceSum = sumLineItems(curValue.lineItems);
		return preValue + invoiceSum;
	}, 0);
}
