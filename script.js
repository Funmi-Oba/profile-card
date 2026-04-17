// ================================
// GRAB ELEMENTS
// ================================
const timeElement = document.querySelector('[data-testid="test-user-time"]');


// ================================
// EPOCH TIME
// Date.now() returns current time
// in milliseconds since Jan 1 1970.
// We update it every second.
// ================================
const updateTime = () => {
  const now = Date.now();
  timeElement.textContent = now;
  timeElement.setAttribute("datetime", new Date(now).toISOString());
};


// ================================
// INITIALISE
// Run once immediately so there's
// no delay on page load, then
// repeat every second.
// ================================
updateTime();
setInterval(updateTime, 1000); // 1000ms = 1 second