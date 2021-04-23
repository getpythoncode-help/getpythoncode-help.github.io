function openNav() {
  document.getElementById("appnavbar").style.width = "296px";
  document.body.style.backgroundColor = "#c8c8c8";
}

function closeNav() {
  document.getElementById("appnavbar").style.width = "0";
  document.body.style.backgroundColor = "#fff";
}

var i = 0;
var txt = 'Get Python Code';
var speed = 130;

function text(){
  if(i < txt.length){
  document.getElementById("typing")
  .innerHTML += txt.charAt(i);
  i++;
  setTimeout(text, speed)
}
}

console.log("localhost:8888");