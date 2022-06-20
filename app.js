const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// declaring variables

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4")
const futureDate = new Date(2025,0,22,21,26,0) //(yyyy-mm--dd hh-mm-ss)

const year = futureDate.getFullYear();

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let date = futureDate.getDate();

giveaway.textContent = `Giveaway Ends on ${date} ${month} ${year} ${hours}:${minutes}am ` ;
console.log(date)

