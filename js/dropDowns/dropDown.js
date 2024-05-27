import { Header, Menus } from "../Elements.js";

// Выпадающее меню

export function dropDown({ button, menu }) {
	if (menu.getAttribute("open") === null) {
		for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
			if (document.getElementsByTagName("button")[i].getAttribute("active") !== null) {
				document.getElementsByTagName("button")[i].removeAttribute("active");
			}
		}
		for (let i = 0; i < document.getElementsByClassName("dropdown").length; i++) {
			Menus.checkOpenAndRemove(document.getElementsByClassName("dropdown")[i]);
		}
		button.setAttribute("active", "");
		menu.setAttribute("open", "");
		pointerPos(menu, button); // Если пользователь нажимает вне меню, меню закрывается ` line: 32 `
	} else {
		button.removeAttribute("active");
		Menus.close(menu);
		window.onclick = null;
	}
}

// Закрыть основное меню
function closeMenu(button, element) {
	button.removeAttribute("active");
	Menus.close(element);
	window.onclick = null;
}

function pointerPos(menu, button) {
	// Курсор покидает область кнопки
	button.addEventListener("mouseleave", function () {
		window.onclick = () => closeMenu(button, menu); // Если курсор не вошёл в облать меню и произошёл "click" или "touch" закрывать меню

		menu.addEventListener("mouseleave", function () {
			window.onclick = null; // Удаляем старый `onclick`, чтобы предотвратить лишные `onclick`
			window.onclick = () => closeMenu(button, menu);
		});
		// Когда мыш вошла в меню удаляем `onclick`
		menu.addEventListener("mouseenter", function () {
			window.onclick = null;
		});
	});
	// Когда мыш удаляем `onclick`
	button.addEventListener("mouseenter", function () {
		window.onclick = null;
	});
}

export function headerState() {
	if (Header.state === true) {
		Header.close();
	} else if (Header.state === false) {
		Header.open();
	}
}
