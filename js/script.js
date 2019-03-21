let min = 7;
let sec = 55;
let i = 1;
let timer = false;
let start = 0;
let end = 0;
let allTime = [0,0];
const currentTime = document.getElementsByClassName('currentTime')[0];
const table = document.getElementsByTagName('tbody')[0];
const all = document.getElementsByClassName('allTime')[0];

document.getElementById('timeTracking').addEventListener('click', function(e){
  const target = e.target;
  if(target.className == 'btnstart'){
    if(!timer){
      initTimer();
    }
  }
  if(target.className == 'btnstop'){
    if(timer){
      stopTimer();
    }
  }
  if(target.className == 'del'){
    table.removeChild(target.parentNode);
     printAllTime();
  }
  if(target.className == 'title'){
    const result = prompt('Назовите интервал', 'Интервал '+i);
    target.innerHTML = result;
  }
});




function initTimer(){
  start = retTime();
  timer = setInterval(function(){
    sec++;
    currentTime.innerHTML = time();
  }, 1000);
}

function stopTimer(){
  clearInterval(timer);
  timer = false;
  end = retTime();
  table.innerHTML += cell();
  printAllTime();
  dropping();
  currentTime.innerHTML = time();
  i++;
}
function time(){
  if(sec>59){
    sec = 0;
    min++;
  }
  let retsec = sec;
  if(sec< 10) retsec = '0'+sec;
  let retmin = min;
  if(min< 10) retmin = '0'+min;
  return retmin+':'+retsec;
}
function cell(){
  let str = "<tr>";
  str+="<td class='title'>Интервал "+i+"</td>";
  str+="<td class='start'>"+start+"</td>";
  str+="<td class='end'>"+end+"</td>";
  str+="<td class='time'>"+ time()+"</td>";
  str+="<td class='del'>х</td></tr>";
  return str;
}
function retTime(){
  const t = new Date();
  const h = t.getHours()>9?t.getHours():'0'+t.getHours();
  const m = t.getMinutes()>9?t.getMinutes():'0'+t.getMinutes();
  const s = t.getSeconds()>9?t.getSeconds():'0'+t.getSeconds();
  return h+':'+m+':'+s;
}
function dropping(){
  min = 0;
  sec = 0;
}
function printAllTime(){
  allTime = [0,0];
  let allTimeEl = document.getElementsByClassName('time');
  for(let j = 0; j < allTimeEl.length; j++){
    allTime[0] += +allTimeEl[j].innerHTML.split(':')[0];
    if(allTime[1] + +allTimeEl[j].innerHTML.split(':')[1] > 59){
      allTime[0] ++;
      allTime[1] += +allTimeEl[j].innerHTML.split(':')[1];
    }else{
      allTime[1] += +allTimeEl[j].innerHTML.split(':')[1];
    }
  }
  all.innerHTML = allTime[0] + ':'+ allTime[1];
}
