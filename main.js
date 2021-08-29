function preload(){

}
function setup() {
    canvas = createCanvas(400, 400)
    canvas.center()
    video = createCapture(VIDEO);
    video.hide()
}

function draw(){
    let c = color('magenta');
    fill(c)
    noStroke()
    
    image(video, 100, 100, 200, 200)
    circle(80, 80, 10)
    circle(320, 80, 10)
    circle(80, 320, 10)
    circle(320, 320, 10)

    c = color(255, 255, 0)
    fill(c)
    noStroke()

    
    rect(85, 80, 230, 1);
    rect(320, 85, 1, 230);
    rect(80, 85, 1, 230);
    rect(85, 320, 230, 1);

    
    

}

function dcir(){
    
}