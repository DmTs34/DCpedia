//checks if elements in array are not duplicated
//returns objects, where true if found and false if not found and array of duplicated elements
function foundDuplicatesInArray(array) {
    let arr = [], response = false;
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) !== i) {
            arr.push(array[i])
            response = true
        }
    }
    return {
        response: response,
        duplicates: arr
    }
}
//checks if all elements of array1 are contained in array2 
//returns true if all match or false if at least one doesn't match
function arrayMatchesArray(array1 = [], array2 = []) {
    for (let i = 0; i < array1.length; i++) {
        if (array2.indexOf(array1[i]) === -1) {
            return false
        }
    }
    return true
}

//returns true if the parameter can be item number otherwise - false
function isItemNumber(param) {
    let regEx = /^[1,2,8,9]\d\d\d\d\d\d\d$/g;
    return regEx.test(param)
}

//returns true if the parameter can be item number otherwise - false
function isDescrCode(param) {
    if (param.length === 0) { return false }
    return param.length <= 30
}

//convert 2D array to json where the first element in array contain json properties
function array2DtoJSON(array) {
    let obj = []; objInternal = {}
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            objInternal[array[0][j]] = array[i][j]
        }
        obj.push(objInternal)
        objInternal = {}
    }
    return obj
}

//sends data as json to the server

async function sendRecieveJSONDataToServer(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}