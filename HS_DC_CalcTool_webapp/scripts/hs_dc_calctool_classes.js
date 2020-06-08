"use strict";
const e = React.createElement;
const   ITEMNUMBER  ='Item Number',
        DESCRCODE   ='Descriptive Code',
        ITEMTEXT    ='Item Text',
        PRODGROUP   ='Product Group',
        PRODSUBGR   ='Product Subgroup',
        PRODCATEG   ='Product Category',
        PRODSUBCAT  ='Product Subcategory',
        PRODSUBCAT2 ='Product Subcategory2',
        PRODICON    ='Product Icon',
        FIBERTYPE   ='Fiber Type',
        CONNECTOR1  ='Connector 1',
        CONNECTOR2  ='Connector 2',
        POLARITY    ='Polarity',
        BASETYPE    ='Base Type',
        LENGTH      ='Length',
        COLOR       ='Color',
        CPRRATING   ='CPR Rating',
        PHASE       ='Phase',
        DATE        ='Date',
        COMMENT     ='Comment';
//this keeps the instance of Calc tool object(class) in the global namespace,
// which should be accessible by all React components
let CT;
//pre loader - indicates loading
class PreLoader {
    constructor(props) {
        this.start = () => {
            ReactDOM.render(e(ReactPreLoader), document.getElementById('root'))
        };
        this.stop = () => {
            setTimeout(() => {
                //console.log("PreLoaded class stopped")
                ReactDOM.render(e(MainDiv), document.getElementById('root'));
                document.getElementById("knowledgeBaseQty").innerHTML = CT.knowledgeBaseFull.length;
            }, 1000);
        };
    }
}
//main class contains all methods and properties controlled by Calc Tool
class CalcTool {
    constructor(props) {
        //keeps the event for scanning active cells
        let scanCellevent = null;
        //keeps the event for scanning range
        let scanRangeEvent = null;
        //contains loaded JSON data from knowledgebase, assigned during preload and office onready
        this.knowledgeBaseFull = props;
        //contains various interpretations of recieved json - sub objects are:
        //resortedUnique - only unique values 
        //resortedAll - all values
        this.reSortKnowBase = reSortKnowBase(props).then((data) => data)
        this.knowledgeBaseHeaders = [
            ITEMNUMBER,
            DESCRCODE,
            ITEMTEXT,
            PRODGROUP,
            PRODSUBGR,
            PRODCATEG,
            PRODSUBCAT,
            PRODSUBCAT2,
            PRODICON,
            FIBERTYPE,
            CONNECTOR1,
            CONNECTOR2,
            POLARITY,
            BASETYPE,
            LENGTH,
            COLOR,
            CPRRATING,
            PHASE,
            DATE,
            COMMENT
        ];
        this.activeCellValue = ''; //when selection changes this property stores the value of active cell
        this.startDetector = async () => {
            try {
                console.log('Detector started')
                // add event handler to the selection change
                //from here: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-events
                await Excel.run(async (context) => {
                    let activeWorksheet = context.workbook.worksheets.getActiveWorksheet();
                    scanCellevent = activeWorksheet.onSelectionChanged.add((event) => {
                        scanCell(this)
                    })
                    //when first initiated - already tries to detect something
                    scanCell(this);
                    await context.sync()
                    console.log('EXCEL.run: Event handler for onSelectionChanged on active page added')
                })
            } catch (error) {
                errorHandlerFunctionExcel(error)
            }
        };
        // removes event handler to the selection change
        //from here: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-events
        this.stopDetector = async () => {
            try {
                if (scanCellevent !== null) {
                    console.log('Detector will be stopped')
                    await Excel.run(scanCellevent.context, async (context) => {
                        scanCellevent.remove()
                        await context.sync()
                        scanCellevent = null
                        console.log('EXCEL.run: Event handler for onSelectionChanged successfully removed')
                    })
                }
            } catch (error) {
                errorHandlerFunctionExcel(error)
            }
        };

        this.detectedValidatedRange = [];
        this.startRangeDetector = async () => {
            try {
                console.log('Range Detector started')
                //from here: https://docs.microsoft.com/en-us/office/dev/add-ins/excel/excel-add-ins-events
                await Excel.run(async (context) => {
                    let activeWorksheet = context.workbook.worksheets.getActiveWorksheet();
                    scanRangeEvent = activeWorksheet.onSelectionChanged.add((event) => {
                        scanRange(event)
                    })
                    scanRange(null)
                    await context.sync()
                    console.log('EXCEL.run: Event handler for onSelectionChanged on active page added')
                })
            } catch (error) {
                errorHandlerFunctionExcel(error)
            }
        };
        this.stopRangeDetector = async () => {
            try {
                if (scanRangeEvent !== null) {
                    console.log('Range Detector stopped')
                    await Excel.run(scanRangeEvent.context, async (context) => {
                        scanRangeEvent.remove()
                        await context.sync()
                        scanRangeEvent = null
                        console.log('EXCEL.run: Event handler for onSelectionChanged successfully removed')
                    })
                }
            } catch (error) {
                errorHandlerFunctionExcel(error)
            }

        };

    }

}

