import "./css/normalize.css";
import "./css/style.css";
import "./data";
import getWeather from "./data";
import buildDom from "./dom";

const DEFAULT_CITY = "Idlib";
let defaultWeather = getWeather(DEFAULT_CITY);
const msg = document.querySelector(".col #city + .msg");

const inputCity = document.getElementById("city");

buildDom(defaultWeather);

inputCity.addEventListener("keyup", (e) => {
  if (
    e.code === "Enter" ||
    e.code.toLowerCase() === "return" ||
    e.code.toLowerCase() === "next"
  ) {
    let city = inputCity.value;
    let data = getWeather(city);
    buildDom(data);
    inputCity.value = "";
  }
  msg.classList.remove("error");
});
