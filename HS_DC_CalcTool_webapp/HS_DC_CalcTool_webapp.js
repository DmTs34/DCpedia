class HS_DC_CALCTOOL_WEBAPP {
    constructor() {
        this._successLoad = false; //stores the knowledge base data if recieved;
        this._kbJson = {}; //stores the knowledge base data if recieved;
    }}
    //load external json file and stores it in the object
    HS_DC_CALCTOOL_WEBAPP.prototype.loadData = async function () {
        //let response = await fetch("https://raw.githubusercontent.com/DmTs34/DCpedia/master/HS_DC_CalcTool_webapp/knowledgeBase.json");
        //let extData = await response.json();
        //$.getJSON("https://raw.githubusercontent.com/DmTs34/DCpedia/master/HS_DC_CalcTool_webapp/knowledgeBase.json", function (data) {
        //    extData = data
        //    console.log(extData)
        //})
        this.successLoad = true
        return null
    };

    //loadData()
    //    .then(data => kbJSON = data);
    //this.kbJSON = kbJSON;
    //    $.ajax({
    //    dataType: "json",
    //    url: "https://github.com/DmTs34/DCpedia/blob/master/HS_DC_CalcTool_webapp/knowledgeBase.json",
    //    success: console.log("successfully loaded json")
    //})

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


