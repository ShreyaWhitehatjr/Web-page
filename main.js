Webcam.set({

    width:250,
    height:200,
    image_format:"png",
    png_quality:200
}

);

camera = document.getElementById("Webcam_view");

Webcam.attach(camera);

function Capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = '<img id="image" src="'+data_uri+'">';

    });
}
console.log("Ml5 Library",ml5.version); 
Classificaton = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/u8QtFl5mO/model.json",check);

function check(){
    console.log("The model is loaded");
}

function Identify(){

    Store_image = document.getElementById("image");
    Classificaton.classify(Store_image, output);


}
    
function output(error,results){

    if(error){
        console.error(error);

    }
    else
    {
        console.log(results);
        document.getElementById("name").innerHTML = results[0].label 
        document.getElementById("percentage").innerHTML = results[0].confidence.toFixed(3); 

        
    } 

}
