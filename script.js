document.addEventListener("DOMContentLoaded", () => {
  // Function to update the current time in UTC
  function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    document.getElementById("currentTimeUTC").textContent = utcTime;
  }

  // Function to update the current day
  function updateDay() {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const now = new Date();
    const day = days[now.getUTCDay()];
    document.getElementById("currentDay").textContent = day;
  }

  // Initial call to update time and day
  updateTime();
  updateDay();

  // Update time every second
  setInterval(updateTime, 1000);
});
