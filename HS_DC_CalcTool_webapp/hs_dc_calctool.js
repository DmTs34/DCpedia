(function () {
    "use strict";

    let urlKnowledgeBase="/data/knowledgeBase.json";
    let pl = new PreLoader();

    // initialize of add-on
    Office.onReady()
        .then(officeObject => {
             pl.start();
             return fetch(urlKnowledgeBase) //retrieve data from urlKnowledgeBase
            }) 
        .then(response => response.json()) //recognize data
        .then(data => {
            initiateSuccessLoad(data) //pass data to the initiate successLoad
        })
        .catch(error => {
            // console.log("Data not recieved, error:", error)
            initiateUnsuccessLoad(error) //if any errors then initiate unsuccess load
        })
        .finally(()=> pl.stop())
})();


//when data recieved then the task pane DOM loads  
function initiateSuccessLoad(data){
    console.log("building the  task pane structure", data)
}

//when data recieved then the task pane DOM loads  
function initiateUnsuccessLoad(error){
    console.log("building the task pane structure without data", error)
}



//recieves string or number and detects if it exist in knowledge base or not
    let detect = function (s) {
        let itemNumber = null, descrCode = null, possItemNumber = false, possDescrCode = false;
        switch (true) {
            case Number.isInteger(parseInt(s)) && s.toString().length == 8 && s !== "":
                possItemNumber = true
            case s.toString().length <= 30 && s !== "":
                possDescrCode = true
                break;
            case s === "":
                s = "empty";
        }
        //found possibly item number = search in JSON for data
        itemNumber = (possItemNumber) ? 'This is possibly item number' : null;
        //found possibly descriptive code = search in JSON for data
        descrCode = (possDescrCode) ? 'This is possibly descriptive code' : null;
        return { 'itemNumber': itemNumber, 'descrCode': descrCode, 'strInput': s }
    }


