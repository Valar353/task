// let min = 0;
// let this.sec = 0;
// let i = 1;
// let timer = false;
// let start = 0;
// let end = 0;
// let allTime = [0,0];
const currentTime = document.getElementsByClassName('currentTime')[0];
const table = document.getElementsByTagName('tbody')[0];
const all = document.getElementsByClassName('allTime')[0];
class Timer
{
  constructor(){
    this.min = 0;
    this.sec = 0;
    this.i = 1;
    this.timer = false;
    this.start = 0;
    this.end = 0;
    this.allTime = [0,0];

  }


  initTimer(){
    this.start = this.retTime();
    this.timer = setInterval(() =>{
      this.sec++;
      currentTime.innerHTML = this.printTime();
    }, 1000);
  }
  stopTimer(){
    clearInterval(this.timer);
    this.timer = false;
    this.end = this.retTime();
    table.innerHTML += this.cell();
    this.printAllTime();
    this.dropping();
    currentTime.innerHTML = this.printTime();
    this.i++;
  }
  printTime(){
    if(this.sec>59){
      this.sec = 0;
      this.min++;
    }
    let retsec = this.sec;
    if(this.sec< 10) retsec = '0'+this.sec;
    let retmin = this.min;
    if(this.min< 10) retmin = '0'+this.min;
    return retmin+':'+retsec;
  }
  cell(){
    let str = "<tr>";
    str+="<td class='title'>Интервал "+this.i+"</td>";
    str+="<td class='start'>"+this.start+"</td>";
    str+="<td class='end'>"+this.end+"</td>";
    str+="<td class='time'>"+ this.printTime()+"</td>";
    str+="<td class='del'>х</td></tr>";
    return str;
  }
  retTime(){
    const t = new Date();
    const h = t.getHours()>9?t.getHours():'0'+t.getHours();
    const m = t.getMinutes()>9?t.getMinutes():'0'+t.getMinutes();
    const s = t.getSeconds()>9?t.getSeconds():'0'+t.getSeconds();
    return h+':'+m+':'+s;
  }
  dropping(){
    this.min = 0;
    this.sec = 0;
  }
  printAllTime(){
    this.allTime = [0,0];
    let allTimeEl = document.getElementsByClassName('time');
    for(let j = 0; j < allTimeEl.length; j++){
      this.allTime[0] += +allTimeEl[j].innerHTML.split(':')[0];
      if(this.allTime[1] + +allTimeEl[j].innerHTML.split(':')[1] > 59){
        this.allTime[0] ++;
        this.allTime[1] += +allTimeEl[j].innerHTML.split(':')[1];
      }else{
        this.allTime[1] += +allTimeEl[j].innerHTML.split(':')[1];
      }
    }
    all.innerHTML = this.allTime[0] + ':'+ this.allTime[1];
  }
}

let objTimer = new Timer();

document.getElementById('timeTracking').addEventListener('click', function(e){
  const target = e.target;
  if(target.className == 'btnstart'){
    if(!objTimer.timer){
      objTimer.initTimer();
    }
  }
  if(target.className == 'btnstop'){
    if(objTimer.timer){
      objTimer.stopTimer();
    }
  }
  if(target.className == 'del'){
    table.removeChild(target.parentNode);
     objTimer.printAllTime();
  }
  if(target.className == 'title'){
    const result = prompt('Назовите интервал', 'Интервал '+objTimer.i);
    target.innerHTML = result;
  }
});



//
// function initTimer(){
//   start = retTime();
//   timer = setInterval(function(){
//     this.sec++;
//     currentTime.innerHTML = time();
//   }, 1000);
// }
//
// function stopTimer(){
//   clearInterval(timer);
//   timer = false;
//   end = retTime();
//   table.innerHTML += cell();
//   printAllTime();
//   dropping();
//   currentTime.innerHTML = time();
//   i++;
// }
// function time(){
//   if(this.sec>59){
//     this.sec = 0;
//     min++;
//   }
//   let retthis.sec = this.sec;
//   if(this.sec< 10) retthis.sec = '0'+this.sec;
//   let retmin = min;
//   if(min< 10) retmin = '0'+min;
//   return retmin+':'+retthis.sec;
// }
// function cell(){
//   let str = "<tr>";
//   str+="<td class='title'>Интервал "+i+"</td>";
//   str+="<td class='start'>"+start+"</td>";
//   str+="<td class='end'>"+end+"</td>";
//   str+="<td class='time'>"+ time()+"</td>";
//   str+="<td class='del'>х</td></tr>";
//   return str;
// }
// function retTime(){
//   const t = new Date();
//   const h = t.getHours()>9?t.getHours():'0'+t.getHours();
//   const m = t.getMinutes()>9?t.getMinutes():'0'+t.getMinutes();
//   const s = t.getthis.seconds()>9?t.getthis.seconds():'0'+t.getthis.seconds();
//   return h+':'+m+':'+s;
// }
// function dropping(){
//   min = 0;
//   this.sec = 0;
// }
// function printAllTime(){
//   allTime = [0,0];
//   let allTimeEl = document.getElementsByClassName('time');
//   for(let j = 0; j < allTimeEl.length; j++){
//     allTime[0] += +allTimeEl[j].innerHTML.split(':')[0];
//     if(allTime[1] + +allTimeEl[j].innerHTML.split(':')[1] > 59){
//       allTime[0] ++;
//       allTime[1] += +allTimeEl[j].innerHTML.split(':')[1];
//     }else{
//       allTime[1] += +allTimeEl[j].innerHTML.split(':')[1];
//     }
//   }
//   all.innerHTML = allTime[0] + ':'+ allTime[1];
// }
