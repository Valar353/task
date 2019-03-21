import Cell from "./Cell.js";
export default class Timer
{
  constructor(ct, t, a){
    this.min = 0;
    this.sec = 0;
    this.i = 1;
    this.timer = false;
    this.start = 0;
    this.end = 0;
    this.allTime = [0,0];
    this.currentTime = ct;
    this.table = t;
    this.all = a;
  }


  init(){
    this.start = this.retTime();
    this.timer = setInterval(() =>{
      this.sec++;
      this.currentTime.innerHTML = this.printTime();
    }, 1000);
  }
  stopTimer(){
    clearInterval(this.timer);
    this.timer = false;
    this.end = this.retTime();
    this.table.innerHTML += this.cell();
    this.printAllTime();
    this.dropping();
    this.currentTime.innerHTML = this.printTime();
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
    let cell = new Cell(this.i, this.start, this.end, this.printTime());
    return cell.str();
  }
  retTime(){
    const t = new Date();
    const h = t.getHours()>9?t.getHours():'0'+t.getHours();
    const m = t.getMinutes()>9?t.getMinutes():'0'+t.getMinutes();
    const s = t.getSeconds()>9?t.getSeconds():'0'+t.getSeconds();
    return h+':'+m+':'+s;
  }
  removeChild(target){
    this.table.removeChild(target.parentNode);
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
    this.all.innerHTML = this.allTime[0] + ':'+ this.allTime[1];
  }
}
