import newCounter from "./Counters/newCounter.js";

var host;
if (location.host == "shunpocode.github.io") {
  host = "/Date-counter";
} else {
  host = "";
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

      var Timer = setInterval(function () {
        newCounter( { json: reliseJSON, name: "v_rising" } );
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

