Webcam.set({
    height:300,
    width:300,
    img_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"environment"
    }

}
    
)
Webcam.attach("camera")
// Check the version of ml5

console.log("the version of ml5= "+ml5.version)
// Import the model
classifier= ml5.imageClassifier("MobileNet",modelloaded)

function modelloaded() {
    console.log("modelloaded")
}

function capture() {
    Webcam.snap(
        function (img) {
            document.getElementById("snapshot").innerHTML=`<img src=${img} id="picture">`
        }
    )
}

function identify() {
    image=document.getElementById("picture")
    classifier.classify(image,gotresults)
}

function gotresults(error,result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("objectname").innerHTML=result[0].label
    }
}
