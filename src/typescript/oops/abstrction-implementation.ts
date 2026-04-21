// Get the current date and time
const now = new Date();

// Display current year, month and day
const currentYear = now.getFullYear();
const currentMonth = now.getMonth() + 1; // Months are zero-based, so we add 1
const currentDay = now.getDate();

console.log(`Current Year: ${currentYear}`);
console.log(`Current Month: ${currentMonth}`);
console.log(`Current Day: ${currentDay}`);
