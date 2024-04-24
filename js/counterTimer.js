export default function counterTimer(target, dayDiv, hourDiv, minDiv, secDiv) {
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

  setTimeout(() => {
    counterTimer(target, dayDiv, hourDiv, minDiv, secDiv);
  }, 1000);
}
