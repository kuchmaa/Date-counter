export const Buttons = {
  theme: {
    light: document.getElementById("theme-l"),
    dark: document.getElementById("theme-d"),
  },
  dropDowns: {
    counters: document.getElementById("counts-btn"),
  }
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
    display: function (state) {
      if (state === true) {
        skeletonTitle.style.display = "block";
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
        skeletonTitle.className = "skeleton__anim";
        this.time.day.className = "skeleton__anim";
        this.time.hour.className = "skeleton__anim";
        this.time.min.className = "skeleton__anim";
        this.time.sec.className = "skeleton__anim";
      }
      
    }
  },
};