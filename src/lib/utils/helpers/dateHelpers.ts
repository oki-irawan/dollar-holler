import dayjs from 'dayjs';

// initialize current date time
const now = dayjs();

/**
 * This take date format yyyy-mm-dd to d-m-yyyy
 * @param {string} date
 * @return {string} formatedDate
 */
export function convertDate(date: string): string {
	// split the string date
	const [year, month, day] = splitDate(date);

	// formated date to dd - mm - yy
	return `${parseInt(day)} / ${parseInt(month)} / ${year}`;
}

/**
 * Determines whether a date is before today (meaning it's late!)
 * @param {string} date
 * @return {boolean}
 */
export function isLate(date: string): boolean {
	return dayjs(date).isBefore(now);
}

/**
 * Split a string date format to array of day, month, and year
 * @param {string} date
 * @return {Array}
 */
function splitDate(date: string): Array<string> {
	return date.split('-');
}
