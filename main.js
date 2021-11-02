var XposNose = 0;
var YposNose = 0;
var XposLEar = 0;
var YposLEar = 0;

function preload(){
    hat = loadImage("https://i.postimg.cc/ncBVY70G/cap.png");
    mustache = loadImage("https://i.postimg.cc/FKRQqJgq/mustache.png");
}

function setup(){
    canvas = createCanvas(400,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(400,400);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded());
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,400,300);
    image(mustache,XposNose-24,YposNose-65,50,30)
    image(hat,XposLEar-75,YposLEar-155,125,75)
}

function takeSnapshot(){
    save("myFilterImage.png");
}

function modelLoaded(){
    console.log("model is loaded")
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("x="+results[0].pose.nose.x);
        console.log("y="+results[0].pose.nose.y);
        console.log("var_time");
        XposNose = results[0].pose.nose.x;
        YposNose = results[0].pose.nose.y;
        XposLEar = results[0].pose.nose.x;
        YposLEar = results[0].pose.nose.y;
    }
}