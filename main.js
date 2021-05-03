canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car1_width = 100
car1_height = 90
car1_x = 10
car1_y = 10
random_number = Math.floor(Math.random() * 3)
background_image = nasa_array[random_number]
car1_image = "http://thewowstyle.com/wp-content/uploads/2015/04/car-06.jpg"

function add() {
    background_tag = new Image();
    background_tag.onload = uploadBackground
    background_tag.src = background_image
    car1_Imgtag = new Image();
   car1_Imgtag.onload = uploadrover
    car1_Imgtag.src = car1_image
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
