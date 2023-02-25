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

function work(time) {
  setTimeout(setAlert, time);
}
function rest(time){
  setTimeout(setAlert, time);
  setRestAlert();
}

function setCycle(currcycle){
  cycle = currcycle
  return cycle
}
function setAlert() {
  alert("Congrats!");
  addCycle();
  if (cycle % 4 == 0){
    rest(1000);
  }else{
    rest(2000);
  }
}
function setRestAlert(){
  alert("Keep Working!")
  addCycle();
  work()
}
function stop(){
  //TO DO
}
