var mouse_event="empty";
var last_postion_of_x,last_postion_of_y;

canvas =document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=2;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    mouse_event="mousedown";


}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouse_event="mouseup";
    

}
canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouse_event="mouseleave";
    

}
canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
current_postion_of_x=e.clientX-canvas.offsetLeft;
current_postion_of_y=e.clientY-canvas.offsetTop;

  if(mouse_event=="mousedown")
  {
    console.log("Current position of x and y coordinates = ")
    console.log("x = " + current_postion_of_x + "y = " + current_postion_of_y );
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;
ctx.arc(current_postion_of_x, current_postion_of_y, 10, 0, 2 * Math.PI);
ctx.stroke();



  }

  last_postion_of_x=current_postion_of_x;
  last_postion_of_y=current_postion_of_y;





}