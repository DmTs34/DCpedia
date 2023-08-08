
var imagesPath = "../images/";
var images = [
  "001-PL00-LC_LC-Du_Du-00_00.png",
  "001-PL00-MT_LC-Pa_Du-00_00.png",
  "001-PL00-MT_MT-Pa_Pa-00_00.png",
  "002-DC00-Du_Du-00_00-00_00.png",
  "002-DC00-Pa_Du-00_00-00_00.png",
  "002-DC00-Pa_Pa-00_00-00_00.png",
  "002-IC00-Du_Du-Du_Du-00_00.png",
  "002-IC00-Pa_Du-Pa_Du-00_00.png",
  "002-IC00-Pa_Pa-Pa_Pa-00_00.png",
  "002-CC00-Du_Du-Du_Du-Du_Du.png",
  "002-CC00-Pa_Du-Du_Du-Pa_Du.png",
  "002-CC00-Pa_Du-Pa_Du-Pa_Pa.png",
  "002-CC00-Pa_Pa-Pa_Pa-Pa_Pa.png",
  "003-DC00-Du_Du-00_00-00_00.png",
  "003-DC00-Pa_Du-00_00-00_00.png",
  "003-DC00-Pa_Pa-00_00-00_00.png",
  "003-IC00-Du_Du-Du_Du-00_00.png",
  "003-IC00-Pa_Du-Pa_Du-00_00.png",
  "003-IC00-Pa_Pa-Pa_Pa-00_00.png",
  "003-CC00-Du_Du-Du_Du-Du_Du.png",
  "003-CC00-Pa_Du-Du_Du-Pa_Du.png",
  "003-CC00-Pa_Du-Pa_Du-Pa_Pa.png",
  "003-CC00-Pa_Pa-Pa_Pa-Pa_Pa.png",
  "004-PE00-Du_LC-00_00-Du_Du.png",
  "004-PE00-Pa_LC-00_00-Pa_Du.png",
  "004-PE00-Pa_MT-00_00-Pa_Pa.png",
  "background-1.png",
  "background-2.png",
  "pl-Du_Du_12f_mtp.png",
  "pl-Du_Du_24f_mtp.png",
  "pl-Du_Du_48f_mtp.png",
  "pl-Du_Du_12f_spl.png",
  "pl-Du_Du_24f_spl.png",
  "pl-Du_Du_48f_spl.png",
  "pl-Du_Du_12f_pat.png",
  "pl-Du_Du_24f_pat.png",
  "pl-Du_Du_48f_pat.png",
  "pl-Pa_Du_24f_mtp.png",
  "pl-Pa_Du_48f_mtp.png",
  "pl-Pa_Pa_72f_mtp.png",
  "pl-Pa_Pa_44f_mtp.png",
  "pl-Pa_Pa_88f_mtp.png",
  "pe-Du_Du_12f_pat.png",
  "pe-Du_Du_24f_pat.png",
  "pe-Du_Du_48f_pat.png",
  "pe-Pa_Du_24f_mtp.png",
  "pe-Pa_Du_48f_mtp.png",
  "pe-Pa_Pa_72f_mtp.png",
  "pe-Pa_Pa_44f_mtp.png",
  "pe-Pa_Pa_88f_mtp.png",
  "dc-Du_Du.png",
  "dc-Pa_Du.png",
  "dc-Pa_Pa.png",
  "pc-cc-Du_Du_AB.png",
  "pc-cc-Pa_Pa_A.png",
  "pc-cc-Pa_Pa_B.png",
  "pc-left-Du_Du_AB.png",
  "pc-left-Pa_Pa_A.png",
  "pc-left-Pa_Pa_B.png",
  "pc-right1-Du_Du_AA.png",
  "pc-right1-Du_Du_AB.png",
  "pc-right1-Pa_Pa_B.png",
  "pc-right2-Du_Du_AA.png",
  "pc-right2-Du_Du_AB.png"
];
var imagesPreloaded = [];
var jsonData = {
  topology: "000",
  linktype: "0000",
  rackA: "Rack 1",
  rackB: "Rack 2",
  length: 20,
  connections: 3,
  sideA: "00_00_00_000",
  sideB: "00_00_00_000",
  sides: "00_00",
  transceiverA: "00_00_00_000",
  transceiverB: "00_00_00_000",
  permanentlink: "00_00_000_000",
  variantPL:"001",
  portextension: "00_00_000_000",
  patchA: [],
  patchB: [],
  transceiverKeys: [
    ["00_00_00_000", "Not included"],
    ["01_Du_MM_001", "SFP+ 10G SR"],
    ["01_Du_MM_002", "SFP28 25G SR"],
    ["01_Du_SM_003", "SFP28 25G LR"],
    ["01_Du_SM_004", "QSFP28 100G CWDM4"],
    ["01_Du_SM_005", "QSFP-DD 400G FR4"],
    ["01_Pu_MM_001", "QSFP+ 40G SR4"],
    ["01_Pa_MM_002", "QSFP28 100G SR4"],
    ["01_Pa_SM_003", "QSFP28 100G PSM4"],
    ["01_Pa_SM_004", "QSFP-DD 400G DR4"]
  ],
  topologyKeys: [
    ["000", "What do you connect?"],
    ["001", "Permanent link | I do not know end equipment and need some fiber between racks"],
    ["002", "Switch to server | I connect switch to a server"],
    ["003", "Switch to switch | I connect two switches"],
    ["004", "Switch only | Port extension | I just need to add a switch and patch panel"]
  ]
};

