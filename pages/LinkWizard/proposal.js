
function checkProposal() {
    var canvas = document.getElementById("propCanvas");    
    canvas.width = 1500;
    canvas.height = 800;
    var context = canvas.getContext("2d");
    context.imageSmoothingEnabled = false;
    context.fillStyle = "black";
    context.fillRect(50, 50, 1400, 700)
    var img = new Image();
    img.src="images/004-PE00-Pa_LC-00_00-Pa_Du.png"
    context.drawImage(img, 0, 0, 1500, 800)
    console.log("Draw proposal");
    addClickEventToCanvas(canvas)
    unhideTag("proposal")
}

