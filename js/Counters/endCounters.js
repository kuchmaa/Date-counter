export default function endsCounter({ json, date }) {
	if (typeof date !== "object") {
		console.log(false);
		return;
	} else {
		console.log(true);
	}
	if (json) {
	} else if (date) {
		console.log(date);
	}
}