//Returns the array of all values which match criteria - in 2D style - {"item number":["item 1","item 2"],
//                                                                      "descr code":["descr 1","descr 2"]}
//similar to like WHERE field = value
let selectFromTableWhere = function (select = 'All', table, where) {
    let errorTable = {};
    let resultTable = {};
    let allTableKeys = Object.keys(table);
    let allWhereKeys = Object.keys(where);
    let totalNum = table[allTableKeys[0]].length;
    //prepare error table
    if (select !== 'All') {
        select.map((el) => {
            errorTable[el] = [`No ${el}`];
            resultTable[el] = [];
        })
    } else {
        for (let key in table) { errorTable[key] = [`No ${allTableKeys[key]}`] }
    }
    //check if the selected headers exist in the table
    if (table[select[0]] === undefined || table[select[1]] === undefined) { return errorTable }
    //check if all keys has same number of elements inside
    for (let key in table) {
        if (table[key].length !== totalNum) { return errorTable }
    }
    //go through all elements of table, filter out which don't match where and not any
    for (let i = 0; i < totalNum; i++) {
        let matching = true;
        for (let key in where) {
            if (table[key][i] != where[key] && where[key] !== 'any') { matching = false }
        }
        if (matching) {
            for (let key in resultTable) {
                resultTable[key].push(table[key][i])
            }
        }
    }
    return resultTable
}

//Recieves the knowledge base obj and convert into array-type data
let reSortKnowBase = function (obj) {
    return new Promise((resolve, reject) => {
        let newObj = { resortedUnique: {}, resortedAll: {} };
        for (let key in obj[0]) {
            newObj.resortedUnique[key] = []
            newObj.resortedAll[key] = []
        }
        obj.map((el) => {
            for (let key in el) {
                newObj.resortedAll[key].push(el[key])
                if (newObj.resortedUnique[key].indexOf(el[key]) === -1) { newObj.resortedUnique[key].push(el[key]) }
            }
        })
        return resolve(newObj)
    })
}

//function assigned to the event on selectionChange
//fires every time when selection changes
//obj - the reference to the object Calc Tool
let scanCell = function (obj) {
    Excel.run((context) => {
        //reads the excel context which will be revieved after context.sync()
        let activeCell = context.workbook.getActiveCell();
        activeCell.load("values"); //what data to pass to .then after sync()
        return context.sync()
            .then(() => {
                let c = activeCell.values[0][0]; //read the value in the first cell in the selected range
                obj.activeCellValue = c; //assigns this value to the object, from where the event was fired
                //detects whether the value can be item number or descriptive code - recieves object with determined parameters
                //where obj.detected is true (if detected) or false (not detected)
                let detected = detect(c, obj.knowledgeBaseFull);
                //renders KnowledgeBaseContainer to the detector-knowledge-base-div, which exist in the MainDivDetector container
                //passes item number, descr code, product level structure through props
                if (detected.detected) {
                    ReactDOM.render(e(KnowledgeBase, { founded: detected.founded }), document.getElementById('detector-knowledge-base-div'))
                } else {
                    ReactDOM.render(e(KnowledgeBaseNotDetected), document.getElementById('detector-knowledge-base-div'))
                }

            })
            .catch(errorHandlerFunctionExcel)
    })
}

