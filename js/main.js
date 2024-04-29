import { newCounter, setTitle, startTimer } from "./Counters/newCounter.js";
import { Buttons, counts, skeleton } from "./Elements.js";
import { setTheme } from "./Theme/chengeTheme.js";
import dropDown from "./dropDowns/dropDown.js";

export var host;
if (location.host == "shunpocode.github.io") {
  host = "/Date-counter";
} else {
  host = "";
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register(`${host}/js/app/service-worker.js`)
      .then((registration) => {
        console.log(
          "Service Worker зарегистрирован с успешным оффлайн-кэшированием:",
          registration
        );
      })
      .catch((error) => {
        console.error("Ошибка при регистрации Service Worker:", error);
      });
  } 
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
  
  var time = newCounter({
    // Создание даты
    newDate: { year: 2025, month: 0, day: 1, hour: 0, min: 0, sec: 0 },
  });
  setTitle(document.getElementById("end-year").innerHTML);
  Timer = setInterval(function () {
    startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
  }, 1000);

});
document.getElementById("anya-brd").addEventListener("click", function () {
  Buttons.dropDowns.counters.querySelector("span").innerHTML = document.getElementById("anya-brd").innerHTML;
  clearInterval(Timer);
  skeleton.count.animation(true);
  skeleton.count.display(true);

  var time = newCounter({ // Создание даты
    newDate: { year: 2024, month: 4, day: 11, hour: 0, min: 0, sec: 0 },
  }); 
  setTitle(document.getElementById("anya-brd").innerHTML);
  Timer = setInterval(function () {
    startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
  }, 1000);
});

for (let i = 2; i < countersButons.length; i++) {
    countersButons[i].addEventListener("click", function () {
      clearInterval(Timer);
      Buttons.dropDowns.counters.querySelector("span").innerHTML = countersButons[i].innerHTML;
      skeleton.count.animation(true);
      skeleton.count.display(true);

      var time = newCounter({ json: reliseJSON, name: countersButons[i].id }); 

      setTitle(countersButons[i].innerHTML);

      Timer = setInterval(function () {
        startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
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
      var time = newCounter({ newDate: { year: 2025, month: 0, day: 1, hour: 0, min: 0, sec: 0 }, }); // Создание даты
      setTitle("New Year");
      Timer = setInterval(function () {
        startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
      }, 1000);
    }
  } else {
    clearInterval(reliseJsonInteval);
  }
  
}, 300);

Buttons.dropDowns.counters.addEventListener("click", function () {
  dropDown({
    button: Buttons.dropDowns.counters,
    menu: document.getElementById("counts-menu"),
  }); 
})


// РЕГИСТРАЦИЯ `service-worker`