status="";
IN="";

function setup(){
    canvas= createCanvas(480,380);
    canvas.center();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status= detecting objects"

}
function modelLoaded(){
    console.log("ModelLoaded!")
    status=true;
}
function draw(){
   
}