
var imagesPath = "images/";
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
  "pl-Du_Du_12f_mtp_MM.png",
  "pl-Du_Du_24f_mtp_MM.png",
  "pl-Du_Du_48f_mtp_MM.png",
  "pl-Du_Du_12f_spl_MM.png",
  "pl-Du_Du_24f_spl_MM.png",
  "pl-Du_Du_48f_spl_MM.png",
  "pl-Du_Du_12f_pat_MM.png",
  "pl-Du_Du_24f_pat_MM.png",
  "pl-Du_Du_48f_pat_MM.png",
  "pl-Pa_Du_24f_mtp_MM.png",
  "pl-Pa_Du_48f_mtp_MM.png",
  "pl-Pa_Pa_72f_mtp_MM.png",
  "pl-Pa_Pa_44f_mtp_MM.png",
  "pl-Pa_Pa_88f_mtp_MM.png",
  "pe-Du_Du_12f_pat_MM.png",
  "pe-Du_Du_24f_pat_MM.png",
  "pe-Du_Du_48f_pat_MM.png",
  "pe-Pa_Du_24f_mtp_MM.png",
  "pe-Pa_Du_48f_mtp_MM.png",
  "pe-Pa_Pa_72f_mtp_MM.png",
  "pe-Pa_Pa_44f_mtp_MM.png",
  "pe-Pa_Pa_88f_mtp_MM.png",
  "dc-Du_Du_MM.png",
  "dc-Pa_Du_MM.png",
  "dc-Pa_Pa_MM.png",
  "pc-cc-Du_Du_AB_MM.png",
  "pc-cc-Pa_Pa_A_MM.png",
  "pc-cc-Pa_Pa_B_MM.png",
  "pc-left-Du_Du_AB_MM.png",
  "pc-left-Pa_Pa_A_MM.png",
  "pc-left-Pa_Pa_B_MM.png",
  "pc-right1-Du_Du_AA_MM.png",
  "pc-right1-Du_Du_AB_MM.png",
  "pc-right1-Pa_Pa_B_MM.png",
  "pc-right2-Du_Du_AA_MM.png",
  "pc-right2-Du_Du_AB_MM.png"
];
var imgcounter = 0;
var timeToReadMessage = 1500;
var imagesPreloaded = [];
var jsonData = {
  excelReadyStatus:false,
  topology: undefined, //t
  linktype: undefined, //l
  sides: undefined, //s
  fibertype: undefined,//ft
  permanentlink: undefined, //pl
  portextension: undefined, //pe
  rackA: undefined, //r1
  rackB: undefined, //r2
  lengthPL: undefined, //lpl
  lengthPE: undefined, //lpe
  lengthDC: undefined, //ldc
  transceiver: undefined, //tr
  patchA: undefined, //pc1
  patchB: undefined, //pc2
  vocabulary: {
    lengthsSMmtplong: [5, 7, 10, 12, 15, 17, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 50, 60, 70, 80, 90, 100],
    lengthsMMmtplong: [5, 7, 10, 12, 15, 17, 20, 22, 25, 27, 30, 32, 35, 37, 40, 42, 45, 47, 50],
    lengthsSMmtpshort: [1, 2, 3, 4, 5],
    lengthsMMmtpshort: [1, 2, 3, 4, 5],
    lengthsMMpat: [1, 2, 3, 3.5, 4, 5, 7, 10, 12, 15, 17, 20, 25, 30],
    lengthsSMpat: [1, 2, 3, 3.5, 4, 5, 7, 10, 12, 15, 17, 20, 25, 30],
    "000": "What do you connect?",
    "001": "Permanent link",
    "002": "Switch to server",
    "003": "Switch to switch",
    "004": "Port extension",
    "0000": "Specify scenario..",
    "DC00": "Direct-connect",
    "IC00": "Inter-connect",
    "CC00": "Cross-connect",
    "PL00": "No channel",
    "00_00": "Now choose transceiver on side A and side B...",
    "01_01": "Now choose transceiver on side A and adapter on side B...",
    "02_02": "Now choose adapter on side A to side B...",
    "LC_LC": "LC duplex adapter to LC duplex adapter",
    "MT_MT": "MPO adapter to MPO adapter",
    "MT_LC": "MPO adapter to LC duplex adapter",
    "Du_Du": "Duplex to duplex transceiver",
    "Pa_Pa": "Parallel to parallel transceiver",
    "Pa_Du": "Parallel to duplex transceiver",
    "Du_LC": "Duplex transceiver to LC duplex adapter",
    "Pa_LC": "Parallel transceiver to LC duplex adapter (breakout)",
    "Pa_MT": "Parallel transceiver to MPO ",
    "MM": "Multimode",
    "SM": "Singlemode",
    "pl-0": "Specify your permanent link...",
    "pe-0": "Specify port extension...",
    "pl-Du_Du_12f_mtp": "6x LCd ports plug-and-go permanent link",
    "pl-Du_Du_12f_pat": "6x LCd ports patch-and-go permanent link",
    "pl-Du_Du_12f_spl": "6x LCd ports splice-and-go permanent link",
    "pl-Du_Du_24f_mtp": "12x LCd ports plug-and-go permanent link",
    "pl-Du_Du_24f_pat": "12x LCd ports patch-and-go permanent link",
    "pl-Du_Du_24f_spl": "12x LCd ports splice-and-go permanent link",
    "pl-Du_Du_48f_mtp": "24x LCd ports plug-and-go permanent link",
    "pl-Du_Du_48f_pat": "24x LCd ports patch-and-go permanent link",
    "pl-Du_Du_48f_spl": "24x LCd ports splice-and-go permanent link",
    "pl-Pa_Du_24f_mtp": "3x MPO to 12x LCd ports plug-and-go permanent link",
    "pl-Pa_Du_48f_mtp": "6x MPO to 24x LCd ports plug-and-go permanent link",
    "pl-Pa_Pa_72f_mtp": "6x MPO ports patch-and-go permanent link",
    "pl-Pa_Pa_44f_mtp": "12x MPO ports patch-and-go permanent link",
    "pl-Pa_Pa_88f_mtp": "24x MPO ports patch-and-go permanent link",
    "pe-Du_Du_12f_pat": "6x LCd ports patch-and-go",
    "pe-Du_Du_24f_pat": "12x LCd ports patch-and-go",
    "pe-Du_Du_48f_pat": "24x LCd ports patch-and-go",
    "pe-Pa_Pa_72f_mtp": "6x MPO ports patch-and-go",
    "pe-Pa_Pa_44f_mtp": "12x MPO ports patch-and-go",
    "pe-Pa_Pa_88f_mtp": "24x MPO ports patch-and-go",
    "pe-Pa_Du_24f_mtp": "3x MPO to 12x LCd ports plug-and-go",
    "pe-Pa_Du_48f_mtp": "6x MPO to 24x LCd ports plug-and-go",
    "pc1": "Patch cord setup 1",
    "pc2": "Patch cord setup 2",
    "tra-Du_Du_MM_001": "2x SFP+ 10G SR",
    "tra-Du_Du_MM_002": "2x SFP28 25G SR",
    "tra-Du_Du_SM_001": "2x SFP28 25G LR",
    "tra-Du_Du_SM_002": "2x QSFP28 100G CWDM4",
    "tra-Du_Du_SM_003": "2x QSFP-DD 400G FR4",
    "tra-Pa_Pa_MM_001": "2x QSFP+ 40G SR4",
    "tra-Pa_Pa_MM_002": "2x QSFP28 100G SR4",
    "tra-Pa_Pa_SM_001": "2x QSFP28 100G PSM4",
    "tra-Pa_SM_SM_002": "2x QSFP-DD 400G DR4",
    "tra-Pa_Du_MM_001": "QSFP+ 40G SR4 to 4x10G SR",
    "tra-Pa_Du_MM_002": "QSFP28 100G SR4 to 4x25G SR",
    "tra-Pa_Du_SM_001": "QSFP28 100G PSM4 to 4x25G LR",
    "tra-Pa_Du_SM_002": "QSFP-DD 400G DR4 to 4x100G DR",
    "tra-Du_00_MM_001": "SFP+ 10G SR",
    "tra-Du_00_MM_002": "SFP28 25G SR",
    "tra-Du_00_SM_001": "SFP28 25G LR",
    "tra-Du_00_SM_002": "QSFP28 100G CWDM4",
    "tra-Du_00_SM_003": "QSFP-DD 400G FR4",
    "tra-Pa_00_MM_001": "QSFP+ 40G SR4",
    "tra-Pa_00_MM_002": "QSFP28 100G SR4",
    "tra-Pa_00_SM_001": "QSFP28 100G PSM4",
    "tra-Pa_00_SM_002": "QSFP-DD 400G DR4"
  }
};
var intro=["row0-1", "row0-2", "row0-3"];
var application=["row1-1", "row1-2", "row1-3", "row1-4", "row1-5", "row1-6", "row1-7"];
var linktype=["row2-1","row2-2","row2-3"];
var sideAtoB=["row3-1","row3-2"]
var applicationImg=["application0-1","application0-2"];
var step1=["step1-1","step1-2"]
var fibertype=["row4-1","row4-2","row4-3","row4-4"];
var permanentlink=["row5-1","row5-2"];
var portextension=["row6-1","row6-2"];
var step2=["step2-1","step2-2","step2-3","step2-4"];
var channel1Img=["channel1-1","channel1-2"]
var channel2Img=["channel2-1","channel2-2"]
var racks=["row7-1","row7-2","row7-3","row7-4","row7-5"];
var lengths=["row8-1"];
var selectPL=["selectPL-1","selectPL-2","selectPL-3"];
var selectPE=["selectPE-1","selectPE-2","selectPE-3"];
var selectDC=["selectDC-1","selectDC-2","selectDC-3"];
var transceivers=["row9-1","row9-2","row9-3","row9-4","row9-5","row9-6"];
var step3=["step3-1","step3-2","step3-3","step3-4"];
var proposal=["row10-1","row10-2"];
var url=["row11-1","row11-2"];
var step4=["step4-1","step4-2"];
var result=["row12-1","row12-2"];
//topology and link type
//there are 4 topologies and 5 link types
function formLogic() {
  //select1 topologies always shown and open
  addOptions("dropdownTopology", ["000", "001", "002", "003", "004"], jsonData.topology)
  //select2 only if topology 002 or 003 chosen
  addOptions("dropdownLinktype", ["0000", "DC00", "IC00", "CC00"], jsonData.linktype)
  //select3 - sides
  switch (true) {
    case (jsonData.linktype === "IC00" || jsonData.linktype === "CC00" || jsonData.linktype === "DC00"):
      addOptions("dropdownSides", ["00_00", "Du_Du", "Pa_Du", "Pa_Pa"], jsonData.sides);
      break;
    case (jsonData.linktype === "PE00"):
      addOptions("dropdownSides", ["01_01", "Du_LC", "Pa_LC", "Pa_MT"], jsonData.sides);
      break;
    case (jsonData.linktype === "PL00"):
      addOptions("dropdownSides", ["02_02", "LC_LC", "MT_LC", "MT_MT"], jsonData.sides);
      break;
  }
  //select5 - permanent link
  //logic for patch cords variants
  switch (true) {
    case (jsonData.sides === "Du_Du" || jsonData.sides === "LC_LC"):
      addOptions("dropdownPermanentlink", [
        "pl-0",
        "pl-Du_Du_12f_mtp",
        "pl-Du_Du_24f_mtp",
        "pl-Du_Du_48f_mtp",
        "pl-Du_Du_12f_spl",
        "pl-Du_Du_24f_spl",
        "pl-Du_Du_48f_spl",
        "pl-Du_Du_12f_pat",
        "pl-Du_Du_24f_pat",
        "pl-Du_Du_48f_pat"], jsonData.permanentlink);
      break;
    case ((jsonData.sides === "Pa_Du" && jsonData.linktype === "IC00") || (jsonData.sides === "MT_LC" && jsonData.linktype === "PL00")):
      addOptions("dropdownPermanentlink", [
        "pl-0",
        "pl-Pa_Du_24f_mtp",
        "pl-Pa_Du_48f_mtp"], jsonData.permanentlink);
      //in inter-connect there are variants
      // addOptions("dropdownpatchcordvariant", ["pc1", "pc2"], "001");
      break;
    case ((jsonData.sides === "Pa_Du" || jsonData.sides === "MT_LC") && jsonData.linktype === "CC00"):
      addOptions("dropdownPermanentlink", [
        "pl-0",
        "pl-Du_Du_12f_mtp",
        "pl-Du_Du_24f_mtp",
        "pl-Du_Du_48f_mtp",
        "pl-Du_Du_12f_spl",
        "pl-Du_Du_24f_spl",
        "pl-Du_Du_48f_spl",
        "pl-Du_Du_12f_pat",
        "pl-Du_Du_24f_pat",
        "pl-Du_Du_48f_pat",
        "pl-Pa_Du_24f_mtp",
        "pl-Pa_Du_48f_mtp"], jsonData.permanentlink);
      break;
    case (jsonData.sides === "Pa_Pa" || jsonData.sides === "MT_MT"):
      addOptions("dropdownPermanentlink", [
        "pl-0",
        "pl-Pa_Pa_72f_mtp",
        "pl-Pa_Pa_44f_mtp",
        "pl-Pa_Pa_88f_mtp"], jsonData.permanentlink);
      break;
  }
  //select6 - port expension
  switch (true) {
    case ((jsonData.sides === "Du_LC" || jsonData.sides === "Du_Du")):
      addOptions("dropdownPortextension", ["pe-0", "pe-Du_Du_12f_pat", "pe-Du_Du_24f_pat", "pe-Du_Du_48f_pat"], jsonData.portextension);
      break;
    case (jsonData.sides === "Pa_LC" || jsonData.sides === "Pa_Du"):
      //two cases are possible depending on permanent link
      if (jsonData.permanentlink.substring(3, 8) === "Pa_Du") {
        addOptions("dropdownPortextension", ["pe-0", "pe-Pa_Pa_72f_mtp", "pe-Pa_Pa_44f_mtp", "pe-Pa_Pa_88f_mtp"], jsonData.portextension);
      } else if (jsonData.permanentlink.substring(3, 8) === "Du_Du" || jsonData.permanentlink.substring(3, 8) === "00_00") {
        addOptions("dropdownPortextension", ["pe-0", "pe-Pa_Du_24f_mtp", "pe-Pa_Du_48f_mtp"], jsonData.portextension);
      }
      break;
    case (jsonData.sides === "Pa_MT" || jsonData.sides === "Pa_Pa"):
      addOptions("dropdownPortextension", ["pe-0", "pe-Pa_Pa_72f_mtp", "pe-Pa_Pa_44f_mtp", "pe-Pa_Pa_88f_mtp"], jsonData.portextension);
      break;
  }

}
function checkTransceivers() {
  //transceiver logic
  if (jsonData.linktype !== "PL00") {
    if (jsonData.sides === "Du_Du" && jsonData.fibertype === "MM") {
      addTransceiverButton("tra-Du_Du_MM_001", "transceiverButtons")
      addTransceiverButton("tra-Du_Du_MM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Du_Du" && jsonData.fibertype === "SM") {
      addTransceiverButton("tra-Du_Du_SM_001", "transceiverButtons")
      addTransceiverButton("tra-Du_Du_SM_002", "transceiverButtons")
      addTransceiverButton("tra-Du_Du_SM_003", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_Pa" && jsonData.fibertype === "MM") {
      addTransceiverButton("tra-Pa_Pa_MM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_Pa_MM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_Pa" && jsonData.fibertype === "SM") {
      addTransceiverButton("tra-Pa_Pa_SM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_SM_SM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_Du" && jsonData.fibertype === "MM") {
      addTransceiverButton("tra-Pa_Du_MM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_Du_MM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_Du" && jsonData.fibertype === "SM") {
      addTransceiverButton("tra-Pa_Du_SM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_Du_SM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Du_LC" && jsonData.fibertype === "MM") {
      addTransceiverButton("tra-Du_00_MM_001", "transceiverButtons")
      addTransceiverButton("tra-Du_00_MM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Du_LC" && jsonData.fibertype === "SM") {
      addTransceiverButton("tra-Du_00_SM_001", "transceiverButtons")
      addTransceiverButton("tra-Du_00_SM_002", "transceiverButtons")
      addTransceiverButton("tra-Du_00_SM_003", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_MT" && jsonData.fibertype === "MM") {
      addTransceiverButton("tra-Pa_00_MM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_00_MM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_MT" && jsonData.fibertype === "SM") {
      addTransceiverButton("tra-Pa_00_SM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_00_SM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_LC" && jsonData.fibertype === "MM") {
      addTransceiverButton("tra-Pa_00_MM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_00_MM_002", "transceiverButtons")
    }
    if (jsonData.sides === "Pa_LC" && jsonData.fibertype === "SM") {
      addTransceiverButton("tra-Pa_00_SM_001", "transceiverButtons")
      addTransceiverButton("tra-Pa_00_SM_001", "transceiverButtons")
    }
  }
}
//changes the application-image, need to provide the image source
function checkChannelImage() {
  var imgArr1 = [];
  var imgArr2 = []; //if there are two implementations --> to support two links with various patch cords
  var permanentlink = jsonData.permanentlink.substring(9, 16);
  var portextension = jsonData.portextension.substring(9, 16);
  var ft = "_" + jsonData.fibertype
  jsonData.patchA = ""
  jsonData.patchB = ""
  //logic for layer 1. 
  //background(equipment), not shown if PL selected, in PE scenario has only left equipment 
  if (jsonData.linktype === "CC00" || jsonData.linktype === "IC00" || jsonData.linktype === "DC00") {
    imgArr1.push("background-1.png");
    imgArr2.push("background-1.png")
  }
  if (jsonData.linktype === "PE00") {
    imgArr1.push("background-2.png");
    imgArr2.push("background-2.png")
  }
  //logic for layer 2.
  //show permanent link if exists
  if (permanentlink !== "000_000") {
    imgArr1.push(jsonData.permanentlink + ft + ".png");
    imgArr2.push(jsonData.permanentlink + ft + ".png")
  }
  //logic for layer 3.
  //port extension link if exists
  if (portextension !== "000_000") {
    imgArr1.push(jsonData.portextension + ft + ".png")
  }

  //-----logic for layer 4  - patch cord left in IC or CC scenario
  //pc-cc-Du_Du_AB
  if (
    (jsonData.linktype === "CC00" && jsonData.sides === "Du_Du" && permanentlink !== "000_000" && portextension !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(3, 8) === "Pa_Du")) {
    imgArr1.push("pc-cc-Du_Du_AB" + ft + ".png");
    jsonData.patchA = "pc-Du_Du"
    imgArr2.push("pc-cc-Du_Du_AB" + ft + ".png");
  }
  //pc-cc-Pa_Pa_A
  if (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000" && portextension !== "000_000") {
    imgArr1.push("pc-cc-Pa_Pa_A" + ft + ".png");
    jsonData.patchA = "pc-Pa_Pa";
    imgArr2.push("pc-cc-Pa_Pa_A" + ft + ".png");
  }
  //pc-cc-Pa_Pa_B
  if (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(3, 8) === "Pa_Pa" && permanentlink !== "000_000" && portextension !== "000_000") {
    imgArr1.push("pc-cc-Pa_Pa_B" + ft + ".png");
    jsonData.patchA = "pc-Pa_Pa";
    imgArr2.push("pc-cc-Pa_Pa_B" + ft + ".png");
  }
  //pc-left-Du_Du_AB
  if (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink !== "000_000") {
    imgArr1.push("pc-left-Du_Du_AB" + ft + ".png");
    jsonData.patchA = "pc-Du_Du";
    imgArr2.push("pc-left-Du_Du_AB" + ft + ".png");
  }
  //TWO variants!!! pc-left-Pa_Pa_A or pc-left-Pa_Pa_B
  if (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Du" && permanentlink !== "000_000") {
    imgArr1.push("pc-left-Pa_Pa_A" + ft + ".png");
    jsonData.patchA = "pc-Pa_Pa";
    imgArr2.push("pc-left-Pa_Pa_B" + ft + ".png");
  }
  //pc-left-Pa_Pa_B
  if (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000") {
    imgArr1.push("pc-left-Pa_Pa_B" + ft + ".png");
    jsonData.patchA = "pc-Pa_Pa";
    imgArr2.push("pc-left-Pa_Pa_B" + ft + ".png");
  }
  //-----logic for layer 5  - patch cord right
  //pc-right1-Du_Du_AB
  if (
    (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) === "12") ||
    (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink.substring(4, 7) === "pat") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) === "12" && portextension !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(0, 5) === "Pa_Du" && permanentlink.substring(0, 2) === "12" && portextension !== "000_000")) {
    imgArr1.push("pc-right1-Du_Du_AB" + ft + ".png");
    jsonData.patchB = "pc-Du_Du"
    imgArr2.push("pc-right1-Du_Du_AB" + ft + ".png");
  }
  //pc-right2-Du_Du_AB
  if (
    (jsonData.linktype === "IC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) !== "12" && permanentlink.substring(4, 7) !== "pat" && permanentlink !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Du_Du" && permanentlink.substring(0, 2) !== "12" && portextension !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Du" && jsonData.portextension.substring(0, 5) === "Pa_Du" && permanentlink.substring(0, 2) !== "12" && portextension !== "000_000")) {
    imgArr1.push("pc-right2-Du_Du_AB" + ft + ".png");
    jsonData.patchB = "pc-Du_Du";
    imgArr2.push("pc-right2-Du_Du_AB" + ft + ".png");
  }
  //pc-right1-Pa_Pa_B
  if (
    (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000") ||
    (jsonData.linktype === "CC00" && jsonData.sides === "Pa_Pa" && permanentlink !== "000_000" && portextension !== "000_000")) {
    imgArr1.push("pc-right1-Pa_Pa_B" + ft + ".png");
    jsonData.patchB = "pc-Pa_Pa";
    imgArr2.push("pc-right1-Pa_Pa_B" + ft + ".png");
  }
  //pc-right2-Du_Du_AA
  if (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Du" && permanentlink !== "000_000") {
    imgArr1.push("pc-right2-Du_Du_AB" + ft + ".png");
    jsonData.patchB = "pc-Du_Du"
    imgArr2.push("pc-right2-Du_Du_AA" + ft + ".png");
  }

  //----logic for layer 6
  //cable in DC scenario
  if (jsonData.linktype === "DC00") {
    imgArr1.push("dc-" + jsonData.sides + ft + ".png");
    imgArr2.push("dc-" + jsonData.sides + ft + ".png");
  }
  addOnCanvas("chCanvas1", imgArr1, imagesPreloaded, channel1Img, 1500, 800)
  unhideTag(channel1Img);

  if (jsonData.linktype === "IC00" && jsonData.sides === "Pa_Du") {
    unhideTag(channel2Img);
    addOnCanvas("chCanvas2", imgArr2, imagesPreloaded, channel1Img, 1500, 800)
  }
}
function checkApplicationImage() {
  var imgSrc = jsonData.topology + '-' + jsonData.linktype + '-' + jsonData.sides + '-' + jsonData.permanentlink.substring(3, 8) + '-' + jsonData.portextension.substring(3, 8) + '.png'
  addOnCanvas("appCanvas", [imgSrc], imagesPreloaded, applicationImg, 500, 300)
  unhideTag(applicationImg);
}
function checkProposal() {
  var canvas = document.getElementById("propCanvas");    
  canvas.width = 1500;
  canvas.height = 800;
  var context = canvas.getContext("2d");
  context.imageSmoothingEnabled = false;
  context.font = "30px Arial";
  context.fillStyle = "black";
  context.fillText("This is temporary. There will be image with the bill of materials", 50, 50);
 
  addClickEventToCanvas(canvas)
  unhideTag(proposal)
}


//events
//action logic for the "oninput" in the user form
function selectEvent(tag) {
  switch (tag.id) {
    case "startAgain":
      window.history.pushState({ path: window.location.href.split('?')[0] }, "", window.location.href.split('?')[0])
      jsonData.topology = "000";
      jsonData.linktype = undefined;
      jsonData.sides = undefined;
      jsonData.fibertype = undefined;
      jsonData.permanentlink = undefined;
      jsonData.portextension = undefined;
      jsonData.rackA = undefined;
      jsonData.rackB = undefined;
      jsonData.lengthPL = undefined;
      jsonData.lengthPE = undefined;
      jsonData.lengthDC = undefined;
      jsonData.transceiver = undefined;
      jsonData.patchA = undefined;
      jsonData.patchB = undefined;
      addParagraph(undefined, "choice", true)
      formLogic();
      hideAllTags("table");
      removeChildTags("buttonsPL")
      removeChildTags("buttonsPE")
      removeChildTags("buttonsDC")
      removeChildTags("transceiverButtons")
      //clean lengths buttons
      unhideTag(intro);
      break;
    case "start":
      hideTag(intro);
      unhideTag(application);
      unhideTag(["again"]);
      break;
    case "dropdownTopology":
      jsonData.topology = tag.value
      unhideTag(["query"])
      addParagraph(tag.value, "choice")
      if (tag.value === "001") {
        jsonData.linktype = "PL00";
        hideTag(application);
        unhideTag(sideAtoB)
      } else if
        (tag.value === "004") {
          jsonData.linktype = "PE00";
        hideTag(application);
        unhideTag(sideAtoB)
      } else {
        hideTag(application);
        unhideTag(linktype);
      }
      jsonData.sides = "00_00"
      jsonData.permanentlink = "pl-00_00_000_000"
      jsonData.portextension = "pe-00_00_000_000"
      formLogic()
      break;
    case "dropdownLinktype":
      jsonData.linktype = tag.value
      addParagraph(tag.value, "choice")
      jsonData.sides = "00_00";
      jsonData.permanentlink = "pl-00_00_000_000";
      jsonData.portextension = "pe-00_00_000_000";
      hideTag(linktype)
      unhideTag(sideAtoB)
      formLogic()
      break;
    case "dropdownSides":
      jsonData.sides = tag.value
      addParagraph(tag.value, "choice")
      if (jsonData.linktype === "PL00") {
        if (tag.value === "00_00") { jsonData.permanentlink = "pl-00_00_000_000"; }
        if (tag.value === "LC_LC") { jsonData.permanentlink = "pl-Du_Du_000_000"; }
        if (tag.value === "MT_LC") { jsonData.permanentlink = "pl-Pa_Du_000_000"; }
        if (tag.value === "MT_MT") { jsonData.permanentlink = "pl-Pa_Pa_000_000"; }
        jsonData.portextension = "pe-00_00_000_000";
      }
      if (jsonData.linktype === "IC00") {
        if (tag.value === "00_00") { jsonData.permanentlink = "pl-00_00_000_000"; }
        if (tag.value === "Du_Du") { jsonData.permanentlink = "pl-Du_Du_000_000"; }
        if (tag.value === "Pa_Du") { jsonData.permanentlink = "pl-Pa_Du_000_000"; }
        if (tag.value === "Pa_Pa") { jsonData.permanentlink = "pl-Pa_Pa_000_000"; }
        jsonData.portextension = "pe-00_00_000_000";
      }
      if (jsonData.linktype === "PE00") {
        jsonData.permanentlink = "pl-00_00_000_000";
        if (tag.value === "Du_LC") { jsonData.portextension = "pe-Du_Du_000_000"; }
        if (tag.value === "Pa_LC") { jsonData.portextension = "pe-Pa_Du_000_000"; }
        if (tag.value === "Pa_MT") { jsonData.portextension = "pe-Pa_Pa_000_000"; }

      }
      if (jsonData.linktype === "CC00" || jsonData.linktype === "DC00") {
        jsonData.permanentlink = "pl-00_00_000_000";
        jsonData.portextension = "pe-00_00_000_000";
      }
      hideTag(sideAtoB)
      unhideTag(step1)
      break;
    case "step1Done":
      hideTag(step1)
      unhideTag(fibertype)
      formLogic();
      if (jsonData.linktype !== "CC00") {
        checkApplicationImage()
      }
      break;
    case "MM":
    case "SM":
      jsonData.fibertype = tag.id
      addParagraph(tag.id, "choice")
      hideTag(fibertype)
      if (jsonData.linktype === "PL00" || jsonData.linktype === "IC00" || jsonData.linktype === "CC00") { unhideTag(permanentlink) }
      if (jsonData.linktype === "PE00") { unhideTag(portextension) }
      if (jsonData.linktype === "DC00") { unhideTag(step2); checkChannelImage(); }
      formLogic();
      break;
    case "dropdownPermanentlink":
      jsonData.permanentlink = tag.value
      addParagraph(tag.value, "choice")
      if (jsonData.linktype === "CC00") { hideTag(permanentlink); unhideTag(portextension) } else {
        hideTag(permanentlink)
        unhideTag(step2)
      }
      formLogic();
      break;
    case "dropdownPortextension":
      jsonData.portextension = tag.value
      addParagraph(tag.value, "choice")
      hideTag(portextension)
      unhideTag(step2)
      formLogic();
      if (jsonData.linktype === "CC00") {
        checkApplicationImage()
      }
      break;
    case "step2Done":
      checkChannelImage();
      hideTag(step2)
      unhideTag(racks)
      formLogic();
      break;
    case "rackA":
    case "rackB":
      jsonData[tag.id] = tag.value
      break;
    case "rackNames"://button
      jsonData.rackA = document.getElementById("rackA").value
      jsonData.rackB = document.getElementById("rackB").value
      hideTag(racks)
      unhideTag(lengths)
      selectLength("")
      addParagraph(jsonData.rackA, "choice")
      addParagraph(jsonData.rackB, "choice")
      break;
    case "transceiver": //button
      hideTag(transceivers);
      addParagraph("no transceivers", "choice")
      checkProposal();
      unhideTag(step3)
      unhideTag(proposal)
      unhideTag(url)
      unhideTag(step4)
      break;
    case "step3Done": //button
      hideTag(step3);
      hideTag(step4)
      unhideTag(result)
      break;
    case "buttonUrl": //button
      addDataToURL();
      popUpMessage();
      break;
    default:
      console.log(tag.id)
  }

  if (tag.id.substring(0, 3) === "tra") {
    jsonData.transceiver = tag.id
    hideTag(transceivers);
    addParagraph(jsonData.transceiver, "choice")
    checkProposal();
    unhideTag(step3);
    unhideTag(proposal)
    unhideTag(url)
    unhideTag(step4)
  }
}

function selectLength(tag) {
  var keyValuesPairs;
  if(tag.id!==undefined){keyValuesPairs = tag.id.split('=');}
  switch (true) {
    //first three to build button tags depending on selection
    case (jsonData.linktype === "DC00" && tag === ""):
      buildButtonsArray(jsonData.vocabulary["lengths" + jsonData.fibertype + "mtpshort"], "DC", "buttonsDC")
      unhideTag(selectDC);
      break;
    case ((jsonData.linktype === "IC00" || jsonData.linktype === "PL00" || jsonData.linktype === "CC00") && tag === ""):
      buildButtonsArray(jsonData.vocabulary["lengths" + jsonData.fibertype + "mtplong"], "PL", "buttonsPL")
      unhideTag(selectPL);
      break;
    case (jsonData.linktype === "PE00" && tag === ""):
      buildButtonsArray(jsonData.vocabulary["lengths" + jsonData.fibertype + "mtpshort"], "PE", "buttonsPE")
      unhideTag(selectPE);
      break;

    case (keyValuesPairs[0] === "DC"):
      jsonData.lengthDC = keyValuesPairs[1]
      addParagraph("length " + jsonData.lengthDC + " m", "choice")
      hideTag(selectDC);
      hideTag(lengths)
      unhideTag(transceivers)
      checkTransceivers();
      break;
    case (keyValuesPairs[0] === "PE" && jsonData.linktype !== "CC00"):
      jsonData.lengthPE = keyValuesPairs[1]
      addParagraph("length " + jsonData.lengthPE + " m", "choice")
      hideTag(selectPE);
      hideTag(lengths)
      unhideTag(transceivers)
      checkTransceivers();
      break;
    // case (keyValuesPairs[0] === "PL" && jsonData.linktype !== "PL00"):
    //   jsonData.lengthPL = keyValuesPairs[1]
    //   addParagraph("length " + jsonData.lengthPL + " m", "choice")
    //   hideTag(selectPL);
    //   hideTag(lengths)
    //   unhideTag(transceivers)
    //   checkTransceivers();
    //   break;
    case ((keyValuesPairs[0] === "PL" && jsonData.linktype === "PL00") || (keyValuesPairs[0] === "PL" && jsonData.linktype === "IC00")):
      jsonData.lengthPL = keyValuesPairs[1]
      hideTag(lengths)
      hideTag(selectPL);
      addParagraph("length " + jsonData.lengthPL + " m", "choice")
      unhideTag(step3)
      unhideTag(proposal)
      unhideTag(url)
      unhideTag(step4)
      break;
    case (keyValuesPairs[0] === "PL" && jsonData.linktype === "CC00"):
      jsonData.lengthPL = keyValuesPairs[1];
      addParagraph("length permanent link " + jsonData.lengthPL + " m", "choice")
      hideTag(selectPL);
      hideTag(lengths);
      buildButtonsArray(jsonData.vocabulary["lengths" + jsonData.fibertype + "mtpshort"], "PE", "buttonsPE")
      unhideTag(selectPE);
      break;
    case (keyValuesPairs[0] === "PE" && jsonData.linktype === "CC00"):
      jsonData.lengthPE = keyValuesPairs[1];
      addParagraph("length port extension " + jsonData.lengthPE + " m", "choice")
      hideTag(selectPE);
      hideTag(lengths)
      unhideTag(transceivers)
      checkTransceivers();
      break;
  }

}

function readDatafromURL() {
  // console.log("Reading URL")
  var success = true;
  var queryString = window.location.search;
  queryString = queryString.substring(1);
  var keyValuesPairs = queryString.split('&');
  var vars = {};
  keyValuesPairs.forEach(function (keyValuePair) {
    var pair = keyValuePair.split('=');
    var key = decodeURIComponent(pair[0]);
    var value = decodeURIComponent(pair[1]);
    vars[key] = value
  })
  if (vars["t"] !== undefined) { jsonData.topology = vars["t"] } else { success = false }
  if (vars["l"] !== undefined) { jsonData.linktype = vars["l"] } else { success = false }
  if (vars["s"] !== undefined) { jsonData.sides = vars["s"] } else { success = false }
  if (vars["ft"] !== undefined) { jsonData.fibertype = vars["ft"] } else { success = false }
  if (vars["pl"] !== undefined) { jsonData.permanentlink = vars["pl"] } else { success = false }
  if (vars["pe"] !== undefined) { jsonData.portextension = vars["pe"] } else { success = false }
  if (vars["r1"] !== undefined) { jsonData.rackA = vars["r1"] } else { success = false }
  if (vars["r2"] !== undefined) { jsonData.rackB = vars["r2"] } else { success = false }
  if (vars["lpl"] !== undefined) { jsonData.lengthPL = vars["lpl"] } else { success = false }
  if (vars["lpe"] !== undefined) { jsonData.lengthPE = vars["lpe"] } else { success = false }
  if (vars["ldc"] !== undefined) { jsonData.lengthDC = vars["ldc"] } else { success = false }
  if (vars["tr"] !== undefined) { jsonData.transceiver = vars["tr"] } else { success = false }
  if (vars["pc1"] !== undefined) { jsonData.patchA = vars["pc1"] } else { success = false }
  if (vars["pc2"] !== undefined) { jsonData.patchB = vars["pc2"] } else { success = false }
  if (success) {
    hideTag(intro)
    unhideTag(["again"])
    checkApplicationImage()
    checkChannelImage()
    checkProposal()
  } else {
    formLogic();
    unhideTag(intro)
  }
}

function addDataToURL() {
  var newURL = "" +
    "?t=" + jsonData.topology +
    "&l=" + jsonData.linktype +
    "&s=" + jsonData.sides +
    "&ft=" + jsonData.fibertype +
    "&pl=" + jsonData.permanentlink +
    "&pe=" + jsonData.portextension +
    "&r1=" + jsonData.rackA +
    "&r2=" + jsonData.rackB +
    "&lpl=" + jsonData.lengthPL +
    "&lpe=" + jsonData.lengthPE +
    "&ldc=" + jsonData.lengthDC +
    "&tr=" + jsonData.transceiver +
    "&pc1=" + jsonData.patchA +
    "&pc2=" + jsonData.patchB
  // window.history.pushState({ path: newURL }, "", newURL)
  copyTextToClipboard(window.location.href + encodeURI(newURL));
}
//function that preloads all images listed in the above array and other preloading
function preloader(callback) {
  //images
  for (var i = 0; i < images.length; i++) {
    var imageUrl = images[i];
    var newImg = new Image();
    newImg.onload = function () { }
    newImg.onerror = function () {
      newImg.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" //1x1 transparent picture
    }
    newImg.src = imagesPath + imageUrl;
    imagesPreloaded.push({ name: imageUrl, imgObj: newImg })
  };
  callback();
}
//preload images on page load
preloader(function () {
  window.addEventListener("load", function () {
    setTimeout(function () {
      hideTag(["preloader"])
      //       preloader()
      readDatafromURL()
    }, 2000);
  });
});
//initiate the form

function excelReady() {
  window.open('javascript:void(0)','_self')
}
