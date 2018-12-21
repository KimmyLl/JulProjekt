//Countdown
var countDownDate = new Date("Dec 24, 2018 00:00:00").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var time = countDownDate - now;

    var days = Math.floor(time / (1000 * 60 * 60 * 24));
    var hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    if (time < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "CLICK THE PRESENT";
    }
}, 1000);

//Från present till jultomten
function changeImage(){
  var image = document.getElementById('images');
  image.src = "santa.gif";
}

//Menyn
function openNav() {
  document.getElementById("sideNavScript").style.width = "250px";
  document.getElementById("sideNavIcon").style.marginLeft = "250px";
  //Byter till grå bakgrund
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("sideNavScript").style.width = "0";
  document.getElementById("sideNavIcon").style.marginLeft= "0";
  //Byter tillbaka till röd bakgrund
  document.body.style.backgroundColor = "#ce0f29";
}
