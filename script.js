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

const buttonMoney = document.querySelector(".two button");
const divCoinToAttach = document.querySelector(".coin-container");
const removeCoins = [];

buttonMoney.addEventListener("click", (e) => {
  e.preventDefault();
  const amount = document.querySelector("#amount").value;
  const coinType = document.querySelector("#coin").value;
  for (let i = 0; i < amount; i++) {
    let coin = document.createElement("div");
    coin.classList.add(coinType, `coin`);
    let coinPara = document.createElement("p");
    coinPara.textContent = coinType;
    divCoinToAttach.append(coin);
    coin.append(coinPara);
    removeCoins.push(document.querySelector(".coin"));
  }
});

removeCoins.forEach((coin) => {
  coin.addEventListener("click", () => {
    console.log("delete");
    coin.remove();
  });
});

const lightButtons = document.querySelectorAll(".light-btn");
const lightBulb = document.querySelector(".light-bulb");
let switchingLights = true;

lightButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (switchingLights) {
      const lightBulbMode = btn.dataset.mode;
      switch (lightBulbMode) {
        case "on":
          lightBulb.classList.add("color-on");
          break;
        case "off":
          lightBulb.classList.remove("color-on");
          break;
        case "toggle":
          lightBulb.classList.toggle("color-on");
          break;
        case "end":
          lightButtons.forEach((btn) => btn.classList.add("btn-end"));
          lightBulb.classList.add("color-end");
          switchingLights = false;
          break;
      }
    }
  });
});
