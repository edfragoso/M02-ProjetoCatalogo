

const h2 = document.querySelector("#msgText");
const modal = document.querySelector("#modal-container");
const cancelar = document.querySelector("#close");
const confirm = document.querySelector("#confirm");


apagar.addEventListener("click", () => {
  modal.style.display = "flex";
  h2.style.color = "#fff";
  h2.style.fontSize = "3rem";
  h2.textContent = "Deseja realmente apagar?";
});

cancelar.addEventListener("click", () => {
  modal.style.display = "none";
});

