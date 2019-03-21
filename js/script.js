import Timer from './module/Timer.js';

const currentTime = document.getElementsByClassName('currentTime')[0];
const table = document.getElementsByTagName('tbody')[0];
const all = document.getElementsByClassName('allTime')[0];


let objTimer = new Timer(currentTime,table, all);

document.getElementById('timeTracking').addEventListener('click', function(e){
  const target = e.target;
  if(target.className == 'btnstart'){
    if(!objTimer.timer){
      objTimer.init();
    }
  }
  if(target.className == 'btnstop'){
    if(objTimer.timer){
      objTimer.stopTimer();
    }
  }
  if(target.className == 'del'){
    objTimer.removeChild(target);
    objTimer.printAllTime();
  }
  if(target.className == 'title'){
    const result = prompt('Назовите интервал', 'Интервал '+objTimer.i);
    target.innerHTML = result;
  }
});
