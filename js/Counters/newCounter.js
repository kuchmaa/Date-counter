
import { skeleton } from "../Elements.js";

export function newCounter({ json, name, newDate }) {
  if (json && typeof (json) === "object") {
    const target = json.games[name];

    // setTitle(target.title);

    const date = new Date(
      target.year,
      target.month - 1,
      target.day,
      target.hour,
      target.min,
      target.sec
    );
    return date;
    // startTimer(date, counts.day, counts.hour, counts.min, counts.sec);
  } else if (newDate) {
    // setTitle(name);
    const date = new Date(
      newDate.year,
      newDate.month,
      newDate.day,
      newDate.hour,
      newDate.min,
      newDate.sec
    );
    return date;
    // startTimer(date, counts.day, counts.hour, counts.min, counts.sec);
  }
}
export function startTimer(target, dayDiv, hourDiv, minDiv, secDiv) {
  var result = target - new Date() + 1000;
  var seconds = Math.floor((result / 1000) % 60);
  var minutes = Math.floor((result / 1000 / 60) % 60);
  var hours = Math.floor((result / 1000 / 60 / 60) % 24);
  var days = Math.floor(result / 1000 / 60 / 60 / 24);
  dayDiv.innerHTML = days;
  hourDiv.innerHTML = hours;
  minDiv.innerHTML = minutes;
  secDiv.innerHTML = seconds;
  skeleton.count.display(false);
}
export function setTitle(title) {
  if (!document.getElementById("countdown_label").querySelector("span").innerHTML.includes(title)) {
    document.title = title;
    document.getElementById("countdown_label").querySelector("span").innerHTML = title;
  }
}