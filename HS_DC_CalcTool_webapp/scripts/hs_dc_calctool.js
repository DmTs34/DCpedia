
//all constants
const urlKnowledgeBase = "data/knowledgeBase.json";
const logoURL = 'Images/logo.png';
const headerURL = 'Images/headerTemplate.png';
const headerSVG = 'Images/headerTemplate.svg';
const pl = new PreLoader();

(async function () {
    try {
        "use strict";
        // initialize of add-on
        await Office.onReady()
        pl.start();
        let response = await fetch(urlKnowledgeBase); //retrieve data from urlKnowledgeBase
        let data = await response.json(); //recognize data
        CT = new CalcTool(data); //initiate calc tool
        pl.stop();
    } catch (error) {
        initiateUnsuccessLoad(error)//if any errors then initiate unsuccess load
        pl.stop();//stops preloader
    }
})();

//when data recieved then the task pane DOM loads  
function initiateUnsuccessLoad(error) {
    console.log("ERROR! There were errors during loading: ", error)
    return null
}