var i = 0;
var txt = "Space: the final frontier. These are the voyages of the starship Enterprise. Its five-year mission: to explore strange new worlds. To seek out new life and new civilizations. To boldly go where no man has gone before!";

var speed = 36;

typeWriter();


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("captainsLogTxt").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else {
    setTimeout(() => {
        document.getElementById("div-captainsLog").style.display = 'none';
        document.getElementById("div-game").style.display = 'block';        
      }, 2500);
    
  }
}

function SkipIntro() {
    document.getElementById("div-captainsLog").style.display = 'none';
    document.getElementById("div-game").style.display = 'block';      
}