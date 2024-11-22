function updateCurrentTime() {
  const timeElement = document.querySelector(".default_time");
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const formattedTime = `${(hours % 12) || 12}:${minutes < 10 ? '0' + minutes : minutes} ${ampm}`;
  
  timeElement.textContent = formattedTime;
}

// Update time every minute
setInterval(updateCurrentTime, 60000);
updateCurrentTime();  // Initial call to set the time immediately