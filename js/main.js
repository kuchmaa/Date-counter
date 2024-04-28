import newCounter from "./Counters/newCounter.js";
import { Buttons, skeleton } from "./Elements.js";
import { setTheme } from "./Theme/chengeTheme.js";

export var host;
if (location.host == "shunpocode.github.io") {
  host = "/Date-counter";
} else {
  host = "";
}
var Timer;
Buttons.theme.dark.addEventListener("click", function () {
  setTheme("dark")
})
Buttons.theme.light.addEventListener("click", function () {
  setTheme("light")
})

const countersButons = document.getElementById("counts-menu").getElementsByTagName("button");

document.getElementById("end-year").addEventListener("click", function () {
  Buttons.dropDowns.counters.querySelector("span").innerHTML = document.getElementById("end-year").innerHTML;
  clearInterval(Timer);
  skeleton.count.animation(true);
  skeleton.count.display(true);
  Timer = setInterval(function () {
    newCounter({
      newDate: {
        year: 2025,
        month: 0,
        day: 1,
        hour: 0,
        min: 0,
        sec: 0,
      },
      name: "New Year",
    });
  }, 1000);
});
document.getElementById("anya-brd").addEventListener("click", function () {
  Buttons.dropDowns.counters.querySelector("span").innerHTML = document.getElementById("anya-brd").innerHTML;
  clearInterval(Timer);
  skeleton.count.animation(true);
  skeleton.count.display(true);
  Timer = setInterval(function () {
    newCounter({
      newDate: {
        year: 2024,
        month: 4,
        day: 11,
        hour: 0,
        min: 0,
        sec: 0,
      },
      name: document.getElementById("anya-brd").innerHTML,
    });
  }, 1000);
});

for (let i = 2; i < countersButons.length; i++) {
    countersButons[i].addEventListener("click", function () {
        Buttons.dropDowns.counters.querySelector("span").innerHTML =
          countersButons[i].innerHTML;
      clearInterval(Timer);
      skeleton.count.animation(true);
      skeleton.count.display(true);
      Timer = setInterval(function () {
        newCounter({ json: reliseJSON, name: countersButons[i].id });
      }, 1000);
  });
}

const XML = new XMLHttpRequest();
var reliseJSON;

window.onload = function () {
  XML.onreadystatechange = function () {
    if (XML.readyState == 4 && XML.status == 200) {
      reliseJSON = JSON.parse(XML.responseText);
      return reliseJSON;
    } else {
      reliseJSON = null;
    }
  };

  XML.open("GET", host + "/db/relises.json", true);
  XML.send();
}

const reliseJsonInteval = setInterval(() => {
  if (reliseJSON !== null) {
    if (reliseJSON) {
      clearInterval(reliseJsonInteval);

      Timer = setInterval(function () {
        // newCounter( { json: reliseJSON, name: "v_rising" } );
        newCounter( { 
          newDate:{
            year: 2025,
            month: 0,
            day: 1,
            hour: 0,
            min: 0,
            sec: 0
          },
          name: "New Year"
        } );
      }, 1000);

      // setTimeout(() => {
      //   clearInterval(Timer);
      //   Timer = setInterval(function () {
      //     newCounter( { json: "12312", name: "stalker_2"} );
      //   }, 1000);
      // }, 3000);
    }
  } else {
    clearInterval(reliseJsonInteval);
  }
  
}, 300);