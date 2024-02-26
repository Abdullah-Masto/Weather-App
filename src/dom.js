const msg = document.querySelector(".col #city + .msg");
const image = document.getElementById("stateImg");
const location = document.querySelector("#location .info");
const state = document.querySelector("#state .info");
const temp_c = document.querySelector("#temp h1");
const feelslike_c = document.querySelector("#temp .info");
const humidity = document.querySelector("#humidity .info");

async function buildDom(data) {
  let extractedData = await data;
  if (extractedData.state == 0) {
    let weather = extractedData.weather;
    //
    image.src = weather.icon;
    location.textContent = weather.location;
    state.textContent = weather.text;
    temp_c.textContent = weather.temp_c;
    feelslike_c.textContent = weather.feelslike_c;
    humidity.textContent = weather.humidity;
  } else {
    msg.classList.add("error");
  }
}

export default buildDom;
