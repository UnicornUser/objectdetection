img = "";
status = "";
object = [];

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380,380);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Ststus : Detecting Objects";
}

function preload(){
    img - loadImage('dog_cat.jpg');
}

function draw() {
    image(video, 0, 0, 380, 380);

         if(status !="")
         {
            r = random(255);
            g = random(255);
            b = random(255);
            objectDetector.detect(video, gotResult);
            for (i = 0; i < objects.length; i++)
            {
                document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are :"+ objects.length;


                fill(r,g,b);
                percent = floor(objects[i].confidence * 100);
                Text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
                noFill();
                stroke(r,g,b);
                rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            }
         }

    fill("#FF0000");
    Text("Cute_charms", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill("#FF0000")
    Text("Cute_Mini_Diaries", 320, 120);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 270, 320 );
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(video, gotResult);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}
