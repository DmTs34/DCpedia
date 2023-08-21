function addClickEventToCanvas(canvas, id) {
    // var fullscreenDiv = document.getElementById("fullscreenDiv");
    // var fullscreenImg = document.getElementById("fullscreenImg");
    // var isPortrait = function (){ if(window.innerHeight >window.innerWidth){return "Portrait"} else {return "Landscape"}}
    canvas.addEventListener("click", function () {
        var dataURL = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = id + ".png"
        link.click();
        // fullscreenDiv.classList.toggle("expandedDiv"+isPortrait());
        // fullscreenImg.classList.toggle("expandedImg"+isPortrait());
        // fullscreenImg.addEventListener("click", function () {
        //     fullscreenDiv.setAttribute("class","fullscreenDiv");
        //     fullscreenImg.setAttribute("class","fullscreenImg");
        //     fullscreenImg.src=""
    })

}

function addOnCanvas(id, images, allLoadedImages, htmlTags, w, h) {
    var canvas = document.getElementById(id);
    var success1 = true;
    var success2 = false;
    var arrSuccess = []
    if (w === undefined) { w = 1500 }
    if (h === undefined) { h = 800 }
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
            img.crossOrigin="anonymous";
            for (let j = 0; j < allLoadedImages.length; j++) { //search inside preloaded images
                if (allLoadedImages[j].name === images[i]) {
                    img = allLoadedImages[j].imgObj;
                    context.drawImage(img, 0, 0, w, h);
                    arrSuccess.push("")
                    break;
                }
            }
        }
        try {
            //only if all images found
            if (images.length === arrSuccess.length) {
                addClickEventToCanvas(canvas, id)
            } else {
                success2 === false
                console.log("problem with some of images")
            }
        } catch (err) {
            console.log(err)
        }


    } else {
        console.log("some images in array not specified")
    }
    if (!(success1 || success2)) { hideTag(htmlTags) }
};