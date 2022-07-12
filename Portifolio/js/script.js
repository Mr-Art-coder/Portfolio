
function newday() {
    var daylight = new Date();
    var thenewday = daylight.getDay();
    var days = new Array(7);
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    var showcase = document.getElementById("demo");
    showcase.innerHTML = days[thenewday];
}


function bringdate() {
    var dayshow = new Date();
    var thedate = dayshow.getDate();
    var themonth = dayshow.getMonth();
    var theyear = dayshow.getFullYear();
    themonth++;
    if (themonth < 10) {
        themonth = "0" + themonth;
    }
    var daytime = document.getElementById("datetime");
    daytime.innerHTML = thedate + "/" + themonth + "/" + theyear;
}
bringdate();

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh === 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
     if (mm<10) {
        mm="0"+mm;
     }
     if (ss<10) {
        ss="0"+ss;
     }
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
   let showtime= document.getElementById("clock");
   showtime.innerText = time; 
    let t = setTimeout("currentTime()", 1000);

  }
  
  currentTime();

