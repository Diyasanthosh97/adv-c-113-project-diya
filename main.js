function preload(){
}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(300,300);
    video=createCapture(VIDEO);
    video.hide();
    filter="";
}
function draw(){
    image(video,-49,49,620,440);
    tint(filter);
    fill(0,0,200);
    stroke(0,0,200);
    circle(37,37,70);
    line(37,67)
    circle(607,37,70);
    circle(37,427,70);
    circle(607,427,70);
}
function take_snapshot(){
    save("filter pic.png");
}
function applytint(){
    filter=document.getElementById("color").value;
}