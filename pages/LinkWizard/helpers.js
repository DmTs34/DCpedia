
//HELPER functions

//adds option to the dropdown menu with ID and option's values array that should match vocabulary
function addOptions(id, array, selected) {
  removeOptions(id)
  var dropdown = document.getElementById(id);
  array.forEach(function (el) {
    var optionElement = document.createElement("option");
    optionElement.value = el;
    optionElement.text = jsonData.vocabulary[el];
    if (el === selected) { optionElement.selected = true }
    dropdown.appendChild(optionElement);
  })
}
//removes all options from dropdown menu
function removeOptions(id) {
  var dropdown = document.getElementById(id);
  var options = dropdown.options;
  while (dropdown.options.length > 0) {
    dropdown.remove(0);
  }
}

//hides the html tag
function hideTag(htmlTag) {
  htmlTag.forEach(function (element) {
    
    if (element !== null && element !== undefined) {
      var div = document.getElementById(element)
      div.style.opacity = "0";
      setTimeout(function () {
        div.style.display = "none"
      }, 0)
    }
  })
}

var delayMessage=100;//use this to adjust delay between message apearance.
//unhides the html tag, need to be array
function unhideTag(htmlTag) {
  htmlTag.forEach(function (element,index) {
    var delay=index*delayMessage+delayMessage;
    if (element !== null && element !== undefined) {
      var div = document.getElementById(element);
      div.style.display = "grid";
      setTimeout(function () {
        div.style.opacity = "1"
      }, delay)
    }
  })
}



//class="wButton" style="margin-left: 15px;"
function addTransceiverButton(btnID, divID) {
  var btn = document.createElement("button");
  btn.textContent = jsonData.vocabulary[btnID];
  btn.setAttribute("id", btnID);
  btn.setAttribute("class", "wButton");
  btn.addEventListener("click", function () {
    selectEvent(btn)
  })
  var div = document.getElementById(divID);
  div.style = "display: table; margin-left:3.7em";
  div.appendChild(btn);
}

function removeChildTags(divID){
  var div = document.getElementById(divID);
while (div.firstChild) {
    div.removeChild(div.firstChild);
}
}
//adds text to the paragraph
function addParagraph(prText, prID, clean) {
  var pr = document.getElementById(prID);
  if (clean !== true) {
    var vocabularyData = jsonData.vocabulary[prText]
    if (vocabularyData === undefined) { vocabularyData = prText }
    pr.textContent = pr.textContent +" > "+ vocabularyData 
  } else {
    pr.textContent = "Your selection: "
  }

}

//copies URL to the clipboard - check if that works with IE10
function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text)
}
//function that hides all wBlock
function hideAllTags(tagId) {
  var parentTag = document.getElementById(tagId);
  var allDivs = parentTag.querySelectorAll(".wRow")
  allDivs.forEach(function (div) {
    div.style.display = "none"
  })
}

function popUpMessage(text, tag) {
  var div = document.getElementById("popup");
  var divMessage = document.getElementById(tag.id);
  var rect = divMessage.getBoundingClientRect();
  // console.log(rect.right)
  div.innerText = text;
  var x = rect.right;
  var y = rect.top;
  div.style.left = x + 10 + "px";
  div.style.top = y + "px";
  div.style.display = "inline-block";
  div.style.position = "absolute";
  div.style.backgroundColor = "whitesmoke";
  div.style.fontFamily = "Mont, sans-serif";
  div.style.fontSize = "1em"
  setTimeout(function () {
    div.style.display = "none"
  }, 2000)
}

function buildButtonsArray(array, type, divID) {
  var div = document.getElementById(divID);
  var btnId
  for (i = 0; i < array.length; i++) {
    var btn = document.createElement("button");
    btn.setAttribute("class", "wButton nomargin");
    btn.textContent = array[i] + " m";
    btnId = type + "=" + array[i]
    btn.setAttribute("id", btnId);
    btn.addEventListener("click", function () {
      selectLength(this)
    })
    div.appendChild(btn);
  }
  div.style = "display: table; margin-left:3.7em";
}