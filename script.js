const panel = document.getElementById("panel");
const sendBtn = document.getElementById("send");
const ratings = document.querySelectorAll(".rating");

panel.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
  }
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
