//https://teachablemachine.withgoogle.com/models/yFIyGZO0Y/
function startClassification()
{
navigator.mediaDevices.getUserMedia({ audio: true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yFIyGZO0Y/model.json',modelReady)
}

function modelReady(){
classifier.classify(gotResults);
}
function gotResults(error,results){
if(error){
console.error(error);
}
else{
console.log(results);
perk_r=Math.floor(Math.random()*255)+1;
perk_g=Math.floor(Math.random()*255)+1;
perk_b=Math.floor(Math.random()*255)+1;
document.getElementById("result_label").innerHTML='i can hear '+results[0].label;
document.getElementById("result_confidence").innerHTML='accuracy '+(results[0].confidence*100).toFixed(2);
document.getElementById("result_label").style.color="rgb("+perk_r+","+perk_g+","+perk_b+")";
document.getElementById("result_confidence").style.color="rgb("+perk_r+","+perk_g+","+perk_b+")";
img1=document.getElementById("alien1");
img2=document.getElementById("alien2");
img3=document.getElementById("alien3");
img4=document.getElementById("alien4");
if (results[0].label=="clap") {
img1.src='aliens-01.png';
img2.src='aliens-02.gif';
img3.src='aliens-03.png';
img4.src='aliens-04.png';
}
else if (results[0].label=="bell") {
img1.src='aliens-01.png';
img2.src='aliens-02.png';
img3.src='aliens-03.gif';
img4.src='aliens-04.png';
}
else if (results[0].label=="snap") {
img1.src='aliens-01.gif';
img2.src='aliens-02.png';
img3.src='aliens-03.png';
img4.src='aliens-04.png';
}
else if (results[0].label=="background noise") {
img1.src='aliens-01.png';
img2.src='aliens-02.png';
img3.src='aliens-03.png';
img4.src='aliens-04.gif';
}
}
}
