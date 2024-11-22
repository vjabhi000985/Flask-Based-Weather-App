window.onload = function () {
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
  
  // Function to get upcoming days
  function getUpcomingDays() {
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const today = new Date();
    const upcomingDays = [];

    for (let i = 1; i <= listItems.length; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      upcomingDays.push(daysOfWeek[nextDay.getDay()]);
    }

    return upcomingDays;
  }

  // Get the upcoming days
  const upcomingDays = getUpcomingDays();

  // Update the list items with the day names
  listItems.forEach((item, index) => {
    // Ensure we're updating the correct span
    item.querySelector('span:not(.day_temp)').innerText = upcomingDays[index];
  });
};
