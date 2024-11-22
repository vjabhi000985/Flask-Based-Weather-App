// Function to determine temperature description
function getTemperatureDescription(temperature) {
  if (temperature >= 0 && temperature <= 10) {
      return "Very Cold";
  } else if (temperature > 10 && temperature <= 20) {
      return "Cold";
  } else if (temperature > 20 && temperature <= 30) {
      return "Moderate";
  } else if (temperature > 30 && temperature <= 40) {
      return "Warm";
  } else if (temperature > 40 && temperature <= 50) {
      return "Very Hot";
  }
  return "Out of Range";
}

// Function to update weather description based on temperature
function updateWeatherDescription() {
  // Extract temperature from weather_temp element
  const tempElement = document.querySelector(".weather_temp");
  const tempText = tempElement.textContent; // Example: "22°C"

  // Remove "°C" and parse the number
  const temperature = parseFloat(tempText.replace("°C", "").trim());

  // Get the temperature description
  const description = getTemperatureDescription(temperature);

  // Update the cloudtxt element with the description
  const cloudTextElement = document.querySelector(".cloudtxt");
  cloudTextElement.textContent = description;
}

// Call the function to update the description
updateWeatherDescription();