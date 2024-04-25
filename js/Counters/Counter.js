export default class Counter {
  constructor(props) {
    this.target = props.target;
    this.divDay = props.day
    this.divHour = props.hour
    this.divMin = props.min
    this.divSec = props.sec
  }
  target;
  divDay;
  divHour;
  divMin;
  divSec;
  result = function () {
    const res = this.target - new Date() + 1000;
    var seconds = Math.floor((result / 1000) % 60);
    var minutes = Math.floor((result / 1000 / 60) % 60);
    var hours = Math.floor((result / 1000 / 60 / 60) % 24);
    var days = Math.floor(result / 1000 / 60 / 60 / 24);
    if (seconds < 10) seconds = "0" + seconds;
    if (minutes < 10) minutes = "0" + minutes;
    if (hours < 10) hours = "0" + hours;

    this.dayDiv.innerHTML = days;
    this.hourDiv.innerHTML = hours;
    this.minDiv.innerHTML = minutes;
    this.secDiv.innerHTML = seconds;
  }
};
