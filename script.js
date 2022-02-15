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
    const coin = document.createElement("div");
    coin.classList.add(coinType, `coin`);
    const coinPara = document.createElement("p");
    coinPara.textContent = coinType;
    divCoinToAttach.append(coin);
    coin.append(coinPara);
    coin.addEventListener("click", () => {
      coin.remove();
    });
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
          lightButtons.forEach((inner_btn) => {
            inner_btn.classList.add("btn-end");
            inner_btn.disabled = true;
          });
          lightBulb.classList.add("color-end");
          switchingLights = false;
          break;
      }
    }
  });
});
