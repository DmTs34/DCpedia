
function PCconfigurator(){
this.PCstate = {
  "endA":47,
  "endB":23,
  "pressed":1,
  "route":"A",
  "length_1A":0,
  "length_1B":0,
  "pc":[],
  "QMandrel":[],
  "colors":["red","blue","green","black","grey","violet"]
};
this.Scale = 1;
this.Points = {
//coordinates of important dots
"sectionABdots":  {
  "dot1":[210,50],
  "dot2":[222,50],
  "dot3":[222,430],
  "dot4":[248,430],
  "dot5":[260,290],
  "dot6":[285,290],
  "dot7":[285,310],
  "dot8":[305,360],
  "dot9":[305,805],
  "dot10":[280,805],
  "dot11":[290,705],
  "dot12":[290,685],
  "dot13":[260,685],
  "dot14":[248,820],
  "dot15":[222,820]
},
}
//here are some rack parameters in pixels
this.Rack = { "Uheight": 16.8,"MandrelStep":35};
  
this.Paper = Snap("#Rack");
var obj = this  
//start of draw function  
this.Draw = function(){  
var s = this.Paper;
//create frame
var g1 = s.group(); // stores background, frame and other info
var g2 = s.group().attr({id: 'rack'}); // stores rack
var g3 = s.group().attr({id: 'rack rectangles'}); // stores rack rectangles
var g4 = s.group(); //stores patchcords
var g5 = s.group(); //temporary circles
var g6 = s.group(); //legend
var g = s.group(g1,g2,g3,g4,g5,g6);
 // apply move and scale of main group
g.attr({
  transform: "scale("+this.Scale+","+this.Scale+"), translate(100,50)"
});
// add frame - background of SVG
var frame = g1.rect(0, 0, 1000,1000).attr({'fill':'lightgrey'});
// RACK - load rack 900 svg image 
   g2.text(400,20,"Select first and second rack unit position by clicking red rectangles");
var r9 = Snap.load("https://dl.dropboxusercontent.com/s/d22lnb9glxfavjy/CDR900.svg", function (loadedFragment) {g2.append( loadedFragment);});

//draws red rectangles
for (let i=0;i<47;i++){
 var rect = g3.rect(0,10,180,this.Rack.Uheight).attr({id:"unit"+(47-i), fill: "red",stroke:"white", opacity:"0.2",transform:"translate(30,"+(i*this.Rack.Uheight+33)+")",cursor:'pointer'});
rect.click(function(event){ 
    //console.log(event.toElement.id.slice(4));
   SetPatchLead(event.srcElement.id.slice(4));
 });
 var title=Snap.parse('<title>Unit '+(47-i)+'</title>');
 rect.append(title);
};
//when click on red rectangle - set the end A and end B and draw patch leads
function SetPatchLead(num){
  switch(obj.PCstate.pressed){
    //only on initial load
    case 0:
      obj.PCstate.pressed=1;
      obj.PCstate.endA = num;
      obj.PCstate.endB = num;
    break;
    //means the new selection process started and the first element was clicked
    case 1:
      obj.PCstate.pressed=2;
       //renew the color of rectangles
      obj.Paper.select("#unit"+obj.PCstate.endA).attr({fill:"red"})
      obj.Paper.select("#unit"+obj.PCstate.endB).attr({fill:"red"})
      obj.PCstate.endA = num;
      //the unit which was clicked takes green color
      obj.Paper.select("#unit"+num).attr({fill:"green"})
      //deletes the legend and patch lead from the preivous selection
      DeleteEl("#legend");
      DeleteEl("#patchlead");
    break;
    //means the second element clicked
    case 2:
      obj.PCstate.endB = num;
      obj.PCstate.pressed=1;
      obj.Paper.select("#unit"+num).attr({fill:"green"})
      // when B>A then they are swapped
      if(obj.PCstate.endB > obj.PCstate.endA){
          let a = obj.PCstate.endA;
          let b = obj.PCstate.endB;
          obj.PCstate.endB = a;obj.PCstate.endA = b
        };
      //define what routing scenario is - A, B and AB
      if ((obj.PCstate.endA<=47 && obj.PCstate.endA>=24) && (obj.PCstate.endB<=47 && obj.PCstate.endB>=24)){ 
            obj.PCstate.route = "A"
        } else if ((obj.PCstate.endA<=23 && obj.PCstate.endA>=1) && (obj.PCstate.endB<=23 && obj.PCstate.endB>=1)){
          obj.PCstate.route =  "B"
      } else {obj.PCstate.route =  "AB"};
      //calculate the first segment length
      let a = Length_1(obj.PCstate.endA);let b = Length_1(obj.PCstate.endB);
      obj.PCstate.length_1A = a;obj.PCstate.length_1B = b;
      //array of recommended lengths
      let rl = Length_2(obj.PCstate.route,a+b);
      obj.PCstate.pc = rl;
      //clear up the QMandrel so that it is not overfilled 
      obj.PCstate.QMandrel=[];
      //now it's possible to draw all patch cords, but first add the group of patch cords - pcg
      var pcg = g4.g().attr({id:"patchlead"});
      for(let j=0;j<rl.length;j++){
      //calculate the quantity of mandrels
      let Qm = QMandrel(obj.PCstate.route,a+b,rl[j]);
      obj.PCstate.QMandrel[j] = Qm;
      //Draw each patch leads 
      DrawPatchLeads(j);
      }
      AddLegend()
    break;
  };
};
//draws patch leads, j - number of patch cord
function DrawPatchLeads(j){
  let dot = obj.Points.sectionABdots;
  let U = obj.Rack.Uheight;
  let A = obj.PCstate.endA;
  let B = obj.PCstate.endB;
  let M = obj.Rack.MandrelStep;
  let M_A = obj.PCstate.QMandrel[j][0];
  let M_B = obj.PCstate.QMandrel[j][1];
  let shift=1;
  let path=""
  switch (obj.PCstate.route){
    case "A":
  path =      " M "+(dot.dot1[0]-shift*j)+","+(dot.dot1[1]+(47-A)*U-shift*j)+
              " L "+(dot.dot2[0]-shift*j)+","+(dot.dot2[1]+(47-A)*U-shift*j)+
              " L "+(dot.dot3[0]-shift*j)+","+(dot.dot3[1]-shift*j)+
              " L "+(dot.dot4[0]-shift*j)+","+(dot.dot4[1]-shift*j)+
              " L "+(dot.dot5[0]-shift*j)+","+(dot.dot5[1]-M_A*M-shift*j)+
              " L "+(dot.dot6[0]-shift*j)+","+(dot.dot6[1]-M_A*M-shift*j)+
              " L "+(dot.dot7[0]-shift*j)+","+(dot.dot7[1]-shift*j)+
              " L "+(dot.dot4[0]-2*shift*j)+","+(dot.dot4[1]-shift*j)+
              " L "+(dot.dot3[0]-2*shift*j)+","+(dot.dot3[1]-shift*j)+
              " L "+(dot.dot2[0]-2*shift*j)+","+(dot.dot2[1]+(47-B)*U-shift*j)+
              " L "+(dot.dot1[0]-2*shift*j)+","+(dot.dot1[1]+(47-B)*U-shift*j);
      break;
     case "B":
      path =  " M "+(dot.dot1[0]-shift*j)+","+(dot.dot1[1]+(47-A)*U-shift*j)+
              " L "+(dot.dot2[0]-shift*j)+","+(dot.dot2[1]+(47-A)*U-shift*j)+
              " L "+(dot.dot15[0]-shift*j)+","+(dot.dot15[1]-shift*j)+
              " L "+(dot.dot14[0]-shift*j)+","+(dot.dot14[1]-shift*j)+
              " L "+(dot.dot13[0]-shift*j)+","+(dot.dot13[1]-M_B*M-shift*j)+
              " L "+(dot.dot12[0]-shift*j)+","+(dot.dot12[1]-M_B*M-shift*j)+
              " L "+(dot.dot11[0]-shift*j)+","+(dot.dot11[1]-shift*j)+
              " L "+(dot.dot14[0]-2*shift*j)+","+(dot.dot14[1]-shift*j)+
              " L "+(dot.dot15[0]-2*shift*j)+","+(dot.dot15[1]-shift*j)+
              " L "+(dot.dot2[0]-2*shift*j)+","+(dot.dot2[1]+(47-B)*U-shift*j)+
              " L "+(dot.dot1[0]-2*shift*j)+","+(dot.dot1[1]+(47-B)*U-shift*j)
      break;
     case "AB":
      path =  " M "+(dot.dot1[0]-shift*j)+","+(dot.dot1[1]+(47-A)*U-shift*j)+
              " L "+(dot.dot2[0]-shift*j)+","+(dot.dot2[1]+(47-A)*U-shift*j)+
              " L "+(dot.dot3[0]-shift*j)+","+(dot.dot3[1]-shift*j)+
              " L "+(dot.dot4[0]-shift*j)+","+(dot.dot4[1]-shift*j)+
              " L "+(dot.dot5[0]-shift*j)+","+(dot.dot5[1]-M_A*M-shift*j)+
              " L "+(dot.dot6[0]-shift*j)+","+(dot.dot6[1]-M_A*M-shift*j)+
              " L "+(dot.dot8[0]-shift*j)+","+(dot.dot8[1]-shift*j)+
              " L "+(dot.dot9[0]-shift*j)+","+(dot.dot9[1]-shift*j)+
              " L "+(dot.dot10[0]-shift*j)+","+(dot.dot10[1]-shift*j)+
              " L "+(dot.dot12[0]-shift*j)+","+(dot.dot12[1]-M_B*M-shift*j)+
              " L "+(dot.dot13[0]-shift*j)+","+(dot.dot13[1]-M_B*M-shift*j)+
              " L "+(dot.dot14[0]-shift*j)+","+(dot.dot14[1]-shift*j)+
              " L "+(dot.dot15[0]-shift*j)+","+(dot.dot15[1]-shift*j)+
              " L "+(dot.dot2[0]-2*shift*j)+","+(dot.dot2[1]+(47-B)*U-shift*j)+
              " L "+(dot.dot1[0]-2*shift*j)+","+(dot.dot1[1]+(47-B)*U-shift*j)
      break;
  }
  let pc1length = Snap.path.getTotalLength(path);
  let pcg = Snap.select("#patchlead")
  let pc1 = pcg.path().attr({
    //check the function below which rounds path corners
    d: roundPathCorners(path,10,false),
    id:"patchlead"+j, 
    stroke:obj.PCstate.colors[j],
    fill:'none',
    strokeWidth: 4,
    'stroke-linecap' :'round',
    'stroke-linejoin' :'round',
    'stroke-miterlimit' :10,
    'stroke-dasharray': pc1length + ' ' + pc1length,
    'stroke-dashoffset': pc1length
    });
  pc1.animate({
        strokeDashoffset : 0
    },2000, mina.easein)
};
//deletes element by id
function DeleteEl(id){
  let el = s.select(id);
  if(el){el.remove()}
}
//function draws legend
function AddLegend(){
  let gr = g6.g().attr({id:"legend"});
  gr.text(500,80,"Patching guide").attr({class:"Legend1"})
  gr.text(500,130,"To interconnect unit " + obj.PCstate.endA + " to unit " + obj.PCstate.endB).attr({class:"Legend2"})
  gr.text(500,160,"use following patch cords:").attr({class:"Legend2"})
  for(let y=0;y<obj.PCstate.pc.length;y++){
  gr.text(500,190+y*30,"- patch cord "+obj.PCstate.pc[y]/100+ " m").attr({class:"Legend2"});
 gr.line(680,184+y*30,750,184+y*30).attr({stroke:obj.PCstate.colors[y],strokeWidth:5})
    
  }
}; 
  
//CALCULATION FORMULAS
//physical length from port to the first blue mandrel 
//49 - length inside tray unit, 15 - depth adjusment, 112 - distance from top side blue mandrel position to the first blue mandrel (A or B)
function Length_1(unit){
  if(unit>=24 && unit<=47){return 49+15+112-4.445*(47-unit)
  } else if (unit>=1 && unit<=23){ return 49+15+110-4.445*(23-unit)                 } else {return 0}
};
//provides the array with recomended physical patch cord lengths 
// 80 - distance from blue mandrel to the 6th or 13th mandrel
// 50 - patch cord staggering step
// 18 - length to pass one mandrel up and down
// 5 extra mandrels in top section
// 6 extra mandrels in low section
// 255 - distance between 6 and 13 mandrel
// 453 - distance between 1 and 7 mandrel
function Length_2(section,sum){
  let min=0;let max=0;
  switch (section){
    case "A":
      min = (Math.floor((80+sum)/50)+1)*50
      max = Math.floor((80+18*5+sum)/50)*50
      break;
    case "B":
      min = (Math.floor((80+sum)/50)+1)*50
      max = Math.floor((80+18*6+sum)/50)*50
      break;
    case "AB":
      min = (Math.floor((255+sum)/50)+1)*50
      max = Math.floor((453+sum)/50)*50
      break;
  }
  let arr=[];
  for(let i=0;i<=(max-min)/50;i++){
    arr.push(min+50*i)
  }
  return arr
};
//provides the number of extra mandrels to take from the bottom mandrel for both sections - A and B (A - first element in array and B - second element of array)
function QMandrel(section,sum,pc){
  let mandrels_A = [170,152,134,116,98,80];
  let mandrels_B = [188,170,152,134,116,98,80];
  let mandrels_A_AB = [153,135,117,99,81,63];
  let mandrels_B_AB = [182,164,146,128,110,92,74];
  let min=60000;let minQ=[0,0];
  switch (section){
    case "A":
      for(let i=0;i<mandrels_A.length;i++){
        let c = Math.abs(pc-sum-mandrels_A[i]);
        if(c<min){
          min = c;
          minQ[0]=5-i
        }
      }
      break;
    case "B":
      for(let i=0;i<mandrels_B.length;i++){
        let c=Math.abs(pc-sum-mandrels_B[i]);
        if(c<min){
          min = c;
          minQ[1]=6-i
        }
      }
      break;
    case "AB":
      for(let i=0;i<mandrels_A_AB.length;i++){
        for(let j=0;j<mandrels_B_AB.length;j++){
          let c= Math.abs(pc-sum-mandrels_A_AB[i]-mandrels_B_AB[j]-120);
          if(c<min){
            min = c;
            minQ[0] = 5-i;
            minQ[1] = 6-j;
          }
        }
      }
      break;
      }
  return minQ;
}
  
//END OF DRAW FUNCTION
  
//Show dots - test position of dots
//not scaled --> change scale to 1 when test
this.Showdots = function(){
  let s= this.Paper;
  let g= s.g().attr({transform:"translate(100,50)"});
  let dots = this.Points.sectionABdots;
  let u=1
  for (let property in dots){
    let name = "dot"+(u);
 g.circle(dots[property][0],dots[property][1],5).attr({fill:"green"});
 g.text(dots[property][0]+2,dots[property][1]-2,property).attr({fill:"black"});
    u++;
  }
  }
}
//end of draw function
};
//END OF OBJECT

//run the class
let t = new PCconfigurator();
//console.log(t);
t.Draw();
//t.Showdots()

/**
 * http://embed.plnkr.co/kGnGGyoOCKil02k04snu/preview
 *
 * SVG Path rounding function. Takes an input path string and outputs a path
 * string where all line-line corners have been rounded. Only supports absolute
 * commands at the moment.
 * 
 * @param pathString The SVG input path
 * @param radius The amount to round the corners, either a value in the SVG 
 *               coordinate space, or, if useFractionalRadius is true, a value
 *               from 0 to 1.
 * @param useFractionalRadius If true, the curve radius is expressed as a
 *               fraction of the distance between the point being curved and
 *               the previous and next points.
 * @returns A new SVG path string with the rounding
 */
function roundPathCorners(pathString, radius, useFractionalRadius) {
  function moveTowardsLength(movingPoint, targetPoint, amount) {
    var width = (targetPoint.x - movingPoint.x);
    var height = (targetPoint.y - movingPoint.y);
    
    var distance = Math.sqrt(width*width + height*height);
    
    return moveTowardsFractional(movingPoint, targetPoint, Math.min(1, amount / distance));
  }
  function moveTowardsFractional(movingPoint, targetPoint, fraction) {
    return {
      x: movingPoint.x + (targetPoint.x - movingPoint.x)*fraction,
      y: movingPoint.y + (targetPoint.y - movingPoint.y)*fraction
    };
  }
  
  // Adjusts the ending position of a command
  function adjustCommand(cmd, newPoint) {
    if (cmd.length > 2) {
      cmd[cmd.length - 2] = newPoint.x;
      cmd[cmd.length - 1] = newPoint.y;
    }
  }
  
  // Gives an {x, y} object for a command's ending position
  function pointForCommand(cmd) {
    return {
      x: parseFloat(cmd[cmd.length - 2]),
      y: parseFloat(cmd[cmd.length - 1]),
    };
  }
  
  // Split apart the path, handing concatonated letters and numbers
  var pathParts = pathString
    .split(/[,\s]/)
    .reduce(function(parts, part){
      var match = part.match("([a-zA-Z])(.+)");
      if (match) {
        parts.push(match[1]);
        parts.push(match[2]);
      } else {
        parts.push(part);
      }
      
      return parts;
    }, []);
  
  // Group the commands with their arguments for easier handling
  var commands = pathParts.reduce(function(commands, part) {
    if (parseFloat(part) == part && commands.length) {
      commands[commands.length - 1].push(part);
    } else {
      commands.push([part]);
    }
    
    return commands;
  }, []);
  
  // The resulting commands, also grouped
  var resultCommands = [];
  
  if (commands.length > 1) {
    var startPoint = pointForCommand(commands[0]);
    
    // Handle the close path case with a "virtual" closing line
    var virtualCloseLine = null;
    if (commands[commands.length - 1][0] == "Z" && commands[0].length > 2) {
      virtualCloseLine = ["L", startPoint.x, startPoint.y];
      commands[commands.length - 1] = virtualCloseLine;
    }
    
    // We always use the first command (but it may be mutated)
    resultCommands.push(commands[0]);
    
    for (var cmdIndex=1; cmdIndex < commands.length; cmdIndex++) {
      var prevCmd = resultCommands[resultCommands.length - 1];
      
      var curCmd = commands[cmdIndex];
      
      // Handle closing case
      var nextCmd = (curCmd == virtualCloseLine)
        ? commands[1]
        : commands[cmdIndex + 1];
      
      // Nasty logic to decide if this path is a candidite.
      if (nextCmd && prevCmd && (prevCmd.length > 2) && curCmd[0] == "L" && nextCmd.length > 2 && nextCmd[0] == "L") {
        // Calc the points we're dealing with
        var prevPoint = pointForCommand(prevCmd);
        var curPoint = pointForCommand(curCmd);
        var nextPoint = pointForCommand(nextCmd);
        
        // The start and end of the cuve are just our point moved towards the previous and next points, respectivly
        var curveStart, curveEnd;
        
        if (useFractionalRadius) {
          curveStart = moveTowardsFractional(curPoint, prevCmd.origPoint || prevPoint, radius);
          curveEnd = moveTowardsFractional(curPoint, nextCmd.origPoint || nextPoint, radius);
        } else {
          curveStart = moveTowardsLength(curPoint, prevPoint, radius);
          curveEnd = moveTowardsLength(curPoint, nextPoint, radius);
        }
        
        // Adjust the current command and add it
        adjustCommand(curCmd, curveStart);
        curCmd.origPoint = curPoint;
        resultCommands.push(curCmd);
        
        // The curve control points are halfway between the start/end of the curve and
        // the original point
        var startControl = moveTowardsFractional(curveStart, curPoint, .5);
        var endControl = moveTowardsFractional(curPoint, curveEnd, .5);
  
        // Create the curve 
        var curveCmd = ["C", startControl.x, startControl.y, endControl.x, endControl.y, curveEnd.x, curveEnd.y];
        // Save the original point for fractional calculations
        curveCmd.origPoint = curPoint;
        resultCommands.push(curveCmd);
      } else {
        // Pass through commands that don't qualify
        resultCommands.push(curCmd);
      }
    }
    
    // Fix up the starting point and restore the close path if the path was orignally closed
    if (virtualCloseLine) {
      var newStartPoint = pointForCommand(resultCommands[resultCommands.length-1]);
      resultCommands.push(["Z"]);
      adjustCommand(resultCommands[0], newStartPoint);
    }
  } else {
    resultCommands = commands;
  }
  
  return resultCommands.reduce(function(str, c){ return str + c.join(" ") + " "; }, "");
}
    
