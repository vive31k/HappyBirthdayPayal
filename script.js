// Heart rain effect
for (let i = 0; i < 30; i++) {
  const heart = document.createElement("img");
  heart.src = "heart.png";
  heart.className = "heart";
  heart.style.left = `${Math.random() * 100}vw`;
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
  heart.style.top = `${Math.random() * -100}px`;
  document.getElementById("hearts").appendChild(heart);
}

// Show the cake after 3 seconds
setTimeout(() => {
  document.getElementById("date-screen").classList.add("hidden");
  document.getElementById("cake-screen").classList.remove("hidden");
}, 3000);

// Show gift screen after 20 seconds OR if the user clicks the cake
const cake = document.getElementById("cake");
cake.addEventListener("click", showGift);

setTimeout(showGift, 20000);

function showGift() {
  const giftScreen = document.getElementById("gift-screen");
  if (!giftScreen.classList.contains("hidden")) return;

  document.getElementById("cake-screen").classList.add("hidden");
  giftScreen.classList.remove("hidden");

  const song = document.getElementById("birthdaySong");
  if (song) song.play();
}

// Gift wrap fly-away + reveal photos + hide gift text
function flyAwayGift() {
  const wrap = document.getElementById("giftWrap");
  const text = document.getElementById("giftText");

  // Hide text
  if (text) text.style.display = "none";

  wrap.classList.add("fly-away");

  setTimeout(() => {
    wrap.classList.add("hidden");

    const photos = document.getElementById("photos");
    if (photos) {
      photos.classList.remove("hidden");
      photos.style.opacity = 1;
    }
  }, 2000);
}
