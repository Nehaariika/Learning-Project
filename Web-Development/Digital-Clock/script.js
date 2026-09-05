const hours = document.getElementById("hh");
const minutes = document.getElementById("mm");
const seconds = document.getElementById("ss");

const ampm = document.getElementById("ampm");
const date = document.getElementById("date");

const formatBtn = document.getElementById("formatBtn");
const themeBtn = document.getElementById("themeBtn");

let is24Hour = false;

// UPDATE CLOCK

function updateClock() {
  const now = new Date();

  let h = now.getHours();

  const m = now.getMinutes();

  const s = now.getSeconds();

  // AM / PM

  const period = h >= 12 ? "PM" : "AM";

  // 12 hour format

  if (!is24Hour) {
    h = h % 12;

    if (h === 0) {
      h = 12;
    }
  }

  // Display time

  hours.textContent = h.toString().padStart(2, "0");

  minutes.textContent = m.toString().padStart(2, "0");

  seconds.textContent = s.toString().padStart(2, "0");

  // AM / PM

  if (is24Hour) {
    ampm.style.display = "none";
  } else {
    ampm.style.display = "block";

    ampm.textContent = period;
  }

  // DATE

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  date.textContent = now.toLocaleDateString("en-IN", options);
}

// 12 / 24 HOUR BUTTON

formatBtn.addEventListener("click", () => {
  is24Hour = !is24Hour;

  updateClock();
});

// LIGHT / DARK MODE

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "🌙 Dark";
  } else {
    themeBtn.textContent = "☀ Light";
  }
});

// START CLOCK

updateClock();

setInterval(updateClock, 1000);
