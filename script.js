"use strict";

const buttons = document.querySelectorAll(".btn-snack");
const total = document.querySelector(".total");

let totalCost = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const getCost = parseInt(btn.dataset.cost);
    total.textContent = `Total: $${(totalCost += getCost)}.00`;
  });
});
