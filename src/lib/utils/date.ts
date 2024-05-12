export function getRelativeTime (
	day: Date,
) {
	const today = new Date();
	// checking for year
	if (today.getFullYear() < day.getFullYear()) {
		return 'upcoming';
	} else if (today.getFullYear() > day.getFullYear()) {
		return 'past';
	}
	// if the year is same we check for months
	if (today.getMonth() < day.getMonth()) {
		return 'upcoming';
	} else if (today.getMonth() > day.getMonth()) {
		return 'past';
	}
	// if the month is also same we check for the date
	if (today.getDate() < day.getDate()) {
		return 'upcoming';
	} else if (today.getDate() > day.getDate()) {
		return 'past';
	}
	return 'today';
}