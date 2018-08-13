const secs = document.querySelector('.second-hand');
const mins = document.querySelector('.min-hand');
const hrs = document.querySelector('.hour-hand');
const bg = document.querySelector('html');

// use date to know the real time
const setDate = function() {
  const now = new Date();
  console.log(now);
  
  const seconds = ('0' + now.getSeconds()).slice(-2);
  console.log(seconds);

  const minutes = ('0' + now.getMinutes()).slice(-2);
  console.log(minutes);

  const hours = ('0' + now.getHours()).slice(-2);
  console.log(hours);

  const clr1 = `rgb(${seconds}, ${hours}, ${minutes})`
  const clr2 = `rgb(${hours}, ${minutes}, ${seconds})`
  
// rotate the hands according to the time
secs.style.transform = `rotate(${90+seconds*6}deg)`;
mins.style.transform = `rotate(${90+minutes*6}deg)`;
hrs.style.transform = `rotate(${90+hours*30}deg)`;
}

setInterval(setDate, 1000);
// button to change the background colour
function myFunction(){   
    var colors = ["green", "black", "yellow", "grey", "white", "pink", "blue", "purple", "orange"],
    selectedColor = colors[Math.floor(Math.random()*colors.length)]
    $("body").css("background-color", selectedColor);
}