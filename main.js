function startClasification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/J1XXeUc2J/.json", modelLoaded);
}

function modelLoaded()
{
    classifier.classfy(gotResults);
}

function gotResults(error,results)
{
    console.log('gotResults');
}