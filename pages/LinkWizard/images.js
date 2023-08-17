function addClickEventToCanvas(canvas){
    var fullscreenDiv = document.getElementById("fullscreenDiv");
    var fullscreenImg = document.getElementById("fullscreenImg");
    var isPortrait = function (){ if(window.innerHeight >window.innerWidth){return "Portrait"} else {return "Landscape"}}
    canvas.addEventListener("click", function () {
        fullscreenImg.src = canvas.toDataURL("image/png");
        fullscreenDiv.classList.toggle("expandedDiv"+isPortrait());
        fullscreenImg.classList.toggle("expandedImg"+isPortrait());
        fullscreenImg.addEventListener("click", function () {
            fullscreenDiv.setAttribute("class","fullscreenDiv");
            fullscreenImg.setAttribute("class","fullscreenImg");
            fullscreenImg.src=""
        })
    })
    
}

function addOnCanvas(id, images, allLoadedImages, htmlTag, w,h) {
    var canvas = document.getElementById(id);
    var success1 = true;
    var success2 = false;
    var arrSuccess = []
    if(w===undefined){w=1500}
    if(h===undefined){h=800}
    images.forEach(function (element) {
        if (element === undefined) {
            success1 = false
        }
    });
    if (success1) {
        canvas.width = w
        canvas.height = h
        var context = canvas.getContext("2d");
        context.imageSmoothingEnabled = false;
        for (let i = 0; i < images.length; i++) {
            var img = new Image();
            for (var obj of allLoadedImages) { //search inside preloaded images
                if (obj.name === images[i]) {
                    img = obj.imgObj;
                    context.drawImage(img, 0, 0, w, h);
                    arrSuccess.push("")
                    break;
                }
            }
        }
        try{
          //only if all images found
        if (images.length === arrSuccess.length) {
            addClickEventToCanvas(canvas)
        } else {
            success2 === false
            console.log("problem with some of images")
        }  
        } catch (err){
            console.log(err)
        }
        

    } else {
        console.log("some images in array not specified")
    }
    if (!(success1 || success2)) { hideTag(htmlTag) }
};