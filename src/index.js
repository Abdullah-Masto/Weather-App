import "./css/normalize.css";
import "./css/style.css";
import "./data";
import getWeather from "./data";
import buildDom from "./dom";

const DEFAULT_CITY = "Idlib";
let defaultWeather = getWeather(DEFAULT_CITY);
const msg = document.querySelector(".col #input + .msg");
const ok = document.getElementById("ok");

const inputCity = document.getElementById("city");

buildDom(defaultWeather);

function drawWeather(e) {
  let city = inputCity.value;
  let data = getWeather(city);
  buildDom(data);
  inputCity.value = "";
}

inputCity.addEventListener("keyup", (e) => {
  if (
    e.code === "Enter" ||
    e.code.toLowerCase() === "return" ||
    e.code.toLowerCase() === "next"
  ) {
    drawWeather(e);
  }
  msg.classList.remove("error");
});
inputCity.addEventListener("change", () => {
  msg.classList.remove("error");
});

ok.addEventListener("click", drawWeather);
