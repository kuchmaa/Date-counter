import Counter from "./Counter.js";
import { updateCounter } from "./updateCounter.js";

console.log(location.host);
var host;
if (location.host == "shunpocode.github.io") {
  host = "/Date-counter";
} else {
  host = "";
}

const counts = {
  day: document.getElementById("days"),
  hour: document.getElementById("hours"),
  min: document.getElementById("minutes"),
  sec: document.getElementById("seconds"),
};

const skeleton = {
  count: {
    time: {
      day: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton__anim")[0],
      hour: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton__anim")[1],
      min: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton__anim")[2],
      sec: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton__anim")[3],
    },
    timeDisplay: function (state) {
      if (state === true) {
        document.getElementById("skeleton__countName").style.display = "none";
        this.time.day.style.display = "block";
        this.time.hour.style.display = "block";
        this.time.min.style.display = "block";
        this.time.sec.style.display = "block";
      }
      if (state === false) {
        document.getElementById("skeleton__countName").style.display = "none";
        this.time.day.style.display = "none";
        this.time.hour.style.display = "none";
        this.time.min.style.display = "none";
        this.time.sec.style.display = "none";
      }
    },
  },
};

const XML = new XMLHttpRequest();
var reliseJSON;

XML.onreadystatechange = function () {
  if (XML.readyState == 4 && XML.status == 200) {
    reliseJSON = JSON.parse(XML.responseText);
    return reliseJSON;
  }
};

XML.open("GET", host + "/db/relises.json", true);
XML.send();

const reliseJsonInteval = setInterval(() => {
	if (reliseJSON) {
		console.log(reliseJSON);
		updateCounter(reliseJSON, "v_rising", counts, skeleton);
		clearInterval(reliseJsonInteval);
  	}
}, 300);



const btn1 = new Counter({
  block: document.getElementById("stalker_2"),
});

console.log(`${btn1.title} | ${btn1.id}`);
setTimeout(() => {
	const btn2 = new Counter({
    block: document.getElementById("v_rising"),
  });
  console.log(`${btn2.title} | ${btn2.id}`);
}, 2000)

