import counterTimer from "./counterTimer.js";




export function updateCounter(json, name, counts, skeleton) {
    const target = json.games[name];
    // v_rising;

    // document.getElementById("skeleton__countName").style.display = "none";
    document.getElementById("countdown_label").innerHTML += target.title;

    const date = new Date(
      target.year,
      target.month - 1,
      target.day,
      target.hour,
      target.min,
      target.sec
    );
    counterTimer(date, counts.day, counts.hour, counts.min, counts.sec);

    skeleton.count.timeDisplay(false);
  

}