//recieves c - string or number and detects if it exist in knowledge base (data) or not
//returns the object - matched whether item number or descriptive code was found
let detect = function (c, data) {
    let respond = {
        detected: false,
        founded: {},
        moreThanTwo: false
    };
    //runs through data and filters out elements which have either item number or descriptive code equal to c
    let a = data.filter((el) => el[ITEMNUMBER] == c ? true : el[DESCRCODE] == c ? true : false)
    //if only one element found
    if (a.length === 1) {
        respond.detected = true;
        respond.founded = a[0];
        respond.moreThanTwo = false;
    } else if (a.length > 1) {
        respond.detected = true;
        respond.founded = mergeTwoPlusDetected(a);
        respond.moreThanTwo = true;
    }
    return respond
}

//if during detec there were two or more item numbers or descriptive code founded, then function combines them 
//so that only one element is provided in respond
let mergeTwoPlusDetected = function (a) {
    let respond = {}; //jsut to pass all keys from first element in a to the respond object
    //copy keys from a object to new object
    for (let key in a[0]) {
        respond[key] = a[0][key]
    };
    //now assign new values
    for (let i = 1; i <= a.length; i++) {
        for (let key in a[i]) {
            respond[key] += ' | ' + a[i][key]
        }
    }
    return respond
}

//adds to the current list the shape with data provided in the obj
let addHeaderFromForm = async function (obj) {

    //https://stackoverflow.com/questions/44403381/save-svg-as-png-using-javascript-unknown-dom-exception
    //https://docs.microsoft.com/en-us/javascript/api/excel/excel.shapecollection?view=excel-js-preview#addimage-base64imagestring-
    //https://javascript.info/async-await
    //https://stackoverflow.com/questions/53237026/load-images-one-by-one-using-promises-and-async-await-in-javascript

    // pseudo Code
    //1. read template SVG using obj, retrieve svg as text string, replace texts in appropriate positions
    //2. create the Blob reading text string as svg
    //3. create canvas
    //4. add blobbed url from SVG to the canvas
    //5. once the canvas is ready - read the canvas URL
    //6. read mybase64 image from canvas url and pass it to Excel.run object
    //7. Excel accepts base64 code of the image
    //8. Paste it to the active sheet with addImage() function

    let response = await fetch(headerSVG);
    let text = await response.text();
    text = convertTemplate(text, obj);
    let blob = new Blob([text], { type: 'image/svg+xml' })
    let urlSVG = URL.createObjectURL(blob);
    //let canvas = document.getElementById('canvas');
    let canvas = document.createElement("canvas");
    let ctxCanvas = canvas.getContext('2d');
    canvas.width = 605;
    canvas.height = 218;
    let templ = await loaderImage(urlSVG);
    ctxCanvas.drawImage(templ, 0, 0);
    let imgURI = canvas.toDataURL('image/png')
    await Excel.run(async (context) => {
        let startIndex = imgURI.toString().indexOf("base64,");
        let myBase64 = imgURI.toString().substr(startIndex + 7);
        var sheet = context.workbook.worksheets.getActiveWorksheet();
        let firstRow = sheet.getRange("1:1");
        firstRow.format.rowHeight = 190;
        var image = sheet.shapes.addImage(myBase64);
        image.left = 5;
        image.top = 5;
        image.name = "Header Template";

        await context.sync()

    }).catch(errorHandlerFunctionExcel);

    return null
};

let convertTemplate = function (text, obj) {
    // docType:'Document type',
    // docNumber:"Number",
    // docCode:'Code',
    // docDescription:'Put here your description. Dont use too much words',
    // docCustomerName:'Your customer name',
    // docCustomerDetails:'Your customer details',
    // docYourName:'Your name',
    // docYourEmail:'your@email',
    // docCurrency:'CHF'
    text = text
        .replace(/Excel quotation/g, obj.docType)
        .replace(/No 58/g, obj.docNumber)
        .replace(/Quotation code/g, obj.docCode)
        .replace(/Quotation description/g, obj.docDescription)
        .replace(/Customer name/g, obj.docCustomerName)
        .replace(/Customer contact details/g, obj.docCustomerDetails)
        .replace(/Your name/g, obj.docYourName)
        .replace(/Your email/g, obj.docYourEmail)
        .replace(/CHF/g, obj.docCurrency)
    return text
}

//recieves the url as the source for image and returns the image in Promise, once loaded 
let loaderImage = function (url) {
    return new Promise((resolve) => {
        let img = new Image();
        img.src = url
        img.onload = event => resolve(img)
    })
}

//common error handler function for excel.run
let errorHandlerFunctionExcel = function (error) {
    console.log(error)
}