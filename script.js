let inputEl = document.getElementById("input");
const convertBtn = document.querySelector(".btn");
const resetBtn = document.querySelector(".btn-2");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

convertBtn.addEventListener("click", function () {
  let baseValue = inputEl.value;

  lengthEl.textContent = `${baseValue} meter = ${(
    baseValue * meterToFeet
  ).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(
    3
  )} metres`;

  volumeEl.textContent = `${baseValue} litres = ${(
    baseValue * literToGallon
  ).toFixed(3)} galons | ${baseValue} galons = ${(
    baseValue / literToGallon
  ).toFixed(3)} litres`;

  massEl.textContent = `${baseValue} kilos = ${(
    baseValue * kiloToPound
  ).toFixed(3)} pounds | ${baseValue} pounds = ${(
    baseValue / kiloToPound
  ).toFixed(3)} pounds`;
});

resetBtn.addEventListener("click", function () {
  inputEl.value = 0;
  
});
