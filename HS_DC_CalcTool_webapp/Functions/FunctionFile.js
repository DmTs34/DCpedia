// The initialize function must be run each time a new page is loaded.
(function () {
    Office.initialize = function (reason) {
        // If you need to initialize something you can do so here.
        console.log("HS_DC_CALC_TOOL: Functions script been initialized!")
    };
})();

//recieves the cell value - string
//if provided string is Numeric and has length of 8 chars then returns Descriptive code
//if provided string more than 8 chars then it must be descriptive code and then returns item number
//if nothing found returns "not found"
//if founds more than two, then returns "more than two"
function funcDetectProduct(str) {
    let a=detect(str,CT.knowledgeBaseFull);
    if(a.moreThanTwo){return "more than two"} 
    if (!a.detected){return "not found"}         
    return (!isNaN(parseInt(str)) && str.length===8) ? a.founded["Descriptive Code"] : a.founded["Item Number"]
  }

CustomFunctions.associate("DETECT_PRODUCT", funcDetectProduct);


