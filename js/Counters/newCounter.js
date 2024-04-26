
import { counts, skeleton } from "../Elements.js";

export default function newCounter({ json, name, newDate } ) {
  if (json && typeof(json) === "object") {
    const target = json.games[name];
    // if (
    //   !document
    //     .getElementById("countdown_label")
    //     .querySelector("span")
    //     .innerHTML.includes(target.title)
    // ) {
    //   document
    //     .getElementById("countdown_label")
    //     .querySelector("span").innerHTML = target.title;
    // }
    setTitle(target.title);

    const date = new Date(
      target.year,
      target.month - 1,
      target.day,
      target.hour,
      target.min,
      target.sec
    );
    counterTimer(date, counts.day, counts.hour, counts.min, counts.sec);
  }
  if (newDate) {
    setTitle(name);
    const date = new Date(
      newDate.year,
      newDate.month,
      newDate.day,
      newDate.hour,
      newDate.min,
      newDate.sec
    );
    counterTimer(date, counts.day, counts.hour, counts.min, counts.sec);

  }
  
  
  skeleton.count.display(false);


  function counterTimer(target, dayDiv, hourDiv, minDiv, secDiv) {
    var result = target - new Date() + 1000;
    var seconds = Math.floor((result / 1000) % 60);
    var minutes = Math.floor((result / 1000 / 60) % 60);
    var hours = Math.floor((result / 1000 / 60 / 60) % 24);
    var days = Math.floor(result / 1000 / 60 / 60 / 24);
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    dayDiv.innerHTML = days;
    hourDiv.innerHTML = hours;
    minDiv.innerHTML = minutes;
    secDiv.innerHTML = seconds;
  }
  function setTitle(title) {
    if (
      !document
        .getElementById("countdown_label")
        .querySelector("span")
        .innerHTML.includes(title)
    ) {
      document
        .getElementById("countdown_label")
        .querySelector("span").innerHTML = title;
    }
  }
}
