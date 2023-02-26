
let counter = 0; // seconds that have passed by
let timeout; // timer
let timer_on = 0; // if timer is on = 1, if timer is off = 0
let work = 1; //if work = 1, person is working. if work = 0, person is not working
var cycle = parseInt(cycle); // the cycle we are currently on
let rest;


function addFish() {
  fish = parseInt(fish)
  if (rest == 3){
    fish += 10;
  }else if(rest == 18){
    fish += 50;
  }
  document.getElementById("fish").innerText = fish;
}

// adds a cycle each time a work period is finished
function addCycle() {
  cycle++;
  document.getElementById("cycle").innerText = cycle;
  document.getElementById("hours").innerText = cycle/2;
}

// every second, this increments counter by 1
function timedCount() {
  document.getElementById("timer").innerHTML = formatCounter();
  counter++;
  timeout = setTimeout(timedCount, 1000);
  sendAlert()
}


// starts the timer
function startCount() {
  if (!timer_on) {
    timer_on = 1;
    timedCount();
  }
}

//stops the timer
function stopCount() {
  clearTimeout(timeout);
  timer_on = 0;
}

//resets the timer
function reset(){
  timer_on = 0;
  counter = 0;
  document.getElementById("timer").innerHTML = formatCounter();
}

//formats the Counter into hours, minutes, and seconds
function formatCounter(){
  hours = Math.floor(counter / 3600);
  minutes = Math.floor((counter - 3600*  hours) / 60);
  seconds = counter-3600 * hours- 60 * minutes;
  return hours + ":" + minutes + ":" + seconds
}

//sends alerts when done
function sendAlert(){
  console.log(counter)
  if(counter == 15 && work ){ // if counter reaches 25 minutes and person was working 
    alert("Congrats, take a break!")
    if(cycle % 4 == 0){ // if the user has done 4 cycles of 25-5, they get a half an hour long break
      rest = 18
      console.log(18)
    }else{ // the usual break of 5 mins
      rest = 3
      console.log(3)
    } 
    addCycle();
    reset();
    work = 0
  }else if(counter == rest && !work){ // if counter reaches rest time and person was on break
    alert("Go work :) You got this!");
    reset();
    work = 1
    addFish();
  }
}

