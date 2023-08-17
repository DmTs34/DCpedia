
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

//action logic for the "oninput" in the user form
// function selectEvent(tag) {
//   switch (tag.id) {
//     case "dropdownTopology":
//       if (tag.value === "001") { jsonData.linktype = "PL00" }
//       if (tag.value === "004") { jsonData.linktype = "PE00" }
//       jsonData.sides = "00_00"
//       jsonData.permanentlink = "00_00_000_000"
//       jsonData.portextension = "00_00_000_000"
//       jsonData.topology = tag.value
//       buildMenuLinkType();
//       break;
//     case "dropdownLinktype":
//       jsonData.linktype = tag.value
//       jsonData.sides = "00_00";
//       jsonData.permanentlink = "00_00_000_000";
//       jsonData.portextension = "00_00_000_000";
//       buildMenuLinkType();
//       break;
//     case "dropdownSides":
//       if (jsonData.linktype === "PL00") {
//         if (tag.value === "00_00") { jsonData.permanentlink = "00_00_000_000"; }
//         if (tag.value === "LC_LC") { jsonData.permanentlink = "Du_Du_000_000"; }
//         if (tag.value === "MT_LC") { jsonData.permanentlink = "Pa_Du_000_000"; }
//         if (tag.value === "MT_MT") { jsonData.permanentlink = "Pa_Pa_000_000"; }
//         jsonData.portextension = "00_00_000_000";
//       }
//       if (jsonData.linktype === "IC00") {
//         if (tag.value === "00_00") { jsonData.permanentlink = "00_00_000_000"; }
//         if (tag.value === "Du_Du") { jsonData.permanentlink = "Du_Du_000_000"; }
//         if (tag.value === "Pa_Du") { jsonData.permanentlink = "Pa_Du_000_000"; }
//         if (tag.value === "Pa_Pa") { jsonData.permanentlink = "Pa_Pa_000_000"; }
//         jsonData.portextension = "00_00_000_000";
//       }
//       if (jsonData.linktype === "PE00") {
//         jsonData.permanentlink = "00_00_000_000";
//         if (tag.value === "Du_LC") { jsonData.portextension = "Du_Du_000_000"; }
//         if (tag.value === "Pa_LC") { jsonData.portextension = "Pa_Du_000_000"; }
//         if (tag.value === "Pa_MT") { jsonData.portextension = "Pa_Pa_000_000"; }

//       }
//       if (jsonData.linktype === "CC00" || jsonData.linktype === "DC00") {
//         jsonData.permanentlink = "00_00_000_000";
//         jsonData.portextension = "00_00_000_000";
//       }
//       jsonData.sides = tag.value
//       buildMenuSides();
//       break;
//     case "dropdownPermanentlink":
//       if (jsonData.permanentlink.substring(0, 5) !== tag.value.substring(0, 5)) { jsonData.portextension = "00_00_000_000"; }
//       if (tag.value === "00_00_000_000") { jsonData.portextension = "00_00_000_000"; }
//       jsonData.permanentlink = tag.value
//       buildMenuPermanentLink();
//       break;
//     case "dropdownpatchcordvariant":
//       jsonData.patchcordvariant = tag.value
//       break;
//     case "dropdownPortextension":
//       jsonData.portextension = tag.value
//       buildMenuPortextension();
//       break;

//   }


//   checkApplicationImage();
//   checkChannelImage();
//   addDataToURL();
// }
//adds one button
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

//adds one button
function addParagraph(prText, prID, clean) {
  var pr = document.getElementById(prID);
  if (clean !== true) {
    var vocabularyData = jsonData.vocabulary[prText]
    if (vocabularyData === undefined) { vocabularyData = prText }
    pr.textContent = pr.textContent + vocabularyData + " > "
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
      selectLength(btnId)
    })
    div.appendChild(btn);
  }
  div.style = "display: table; margin-left:3.7em";
}