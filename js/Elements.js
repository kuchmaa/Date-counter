export const Header = {
	element: document.getElementsByTagName("header")[0],
	state: true,
	open: function () {
		this.element.removeAttribute("state");
		this.state = true;
		Buttons.dropDowns.header.setAttribute("state", "open");
	},
	close: function () {
		this.state = false;
		this.element.setAttribute("state", "close");
		Buttons.dropDowns.header.setAttribute("state", "close");
	},
};

export const Buttons = {
	theme: {
		light: document.getElementById("theme-l"),
		dark: document.getElementById("theme-d"),
	},
	dropDowns: {
		counters: document.getElementById("counts-btn"),
		settings: document.getElementById("settings-btn"),
		header: document.getElementById("state-header"),
	},
	newText: ({ button, text }) => (button.querySelector("span").innerHTML = text),
};
export const Menus = {
	supmenus: {
		settings: {
			lang: document.getElementById(""),
		},
	},
	counters: document.getElementById("counts-menu"),
	settings: document.getElementById("settings-menu"),
	close: function (elem) {
		if (!elem) {
			this.checkOpenAndRemove(this.counters);
			this.checkOpenAndRemove(this.settings);
			window.onclick = null;
		} else {
			this.remove(elem);
			window.onclick = null;
		}
	},
	remove: (elem) => elem.removeAttribute("open"),
	checkOpenAndRemove: function (elem) {
		if (elem.getAttribute("open") !== null) {
			this.remove(elem);
		}
	},
};

export const skeletonTitle = document.getElementById("skeleton__countName");
export const counts = {
	day: document.getElementById("days"),
	hour: document.getElementById("hours"),
	min: document.getElementById("minutes"),
	sec: document.getElementById("seconds"),
};

export const skeleton = {
	count: {
		time: {
			day: document.getElementById("countdown").getElementsByClassName("skeleton")[0],
			hour: document.getElementById("countdown").getElementsByClassName("skeleton")[1],
			min: document.getElementById("countdown").getElementsByClassName("skeleton")[2],
			sec: document.getElementById("countdown").getElementsByClassName("skeleton")[3],
		},
		display: function (state) {
			if (state === true) {
				// skeletonTitle.style.display = "block";
				this.time.day.style.display = "block";
				this.time.hour.style.display = "block";
				this.time.min.style.display = "block";
				this.time.sec.style.display = "block";
			}
			if (state === false) {
				skeletonTitle.style.display = "none";
				this.time.day.style.display = "none";
				this.time.hour.style.display = "none";
				this.time.min.style.display = "none";
				this.time.sec.style.display = "none";
			}
		},
		animation: function (state) {
			if (state == true) {
				// skeletonTitle.className = "skeleton__anim";
				this.time.day.className = "skeleton__anim";
				this.time.hour.className = "skeleton__anim";
				this.time.min.className = "skeleton__anim";
				this.time.sec.className = "skeleton__anim";
			}
		},
	},
};
