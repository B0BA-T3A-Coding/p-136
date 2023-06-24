video = "";
canvas="";
objects=[];
status="";
objectName="";

//actual code

function setup(){
    video = createCapture(VIDEO);
    video.hide();
    canvas = createCanvas(400,300)
    canvas.center();
}

function draw(){
    image(video, 0, 0, 400, 300);
    objectName=document.getElementById("objectNameInput").value;
    console.log(objectName);
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object(s)"
}



function modelLoaded(){
    console.log("model loaded!");
    status=true;
}