//adds option to the dropdown menu with ID and array(json) of values and texts
function addOptions(id, array, selected) {
  removeOptions(id)
  var dropdown = document.getElementById(id);
  array.forEach(function (option) {
    var optionElement = document.createElement("option");
    optionElement.value = option[0];
    optionElement.text = option[1];
    if (option[0] === selected) { optionElement.selected = true }
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
//shows the form by ID
function showForm(formID) {
  if (formID !== null && formID !== undefined) {
    document.getElementById(formID).style.display = "inline-block";
    document.getElementById(formID + '-label').style.display = "inline-block";
  }
}
//hides the form by ID
function hideForm(formID) {
  if (formID !== null && formID !== undefined) {
    document.getElementById(formID).style.display = "none";
    document.getElementById(formID + '-label').style.display = "none";
  }
}
//hide select tags by providing array
function hideForms(formarray) {
  formarray.forEach(function (form) { hideForm(form) })
}
//shows select tags by providing array
function showForms(formarray) {
  formarray.forEach(function (form) { showForm(form) })
}
//topology and link type
function buildMenuLinkType() {
  if (jsonData.topology === "000") {
    showForm("dropdownTopology");
    hideForms(["dropdownLinktype", "dropdownSides", "dropdownPortextension", "dropdownPermanentlink","dropdownPermanentlinkVariant"]);
    addOptions("dropdownTopology", jsonData.topologyKeys)
  } else if (jsonData.topology === "001") {
    //showForms(["dropdownLinktype"]);addOptions("dropdownLinktype", [["PL00", "Permanent link"]], jsonData.linktype);
    jsonData.linktype = "PL00";
    buildMenuSides();
  } else if (jsonData.topology === "004") {
    //showForms(["dropdownLinktype"]);addOptions("dropdownLinktype", [["PE00", "Port extension"]], jsonData.linktype);
    jsonData.linktype = "PE00";
    buildMenuSides();
  } else {
    showForms(["dropdownLinktype"]);
    addOptions("dropdownLinktype", [
      ["0000", "How do we connect?"],
      ["DC00", "Direct-connect"],
      ["IC00", "Inter-connect"],
      ["CC00", "Cross-connect"]
    ], jsonData.linktype);
    buildMenuSides();
  }

}
//sides
function buildMenuSides() {
  hideForms(["dropdownSides"]);
  if (jsonData.linktype === "IC00" || jsonData.linktype === "CC00" || jsonData.linktype === "DC00") {
    showForms(["dropdownSides"]);
    addOptions("dropdownSides", [
      ["00_00", "Now choose transceiver on side A and side B..."],
      ["Du_Du", "Duplex to duplex"],
      ["Pa_Du", "Parallel to duplex (breakout)"],
      ["Pa_Pa", "Parallel to parallel"]
    ], jsonData.sides);
  } else if (jsonData.linktype === "PE00") {
    showForms(["dropdownSides"]);
    addOptions("dropdownSides", [
      ["00_00", "Now choose transceiver on side A and adapter on side B..."],
      ["Du_LC", "Duplex to duplex"],
      ["Pa_LC", "Parallel to duplex (breakout)"],
      ["Pa_MT", "Parallel to parallel"]
    ], jsonData.sides);
  } else if (jsonData.linktype === "PL00") {
    showForms(["dropdownSides"]);
    addOptions("dropdownSides", [
      ["00_00", "Now choose adapter on side A to side B..."],
      ["LC_LC", "Duplex to duplex"],
      ["MT_LC", "Parallel to duplex (breakout)"],
      ["MT_MT", "Parallel to parallel"]
    ], jsonData.sides);
  } else {
  }
  buildMenuLinks()
}
//logic for permanent link and port extension
function buildMenuLinks() {
  hideForms([["dropdownPermanentlink"], ["dropdownPortextension"]])
  if (jsonData.linktype === "IC00" || jsonData.linktype === "CC00") {
    buildMenuPermanentLink();
  } else if (jsonData.linktype === "PL00" && jsonData.sides !== "00_00") {
    buildMenuPermanentLink();
  } else if (jsonData.linktype === "PE00") {
    buildMenuPortextension();
  }

}
function buildMenuPermanentLink() {
  if (jsonData.linktype !== "PE00") {
    if (jsonData.sides !== "00_00" && jsonData.topology !== "PE00") { showForms(["dropdownPermanentlink"]); }
    //only if there is this type of permanent link in IC00 then can be two variants
    if ((jsonData.permanentlink === "Pa_Du_24f_mtp" || jsonData.permanentlink === "Pa_Du_48f_mtp") && jsonData.linktype === "IC00"){showForms(["dropdownPermanentlinkVariant"])}else{hideForms(["dropdownPermanentlinkVariant"])}
    switch (true) {
      case (jsonData.sides === "Du_Du" || jsonData.sides === "LC_LC"):
        addOptions("dropdownPermanentlink", [
          ["Du_Du_000_000", "Specify your permanent link..."],
          ["Du_Du_12f_mtp", "6x LCd ports plug-and-go"],
          ["Du_Du_24f_mtp", "12x LCd ports plug-and-go"],
          ["Du_Du_48f_mtp", "24x LCd ports plug-and-go"],
          ["Du_Du_12f_spl", "6x LCd ports splice-and-go"],
          ["Du_Du_24f_spl", "12x LCd ports splice-and-go"],
          ["Du_Du_48f_spl", "24x LCd ports splice-and-go"],
          ["Du_Du_12f_pat", "6x LCd ports patch-and-go"],
          ["Du_Du_24f_pat", "12x LCd ports patch-and-go"],
          ["Du_Du_48f_pat", "24x LCd ports patch-and-go"]
        ], jsonData.permanentlink);

        break;
        
      case ((jsonData.sides === "Pa_Du" && jsonData.linktype === "IC00") || (jsonData.sides === "MT_LC" && jsonData.linktype === "PL00")):
        addOptions("dropdownPermanentlink", [
          ["Pa_Du_000_000", "Choose permanent link..."],
          ["Pa_Du_24f_mtp", "3x MPO to 12x LCd ports plug-and-go"],
          ["Pa_Du_48f_mtp", "6x MPO to 24x LCd ports plug-and-go"]
        ], jsonData.permanentlink);
        //in inter-connect there are variants
        addOptions("dropdownPermanentlinkVariant", [
          ["001", "Variant 1"],
          ["002", "Variant 2"]
        ], "001");
        break;
        
      case ((jsonData.sides === "Pa_Du" || jsonData.sides === "MT_LC") && jsonData.linktype === "CC00"):
        addOptions("dropdownPermanentlink", [
          ["00_00_000_000", "Choose permanent link..."],
          ["Du_Du_12f_mtp", "Duplex | Duplex | 6x LCd ports plug-and-go"],
          ["Du_Du_24f_mtp", "Duplex | Duplex | 12x LCd ports plug-and-go"],
          ["Du_Du_48f_mtp", "Duplex | Duplex | 24x LCd ports plug-and-go"],
          ["Du_Du_12f_spl", "Duplex | Duplex | 6x LCd ports splice-and-go"],
          ["Du_Du_24f_spl", "Duplex | Duplex | 12x LCd ports splice-and-go"],
          ["Du_Du_48f_spl", "Duplex | Duplex | 24x LCd ports splice-and-go"],
          ["Du_Du_12f_pat", "Duplex | Duplex | 6x LCd ports patch-and-go"],
          ["Du_Du_24f_pat", "Duplex | Duplex | 12x LCd ports patch-and-go"],
          ["Du_Du_48f_pat", "Duplex | Duplex | 24x LCd ports patch-and-go"],
          ["Pa_Du_24f_mtp", "Parallel | Duplex | 3x MPO to 12x LCd ports plug-and-go"],
          ["Pa_Du_48f_mtp", "Parallel | Duplex | 6x MPO to 24x LCd ports plug-and-go"]
        ], jsonData.permanentlink);
        break;
      case (jsonData.sides === "Pa_Pa" || jsonData.sides === "MT_MT"):
        addOptions("dropdownPermanentlink", [
          ["Pa_Pa_000_000", "Choose permanent link..."],
          ["Pa_Pa_72f_mtp", "6x MPO ports patch-and-go"],
          ["Pa_Pa_44f_mtp", "12x MPO ports patch-and-go"],
          ["Pa_Pa_88f_mtp", "24x MPO ports patch-and-go"]
        ], jsonData.permanentlink);
        break;
    }
  }
  if (jsonData.linktype === "CC00") {
    buildMenuPortextension()
  }
}
function buildMenuPortextension() {
  hideForms(["dropdownPortextension"]);
  if (jsonData.sides !== "00_00" && jsonData.linktype === "PE00") { showForms(["dropdownPortextension"]) }
  else if (jsonData.sides !== "00_00" && jsonData.linktype === "CC00" && jsonData.permanentlink.substring(6, 13) !== "000_000") { showForms(["dropdownPortextension"]) };
  switch (true) {
    case ((jsonData.sides === "Du_LC" || jsonData.sides === "Du_Du")):
      addOptions("dropdownPortextension", [
        ["00_00_000_000", "Specify port extension..."],
        ["Du_Du_12f_pat", "6x LCd ports patch-and-go"],
        ["Du_Du_24f_pat", "12x LCd ports patch-and-go"],
        ["Du_Du_48f_pat", "24x LCd ports patch-and-go"]
      ], jsonData.portextension);
      break;
    case (jsonData.sides === "Pa_LC" || jsonData.sides === "Pa_Du"):
      //two cases are possible depending on permanent link
      if (jsonData.permanentlink.substring(0, 5) === "Pa_Du") {
        addOptions("dropdownPortextension", [
          ["00_00_000_000", "Specify port extension..."],
          ["Pa_Pa_72f_mtp", "6x MPO ports patch-and-go"],
          ["Pa_Pa_44f_mtp", "12x MPO ports patch-and-go"],
          ["Pa_Pa_88f_mtp", "24x MPO ports patch-and-go"]
        ], jsonData.portextension);
      } else if (jsonData.permanentlink.substring(0, 5) === "Du_Du" || jsonData.permanentlink.substring(0, 5) === "00_00") {
        addOptions("dropdownPortextension", [
          ["00_00_000_000", "Specify port extension..."],
          ["Pa_Du_24f_mtp", "3x MPO to 12x LCd ports plug-and-go"],
          ["Pa_Du_48f_mtp", "6x MPO to 24x LCd ports plug-and-go"]
        ], jsonData.portextension);
      }
      break;
    case (jsonData.sides === "Pa_MT" || jsonData.sides === "Pa_Pa"):
      addOptions("dropdownPortextension", [
        ["00_00_000_000", "Specify port extension..."],
        ["Pa_Pa_72f_mtp", "6x MPO ports patch-and-go"],
        ["Pa_Pa_44f_mtp", "12x MPO ports patch-and-go"],
        ["Pa_Pa_88f_mtp", "24x MPO ports patch-and-go"]
      ], jsonData.portextension);
      break;
  }
}
//action logic for the "oninput" in the user form
function selectEvent(tag) {
  switch (tag.id) {
    case "dropdownTopology":
      //clean form if new topology selected  
      jsonData.linktype = "0000";
      jsonData.sides = "00_00";
      jsonData.permanentlink = "00_00_000_000";
      jsonData.portextension = "00_00_000_000";
      hideForms(["dropdownLinktype", "dropdownSides", "dropdownPermanentlink", "dropdownPortextension"])
      jsonData.topology = tag.value
      buildMenuLinkType();
      break;
    case "dropdownLinktype":

      jsonData.sides = "00_00";
      jsonData.permanentlink = "00_00_000_000";
      jsonData.portextension = "00_00_000_000";
      jsonData.linktype = tag.value
      buildMenuLinkType();
      break;
    case "dropdownSides":
      if (jsonData.linktype === "PL00") {
        if (tag.value === "00_00") { jsonData.permanentlink = "00_00_000_000"; }
        if (tag.value === "LC_LC") { jsonData.permanentlink = "Du_Du_000_000"; }
        if (tag.value === "MT_LC") { jsonData.permanentlink = "Pa_Du_000_000"; }
        if (tag.value === "MT_MT") { jsonData.permanentlink = "Pa_Pa_000_000"; }
        jsonData.portextension = "00_00_000_000";
      }
      if (jsonData.linktype === "IC00") {
        if (tag.value === "00_00") { jsonData.permanentlink = "00_00_000_000"; }
        if (tag.value === "Du_Du") { jsonData.permanentlink = "Du_Du_000_000"; }
        if (tag.value === "Pa_Du") { jsonData.permanentlink = "Pa_Du_000_000"; }
        if (tag.value === "Pa_Pa") { jsonData.permanentlink = "Pa_Pa_000_000"; }
        jsonData.portextension = "00_00_000_000";
      }
      if (jsonData.linktype === "PE00") {
        jsonData.permanentlink = "00_00_000_000";
        if (tag.value === "Du_LC") { jsonData.portextension = "Du_Du_000_000"; }
        if (tag.value === "Pa_LC") { jsonData.portextension = "Pa_Du_000_000"; }
        if (tag.value === "Pa_MT") { jsonData.portextension = "Pa_Pa_000_000"; }

      }
      if (jsonData.linktype === "CC00" || jsonData.linktype === "DC00") {
        jsonData.permanentlink = "00_00_000_000";
        jsonData.portextension = "00_00_000_000";
      }

      jsonData.sides = tag.value
      buildMenuSides();
      break;
    case "dropdownPermanentlink":
      if (jsonData.permanentlink.substring(0, 5) !== tag.value.substring(0, 5)) { jsonData.portextension = "00_00_000_000"; }
      if (tag.value === "00_00_000_000") { jsonData.portextension = "00_00_000_000"; }
      jsonData.permanentlink = tag.value
      buildMenuPermanentLink();
      break;
    case "dropdownPermanentlinkVariant":
      console.log(tag.value+" clicked")
      break;
    case "dropdownPortextension":
      jsonData.portextension = tag.value
      buildMenuPortextension();
      break;

  }

  var appImageName = jsonData.topology + '-' + jsonData.linktype + '-' + jsonData.sides + '-' + jsonData.permanentlink.substring(0, 5) + '-' + jsonData.portextension.substring(0, 5) + '.png'
  var fullLinkName = jsonData.topology + '-' + jsonData.linktype + '-' + jsonData.sides + '-' + jsonData.permanentlink + '-' + jsonData.portextension + '.png'
  console.log("application image name: " + appImageName)
  console.log("full link name:         " + fullLinkName)
  changeApplicationImage(appImageName);
  changeChannelImage(fullLinkName);
}
//function that preloads all images listed in the above array 
function preloadImages() {
  images.forEach((imageUrl) => {
    const img = new Image();
    img.src = imagesPath + imageUrl;
    img.onerror = function () { console.log(imageUrl + " not found") }
    imagesPreloaded.push({ name: imageUrl, imgObj: img })
  });
  console.log("---" + imagesPreloaded.length + " images preloaded---")
}
//changes the application-image, need to provide the image source
function changeApplicationImage(imgSrc) {
  var imgTag = document.getElementById("application-image")
  var headerTag = document.getElementById("application-header")
  var img = new Image();
  for (var obj of imagesPreloaded) { //search inside preloaded images
    if (obj.name === imgSrc) {
      img = obj.imgObj;
      break;
    }
  }
  if (img.src === '') { //when the image not existing, hide everything
    imgTag.style = "display:none"
    headerTag.style = "display:none"
  } else { //when the image existing, unhide
    imgTag.style = "display:block";
    imgTag.style.opacity = 0;
    headerTag.style = "display:block"
    setTimeout(() => {
      imgTag.style.opacity = 1;
      imgTag.src = img.src
    }, 300);
  }
}
//changes the application-image, need to provide the image source
function changeChannelImage(code) {
  var layer1 = document.getElementById("channel-layer1")
  var layer2 = document.getElementById("channel-layer2")
  var layer3 = document.getElementById("channel-layer3")
  var layer4 = document.getElementById("channel-layer4")
  var layer5 = document.getElementById("channel-layer5")
  var layer6 = document.getElementById("channel-layer6")
  var headerTag = document.getElementById("channel-header") //TODO
  var permanentlink = jsonData.permanentlink.substring(6, 13);
  var portextension = jsonData.portextension.substring(6, 13);
  //remove all pictures
  changePicture(layer1, "nothing")
  changePicture(layer2, "nothing")
  changePicture(layer3, "nothing")
  changePicture(layer4, "nothing")
  changePicture(layer5, "nothing")
  changePicture(layer6, "nothing")
  //logic for layer 1. 
  //background(equipment), not shown if PL selected, in PE scenario has only left equipment 
  if (jsonData.linktype === "CC00" || jsonData.linktype === "IC00" || jsonData.linktype === "DC00") { changePicture(layer1, "background-1.png") }
  if (jsonData.linktype === "PL00") { changePicture(layer1, "nothing") }
  if (jsonData.linktype === "PE00") { changePicture(layer1, "background-2.png") }
  //logic for layer 2.
  //show permanent link if exists
  if (permanentlink !== "000_000") { changePicture(layer2, "pl-" + jsonData.permanentlink + ".png") }
  //logic for layer 3.
  //port extension link if exists
  if (portextension !== "000_000") { changePicture(layer3, "pe-" + jsonData.portextension + ".png") }

  //-----logic for layer 4  - patch cord left in IC or CC scenario
  //pc-cc-Du_Du_AB
  if (
    (jsonData.linktype === "CC00" && jsonData.sides === "Du_Du" && permanentlink !== "000_000" && portextension !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(0, 5) === "Pa_Du")) {
    changePicture(layer4, "pc-cc-Du_Du_AB.png")
  }
  //pc-cc-Pa_Pa_A
  if (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000" && portextension !== "000_000") {
    changePicture(layer4, "pc-cc-Pa_Pa_A.png")
  }
  //pc-cc-Pa_Pa_B
  if (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(0, 5) === "Pa_Pa" && permanentlink !== "000_000" && portextension !== "000_000") {
    changePicture(layer4, "pc-cc-Pa_Pa_B.png")
  }
  //pc-left-Du_Du_AB
  if (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink !== "000_000") {
    changePicture(layer4, "pc-left-Du_Du_AB.png")
  }
  //pc-left-Pa_Pa_A
  if (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Du" && permanentlink !== "000_000") {
    changePicture(layer4, "pc-left-Pa_Pa_A.png")
  }
  //pc-left-Pa_Pa_B
  if ((jsonData.linktype === "IC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000")) {
    changePicture(layer4, "pc-left-Pa_Pa_B.png")
  }
  //-----logic for layer 5  - patch cord right
  //pc-right1-Du_Du_AB
  if (
    (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) === "12") || 
    (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink.substring(4, 7) === "pat") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) === "12" && portextension !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(0, 5) === "Pa_Du" && permanentlink.substring(0, 2) === "12" && portextension !== "000_000")) {
    changePicture(layer5, "pc-right1-Du_Du_AB.png")
  }
  console.log(permanentlink.substring(4, 7))
  //pc-right2-Du_Du_AB
  if (
    (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) !== "12" && permanentlink.substring(4, 7) !== "pat"&& permanentlink !== "000_000") || 
    (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Du" && permanentlink !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) !== "12" && portextension !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(0, 5) === "Pa_Du" && permanentlink.substring(0, 2) !== "12" && portextension !== "000_000")) {
    changePicture(layer5, "pc-right2-Du_Du_AB.png")
  }
  //pc-right1-Pa_Pa_B
  if (
    (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000" && portextension !== "000_000")) {
    changePicture(layer5, "pc-right1-Pa_Pa_B.png")
  }
  //pc-right1-Du_Du_AA
  //pc-right2-Du_Du_AA


  //----logic for layer 6
  //cable in DC scenario
  if (jsonData.linktype === "DC00") { changePicture(layer6, "dc-" + jsonData.sides + ".png") }
}

function changePicture(htmltag, imgName) {
  var img = new Image();
  var success = false;
  if (imgName !== "nothing") { // just to hide the picture
    for (var obj of imagesPreloaded) { //search inside preloaded images
      if (obj.name === imgName) {
        img = obj.imgObj;
        success = true;
        break;
      }
    }
  }
  if (success) {
    if (img.src === '') { //when the image not existing, hide everything
      htmltag.style = "display:none"
    } else { //when the image existing, unhide
      htmltag.style = "display:block";
      htmltag.style.opacity = 0;
      setTimeout(() => {
        htmltag.style.opacity = 1;
        htmltag.src = img.src
      }, 300);
    }
  } else {
    htmltag.style = "display:none"
  }
}
//preload images on page load
window.onload = preloadImages;
//initiate the form
window.addEventListener("load", function () {
  buildMenuLinkType();
  document.getElementById("tool").style = "display:block"
});
