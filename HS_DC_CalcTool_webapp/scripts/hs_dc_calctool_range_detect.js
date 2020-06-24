
let scanRange = function (event) {
    //console.log("current selection: ", event.address);
    Excel.run((context) => {
        let activeWorksheet = context.workbook.worksheets.getActiveWorksheet();
        let range = event!==null ? activeWorksheet.getRange(event.address) : context.workbook.getSelectedRange()
        range.load("values")
        return context.sync()
            .then(() => {
                let array2D = range.values;
                let passedHeadersCheck = checkHeaders(array2D[0]); //pass first element of array to check for headers
                if (!passedHeadersCheck.response) {
                    //if didn't pass the check - provide the error Text
                    ReactDOM.render(e(rangeNotDetected, { info: passedHeadersCheck.errorText }), document.getElementById('update-div'))
                } else {
                    //if headers check passed then check if the data in the range is valid
                    let passedRangeValidation = validateRange(array2D);
                    if (!passedRangeValidation.response) {
                        //if data in range not valid - provide error text
                        ReactDOM.render(e(rangeNotDetected, { info: passedRangeValidation.errorText }), document.getElementById('update-div'))
                    } else {
                        //if data is valid - it can be stored
                        CT.detectedValidatedRange.array=[...array2D]
                        CT.detectedValidatedRange.json=array2DtoJSON(array2D)
                        ReactDOM.render(e(rangeDetected, {} ), document.getElementById('update-div'))
                    }
                }
            })
    })
}
//used in validate Range to check inside the column 
let validateData = function (array2D, header, index = 0, validateFunc) {
    let wrongsList = [];
    let validData = true;
    let errorText = '';
    array2D.map((row,line) => {
        if (!validateFunc(row[index])) {
            validData = false
            wrongsList.push([row[index],line])
        }
    })
    if (!validData) {
        errorText += `Following ${header} didn't pass validation \n `;
        wrongsList.map((el, i) => errorText += `${i + 1}. ${el[0]===''?'blank':el[0]} in line ${el[1]}\n`)
    }
    return { response: validData, errorText: errorText }
}

//validate data in the Range 
let validateRange = function (array2D) {
    let validRange = true;
    let newArr = [...array2D];
    newArr.shift();
    let validData;
    let errorText = ` Range validation didn't pass \n `
    array2D[0].map((header, index) => {
        switch (header) {
            case ITEMNUMBER: //checks that every element is valid item number
                validData = validateData(newArr, header, index, isItemNumber)
                if(!validData.response) {validRange=false}
                errorText += validData.errorText
                break;
            case DESCRCODE: //checks that every element can be Descriptive code
                validData = validateData(newArr, header, index, isDescrCode)
                if(!validData.response) {validRange=false}
                errorText += validData.errorText
                break;
        }
    })
    return {
        response: validRange,
        errorText: errorText
    }
}
//updates the knowledge base json based on provided array 2D and stores it
let updateKnowledgeBase=async function(event){
    console.log(CT.detectedValidatedRange.json)
    let json = await sendRecieveJSONDataToServer(SERVER_URL, CT.detectedValidatedRange.json)
    
}

//checks whether the provided 1D array contains headers which match the knowledge base headers
//returns an object containing true or false and error text
//- each header in array matches knowledge base headers 
//- headers must be unique (not repeated)
//- must be always item number & descriptive code provided
let checkHeaders = function (array) {
    if (!arrayMatchesArray(array, CT.knowledgeBaseHeaders)) {
        return { response: false, errorText: `- Some headers are not recognized \n` }
    }
    let foundDuplicates = foundDuplicatesInArray(array);
    if (foundDuplicates.response) {
        return { response: false, errorText: `- These headers are duplicated: ${foundDuplicates.duplicates}\n` }
    }
    if (array.indexOf(ITEMNUMBER) === -1 || array.indexOf(DESCRCODE) === -1) {
        return { response: false, errorText: `- Columns ${ITEMNUMBER} or ${DESCRCODE} are missing \n` }
    }
    return { response: true, errorText: '' }
}

