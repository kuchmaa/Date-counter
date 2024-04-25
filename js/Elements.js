export const Buttons = {
  theme: {
    light: document.getElementById("theme-l"),
    dark: document.getElementById("theme-d")
  }
}

export const Title = document.getElementById("skeleton__countName");
export const counts = {
  day: document.getElementById("days"),
  hour: document.getElementById("hours"),
  min: document.getElementById("minutes"),
  sec: document.getElementById("seconds"),
};

export const skeleton = {
  count: {
    time: {
      day: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton")[0],
      hour: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton")[1],
      min: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton")[2],
      sec: document
        .getElementById("countdown")
        .getElementsByClassName("skeleton")[3],
    },
    timeDisplay: function (state) {
      if (state === true) {
        Title.style.display = "block";
        this.time.day.style.display = "block";
        this.time.hour.style.display = "block";
        this.time.min.style.display = "block";
        this.time.sec.style.display = "block";
      }
      if (state === false) {
        Title.style.display = "none";
        this.time.day.style.display = "none";
        this.time.hour.style.display = "none";
        this.time.min.style.display = "none";
        this.time.sec.style.display = "none";
      }
    },
  },
};