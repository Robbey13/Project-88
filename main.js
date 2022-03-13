
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
golf_ball_width=100 ;
golf_ball_height=100;
golf_ball_y=10;
golf_ball_x=10;
golf_hole_y=400;
golf_hole_x=800;
background_image="green-grass-cartoon-kids-style-background-vector-4688651.jpg";
golf_ball_image="download-removebg-preview.png";
golf_hole_image="image-remove-bg-preview.png"

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src = background_image;
    
    golf_ball_imgTag = new Image();
    golf_ball_imgTag.onload = uploadgolf_ball;
    golf_ball_imgTag.src = golf_ball_image;
    
    
}


function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0, canvas.width, canvas.height);
}
function uploadgolf_ball() {
    ctx.drawImage(golf_ball_imgTag, golf_ball_x, golf_ball_y, golf_ball_width, golf_ball_height);
}   
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
     if(keyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(keyPressed == '40')
        {
            down();
            console.log("down");    
        }
  if(keyPressed == '37')   
{
    left();
    console.log("left");
}
if(keyPressed == '39')
{
    right();
    console.log("right")
}
}
function up()
{
    if(golf_ball_y >=0)
    {
        golf_ball_y = golf_ball_y - 10;
        console.log("When up arrow is pressed, x = " + golf_ball_x + " | y = "+golf_ball_y);
        uploadbackground();
        uploadgolf_ball();
    }
    
}
function down()
{
    if(golf_ball_y <=500)
        {
            golf_ball_y =golf_ball_y+ 10;
            console.log("When down arrow is pressed, x = " + golf_ball_x + " | y ="+golf_ball_y);
            uploadbackground();
            uploadgolf_ball();
        }
}
function left()
{
    if(golf_ball_x >=0)
    {
        golf_ball_x =golf_ball_x - 10;
        console.log("When left arrow is pressed, x = " + golf_ball_x + "| y =" +golf_ball_y);
        uploadbackground();
        uploadgolf_ball();
    }
}
function right()
{
    if(golf_ball_x <=700)
        {
            golf_ball_x =golf_ball_x + 10;
            console.log("When right arrow is pressed, x =" + golf_ball_x + "| y =" +golf_ball_y);
            uploadbackground();
            uploadgolf_ball();
        }
}

