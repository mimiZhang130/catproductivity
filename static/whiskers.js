var cycle = parseInt(cycle)

function addFish() {
  fish = parseInt(fish)
  fish += 10;
  document.getElementById("fish").innerText = fish;
}

function addCycle() {
  console.log(fish + " " + name + " " + hours + " " + cycle)
  cycle++;
  document.getElementById("cycle").innerText = cycle;
  addFish();
}

function setCycle(currcycle){
  cycle = currcycle
  return cycle
}

let counter = 0; // seconds that have passed by
let timeout; // timer
let timer_on = 0; // if timer is on = 1, if timer is off = 0
let work = 1; //if work = 1, person is working. if work = 0, person is not working

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
  rest = 0
  startCount()
  if(counter == 1500 && work ){ // if counter reaches 25 minutes and person was working
    alert("Congrats, take a break!")
    if(cycle % 4 == 0){
      rest = 1800
    }else{
      rest = 300
    }
    addCycle();
    resetCount();
  }else if(counter == rest && !work){ // if counter reaches 5 minutes and person was on break
    alert("Go work :) You got this!");
    resetCount();
  }
}

