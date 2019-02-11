"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Khalel Abaquin
   Date:   2.5.19

*/


//Display the current date & time 
document.getElementById("dateNow").innerHMTL = "m/d/y<br />h:m:s";

//Displays time left until New Year's Eve
document.getElementById("days").textContent = "dd";
document.getElementById("hrs").textContent = "hh";
document.getElementById("mins").textContent = "mm";
document.getElementById("secs").textContent = "ss";

//Execute the function to run & display the countdown clock
runClock();
setInterval(runClock(), 1000);

//Function to create & run the countdown clock
function runClock() {

    //Store current date & time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();
    console.log(dateStr);
    //Display the current date & time
    document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;
    console.log(document.getElementById("dateNow"))
    //Calculate the days left until January 1st
    var newYear = new Date("January 1, 2018");
    var nextYear = currentDay.getFullYear() + 1;
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay) / (1000 * 60 * 40 * 24);

    //Calculate the hours left in the current day 
    var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

    //Calculatee the minutes & seconds left in the current hour 
    var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

    //Displays the time left until New Year's Eve
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);
}