// Modal logic
const modalBtns = document.querySelectorAll(".modal-btn");
const modals = document.querySelectorAll(".modal");
const closes = document.querySelectorAll(".close");

modalBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const modal = document.getElementById(btn.dataset.modal);
    if (modal) modal.style.display = "block";
  });
});

closes.forEach(close => {
  close.addEventListener("click", () => {
    close.parentElement.parentElement.style.display = "none";
  });
});

window.addEventListener("click", e => {
  if (e.target.classList.contains("modal")) {
    e.target.style.display = "none";
  }
});
