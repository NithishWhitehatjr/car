canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100
car1_height = 90
car1_x = 10
car1_y = 10
random_number = Math.floor(Math.random() * 3)
background_image = src= "http://cdn0.vox-cdn.com/assets/4508327/hunterray.gif"
car1_image = "http://thewowstyle.com/wp-content/uploads/2015/04/car-06.jpg"
car2_image = "https://tse1.mm.bing.net/th?id=OIP.lZKukcI2791AqPfyaEwi-wHaEK&pid=Api&P=0&w=304&h=172"

function add() {
    background_tag = new Image();
    background_tag.onload = uploadBackground
    background_tag.src = background_image
    car1_Imgtag = new Image();
   car1_Imgtag.onload = uploadcar1
    car1_Imgtag.src = car1_image
    car2_Imgtag = new Image();
    car2_Imgtag.onload = uploadcar2
     car2_Imgtag.src = car2_image
}

function uploadBackground() {
    ctx.drawImage(background_tag, 0, 0, canvas.width, canvas.height)
}

function uploadcar1() {
    ctx.drawImage(car1_tag, car1_x, car1_y, car1_width, ca1r_height)
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}
function mykeydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '87') {
        w();
        console.log("w");
    }
    if (keyPressed == '83') {
        s();
        console.log("s");
    }
    if (keyPressed == '65') {
        a();
        console.log("a");
    }
    if (keyPressed == '68') {
       d();
        console.log("d");
    }
}
function car1_up()
{

    if (car1_y>=0)
    {
        car1_y  = car1_y - 10
        console.log("When up arrow is pressed, x=" + car1_x+" y=" + car1_y +) ;
    }
}

function car1_down()
{

    if (car1_y<=500)
    {
        car1_y  = car1_y + 10
        console.log("When down arrow is pressed, x=" + car1_x+" y=" + car1_y +) ;

    }
}
function car1_left()
{

    if (car1_x>=0)
    {
        car1_x  = car1_x - 10
        console.log("When left arrow is pressed, x=" + car1_x+" y=" + car1_y +) ;
    }
}
function car1_right)
{

    if (car1_y<=500)
    {
        car1_x = car1_x + 10
        console.log ("When up arrow is pressed, x=" + car1_x+" y=" + car1_y +) ;
    }
}
function car2_up()
{

    if (car2_y>=0)
    {
        car2_y  = car2_y - 10
        console.log("When W arrow is pressed, x=" + car2_x+" y=" + car2_y +) ;
    }
}

function car1_down()
{

    if (car2_y<=500)
    {
        car2_y  = car2_y + 10
        console.log("When D arrow is pressed, x=" + car2_x+" y=" + car2_y +) ;

    }
}
function car2_left()
{

    if (car2_x>=0)
    {
        car2_x  = car2_x - 10
        console.log("When a arrow is pressed, x=" + car2_x+" y=" + car2_y +) ;
    }
}
function car2_right)
{

    if (car2_y<=500)
    {
        car2_x = car2_x + 10
        console.log ("When up arrow is pressed, x=" + car2_x+" y=" + car2_y +) ;
    }
}
if (car1_x > 700)
console.log("car1 won")
document.getElementById('Game_Status').innerhtml = "Car 1 Won!!!!!"
if (car2_x > 700)
console.log("car2 won")
document.getElementById('Game_Status').innerhtml = "Car 2 Won!!!!!"