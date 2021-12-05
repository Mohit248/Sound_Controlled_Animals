function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IgTmpxbJO/model.json',modelLoaded);
}

function modelLoaded(){
    classifier.classify(gotResults);
}

function gotResults(error,results){
    if (condition) {
        
    } else {
        
    }
}