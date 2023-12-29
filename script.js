const panel = document.getElementById("panel");
const sendBtn = document.getElementById("send");
const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");

let selectedRating = "satisfied";

ratingsContainer.addEventListener("click", (e) => {
  if (e.target.parentNode.classList.contains("rating")) {
    removeActive();
    e.target.parentNode.classList.add("active");
    selectedRating = e.target.nextElementSibling.innerHTML;
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `

     <i class="fas fa-heart"></i>
     <strong>Thank you!</strong>
     </br>
     <strong>Feedback: ${selectedRating}</strong>
     <p>We'll use you feedback to improve our customer support...</p>
    `;
});

function removeActive() {
  for (let i = 0; i < ratings.length; i++) {
    ratings[i].classList.remove("active");
  }
}
