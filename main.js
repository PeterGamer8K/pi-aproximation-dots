const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

ctx.translate(canvas.width/2, canvas.height/2);
canvas.style.backgroundColor = "black";

const radius = canvas.width/2;

drawCircle(0,0,radius, 2, "white")


window.requestAnimationFrame(loop);

const max = canvas.width/2;
const min = 0-canvas.width/2;
let color;
let circleCount = 0;
let totalCount = 0;

function loop() {

    let pi;

    for (let i = 0; i < 10000; i++) {
        const x = Math.random() * (max - min) + min;
        const y = Math.random() * (max - min) + min;

        const distance = x * x + y * y;

        if (distance <= radius*radius) {
            //dot is inside the circle
            color = "green";
            circleCount++;
        } else {
            color = "blue";
        }

        totalCount++;

        pi = 4 * (circleCount/totalCount);

        

        drawDot(x,y,color);
        
        
        
    }
    
    console.log(pi.toFixed(55));
    

    window.requestAnimationFrame(loop);
}




function generateRamdomPoint () {
    const point  = [];

    point[0] = Math.floor(Math.random()*canvas.width);
    point[1] = Math.floor(Math.random()*canvas.height);

    return point;
}

function drawDot (x,y, color) {
    drawCircle(x, y, 1, 1, color);
}

function drawRectangle(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
   
}  

function drawCircle (x,y,radius, lineWidth, color) {
    
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.stroke();
}

