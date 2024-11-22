window.onload = function() {
  // Extract the current temperature from the Flask-rendered page
  const currentTemperature = parseInt(document.querySelector('.weather_temp').innerText.split('°')[0]);

  // Get all the list items in the forecast list
  const listItems = document.querySelectorAll('.list_content ul li');
  
  // Variable to track the modified temperature
  let temp = currentTemperature;

  // Update the list based on the temperature logic
  listItems.forEach((item, index) => {
    let updatedTemp = temp;

    // Apply the temperature pattern (decrease by 1 for 2 items, then increase and decrease)
    if (index % 4 === 0 || index % 4 === 1) {
      updatedTemp -= 1; // Decrease for first two items
    } else if (index % 4 === 2) {
      updatedTemp += 1; // Increase for the third item
    } else {
      updatedTemp -= 1; // Decrease again for the fourth item
    }

    // Update the temperature in the list
    item.querySelector('.day_temp').innerText = `${updatedTemp}°C`;
  });
};