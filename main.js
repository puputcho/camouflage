function preload() {
    
}
function setup() {
    canvas = createCanvas(280,280);
    canvas.position(545,340);
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    classifier = ml5.imageClassifier('DoodleNet'); 
}
function draw() {
    strokeWeight(6);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
}
function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error)
    }else{
        console.log(results);
        document.getElementById('nome').innerHTML = 'Name: ' + results[0].label;
        document.getElementById('precisao').innerHTML = 'Acurrace: ' + Math.round(results[0].confidence * 100) + '%';
    }
}