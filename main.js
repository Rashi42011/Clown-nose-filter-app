
nosex=0
nosey=0
function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function take_snapshot(){
 save ('filter_image.png')
}
function preload(){
    clown_nose =loadImage("https://i.postimg.cc/VvTw7V03/580b57fbd9996e24bc43bed5.png")
}

function modelLoaded(){
    console.log('PoseNet Is Initialized')
}

function draw()
{
image(video,0,0,300,300)
image(clown_nose,nosex,nosey,30,30)
}

function gotPoses(results) {
    if(results.length>0){
        console.log(results)
        console.log("nose x =" + results[0].pose.nose.x)
        console.log("nose y =" + results[0].pose.nose.y)
        nosex=results[0].pose.nose.x -15
        nosey=results[0].pose.nose.y -15

        
    }
}
