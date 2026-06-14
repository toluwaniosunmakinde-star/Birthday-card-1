function startExperience() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("main").classList.remove("hidden");

  revealMessages();
  startCountdown();
}

// fade-in messages
function revealMessages() {
  let items = document.querySelectorAll(".reveal");

  items.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");
    }, i * 1500);
  });
}

// countdown
function startCountdown() {
  let timer = document.getElementById("timer");
  let count = 3;

  let interval = setInterval(() => {
    count--;
    if (count > 0) {
      timer.textContent = count;
    } else {
      timer.textContent = "🎉";
      clearInterval(interval);
    }
  }, 1000);
}