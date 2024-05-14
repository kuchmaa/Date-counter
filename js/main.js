import { newCounter, setTitle, startTimer } from "./Counters/newCounter.js";
import { Buttons, Menus, counts, skeleton } from "./Elements.js";
import { setTheme } from "./Theme/chengeTheme.js";
import { dropDown, headerState } from "./dropDowns/dropDown.js";

export var host;

if (location.host == "shunpocode.github.io") {
	host = "/Date-counter";
} else {
	host = "";
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register(`${host}/js/app/service-worker.js`)
			.then((registration) => {
				console.log("Service Worker зарегистрирован с успешным оффлайн-кэшированием:", registration);
			})
			.catch((error) => {
				console.error("Ошибка при регистрации Service Worker:", error);
			});
	}
}

// Запуск таймеpа когда страница загрузилась
var Timer;
var time = newCounter({
	newDate: { year: 2025, month: 0, day: 1, hour: 0, min: 0, sec: 0 },
}); // Создание даты
setTitle("New Year");

Timer = setInterval(function () {
	startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
}, 1000);

// Кнопки выбора темы
Buttons.theme.dark.addEventListener("click", function () {
	setTheme("dark");
});
Buttons.theme.light.addEventListener("click", function () {
	setTheme("light");
});

// Кнопки выбора обратного отсчёта

document.getElementById("end-year").addEventListener("click", function () {
	// Конец года
	Buttons.newText({
		button: Buttons.dropDowns.counters,
		text: document.getElementById("end-year").innerHTML,
	});
	clearInterval(Timer); // Остановка таймера
	skeleton.count.animation(true); // Включить анимацию skeleton
	skeleton.count.display(true); // Показать skeleton

	var time = newCounter({
		// Создание даты
		newDate: {
			year: 2025,
			month: 0,
			day: 1,
			hour: 0,
			min: 0,
			sec: 0,
		},
	});
	setTitle(document.getElementById("end-year").innerHTML); // Вставляет тект в заголовок таймера
	Timer = setInterval(function () {
		startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
	}, 1000);
});
document.getElementById("anya-brd").addEventListener("click", function () {
	// День рождение Ани
	Buttons.newText({
		button: Buttons.dropDowns.counters,
		text: document.getElementById("anya-brd").innerHTML,
	});

	clearInterval(Timer);
	skeleton.count.animation(true);
	skeleton.count.display(true);

	var time = newCounter({
		// Создание даты
		newDate: {
			year: 2024,
			month: 4,
			day: 11,
			hour: 0,
			min: 0,
			sec: 0,
		},
	});
	setTitle(document.getElementById("anya-brd").innerHTML);
	Timer = setInterval(function () {
		startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
	}, 1000);
});

const XML = new XMLHttpRequest();
var reliseJSON;

window.onload = function () {
	XML.onreadystatechange = function () {
		if (XML.readyState == 4 && XML.status == 200) {
			reliseJSON = JSON.parse(XML.responseText);
			return reliseJSON;
		} else {
			return (reliseJSON = null);
		}
	};

	// XML.open("GET", host + "/db/relises.json", true);
	XML.open("GET", "https://5.webkiev.com/", true);
	XML.send();
};

const createButtonsProm = new Promise((resolve, reject) => {
	const reliseJsonInteval = setInterval(() => {
		if (reliseJSON !== null) {
			clearInterval(reliseJsonInteval);
			var idLength = reliseJSON.games.id_list.length;
			for (let i = 0; i < idLength; i++) {
				var target = reliseJSON.games[reliseJSON.games.id_list[i]];
				var button = document.createElement("button");
				button.id = target.id;
				button.className = "flex";
				button.setAttribute("bg", "off");
				button.setAttribute("border", "none");
				button.innerHTML = target.title;
				document.getElementById("games").appendChild(button);
			}
			resolve();
		} else {
			clearInterval(reliseJsonInteval);
			reject();
		}
	}, 300);
});

createButtonsProm.then(() => {
	const countersGameButons = document.getElementById("games").getElementsByTagName("button"); // Блок с таймерами игр, в меню выбора счётчика
	for (let i = 0; i < countersGameButons.length; i++) {
		// Добавление EventLIstner для каждной кнопки в блоке с играми
		countersGameButons[i].addEventListener("click", function () {
			clearInterval(Timer);
			Buttons.newText({
				button: Buttons.dropDowns.counters,
				text: countersGameButons[i].innerHTML,
			});

			skeleton.count.animation(true);
			skeleton.count.display(true);

			var time = newCounter({
				json: reliseJSON,
				name: countersGameButons[i].id,
			});

			setTitle(countersGameButons[i].innerHTML);

			Timer = setInterval(function () {
				startTimer(time, counts.day, counts.hour, counts.min, counts.sec);
			}, 1000);
		});
	}
});

// eventListner кнопок для выпадающих меню
Buttons.dropDowns.counters.addEventListener("click", function () {
	dropDown({
		button: Buttons.dropDowns.counters,
		menu: Menus.counters,
	});
});
Buttons.dropDowns.settings.addEventListener("click", function () {
	dropDown({
		button: Buttons.dropDowns.settings,
		menu: Menus.settings,
	});
});

// eventListner для состояния header

Buttons.dropDowns.header.addEventListener("click", function () {
	headerState();
});
