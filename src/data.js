const key = "a8e8d684c53e49db82d113722242502";

async function getWeather(city) {
  try {
    let response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`
    );
    let data = await response.json();
    let weather = {
      location: `${data.location.name}, ${data.location.country}`,
      text: data.current.condition.text,
      icon: data.current.condition.icon,
      feelslike_c: data.current.feelslike_c,
      temp_c: data.current.temp_c,
      humidity: data.current.humidity,
    };
    return {
      state: 0,
      weather: weather,
    };
  } catch (error) {
    return {
      state: 1,
      weather: {},
    };
  }
}

export default getWeather;
