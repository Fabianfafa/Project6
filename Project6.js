var ball = 250;
document.addEventListener("keydown", function(e) {
  if(e.keycode == 37){
    ballX -=15;
  document.getElementsById("ball").setAttribute("x" , ballX)

  }
  else if(e.keycode == 39){
        ballX +=15;
        document.getElementBYId("ball")
  }
}
