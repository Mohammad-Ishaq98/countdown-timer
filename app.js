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
const futureDate = new Date(2025,5,28,21,26,0) //(yyyy-mm--dd hh-mm-ss)
//console.log(futureDate.getTime())
const year = futureDate.getFullYear();

const hours = futureDate.getHours();

const minutes = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

let date = futureDate.getDate();

const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `Giveaway Ends on ${weekday} ${date} ${month} ${year} ${hours}:${minutes}am ` ;


// future time in ms

const futureTime = futureDate.getTime()

console.log("future value",futureTime)

function getRemainingTime (){
  const today = new Date().getTime()
  console.log("today value",today)

  const t = futureTime - today;
  console.log("minus value",t)

  const oneYear = 365 * 24 * 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 *1000;
  const oneHour =  60 * 60 *1000;
  const oneMinute =  60 *1000;


  // year
  let years = Math.floor(t / oneYear );
  
  console.log("one year", years)

  // oneday
  let days = Math.floor((t % oneYear)/ oneDay);
  
  console.log('one day', days)

  // one hour
  let hours = Math.floor((t % oneDay) / oneHour)

  console.log('hours',hours)

  // one minute
  let minutes = Math.floor((t % oneHour) / oneMinute);

  console.log('minute', minutes)

  // one second
  let seconds = Math.floor((t % oneMinute) / 1000);

  console.log('seconds', seconds)
  


  const values = [years ,days, hours , minutes, seconds];

  // format for 1 digit number adding '0'
  function format(item){
    if(items < 10){
    return 
      (item = `0 ${item}`)
      
    }
      return item
  }

  items.forEach((item, index) =>{
    item.innerHTML = format(values[index])
  })

  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry the giveaway is expired</h4>`
    
  }
}

let countdown = setInterval(getRemainingTime,1000);

getRemainingTime()

