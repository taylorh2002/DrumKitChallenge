const boom = new Audio("assets/boom.wav");
const clap = new Audio("assets/clap.wav");
const hiHat = new Audio("assets/hihat.wav");
const kick = new Audio("assets/kick.wav");
const openHat = new Audio("assets/openhat.wav");
const ride = new Audio("assets/ride.wav");
const snare = new Audio("assets/snare.wav");
const tink = new Audio("assets/tink.wav");
const tom = new Audio("assets/tom.wav");

let output = document.getElementById("output");


window.addEventListener('keydown', function(key)
{
  switch(key.keyCode) {
    case 65:
      boom.play();
      output.innerHTML = "BOOM";
      break;
    case 83:
      clap.play();
      output.innerHTML = "CLAP";
      break;
    case 68:
      hiHat.play();
      output.innerHTML = "HITHAT";
      break;
    case 70:
      kick.play();
      output.innerHTML = "KICK";
      break;
    case 71:
      openHat.play();
      output.innerHTML = "OPENHAT";
      break;
    case 72:
      ride.play();
      output.innerHTML = "RIDE";
      break;
    case 74:
      snare.play();
      output.innerHTML = "SNARE";
      break;
    case 75:
      tink.play();
      output.innerHTML = "TINK";
      break;
    case 76:
      tom.play();
      output.innerHTML = "TOM";
      break;
    default:
      console.log("Wrong input")  
  }
});