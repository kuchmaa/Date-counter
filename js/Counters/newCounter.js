import { skeleton } from "../Elements.js";

export function newCounter({ json, name, newDate }) {
	if (json && typeof json === "object") {
		const target = json.games[name];

		// ? Почему `target.month - 1`
		// ! в json фале месяца начинаються с 1, а в класе Date() с 0

		const date = new Date(target.year, target.month - 1, target.day, target.hour, target.min, target.sec);
		return date;
		// startTimer(date, counts.day, counts.hour, counts.min, counts.sec);
	} else if (newDate) {
		// setTitle(name);
		const date = new Date(newDate.year, newDate.month, newDate.day, newDate.hour, newDate.min, newDate.sec);
		return date;
		// startTimer(date, counts.day, counts.hour, counts.min, counts.sec);
	}
}
export async function startTimer(target, dayDiv, hourDiv, minDiv, secDiv) {
	if (target > new Date()) {
		var result = target - new Date() + 1000;
		var seconds = Math.floor((result / 1000) % 60);
		var minutes = Math.floor((result / 1000 / 60) % 60);
		var days = Math.floor(result / 1000 / 60 / 60 / 24);
		var hours = Math.floor((result / 1000 / 60 / 60) % 24);
		dayDiv.innerHTML = days;
		hourDiv.innerHTML = hours;
		minDiv.innerHTML = minutes;
		secDiv.innerHTML = seconds;
	} else {
		dayDiv.innerHTML = "00";
		hourDiv.innerHTML = "00";
		minDiv.innerHTML = "00";
		secDiv.innerHTML = "00";
	}

	skeleton.count.display(false);
}
export function setTitle(title) {
	if (!document.getElementById("countdown_label").querySelector("span").innerHTML.includes(title)) {
		document.title = title;
		document.getElementById("countdown_label").querySelector("span").innerHTML = title;
	}
}
