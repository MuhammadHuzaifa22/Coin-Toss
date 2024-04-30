let h1 = document.querySelector('h1');
let hours = document.querySelector('#hours');
let minutes = document.querySelector('#minutes');
let second = document.querySelector('#sec')
let startbtn = document.querySelector('#startbtn')
 let hour = 0;
 let minute  = 0;
 let sec =0;

 let startInterval;
 function startwatch(){
    startbtn.disabled = true;
    startInterval = setInterval(function(){
        sec += 1;
        second.innerHTML = sec;
        if(sec === 60){
            minute += 1;
            minutes.innerHTML = minute;
sec = 0;
        }
        if(minutes === 60){
            hour += 1;
            hours.innerHTML = hour;
            minute = 0;
        }

        if(sec < 10){
            second.innerHTML = '0' + sec;
        }
        if(minute < 10){
            minutes.innerHTML = '0' + minute;
        }
        if(hour < 10){
            hours.innerHTML = '0' + hour;
        }
    },1000)
 }
 function stopwatch(){
    clearInterval(startInterval);
    startbtn.disabled = false;
 }
 function resetwatch(){
     hour = 0;
     minute = 0;
     sec = 0;
hours.innerHTML = hour;
minutes.innerHTML = minute;
second.innerHTML = sec;
startbtn.disabled = false;
clearInterval(startInterval);
 }