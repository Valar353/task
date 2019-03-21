export default class Cell
{
  constructor(i, start, end, time){
    this.iter = i;
    this.start = start;
    this.end = end;
    this.time = time;
  }
  str(){
    let str = "<tr>";
    str+="<td class='title'>Интервал "+this.iter+"</td>";
    str+="<td class='start'>"+this.start+"</td>";
    str+="<td class='end'>"+this.end+"</td>";
    str+="<td class='time'>"+ this.time+"</td>";
    str+="<td class='del'>х</td></tr>";
    return str;
  }
}
