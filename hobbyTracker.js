// An array of objects storing information about different hobby sessions
const hobbyLog = [
  { day: "Monday", hobby: "drawing", minutes: 30, mood: "focused" },
  { day: "Tuesday", hobby: "reading", minutes: 20, mood: "relaxed" },
  { day: "Wednesday", hobby: "gaming", minutes: 45, mood: "excited" },
  { day: "Thursday", hobby: "drawing", minutes: 25, mood: "creative" },
  { day: "Friday", hobby: "reading", minutes: 35, mood: "calm" }
];

// This function calculates the total amount of time spent on hobbies
function totalTime(log) {
  // reduce() goes through each session and adds the minutes together
  // sum starts at 0 and increases by each session's minutes value
  return log.reduce((sum, session) => sum + session.minutes, 0);
}

// This function creates a list of unique hobby names
function uniqueHobbies(log) {
  // map() creates a new array containing only the hobby names
  const names = log.map(entry => entry.hobby);

  // Set removes duplicate hobby names, and spread (...) converts it back into an array
  return [...new Set(names)];
}

// This function finds hobby sessions longer than a given number of minutes
function longSessions(log, minMinutes) {
  // filter() returns a new array containing only sessions that match the condition
  return log.filter(entry => entry.minutes > minMinutes);
}

// This function counts how many times a specific mood appears
function countMood(log, moodType) {
  // filter() keeps only entries where the mood matches the given moodType
  // .length counts how many matching entries were found
  return log.filter(entry => entry.mood === moodType).length;
}


// Displays the total hobby time
console.log("Total time spent:", totalTime(hobbyLog), "minutes");

// Displays all unique hobbies from the log
console.log("Unique hobbies:", uniqueHobbies(hobbyLog));

// Displays sessions longer than 30 minutes
console.log("Sessions longer than 30 min:", longSessions(hobbyLog, 30));

// Displays how many relaxed sessions exist
console.log("Number of relaxed sessions:", countMood(hobbyLog, "relaxed"));


// New test: Finds how many focused sessions exist
console.log("Focused sessions:", countMood(hobbyLog, "focused"));


// Improvement suggestion:
