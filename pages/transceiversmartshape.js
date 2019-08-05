//JSON data in this pen is just for test purposes
var JSONdata = {
   "ShapeName":["Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver MPO-8","Transceiver MPO-8","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver MPO-8","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver MPO-24","Transceiver MPO-24","Transceiver MPO-4","Transceiver MPO-8","Transceiver MPO-8","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver MPO-8","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","","Transceiver MPO-8","Transceiver MPO-8","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver MPO-16","Transceiver MPO-24","Transceiver MPO-32","Transceiver MPO-8","Transceiver MPO-8","Transceiver MPO-8","Transceiver Duplex LC","Transceiver Quad CS","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver Duplex LC","Transceiver MPO-8","Transceiver MPO-16","Transceiver MPO-8","Transceiver MPO-24","Transceiver MPO-24"],
   "PhysicalInterface":["LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-12","MPO-12","LC duplex","LC duplex","LC duplex","LC duplex","MPO-12","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-24","MPO-24","MPO-12","MPO-12","MPO-12","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-12","LC duplex","LC duplex","LC duplex","LC duplex","MPO-12","MPO-12","MPO-12","LC duplex","LC duplex","LC duplex","LC duplex","MPO-16","MPO-24","MPO-32","MPO-12","MPO-12","MPO-12","LC duplex","Quad CS","LC duplex","LC duplex","LC duplex","MPO-12","MPO-16","MPO-12","MPO-24","MPO-24"],
   "TotalSpeed":[10,25,25,25,40,40,40,40,40,40,40,40,40,50,50,50,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,100,200,200,200,200,200,200,200,400,400,400,400,400,400,400,400,400,400,400,800,800,128,120,150],
   "Technology":["10G-SR","25G-ER","25G-LR","25G-SR","40G-LR4","40G-SR4","40G-eSR4","40G-SR2-BIDI","40G-ER4","40G-LX4","40G-LM4","40G-PLR4","40G-FR","50G-FR","50G-LR","50G-SR","100G-DR","100G-ER4","100G-LR4","100G-SR10","10x10G-SR","100G-SR2","100G-eSR4","100G-SR4","10x10G-FR","10x10G-LR","10x10G-ER","100G-SR2-Bidi","100G-SR1.2","100G-ZR","100G-PSM4","100G-CWDM4","100G-CWDM4 lite","100G-eCWDM4","100G-CLR4","200G-SR2","200G-SR4","200G-DR4","200G-FR4","200G-LR4","200G-ER4","200G-SR1.4","400G-SR8","400G-SR8.2","400G-SR16","400G-SR4.2-BIDI","400G-DR4","400G-XDR4","400G-FR4","400G-2FR4","400G-FR8","400G-LR8","400G-ER8","800G-SR4.4","800G-SR8","128GFC","12x10G","12x12.5G"],
   "Related":["10G-SR","25G-ER","25G-LR","25G-SR","40G-LR4","40G-SR4;10G-SR","40G-SR4;10G-SR","40G-SR2-BIDI","40G-ER4","40G-LX4","40G-LM4","","40G-FR","50G-FR","50G-LR","50G-SR","100G-DR","100G-ER4","40G-LM4","100G-SR10;10G-SR","10x10G-SR;10G-SR","100G-SR2;50G-SR","100G-eSR4;25G-eSR","100G-SR4;25G-SR","10x10G-FR","10x10G-LR","10x10G-ER","100G-SR2-Bidi","100G-SR1.2","100G-ZR","100G-PSM4;25G-PSM","100G-CWDM4","100G-CWDM4 lite","100G-eCWDM4","100G-CLR4","200G-SR2;100G-SR","200G-SR4;50G-SR","200G-DR4;50G-DR","200G-FR4","200G-LR4","200G-ER4","200G-SR1.4","400G-SR8;100G-SR4","400G-SR8.2;50G-SR","400G-SR16;100G-SR4","400G-SR4.2-BIDI","400G-DR4;100G-DR","400G-DR4;100G-FR","400G-FR4","400G-2FR4;200G-FR4;100G-CWDM4","400G-FR8","400G-LR8","400G-ER8","800G-SR4.4;200G-SR1.4","800G-SR8;200G-SR2","128GFC","12x10G;10G-SR;40G-SR4","12x12.5G;10G-SR;40G-SR4"],
   "Quantity":["1","1","1","1","1","1;4","1;4","1","1","1","1","","","","","","","","","1;10","1;10","1;2","1;4","1;4","1","1","1","1","1","1","1;4","1","1","1","1","1","1;4","1;4","1","1","1","1","1;2","1;8","1;4","","1;4","1;4","","1;2;2","1","1","1","1;4","1;4","","1;12;3","1;12;3"],
   "Unique":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
   "Duplex":["Duplex","Duplex","Duplex","Duplex","Duplex","Parallel","Parallel","Duplex","Duplex","Duplex","Duplex","Parallel","Duplex","Duplex","Duplex","Duplex","Duplex","Duplex","Duplex","Parallel","Parallel","Parallel","Parallel","Parallel","Duplex","Duplex","Duplex","Duplex","Duplex","Duplex","Parallel","Duplex","Duplex","Duplex","Duplex","Parallel","Parallel","Parallel","Duplex","Duplex","Duplex","Duplex","Parallel","Parallel","Parallel","Parallel","Parallel","Parallel","Duplex","Parallel","Duplex","Duplex","Duplex","Parallel","Parallel","Parallel","Parallel","Parallel"],
   "ConnectorType":["LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-8","MPO-8","LC duplex","LC duplex","LC duplex","LC duplex","MPO-8","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-20","MPO-20","MPO-4","MPO-8","MPO-8","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-8","LC duplex","LC duplex","LC duplex","LC duplex","MPO-4","MPO-8","MPO-8","LC duplex","LC duplex","LC duplex","LC duplex","MPO-16","MPO-X6","MPO-32","MPO-8 (MPO-12)","MPO-8 (MPO-12)","MPO-8 (MPO-12)","LC duplex","2 x CS","LC duplex","LC duplex","LC duplex","MPO-8 (MPO-12)","MPO-16","MPO-8 (MPO-12)","MPO-24","MPO-24"],
   "RelatedConnectorType":["LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-8;LC duplex","MPO-8;LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-8","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-20;LC duplex","MPO-20;LC duplex","MPO-4;LC duplex","MPO-8;LC duplex","MPO-8;LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-8;LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-4;LC duplex","MPO-8;LC duplex","MPO-8;LC duplex","LC duplex","LC duplex","LC duplex","LC duplex","MPO-16;MPO-8","MPO-X6;LC duplex","MPO-32;MPO-8","MPO-8","MPO-8;LC duplex","MPO-8;LC duplex","LC duplex","CS-2;LC duplex;LC duplex","LC duplex","LC duplex","LC duplex","MPO-8;LC duplex","MPO-16;MPO-4","MPO-8;LC duplex","MPO-24;LC duplex;MPO-8","MPO-24;LC duplex;MPO-8"],
   "BreakoutOption":["","","","","","4x 10G","4x 10G","","","","","4x 10G","","","","","","","","10x 10G","10x 10G","2x 50G-SR","4x 25G","4x 25G","","","","","","","4x 25G","","","","","","4x 50G-SR","4x 50G-DR?","","","","","2x 100G-SR4","8x 50G-SR","4x 100G-SR4","","4x 100G-DR","4x 100G-FR","","2x 200G-FR4\n2x 100G-CWDM4","","","","4x 200G-SR1.4","4x 200G-SR2","","12x 10G-SR\n3x 40G-SR4","12x 10G-SR\n3x 40G-SR4"],
   "NumberOfLanes":[1,1,1,1,4,4,4,2,4,4,4,4,1,1,1,1,2,4,4,10,10,2,4,4,10,10,10,4,4,4,4,4,4,4,4,2,4,4,4,4,4,4,8,8,16,4,4,4,4,8,8,8,8,16,8,4,12,12],
   "SingleLaneSpeed":["10","25G","25G","25G","10G","10G","10G","20G","10G","10G","10G","10G","40G","50G","50G","50G","50G","25G","25G","10G","10G","50G","25G","25G","10G","10G","10G","25G","25G","25G","25G","25G","25G","25G","25G","100G","50G","50G","50G","50G","50G","50G","50G","50G","25G","100G","100G","100G","100G","50G","50G","50G","50G","50G","100G","32G","10G","12.5G"],
   "FiberType":["MM","SM","SM","MM","SM","MM","MM","MM","SM","MM\nSM","MM\nSM","SM","SM","SM","SM","MM","SM","SM","SM","MM","MM","MM","MM","MM","SM","SM","SM","MM","MM","","SM","SM","SM","SM","SM","MM","MM","SM","SM","SM","SM","MM","MM","MM","MM","MM","SM","SM","SM","SM","SM","SM","SM","MM","MM","MM","MM","MM"],
   "Distance":["","40km","10km","","10km","OM3 - 100m\nOM4 - 150m","OM3 - 300m\nOM4 - 400m","OM3 - 100m\nOM4 - 150m","40km","OM3 - 140m\nOM4 - 160m\nSM - 10km","OM3 - 140m\nOM4 - 160m\nSM - 10km","10km","2km","2 km","2km","100m","500m","40km","10km","150m","300m","100m","200m - OM3\n400m - OM4","","2km","10km","40km","OM3 - 70m\nOM4 - 100m","OM3 - 70m\nOM4 - 100m","80km","500m","2km","500m","10km","2km","","OM3 - 70m\nOM4 - 100m","500m","2km","10km","10km","","100m","100m","OM3 - 70m\nOM4 - 100m","","500m","2km","2km","2km","2km","10km","40km","100m","30m","100m","100m","100m"],
   "WDM":["no","no","no","","yes","no","no","yes","yes","yes","yes","no","no","no","no","no","yes","yes","yes","no","no","no","no","no","yes","yes","yes","yes","yes","yes","no","yes","yes","yes","yes","","no","no","yes","yes","yes","yes","no","no","no","yes","no","no","yes","yes","yes","yes","yes","yes","yes","no","no","no"],
   "Standard":["","IEEE 802.3cc","IEEE 802.3cc","IEEE 802.3by","IEEE 802.3ba","IEEE 802.3ba","proprietary","proprietary","IEEE 802.3bm","proprietary","proprietary","proprietary","IEEE 802.3bg","IEEE 802.3cd","IEEE 802.3cd","IEEE 802.3cd","IEEE 802.3cd","IEEE 802.3ba","IEEE 802.3ba","IEEE 802.3ba","proprietary","IEEE 802.3cd","proprietary","IEEE 802.3bm","proprietary","proprietary","proprietary","proprietary","proprietary","proprietary","proprietary","proprietary","proprietary","proprietary","proprietary","","IEEE 802.3cd","IEEE 802.3bs","IEEE 802.3bs","IEEE 802.3bs","IEEE 802.3cn","","IEEE 802.3cm","IEEE 802.3cm","IEEE 802.3bs","IEEE 802.3cm","IEEE 802.3bs","proprietary","proprietary","proprietary","IEEE 802.3bs","IEEE 802.3bs","IEEE 802.3bs","","","proprietary","proprietary","proprietary"]
}
//constructor for transceiver
function Transceiver(i){
  // if nothing is provided
  if(i!=null){
      this.RowNumber=i;
      this.ShapeName=JSONdata.ShapeName[i];
      this.PhysicalInterface=JSONdata.PhysicalInterface[i];
      this.TotalSpeed=JSONdata.TotalSpeed[i];
      this.Technology=JSONdata.Technology[i];
      this.Duplex=JSONdata.Duplex[i];
      this.ConnectorType=JSONdata.ConnectorType[i];
      this.BreakoutOption=JSONdata.BreakoutOption[i];
      this.NumberOfLanes=JSONdata.NumberOfLanes[i];
      this.SingleLaneSpeed=JSONdata.SingleLaneSpeed[i];
      this.FiberType=JSONdata.FiberType[i];
      this.Distance=JSONdata.Distance[i];
      this.WDM=JSONdata.WDM[i];
      this.Standard=JSONdata.Standard[i];
      this.Quantity=1; //how many transceivers in a group
      this.Side = "A"; //which side to show - left - A or right - B
  } else {
      console.log ("Transceiver must be selected by providing his row number in the JSON collection")
  }
};
//constructor for TransceiverSmartShape
function FOTransceiverSmartShape(transceiver,paper,pX,pY,pW) {
  
  
var obj = this;
if(paper===undefined){paper = Snap("#Selector")}
if(pX===undefined){ pX = 0} 
if(pY===undefined){ pY = 0} 
if(pW===undefined){ pW = 800} 
var pH = pW*2/3; 
var pG = 10;
  //coordinates X,Y of top left corner, Width and Height.
  //Transciever smart shape fits inside the coordinates
  //always proportions 3:2 (Width:Height)

  //if the transceiver is not provided - then just for test reasons he takes one example of transceiver;
if(transceiver===undefined) {transceiver = new Transceiver(0)}

this.Transceiver = transceiver;
this.X = pX;
this.Y = pY;
this.Width = pW;
this.Height = this.Width*2/3;
this.pG = pG; //page grid
this.Draw = function(){   

  let p = paper.g().attr({id:"FOTSS_"+transceiver.Side});
  
  //Main transceiver rectangle
    this.Main = function(){

        //when side A, then legend on the left and body on the right
        //when side B then opposite
      
      let legend_width,legend_height,legend_x,legend_y,
          body_width,body_height,body_x,body_y,l,r;
      (transceiver.Side=="A")?(l=1):(l=0);(transceiver.Side=="B")?(r=1):(r=0);
          legend_width = (this.Width-3*pG)*0.4;
          body_width = (this.Width-3*pG)*0.6;
          legend_height = this.Height-2*pG;
          body_height = legend_height;
          legend_x = l*(this.X+pG)+r*(this.X+2*pG+body_width);
          legend_y = this.Y+pG;
          body_x = l*(legend_x+pG+legend_width)+r*(this.X+pG);
          body_y = this.Y+pG;
          
      let main_legend = p.group().attr({id:"FOTSS_leg_"+transceiver.Side});
      main_legend.rect(legend_x,legend_y,legend_width,legend_height,5).attr({class:"st2"});
obj.DrawLegend(main_legend,transceiver,legend_x,legend_y,legend_width,legend_height);
      let main_body = p.group().attr({id:"FOTSS_bod_"+transceiver.Side});
      main_body.rect(body_x,body_y,body_width,body_height,5).attr({class:"st2"})
        //transciever shape
obj.DrawTransceiver(main_body,this.Transceiver,body_x,body_y,body_width,body_height,transceiver.Side);
      p.append(main_legend,main_body);
    };
    this.Main();
  
}
//draws the transceiver or group of transceivers
this.DrawTransceiver= (obj,transceiver,x,y,w,h,side) => {
  let group = obj.group().attr({id:"FOTSS_bod_gro_"+side});
  let l,r,t; (side=="A")?(l=1):(l=0);(side=="A")?(r=0):(r=1);(side=="A")?(t=-1):(t=1);
  let q=transceiver.Quantity;  
  let cx,cy,p,pos,row,tempObj={},tempArr=[[]];
  let groupTransceivers = group.g().attr({id:"FOTSS_bod_gr2_"+side});
  //Case when more than one transceiver
            let sc,scW,scH;
       (q<4)?(p=1):(p=2);//Divide into two rows when more 4 transceivers
       
				for(let i=0;i<q;i++){
          pos = i%(q/p); //position of transceiver in a row
					row = (i-i%(q/p)); //first or second row;
          cx = (100*(q/p-pos-1))*l+(pos*100)*r;
					cy = pos*47+row/(q/p)*(166); //47 - vertical shift, 10 - extra vertical shift for second row
switch(transceiver.ConnectorType.substr(0,2)){
  case "LC":
					tempObj = Duplex(paper,cx,cy,"Obj_"+side+"_"+i,side,1,i+1,q);
  break;
  case "MP":
          tempObj = MPO(paper,cx,cy,"Obj_"+side+"_"+i,side,transceiver.ConnectorType,1,0);
      break;
}
					//tempArr = tempObj.arr;
					groupTransceivers.append(tempObj.obj);
				};
          let BBox = groupTransceivers.getBBox();
            scW = w/BBox.width; //60% - space for transceiver shape width
            scH = h/BBox.height; //height - 2 margins -  space for transceiver shape
            sc = Math.min(scW,scH);
          let matrix1=new Snap.Matrix();
            matrix1.scale(sc);
            matrix1.translate(((w-BBox.width*sc)/2)/sc,((h-BBox.height*sc)/2)/sc);
            groupTransceivers.attr({transform:matrix1});

  group.attr({ transform: "translate("+x+","+y+")"})
}
this.DrawLegend = (obj,transceiver,x,y,w,h)=>{
  // Adds  text legend
  // without scale transceiver legend is 438px
  let group = obj.group().attr({id:transceiver.Technology+"_Legend"});
  let q=((transceiver.Quantity==1)?(""):(transceiver.Quantity+"x "));
  let transceiverText = [
    ["Shape name",q+transceiver.ShapeName],
    ["Physical interface",q+transceiver.PhysicalInterface],
    ["Total speed",q+transceiver.TotalSpeed+"G"],
    ["Technology",q+transceiver.Technology],
    ["Transmit mode",transceiver.Duplex],
    ["Single lane speed",transceiver.SingleLaneSpeed],
    ["Number of lanes",q+transceiver.NumberOfLanes],
    ["Fiber type",transceiver.FiberType],
    ["Distance",transceiver.Distance],
    ["xWDM",transceiver.WDM],
    ["Standard", transceiver.Standard]
  ];
    //size of transceiverlegend without scale = 250x458
   let scW,scH,sc; scW=w/250; scH=h/458;sc=Math.min(scW,scH);

  let transceiverLegend = obj.g().attr({id:"transceiverLegend"});
  transceiverLegend.rect(0,0,250,458,5).attr({class:"st4",opacity:0.3})
  for (let i=0;i<=transceiverText.length-1;i++){
    transceiverLegend.text(10,10+i*40,transceiverText[i][0]).attr({class:"trText"});
    transceiverLegend.text(10,28+i*40,transceiverText[i][1]).attr({class:"Legend2"});
  };
  //transceiverLegend.text(200,400,transceiver.Quantity).attr({class:"Legend1"})
  let BBox = transceiverLegend.getBBox();
  let BBox_width = BBox.width;
  let BBox_height = BBox.height;
  let matrix = new Snap.Matrix();
    matrix.scale(sc);
  matrix.translate((w-BBox_width*sc)/2/sc,(h-BBox_height*sc)/2/sc);
  transceiverLegend.attr({transform:matrix});
  group.append(transceiverLegend);
  group.attr({ transform: "translate("+x+","+y+")"})
}
}  

//!------- main code -------!
// let FOS = new FOTransceiverSmartShape();
// FOS.Draw();

// taken from the Polarity Configurator Tool
// function that draws one LC duplex Transceiver,where:
// s = svg; x-coord x,y - coord y, id = id, side (A or B - left or right),
//dimensions of non scaled shape - WxH : 140x166
function Duplex (s,x,y,id,side,scale,number,totalNumber) {
  let sideUndefined=false;
  if(side=="" || side==undefined){sideUndefined=true;side='A'} //in case when side is not defined then by default always side A
  // if(totalNumber==undefined){number=''}
  let r,t,coordinates=[],tempArr1=[],tempArr2=[],ll,rr;
	// s = Snap("#"+snap);
(side=="A") ? (r=1) : (r=-1);
(side=="A") ? (t=0) : (t=1); 
  (side=="A") ? (ll=1) : (ll=0);
  (side=="A") ? (rr=0) : (rr=1);
//s.circle(x,y,3).attr({fill:"blue"});
let 
p1 = s.polygon(28.3,151.4,44,166.7,44.5,104.1,33.3,72.8,26.8,66.9,28.2,104.8).attr({class:"transceiver-st2"}),
p2 = s.polygon(127.4,29.2,121.3,23,26.8,66.9,33.3,72.8).attr({class:"transceiver-st2"}),
p3 = s.polygon(0.5,43.4,0.5,122.7,28.2,151.4,28.2,104.8,26.8,66.9).attr({class:"transceiver-st2"}), 
p4 = s.polygon(121.3,23,96.7,0,0.5,43.4,26.8,66.9).attr({class:"transceiver-st2"}),
p5 = s.polygon(139.7,122.8,140,62.8,127.4,29.2,33.3,72.8,44.5,104.1,44,166.7).attr({class:"transceiver-st2"}),


p6 = s.polygon(130.2,116.1,130.1,110.2,127.3,106.7,126.7,87.5,123.3,84.6,123.9,68,122.8,64.4,124.7,61.1,122.9,55.5,119.9,55.2,115.6,41.9,91.8,52.7,96,66,93.7,68.8,95.2,74.2,99.6,74.9,101.1,78.1,101.5,94.4,97.7,100.7,98.3,119.8,95.2,126.5,95.2,131.7,130.2,116.1).attr({class:"transceiver-st4"}),
p7 = p6.clone().attr({transform:"matrix(1,0,0,1,-40,18)"}),
	 cx1=75*r+190*t,cy1=125+r*t*18,
	 cx2=115*r+190*t,cy2=107-r*t*18,	 
c0 =s.ellipse(cx1,cy1,3,4).attr({id:id+'_group_Pin_0', lane:"Tx0", fill:'orange', transform:"rotate(30,"+(cx1)+","+(cy1)+")", stroke:"black", strokeWidth:0.3}),
c1 =s.ellipse(cx2,cy2,3,4).attr({id:id+'_group_Pin_1', lane:"Rx0", fill:'green', transform:"rotate(30,"+(cx2)+","+(cy2)+")", stroke:"black", strokeWidth:0.3}),
//Tx and Rx text    
t0 = s.text(69*ll-118*rr,155*ll+158*rr,'Tx').attr({fontSize:7, transform:'matrix('+r+','+(-0.5*r)+',0,1,0,0)',class:'transceiver-transText'}),
t1 = s.text(109*ll-78*rr,157*ll+155*rr,'Rx').attr({fontSize:7, transform:'matrix('+r+','+(-0.5*r)+',0,1,0,0)',class:'transceiver-transText'}),
LCdbody = s.group(p1,p2,p3,p4,p5,p6,p7,c0,c1,t0,t1).attr({id:id+'_group'}); //body of transceiver
let BBox = LCdbody.getBBox(),
    BBoxW = BBox.width;
  
let newMatrix = new Snap.Matrix(),
	  textMatrix = new Snap.Matrix();
	newMatrix.translate(t*BBoxW,0);
	newMatrix.scale(r,1);
	LCdbody.attr({transform: newMatrix});
	
	textMatrix.rotate(-25,0,0);
	textMatrix.skewX(15);
	textMatrix.translate(58*t,65);
	textMatrix.scale(r,1);
  //only shows the text when the transciever side is defined
  if(!sideUndefined){
    let sideText='';
    if(totalNumber!=1){sideText='-'+number};
    let text = s.text(0,0,'Side '+side+sideText).attr({transform:textMatrix, class:"transceiver-transText"});
     LCdbody.append(text);	
  }
  let LCdshifted = s.group(LCdbody).attr({id:id});
  LCdshifted.attr({transform:"translate("+x+","+y+"), scale("+scale+")"})
	return {"obj":LCdshifted};
}


// taken from the Polarity Configurator Tool
//function that draws one MPO Transceiver,where:
//snap = svg id (string); x-coord x,y - coord y, id = id, side (left or right), type of MPO: MPO-4,MPO-8,MPO-12A,MPO-16,MPO-20,MPO-24,MPO-32 etc.
//Returns the array of coordinates of lanes, starting from 0
function MPO (s,x,y,id,side,type,scale,number){   
	let r,t;
		 
(side=="A") ? (r=1) : (r=-1);
(side=="A") ? (t=0) : (t=1);
  
let 
    p1 = s.polygon(133.4,127.2,54.7,164.3,54.5,95.4,85.5,81.1).attr({fill:"#ff0000", class:"transceiver-st2"}), 
    p2 = s.polygon(53.8,94.6,0,43.8,85.4,0.6,140,54.4).attr({class:"transceiver-st2"}), 
    p3 = s.polygon(53.9,166,53.8,94.6,0,43.8,0,103.8,30.5,133.9,35,147.6).attr({class:"transceiver-st2"}), 
    p4 = s.polygon(139.2,55.6,138.9,125,133.6,127.5,85.5,81.1).attr({class:"transceiver-st2"}),        
    p5 = s.polygon(118.6,78.6,121,77.5,126.8,82.6,124.5,83.6).attr({class:"transceiver-st4"}),
    p6 = s.polygon(70.6,108.9,68.8,107.1,68.9,105.3,117,82.9,117,105,70.4,126.7).attr({class:"transceiver-st5"}),
    p7 = s.polygon(66.4,102.7,81.9,95.5,83.1,89.7,102.3,80.7,106.4,84.1,114.1,80.5,117,82.9,68.9,105.3).attr({class:"transceiver-st5"}),
    path1 = s.path().attr({d:"M124.6,83.9l2.3-1.1c1.2,1.1,2.1,5.5,2.3,11.5c0.3,7.3-0.5,15.9-2.4,17.5l-2.3,1.1L124.6,83.9z", class:"transceiver-st4"}), 
    path2 = s.path().attr({d:"M59.5,131.6c-0.9-5.6,0.7-22.5,3.3-25.3l4.5,4.1c-1.6,1.5-4.3,15.2-0.2,28.6L59.5,131.6z", class:"transceiver-st4"}), 
    path3 = s.path().attr({d:"M67.3,139.2c-2-1.5-2.5-9.8-2.2-16.9c0.3-6.4,1.3-11.3,2.4-11.9l3-1.3l-0.1,28.9L67.3,139.2z", class:"transceiver-st4"}), 
    path4 = s.path().attr({d:"M116.9,105.2L116.9,105.2c0.1-0.1,0.2-0.1,0.2-0.2l0.1-22.1c0,0,0-0.1,0-0.1l-2.8-2.3l4.1-1.9l6,5.1	l0,28.9L116.9,105.2z", class:"transceiver-st4"}), 
    path5 = s.path().attr({d:"M64.9,103.4 l5.6,5.5l-3.1,1.4l-4.5-4.2C64.2,103.9,64.9,103.4,64.9,103.4z", class:"transceiver-st4"}), 
    path6 = s.path().attr({d:"M53.8,94.6l0.2,71.4 l86-40l-0.2-71.5L53.8,94.6z M64.9,103.4l17.1-7.9l1.2-5.8l19.3-8.9l4,3.4l20.6-9.6c6.9,3.6,9.2,39.8,0,45.8l-61.8,28.7 C56.7,140.8,57.9,110.9,64.9,103.4z", class:"transceiver-st2"}),
    path7 = s.path().attr({d:"M77.1,120.3l-5.5-4.7l0,0l0,0c-0.8-0.9,0.5-4,2-3.5l5.7,4.8l-0.1,0C77.4,115.9,75.8,119.2,77.1,120.3z", class:"transceiver-st3"}), 
    path8 = s.path().attr({d:"M77.4,117.2c-1.2,1.1-0.8,2.7-0.2,3.1c0.8,0.4,1.6-0.2,2.1-1.2c0.3-0.5,0.5-1.8-0.2-2.2C78.6,116.5,78.2,116.5,77.4,117.2z", class:"transceiver-st3"}),
    path9 = s.path().attr({d:"M117.1,101.3l-5.5-4.7l0,0l0,0c-0.8-0.9,0.5-4,2-3.5l5.7,4.8l-0.1,0C117.4,96.9,115.8,100.2,117.1,101.3z", class:"transceiver-st3"}),
    path10 = s.path().attr({d:"M117.4,98.2c-1.2,1.1-0.8,2.7-0.2,3.1c0.8,0.4,1.6-0.2,2.1-1.2c0.3-0.5,0.5-1.8-0.2-2.2C118.6,97.5,118.2,97.5,117.4,98.2z", class:"transceiver-st3"}),
    MPObody = s.group(p1,p2,p3,p4,p5,p6,p7,path1,path2,path3,path4,path5,path6,path7,path8,path9,path10).attr({id:id});
  let xx=2.3, yy=1.06, x1=82,y1=110,x2=82,y2=113, cx,cy, arr=[], p,q,lane,pin;
  //Draws elipses - pins of transceivers
	switch (type) {		  
	  case "MPO-32":		  
			for(let i=0;i<32;i++){			 
			  (i<16) ? (q=1) : (q=0);
			  (i<16) ? (p=0) : (p=1);
		  	cx = x1*q+x2*p+r*(i*xx*q+(i-16)*xx*p)/1.5+xx*15*t/1.5;
		  	cy = y1*q+y2*p-r*(i*yy*q+(i-16)*yy*p)/1.5-(yy*15)*t/1.5;	  
    		arr[i] = s.ellipse(cx,cy,1,1.33).attr({id:id+'_group_Pin_'+i,fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
        //Pin attributes
                if(i>=0&&i<=15)    {lane='Tx'+(15-i)}
                if(i>=16&&i<=31)  {lane='Rx'+(31-i)}
          arr[i].attr({lane:lane,fill:altSignalColors(lane,15)});
            
	 		MPObody.append(arr[i]);
    };
		  break;
	  
	  case "MPO-24":	  
		  for(let i=0;i<24;i++){			 
			  (i<12) ? (q=1) : (q=0);
			  (i<12) ? (p=0) : (p=1);
		  	cx = x1*q+x2*p+r*(i*xx*q+(i-12)*xx*p)+xx*11*t;
		  	cy = y1*q+y2*p-r*(i*yy*q+(i-12)*yy*p)-(yy*11)*t;	  
    		arr[i] = s.ellipse(cx,cy,1,1.33)
                  .attr({id:id+'_group_Pin_'+i, fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
        //Pin attributes
          (i<=11) ? (lane="Rx"+(11-i)) : (lane="Tx"+(23-i));
          arr[i].attr({lane:lane,fill:altSignalColors(lane,12)});
	 		MPObody.append(arr[i]);
    };	
		  break;
      //connector MTP 24 but 16 lanes
		case "MPO-X6":
			    //ellipses
          for(let i=0;i<24;i++){			 
            (i<12) ? (q=1) : (q=0);
            (i<12) ? (p=0) : (p=1);
            cx = x1*q+x2*p+r*(i*xx*q+(i-12)*xx*p)+xx*11*t;
            cy = y1*q+y2*p-r*(i*yy*q+(i-12)*yy*p)-(yy*11)*t;	  
            arr[i] = s.ellipse(cx,cy,1,1.33).attr({id:id+'_group_Pin_'+i,fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
           //Pin attributes
            if(i<=3 || i>=8 && i<=15 || i>=20) {
                if(i>=0&&i<=3)    {lane='Tx'+i}
                if(i>=12&&i<=15)  {lane='Tx'+(i-8)}
                if(i>=8&&i<=11)   {lane='Rx'+(11-i)}
                if(i>=20&&i<=23)  {lane='Rx'+(27-i)}
          arr[i].attr({lane:lane,fill:altSignalColors(lane,8)});
            }
            MPObody.append(arr[i]);
        };	  
		  break;  
      
	  case "MPO-20":
			    //ellipses
          for(let i=0;i<24;i++){			 
            (i<12) ? (q=1) : (q=0);
            (i<12) ? (p=0) : (p=1);
            cx = x1*q+x2*p+r*(i*xx*q+(i-12)*xx*p)+xx*11*t;
            cy = y1*q+y2*p-r*(i*yy*q+(i-12)*yy*p)-(yy*11)*t;	  
            arr[i] = s.ellipse(cx,cy,1,1.33).attr({id:id+'_group_Pin_'+i,fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
           //Pin attributes
            if((i>0 && i<11) || (i>12 && i<23)) {
          (i<12) ? (lane="Rx"+(10-i)) : (lane="Tx"+(22-i));
              arr[i].attr({lane:lane,fill:altSignalColors(lane,10)});
          }
          MPObody.append(arr[i]);
        };	  
		  break;
		  
	case "MPO-16":
		  
	  for(let i=0;i<16;i++){
		 	cx = x1+r*i*xx/1.5+(xx*15)*t/1.5;
			cy = y1-r*i*yy/1.5-(yy*15)*t/1.5;
    		arr[i] = s.ellipse(cx,cy,1,1.33)
                  .attr({id:id+'_group_Pin_'+i,fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
       //Pin attributes
        if(i<=7){
			    lane="Tx"+i
        } else {
          lane="Rx"+(15-i)
			}
      arr[i].attr({lane:lane,fill:altSignalColors(lane,8)});
      MPObody.append(arr[i]);
    };	  
		  break;
		  
	case "MPO-8": 
      //ellipses
	  for(let m=0;m<=11;m++){
		  	 cx=x1+(xx*11)*t+r*m*xx;
		  	 cy=y1-(yy*11)*t-r*m*yy;
			 arr[m] = s.ellipse(cx,cy,1,1.33).attr({id:id+'_group_Pin_'+m,fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
      //Pin attributes
      if (m<=3 || m>=8){
        if (m<=3) {lane="Tx"+m}
        if (m>=8) {lane="Rx"+(11-m)}
        arr[m].attr({lane:lane,fill:altSignalColors(lane,4)})
      }
			 MPObody.append(arr[m]);	  
			//Text
			if(m==0||m==11){
				//let mtrx = new Snap.Matrix(),
				let t1 = s.text((77+m*2.4)*r+(22-(11-m)*5.2)*t,149*r+298*t,lane)
					  .attr({fontSize:4, class:"transceiver-transText",transform:"matrix("+r+","+(-0.5*r)+",0,1,0,0)"});
				MPObody.append(t1);
			}
	  };			 
		  break;
		  
		  case "MPO-4":
          for(let i=0;i<12;i++){
            //ellipses
             cx=x1+(xx*11)*t+r*i*xx;
             cy=y1-(yy*11)*t-r*i*yy;
              arr[i] = s
                .ellipse(cx,cy,1,1.33)
                .attr({id:id+'_group_Pin_'+i, fill:'grey', transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3 });
            //Pin attributes
              if(i<=1||i>=10) {
              (i<=1) ? (lane="Tx"+i) : (lane="Rx"+(11-i))
                arr[i].attr({lane:lane,fill: altSignalColors(lane,2)})
             }
            MPObody.append(arr[i]);
             //text block
            if(i==0||i==11){
              let t1 = s
                    .text((77+i*2.4)*r+(22-(11-i)*5.2)*t,149*r+298*t,lane)
                    .attr({fontSize:4, class:"transceiver-transText",transform:"matrix("+r+","+(-0.5*r)+",0,1,0,0)"});
                MPObody.append(t1);
            }
          };	  
		  break;
		  
		  case "MPO-12A":
	 
	  for(let i=0;i<12;i++){
			cx=x1+(xx*11)*t+r*i*xx;
			cy=y1-(yy*11)*t-r*i*yy;		  
    		arr[i] = s.ellipse(cx,cy,1,1.33).attr({id:id+'_group_Pin_'+i,fill:SignalColors(type,"E")[i], transform:"rotate(30,"+cx+","+cy+")", stroke:"black", strokeWidth:0.3});
	 		MPObody.append(arr[i]);
    };	  
		  break;
			
		default:
			console.log("Current type "+ type+ "is not supported. This function can take only these parameters for elipses: MPO-4,MPO-8,MPO-12A,MPO-16,MPO-X6,MPO-20,MPO-24,MPO-32");

			break;
  }		
		  
 
let newMatrix = new Snap.Matrix();
	 //textMatrix = new Snap.Matrix();
	 newMatrix.translate(x+t*140,y);
	 newMatrix.scale(r*scale,scale);
	//Text shouldn't transform, there for different matrix applied
	 //textMatrix.rotate(30,0,0);
	//textMatrix.skewX(15);
	 //textMatrix.translate(20*r+80*t,200);
	 //textMatrix.scale(r,1);
	
	MPObody.attr({transform: newMatrix});
	if(number!=null){
		let text = s.text(-25*t+90*r,190,"#"+(number+1)).attr({class:"transceiver-transText", transform:"matrix("+r+","+(-0.5*r)+",0,1,0,20)"});
		MPObody.append(text);
	}

  let MPObodygroup = s.group(MPObody);
	return {"obj":MPObodygroup}
};

//Creates an array with colors for signal lines and pin ellipses:
//Total lines: MPO-4(MTP12), MPO-8(MTP12), MPO-12A(MTP12), MPO-16(MTP12), MPO-20(MTP24), MPO-24(MTP24), MPO-32(MTP32)
//shape = for elipses (E) or for lines (L)
function SignalColors(type,shape){
	let colors=[], color1, color2;
	//E - elipses, L - lines. 108 - green, 20 - light orange, 0 - red, 33 - orange
	if(shape=="E") {color1=108;color2=20} else if(shape=="L"){color1=0;color2=33}
	switch (type){
		case "MPO-32":
					for(let i=0;i<32;i++){
							(i<16) ? (colors[i] = "hsl("+color1+",100,"+(45+i*3)+")") : (colors[i] = "hsl("+color2+",100,"+(45+(i-16)*3)+")");
						}
		break;
		
		case "MPO-20":
					for(let i=0;i<24;i++){
						if(i==0||i==11||i==12||i==23){colors[i]='grey'}else{
							(i<12) ? (colors[i] = "hsl("+color1+",100,"+(45+i*4)+")") : (colors[i] = "hsl("+color2+",100,"+(45+(i-12)*4)+")");
					}
					}
		break;
		
		case "MPO-24":
					for(let i=0;i<24;i++){
							(i<12) ? (colors[i] = "hsl("+color1+",100,"+(45+i*4)+")") : (colors[i] = "hsl("+color2+",100,"+(45+(i-12)*4)+")");
						}
				break;
      
		case "MPO-X6":
      for(let i=0;i<24;i++){
       if(i>=0&&i<=3)                   {colors[i]="hsl("+color1+",100,"+(45+i*6)+")"}
       if(i>=12&&i<=15)                 {colors[i]="hsl("+color1+",100,"+(45+(i-8)*6)+")"}
       if(i>=4&&i<=7  || i>=16&&i<=19)  {colors[i]='grey'}
       if(i>=8&&i<=11)                  {colors[i] = "hsl("+color2+",100,"+(45+(11-i)*7)+")"}
       if(i>=20&&i<=23)                 {colors[i] = "hsl("+color2+",100,"+(45+(27-i)*7)+")"}
			}			
		break;
      
		case "MPO-16":
			for(let i=0;i<16;i++){
			 if(i<8){colors[i]="hsl("+color1+",100,"+(45+i*7)+")"}else{colors[i] = "hsl("+color2+",100,"+(94-(i-8)*7)+")"}
			}			
		break;
		
		case "MPO-8":
			
					for(let i=0;i<12;i++){
						if(i<4){colors[i]="hsl("+color2+",100,"+(45+i*12)+")"} else if (i<8) {colors[i]='grey'} else {colors[i] = "hsl("+color1+",100,"+(94-(i-8)*12)+")"}
					}
				break;
			
				case "MPO-4":
					for(let i=0;i<12;i++){
						if(i<2){colors[i]="hsl("+color2+",100,"+(45+i*25)+")"} else if (i<10) {colors[i]='grey'} else {colors[i] = "hsl("+color1+",100,"+(94-(i-10)*25)+")"}
					}
				break;
			
		case "MPO-12A":
			for(let i=0;i<12;i++){
				if(i%2==0){colors[i]="hsl("+color1+",100,"+(45+i/2*9)+")"} else {colors[i] = "hsl("+color2+",100,"+(45+(i-1)/2*9)+")"}
			}
		break;	
	}
	return colors
}

//alternative function defining color by number of lane
//lane = must be string starting with Rx or Tx, after it must be number
function altSignalColors(lane,numbercolors){
  //E - elipses, L - lines. 108 - green, 20 - light orange, 0 - red, 33 - orange
  switch (lane.substr(0,2)){
    case "Rx":
      return "hsl(108,100,"+(32+lane.substr(2)*((98-32)/numbercolors))+")" 
    case "Tx":
      return "hsl(20,100,"+(32+lane.substr(2)*((98-32)/numbercolors))+")" 
    break;
  }
};
