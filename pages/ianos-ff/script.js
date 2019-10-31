
var w = Snap('#Wrapper')
var s = Snap('#Rack');
//store vars that need to be loaded here
var CDR1200IAN,guideIcon,principlesIcon;
//stores some paths that can be used
var firstPath='M22.15 756.23 L25.87 756.23 L25.88 784.79 L19.73 784.79 L19.73 763.16 C19.39 763.46 18.99 763.75 18.53 764.02 C18.06 764.28 17.58 764.52 17.05 764.74 C16.53 764.95 15.99 765.13 15.43 765.28 C14.87 765.43 14.32 765.54 13.77 765.6 L13.77 760.42 C15.38 759.95 16.89 759.35 18.3 758.62 C19.72 757.9 21.01 757.1 22.15 756.23 ZM42.98 770.51 A21.4899 21.4899 -180 1 0 -0 770.51 A21.4899 21.4899 -180 1 0 42.98 770.51 ZM39.49 770.51 A18 18 0 1 1 3.49 770.51 A18 18 0 1 1 39.49 770.51 Z',
    questionPath='M6.78 785.57 C7.8 785.57 8.65 785.87 9.33 786.48 C10.01 787.08 10.35 787.84 10.35 788.76 C10.35 789.7 10.02 790.47 9.35 791.08 C8.67 791.69 7.81 792 6.78 792 C5.73 792 4.87 791.69 4.18 791.06 C3.49 790.41 3.14 789.65 3.14 788.76 C3.14 787.85 3.49 787.09 4.18 786.48 C4.87 785.87 5.73 785.57 6.78 785.57 ZM6.95 763.14 C8.16	763.14 9.28 763.28 10.32 763.54 C11.37 763.81 12.28 764.23 13.05 764.8 C13.82 765.37 14.43 766.1 14.86 766.99	C15.3 767.88 15.52 768.95 15.52 770.2 C15.52 770.99 15.43 771.7 15.25 772.35 C15.06 772.99 14.8 773.6 14.44	774.17 C14.09 774.74 13.66 775.29 13.14 775.82 C12.61 776.34 12.02 776.89 11.34 777.44 C10.89 777.82 10.48	778.17 10.14 778.5 C9.8 778.82 9.51 779.14 9.28 779.46 C9.06 779.78 8.88 780.11 8.76 780.47 C8.64 780.83	8.59 781.24 8.59 781.69 C8.59 782 8.63 782.32 8.72 782.65 C8.8 782.97 8.91 783.25 9.06 783.46 L3.92 783.46	C3.8 783.13 3.69 782.74 3.62 782.32 C3.55 781.9 3.51 781.5 3.51 781.13 C3.51 780.53 3.57 779.98 3.69 779.49	C3.8 779 3.98 778.53 4.22 778.1 C4.45 777.66 4.74 777.25 5.09 776.85 C5.45 776.45 5.85 776.06 6.33 775.67	C6.82 775.25 7.25 774.87 7.62 774.51 C7.99 774.15 8.31 773.79 8.57 773.44 C8.83 773.08 9.03 772.72 9.15	772.33 C9.28 771.94 9.35 771.52 9.35 771.05 C9.35 770.65 9.28 770.27 9.13 769.93 C8.99 769.58 8.79 769.29 8.52 769.05 C8.25 768.8 7.93 768.6 7.54 768.46 C7.16 768.32 6.73 768.24 6.27 768.24 C5.25 768.24 4.19 768.46	3.11 768.88 C2.01 769.3 0.98 769.94 0 770.8 L0 764.93 C1.01 764.33 2.09 763.89 3.28 763.59 C4.46 763.29 5.69 763.14 6.95 763.14 Z',
    homePath='M0 792 L32.62 792 L32.62 766.04 L16.31 751.8 L0 766.04 L0 792 ZM4.54 787.68 L4.54 768.95 L16.31 758.68 L28.08 768.95 L28.08 787.68 L4.54 787.68 Z',
    threePath='M42.98 770.51 A21.4899 21.4899 -180 1 0 -0 770.51 A21.4899 21.4899 -180 1 0 42.98 770.51 ZM39.49 770.51 A18 18 0 1 1 3.49 770.51 A18 18 0 1 1 39.49 770.51 ZM21.81 755.9 C24.68 755.9 26.91 756.54 28.5 757.82 C30.09 759.11 30.89 760.78 30.89 762.83 C30.89 766.48 29.04 768.77 25.33 769.69 L25.33 769.79 C27.3 770.04 28.87 770.76 30.01 771.94 C31.16 773.13 31.73 774.59 31.73 776.31 C31.73 778.93 30.78 781 28.86 782.52 C26.95 784.03 24.31 784.79 20.93 784.79 C18.04 784.79 15.69 784.32 13.89 783.39 L13.89 778.03 C15.76 779.39 17.95 780.07 20.44 780.07 C22.02 780.07 23.25 779.74 24.13 779.06 C25.01 778.39 25.44 777.45 25.44 776.24 C25.44 774.99 24.9 774.03 23.81 773.36 C22.73 772.68 21.23 772.34 19.33 772.34 L16.74 772.34 L16.74 767.63 L19.14 767.63 C22.79 767.63 24.61 766.42 24.61 764 C24.61 761.73 23.21 760.59 20.41 760.59 C18.53 760.59 16.72 761.19 14.94 762.41 L14.94 757.38 C16.91 756.39 19.2 755.9 21.81 755.9 Z';

var frameW=950; //frame width
var currentFrame=0,frameX=currentFrame*frameW,textTitle,icon1_r,icon2_r,icon3_r,icon4_r;  //initial frame to load
var title = 'IANOS Front Face Patching Guide';
//loads SVG from Url, creates the group with no size and stores it in variable which can be cloned later
function loadSVG(paper,url,callback){
  let group = s.g().transform('matrix(0,0,0,0,0,0)');
  Snap.load(url, function (loadedFragment){
        group.append(loadedFragment);
        if(callback!==undefined){
          callback()
        }
      })
  return group
}
//when the preload is complete  
function stopPreload(){
  setTimeout(function(){
  preLoader.remove()
  headerFrame() //decoration and wrapper
  //generate frames -svgs - here
  //frame 0 - introduction page 
    //s.rect(10,10,930,730,5).attr({fill:'grey'})
    let hF=new homeFrame;
        hF.Draw();
  //frame 1 - single rack 
    let t = new singleIANOS;
        t.Draw()
  //frame 2 - three racks
    let d= new threeIANOS;
        d.Draw()
  //frame 3 - help page
    let help = s.rect(2860,10,930,730,5).attr({fill:'white'}),
        helpImg = openPNG(s,'https://dl.dropboxusercontent.com/s/4asudgqxem83a5g/about-front-face.png',2865,15,920,720,false);
  },500) //put here some time before draw starts like 1000,500
}
//preloader function - loads external SVG
function preLoadSVG(){
  preLoader();
  setTimeout(function(){
        CDR1200IAN = loadSVG(s,"https://dl.dropboxusercontent.com/s/0nvxu7le9ml34ex/CDR1200IAN.svg");
        guideIcon = loadSVG(s,"https://dl.dropboxusercontent.com/s/owp5tg04by9h614/guide.svg");
        principlesIcon = loadSVG(s,"https://dl.dropboxusercontent.com/s/h7g1i7ebvx5pzj4/principles.svg",stopPreload);
  },0)    
}
//preloading image
function preLoader(){
  preLoader = s.text(400,300,"Loading").attr({id:"preLoad", class:'Legend1'});
}
//headerFrame - top wrapper and content svg decoration (background etc etc)
function headerFrame(){
  
  let content=s.group(),
      wrapper = w.group(),
      rectWrapper = wrapper.rect(0,0,950,105).attr({fill:'none'});
      textTitle = wrapper.text(30,60,title).attr({id:'wrapperHeader', class:'Legend1'});
      icon1_r = wrapper.rect(950-4*60-4*20,22.5,60,60,5).attr({class:'Icon-background',id:'icon_home'});
  let icon1_l = wrapper.path(homePath).attr({fill:'#cbdbe9'}).transform('t644,-720'),
      icon1 = wrapper.group(icon1_r,icon1_l).attr({class:'Icon'});
      icon2_r = wrapper.rect(950-3*60-3*20,22.5,60,60,5).attr({class:'Icon-background',id:'icon_1_1200'});
  let icon2_l = wrapper.path(firstPath).attr({fill:'#cbdbe9'}).transform('t718,-718'),
      icon2 = wrapper.group(icon2_r,icon2_l).attr({class:'Icon'});
      icon3_r = wrapper.rect(950-2*60-2*20,22.5,60,60,5).attr({class:'Icon-background',id:'icon_3_1200'});
  let icon3_l = wrapper.path(threePath).attr({fill:'#cbdbe9'}).transform('t798,-718'),
      icon3 = wrapper.group(icon3_r,icon3_l).attr({class:'Icon'});
      icon4_r = wrapper.rect(950-1*60-1*20,22.5,60,60,5).attr({class:'Icon-background',id:'icon_question'});  
  let icon4_l = wrapper.path(questionPath).attr({fill:'#cbdbe9'}).transform('t892,-725'),
      icon4 = wrapper.group(icon4_r,icon4_l).attr({class:'Icon'}),
      rectIntro = content.rect(0,0,4*950,185).attr({class:'bg_blue_top'});
      changeFrame(currentFrame)
  
  //TODO. add title effects when the icon is hovered with cursor

  //add click function
  function addClickHandler(element,currFrame){
      element.click(function(){
        Snap.animate(frameX,currFrame*frameW,function(val){
          s.attr({viewBox:' '+val+' 0 950 750' })
        },500)
        currentFrame=currFrame
        checkCurrFrame()
        frameX=currFrame*frameW
      });
  };
  addClickHandler(icon1,0);
  addClickHandler(icon2,1);
  addClickHandler(icon3,2);
  addClickHandler(icon4,3);
};
//change the viewbox so that the selected frame is visible
//apply css to the icon
function changeFrame(frame){
  currentFrame=frame
  s.attr({viewBox:(frame*frameW)+' 0 950 750'});
  checkCurrFrame();    
}
//checks what is the current frame - selected and changes the color of it if selected
function checkCurrFrame(){ 
          if(currentFrame===0){icon1_r.attr({class:'Icon-selected'}); 
                               textTitle.attr({text:title})
                              }else{icon1_r.attr({class:'Icon-background'})}
          if(currentFrame===1){icon2_r.attr({class:'Icon-selected'});
                               textTitle.attr({text:'Single Rack'})
                              }else{icon2_r.attr({class:'Icon-background'})}
          if(currentFrame===2){icon3_r.attr({class:'Icon-selected'});
                               textTitle.attr({text:'Three Side-by-side Racks'})
                             }else{icon3_r.attr({class:'Icon-background'})}
          if(currentFrame===3){icon4_r.attr({class:'Icon-selected'})
                               textTitle.attr({text:'Help'})}else{icon4_r.attr({class:'Icon-background'})}
      }   
//run the script
preLoadSVG();

//single IANOS rack object
function singleIANOS(){
  const heightU = 11.7;
  const colors=['#005095','#E55A0D','#C1BA00'];
  const recPCL = { //these are recommended lengths
    AA:3, BA:3, CA:6, DA:5,
    AB:3, BB:3, CB:5, DB:4,
    AC:6, BC:5, CC:3, DC:3,
    AD:5, BD:4, CD:3, DD:3
  }
this.PCstate = {
  "endA":'L1',
  "endB":'L2',
  "pressed":1
};
  let obj=this;
  let scaleFactor;
//start of draw function  
this.Draw = function(){  

//create frame
var g1 = s.group(); // stores background, frame and other info
var g2 = s.group().attr({id:'rack-frame2'}); // stores rack
var g3 = s.group().attr({id:'rackrectangles-frame2'}).transform('t600,100'); // stores rack rectangles
var g4 = s.group().attr({id:'patchcords-frame2'}); //stores patchcords
var g5 = s.group().attr({id:'dots-frame2'}); //temporary circles
var g6 = s.group().attr({id:'legendGr-frame2'}); //legend
var g = s.group(g1,g2,g3,g4,g5,g6).attr({id:'frame2',transform:'matrix(1,0,0,1,950,0)'});

  g6.text(30,60,"Select first and second chassis by clicking red rectangles").attr({class:"Legend2"});
  // RACK - load rack 900 svg image   
  let cdr = CDR1200IAN.clone().transform('matrix(0.92,0,0,0.92,600,100)');
  g2.append(cdr);
//draws red rectangles - chassis that are clickable
for (let i=10;i>0;i--){
  let adder=0; (i<=5)?(adder=heightU):(adder=0);
let rect = g3.rect(98,486-(10-i)*heightU*4-adder,55,heightU*4,5).attr({id:"Chassis"+"L"+(11-i), fill: colors[1],stroke:"white", opacity:"0.8",cursor:'pointer'});
g3.text(115,520-(10-i)*heightU*4-adder,"L"+(11-i)).attr({class:"Legend3"})
let rect2 = g3.rect(172,486-(10-i)*heightU*4-adder,55,heightU*4,5).attr({id:"Chassis"+"R"+(11-i), fill: colors[1],stroke:"white", opacity:"0.8",cursor:'pointer'});
g3.text(182,520-(10-i)*heightU*4-adder,"R"+(11-i)).attr({class:"Legend3"})
rect.click(function(event){
   setChassis(event.srcElement.id.slice(7));
 });
  rect2.click(function(event){ 
   setChassis(event.srcElement.id.slice(7));
 });
 rect.append(Snap.parse('<title>Chassis '+(11-i)+' left</title>'));
 rect2.append(Snap.parse('<title>Chassis '+(11-i)+' right</title>'));
};
//builds dots which are used to build paths
let dots = showdots(false);
//build object of dots coordinates
//when show = true, then dots are shown
function showdots(show){
  const mS=46.8,sM=[12,13,14],rM=315; //mS - mandrel step, sM - shift in the middle (after 5th chassis), rM - rack middle
  let dots = {};
  for (let i=0;i<=10;i++){
    let adder=[],adder2=0;
    if(i>=5){adder=sM} else {adder=[0,0,0]};
    if(i==5){adder2=14} else {adder2=0};
    //dots left side
    dots['L'+(10-i)+'-1'] = [135,80+mS*i+adder[0]]
    dots['L'+(10-i)+'-2'] = [90,80+mS*i+adder[0]]
    dots['L'+(10-i)+'-3'] = [70,40+mS*i+adder[1]-adder2]
    dots['L'+(10-i)+'-4'] = [60,40+mS*i+adder[1]-adder2]
    dots['L'+(10-i)+'-5'] = [50,72+mS*i+adder[2]]
    dots['L'+(10-i)+'-6'] = [37,72+mS*i+adder[2]]
    dots['L'+(10-i)+'-7'] = [20,90+mS*i+adder[2]]
    //dots right side
    dots['R'+(10-i)+'-1'] = [rM-135+8,80+mS*i+adder[0]]
    dots['R'+(10-i)+'-2'] = [rM-90+8,80+mS*i+adder[0]]
    dots['R'+(10-i)+'-3'] = [rM-70,40+mS*i+adder[1]-adder2]
    dots['R'+(10-i)+'-4'] = [rM-60,40+mS*i+adder[1]-adder2]
    dots['R'+(10-i)+'-5'] = [rM-50,72+mS*i+adder[2]]
    dots['R'+(10-i)+'-6'] = [rM-37,72+mS*i+adder[2]]
    dots['R'+(10-i)+'-7'] = [rM-20,90+mS*i+adder[2]]
  }
  if(show){
      let g= s.g().attr({id:'dots',transform:'translate(1550,100)'});
      for (let property in dots){
     g.circle(dots[property][0],dots[property][1],5).attr({fill:"green"});
     g.text(dots[property][0]+2,dots[property][1]-2,property).attr({fill:"white",fontSize:'8px'});
      }
  }
  return dots
  }  
  
function setChassis(num){
  //console.log(num,obj.PCstate.pressed)
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
      //deletes the legend and patch lead from the preivous selection
      DeleteEl("#legend-frame2");      
      DeleteEl("#patchleads-frame2");
       //renew the color of rectangles
      s.select("#Chassis"+obj.PCstate.endA).attr({fill:colors[1]})
      s.select("#Chassis"+obj.PCstate.endB).attr({fill:colors[1]})
      obj.PCstate.endA = num;
      //the unit which was clicked takes green color
      s.select("#Chassis"+num).attr({fill:colors[2]})
    break;
    //means the second element clicked
    case 2:
      obj.PCstate.endB = num;
      obj.PCstate.pressed=1;
      s.select("#Chassis"+num).attr({fill:colors[2]})
      //a,b - L or R
      //aa,bb - chassis number
      let a = obj.PCstate.endA.substr(0,1); let b = obj.PCstate.endB.substr(0,1);
      let aa = obj.PCstate.endA.substr(1); let bb = obj.PCstate.endB.substr(1);
      let objPC = drawPatchLead(a,Number(aa),b,Number(bb));
      //Check whether side is the same      
      AddLegend(objPC)
    break;
  };
};
  
function drawPatchLead(a,aa,b,bb){
  
  let g44 = g4.group().attr({id:'patchleads-frame2',transform:'translate(600,100)'});
  //determine scale factor for calculating exact patchcord lengths
      scaleFactor = determineScaleFactor();
    //this function draws a path which should be equal to one of known dimensions - to calculate the scale factor
      function determineScaleFactor(vis){ 
        let path1200=g44.path().attr({d:'M 0 15 L 316 15',stroke:'green'}),
        scaleF= 1200/path1200.getTotalLength()
        if(!vis || vis===undefined){path1200.remove()}
        return scaleF
      } 
  
  let objPaths={};
  //define begin and end starting dots
  let startPath=[],endPath=[];
     startPath = [a+aa+'-1',a+aa+'-2',a+aa+'-3',a+aa+'-4',a+aa+'-5',a+aa+'-6'];
     endPath = [b+bb+'-6',b+bb+'-5',b+bb+'-4',b+bb+'-3',b+bb+'-2',b+bb+'-1'];
  //this stores array of dots
  let pathArr=[],lU=1,lD=1; 
  
  //within same half
  if(a===b){ 
    //if first chassis is higher than second
    if(aa>=bb){
      //if not same chassis - there is direct path
      if(aa!==bb){
        objPaths.directFrame2={}
        objPaths.directFrame2.path = concatDots(startPath,[a+aa+'-7',b+(bb+1)+'-7'],endPath)
      }
      //all mandrels up
      lU=1
      while(true){
          if(aa+lU>=10){break}
                  objPaths['U'+lU+'Frame2']={};
                  objPaths['U'+lU+'Frame2'].path = concatDots(startPath,[a+(aa+1)+'-7',a+(aa+lU)+'-7',a+(aa+lU)+'-6',a+(aa+lU)+'-5',a+(aa+lU+1)+'-5',a+(aa+lU+1)+'-6',a+(aa+lU+1)+'-7',b+(bb+1)+'-7'],endPath);
                     lU++;
          }
      //all mandrels down
      lD=1
      while(true){
          if(bb-lD<=0){break}
                  objPaths['D'+lD+'Frame2']={};
                  objPaths['D'+lD+'Frame2'].path = concatDots(startPath,[a+(aa)+'-7',b+(bb-lD)+'-7',b+(bb-lD-1)+'-6',b+(bb-lD-1)+'-5',b+(bb-lD)+'-5',b+(bb-lD)+'-6',b+(bb-lD+1)+'-7',b+(bb)+'-7'],endPath);
                     lD++;
          }
      }
    //if second chassis is higher than first chassis
    else if(aa<bb){
         //if not same chassis - there is direct path
        if(a+aa!==b+bb){
          objPaths.directFrame2.path={}
          objPaths.directFrame2.path = concatDots(startPath,[a+(aa+1)+'-7',b+(bb)+'-7'],endPath)
          }
        //all mandrels up
        lU=1
        while(true){
          if(bb+lU>=10){break}
                  objPaths['U'+lU+'Frame2']={};
                  objPaths['U'+lU+'Frame2'].path = concatDots(startPath,[a+(aa+1)+'-7',b+(bb+lU+1)+'-7',b+(bb+lU+1)+'-6',b+(bb+lU+1)+'-5',b+(bb+lU)+'-5',b+(bb+lU)+'-6',b+(bb+lU)+'-7',b+(bb+1)+'-7'],endPath);
                     lU++;
          }
        //all mandrels down
        lD=1
        while(true){
          if(aa-lD<=0){break}
                  objPaths['D'+lD+'Frame2']={};
                  objPaths['D'+lD+'Frame2'].path = concatDots(startPath,[a+(aa)+'-7',a+(aa-lD+1)+'-7',a+(aa-lD)+'-6',a+(aa-lD)+'-5',a+(aa-lD-1)+'-5',a+(aa-lD-1)+'-6',a+(aa-lD)+'-7',a+(aa-lD)+'-7',b+(bb)+'-7'],endPath);
                     lD++;
          }  
      }
    }
  //within different halves
  else if(a!==b){
    console.log(objPaths)
      objPaths.directFrame2 = {}     
      objPaths.directFrame2.path = concatDots(startPath,[a+(aa)+'-7',a+'0-7',b+'0-7',b+bb+'-7'],endPath)
      //all mandrels up - side A mandrels
      lU=1
      while(true){   
          if(aa+lU>=10){break}
                  objPaths['LU'+lU+'Frame2']={}
                  objPaths['LU'+lU+'Frame2'].path = concatDots(startPath,[a+(aa+1)+'-7',a+(aa+lU+1)+'-7',a+(aa+lU+1)+'-6',a+(aa+lU+1)+'-5',a+(aa+lU)+'-5',a+(aa+lU)+'-6',a+(aa+lU)+'-7',a+(aa)+'-7',a+'0-7',b+'0-7',b+bb+'-7',b+(bb)+'-7'],endPath);
                     lU++;
          }
      //all mandrels up - side B mandrels
      lU=1
      while(true){
         if(bb+lU>=10){break}
                  objPaths['RU'+lU+'Frame2']={};
                  objPaths['RU'+lU+'Frame2'].path = concatDots(startPath,[a+(aa)+'-7',a+'0-7',b+'0-7',b+bb+'-7',b+(bb)+'-7',b+(bb+lU+1)+'-7',b+(bb+lU+1)+'-6',b+(bb+lU+1)+'-5',b+(bb+lU)+'-5',b+(bb+lU)+'-6',b+(bb+lU)+'-7',b+(bb+1)+'-7'],endPath);
                     lU++;
          }
    }
  //other cases
  else {
      console.warn('There was a combination that is not considered')
  }
  
  console.log(objPaths)
  
  let i=0; 
  //draw every path 
  //pre-draw all possible patching options
    for(let key in objPaths){
          if(objPaths[key].path!==undefined){
            let path = convertDots(objPaths[key].path,dots);
            objPaths[key].length ={};objPaths[key].pc ={};
            objPaths[key].length = drawPath(path,key,i,g44,0,scaleFactor)
            // after obtaining the physical length - determines the patch cord length
            objPaths[key].pc = calculatePCLength(objPaths[key].length)
            i++;  
          }
    }
  return objPaths
} 
//function draws legend
function AddLegend(objPC){
  let gr = g6.g().attr({id:'legend-frame2'});
  gr.rect(60,100,65,60,5).attr({fill: colors[1],stroke:"white"})
  gr.text(70,140,obj.PCstate.endA).attr({class:"Legend2"})
  //arrow symbol
  gr.polygon(249.888,490,8.139,244.996,249.888,0,481.861,0,239.71,244.996,481.861,490).attr({
    transform:'matrix(-.1,0,0,.1,190,108)',fill:'grey'})
  gr.rect(200,100,65,60,5).attr({fill: colors[1],stroke:"white"})
  gr.text(210,140,obj.PCstate.endB).attr({class:"Legend2"})
  
  let a = obj.PCstate.endA, b=obj.PCstate.endB, A=defineSection(a.substr(0,1)+'1-'+a.substr(1)),B=defineSection(b.substr(0,1)+'1-'+b.substr(1)); 
  //draws patch cord lengths
  let recPClen;
  //recommended patch cord length
    if(recPCL[A+B]===undefined){
      console.warn((A+B) + ' recommended length not determined')  
    } 
  else {
      recPClen = recPCL[A+B]
    }
  gr.text(30,230,"Recommended patch lead").attr({class:"Legend1"})
//go through the list of obtained patch cord length and show only appropriate
  let currPC=0,currLen=0,pc;
  let findRecLengthKey = function(recPClen){ 
       for( let key in objPC) {
         pc = objPC[key].pc/1000; 
         if(objPC[key].path!==undefined && pc==recPClen){
           //remember the patch cord and its length
           if(currPC==0 && currLen==0){currPC = key;currLen=pc} else if (pc === currLen){
             let el = Snap.select("#"+currPC);
             el.attr({opacity:0});
             currLen=pc;
             currPC=key
           }}}
  }
  findRecLengthKey(recPClen);
  //if recommended patch cord length was not found, then check for the next length - +0.5 meter
  let nextRecPC=[0.5,1,1.5,-0.5,-1],q=0;
  while (currPC==0){
    console.log('verifying '+(recPClen+nextRecPC[q])+' cord')
    findRecLengthKey(recPClen+nextRecPC[q])
    q++;
  }
     //recommended patch cord lengths
     gr.rect(60,250,100,50,4).attr({fill:colors[0],opacity:0.5})
     gr.text(80,282,currLen+' m').attr({class:"Legend2"})
     //show patch cord and mirror it if sides are swapped
     let el = Snap.select("#"+currPC),
         elLength=objPC[currPC].length;
     //when side R is selected
     el.attr({opacity:1,stroke:colors[0],strokeWidth:(4),'stroke-dasharray': elLength + ' ' + elLength,
    strokeDashoffset: elLength});
      el.animate({
            strokeDashoffset : 0
        },5000, mina.linear)
    
  
  //show alternative patching options
  let iii=0,showAlt=false;
  for( let key in objPC) {
    pc = objPC[key].pc/1000; 
    //skip the pc which is recommended
   if(objPC[key].path!==undefined && key!=currPC){
     showAlt=true;
     let rect = gr.rect(60,350+25*iii,75,23,4).attr({class:"alt-cords-button",fill:'grey',opacity:0.5,cursor:'pointer'})
     gr.text(75,368+25*iii,pc+' m').attr({class:"Legend3"})
     //when click on the alternative patch cord - it's shown for 3 seconds
     rect.click(function(){
       let el2 = Snap.select("#"+key);
       el2.attr({opacity:1,strokeWidth:4,stroke:'grey'});
       el.attr({opacity:0});
       setTimeout(function(){
         el2.attr({opacity:0});
         el.attr({opacity:1});
       },3000)
     })
     iii++;
     }
    
  } 
  //show alternative only if there is at least one alternative path
  if(showAlt){
    gr.text(30,330,"Alternative patch leads (clickable buttons)").attr({class:"Legend1",fontSize:'15px'});
  }
    gr.text(30,730,"To start again - select new chassis").attr({class:"Legend1"});
}; 
}
};
//end of single IANOS object

//three IANOS object
function threeIANOS(){
  const heightU = 10.1;
  const colors=['#005095','#E55A0D','#C1BA00'];
  const recPCL = { //recommended lengths defined in the application note
    AA:3, BA:3, CA:6, DA:5, EA:6.5, FA:5.5, GA:7.5, HA:6.5, IA:8,   JA:7,   KA:9,   LA:8,
          BB:3, CB:5, DB:4, EB:5.5, FB:4.5, GB:6.5, HB:5.5, IB:7,   JB:6,   KB:8,   LB:7,
                CC:3, DC:3, EC:5.5, FC:4.5, GC:6.5, HC:5.5, IC:7,   JC:6,   KC:8,   LC:7,
                      DD:3, ED:4.5, FD:3.5, GD:5.5, HD:4.5, ID:6,   JD:5,   KD:7,   LD:6,
                            EE:3,   FE:3,   GE:6,   HE:5,   IE:6.5, JE:5.5, KE:7.5, LE:6.5,
                                    FF:3,   GF:5,   HF:4,   IF:4.5, JF:4.5, KF:6.5, LF:5.5,
                                            GG:3,   HG:3,   IG:5.5, JG:4.5, KG:6.5, LG:5.5,
                                                    HH:3,   IH:4.5, JH:3.5, KH:5.5, LH:4.5,
                                                            II:3,   JI:3,   KI:6,   LI:5,
                                                                    JJ:3,   KJ:5,   LJ:4,
                                                                            KK:3,   LK:3,
                                                                                    LL:3
  };
 let scaleFactor;
  this.PCstate = {
  endA:'L1',
  endB:'L2',
  pressed:1
};
  
  let obj=this;
  
  this.Draw = function(){
  //create frame
var g1 = s.group().attr({id:'empty-frame3'}); // stores background, frame and other info
var g2 = s.group().attr({id:'rack-frame3'}); // stores rack
var g3 = s.group().attr({id:'chassis-frame3'}); // stores rack rectangles
var g4 = s.group().attr({id:'patchcords-frame3'}); //stores patchcords
var g5 = s.group().attr({id:'dots-frame3'}); //temporary circles
var g6 = s.group().attr({id:'legend-frame3'}); //legend
var g = s.group(g1,g2,g3,g4,g5,g6).attr({id:'frame3',transform:'matrix(1,0,0,1,1900,0)'}); 
    
  let annotation = g6.text(30,60,"Select first and second chassis by clicking red rectangles").attr({class:"Legend2"});
  
  // RACK - load rack 900 svg image 
  //rescale rack to fit the canvas  
  let cdr1 = CDR1200IAN.clone().transform('matrix(0.8,0,0,0.8,60,200)'),
      cdr2 = CDR1200IAN.clone().transform('matrix(0.8,0,0,0.8,335,200)'),
      cdr3 = CDR1200IAN.clone().transform('matrix(0.8,0,0,0.8,610,200)'),
      cdrs=g2.group(cdr1,cdr2,cdr3);
    //draws red rectangles - imitates chassis that are clickable
    drawRedRectangles();
    function drawRedRectangles(){
    for (let j=0;j<3;j++){
      for (let i=10;i>0;i--){
            let adder=0; (i<=5)?(adder=heightU):(adder=0);
            let rect = g3.rect(145+j*275,620-(10-i)*heightU*4-adder,50,heightU*4,5).attr({id:"Chassis"+"L"+(j+1)+'-'+(11-i), fill: colors[1],stroke:"white", opacity:"0.8",cursor:'pointer'});
            g3.text(155+j*275,650-(10-i)*heightU*4-adder,"L"+(j+1)+'-'+(11-i)).attr({class:"Legend3",fontSize:'14px'})
            let rect2 = g3.rect(206+j*275,620-(10-i)*heightU*4-adder,50,heightU*4,5).attr({id:"Chassis"+"R"+(j+1)+'-'+(11-i), fill: colors[1],stroke:"white", opacity:"0.8",cursor:'pointer'});
            g3.text(214+j*275,650-(10-i)*heightU*4-adder,"R"+(j+1)+'-'+(11-i)).attr({class:"Legend3",fontSize:'14px'})
           //add event handlers to rectangles   
          rect.click(function(event){
             setChassis(event.srcElement.id.slice(7));
           });
            rect2.click(function(event){ 
             setChassis(event.srcElement.id.slice(7));
           });
           rect.append(Snap.parse('<title>Chassis '+(11-i)+' left</title>'));
           rect2.append(Snap.parse('<title>Chassis '+(11-i)+' right</title>'));
          }
    } 
    }
    //builds dots which are used to build paths
    let dots = showdots(false);
    //build object of dots coordinates and their names
    //when show = true, then dots are shown
    function showdots(show){
      const mS=40.5,sM=[10.2,10.6,11],rM=393; //mS - mandrel step, sM - shift in the middle (after 5th chassis), rM - rack middle
      let dots = {};
     for (let j=0;j<3;j++){
        for (let i=0;i<=10;i++){
          let adder=[],adder2=0;
          if(i>=5){adder=sM} else {adder=[0,0,0]};
          if(i==5){adder2=14} else {adder2=0}
          //dots left side
          dots['L'+(j+1)+'-'+(10-i)+'-1'] = [180+j*275,270+mS*i+adder[0]]
          dots['L'+(j+1)+'-'+(10-i)+'-2'] = [140+j*275,270+mS*i+adder[0]]
          dots['L'+(j+1)+'-'+(10-i)+'-3'] = [122+j*275,232+mS*i+adder[1]-adder2]
          dots['L'+(j+1)+'-'+(10-i)+'-4'] = [110+j*275,232+mS*i+adder[1]-adder2]
          dots['L'+(j+1)+'-'+(10-i)+'-5'] = [102+j*275,260+mS*i+adder[2]]
          dots['L'+(j+1)+'-'+(10-i)+'-6'] = [90+j*275,260+mS*i+adder[2]]
          dots['L'+(j+1)+'-'+(10-i)+'-7'] = [78+j*275,282+mS*i+adder[2]]
          // //dots right side
          dots['R'+(j+1)+'-'+(10-i)+'-1'] = [rM-180+8+j*275,270+mS*i+adder[0]]
          dots['R'+(j+1)+'-'+(10-i)+'-2'] = [rM-140+8+j*275,270+mS*i+adder[0]]
          dots['R'+(j+1)+'-'+(10-i)+'-3'] = [rM-122+j*275,232+mS*i+adder[1]-adder2]
          dots['R'+(j+1)+'-'+(10-i)+'-4'] = [rM-110+j*275,232+mS*i+adder[1]-adder2]
          dots['R'+(j+1)+'-'+(10-i)+'-5'] = [rM-102+j*275,260+mS*i+adder[2]]
          dots['R'+(j+1)+'-'+(10-i)+'-6'] = [rM-90+j*275,260+mS*i+adder[2]]
          dots['R'+(j+1)+'-'+(10-i)+'-7'] = [rM-78+j*275,282+mS*i+adder[2]]
        }
        //bottom dots
        dots['LB'+(j+1)]=[115+j*275,695]
        dots['MB'+(j+1)]=[199+j*275,695]
        dots['RB'+(j+1)]=[278+j*275,695]
     }
        if(show){
            for (let property in dots){
           g5.circle(dots[property][0],dots[property][1],5).attr({fill:"green"});
           g5.text(dots[property][0]+2,dots[property][1]-2,property).attr({fill:"white",fontSize:'8px'});
            }
        }
      return dots
      }

function setChassis(num){
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
      //deletes the legend and patch lead from the preivous selection
      DeleteEl("#legendgroup-frame3");
      DeleteEl("#patchleads-frame3");
       //renew the color of rectangles
      s.select("#Chassis"+obj.PCstate.endA).attr({fill:colors[1]})
      s.select("#Chassis"+obj.PCstate.endB).attr({fill:colors[1]})
      obj.PCstate.endA = num;
      //the unit which was clicked takes green color
      s.select("#Chassis"+num).attr({fill:colors[2]})
    break;
    //means the second element clicked
    case 2:
      obj.PCstate.endB = num;
      obj.PCstate.pressed=1;
      s.select("#Chassis"+num).attr({fill:colors[2]})
      //a,b - L or R
      //aa,bb - rack number
      //aaa,bbb - chassis number
      let a = obj.PCstate.endA.substr(0,1),
          b = obj.PCstate.endB.substr(0,1),
          aa = Number(obj.PCstate.endA.substr(1,1)),
          bb = Number(obj.PCstate.endB.substr(1,1)),
          aaa = Number(obj.PCstate.endA.substr(3)),
          bbb = Number(obj.PCstate.endB.substr(3));
      //pre-draw all patch leads
      let objPC = drawPatchLead(a,aa,aaa,b,bb,bbb);
      //Check whether side is the same      
      addLegend(objPC)
    break;
  };
};
//draws all possible patch leads, where
//a - chassis, aa - number of chassis, aaa - number of rack
function drawPatchLead(a,aa,aaa,b,bb,bbb){
  //group stores paths
  let g44 = g4.group().attr({id:'patchleads-frame3'}); 
    //determine scale factor for calculating exact patchcord lengths
      scaleFactor = determineScaleFactor();
    //this function draws a path which should be equal to one of known dimensions - to calculate the scale factor
      function determineScaleFactor(vis){ 
        let path1200=g44.path().attr({d:'M 61 207 L 334 207',stroke:'green'}),
        scaleF= 1200/path1200.getTotalLength()
        if(!vis || vis===undefined){path1200.remove()}
        return scaleF
      } 
  let objPaths={};
  //define begin and end starting dots
  let startPath=[],endPath=[];
     startPath = [a+aa+'-'+aaa+'-1',a+aa+'-'+aaa+'-2',a+aa+'-'+aaa+'-3',a+aa+'-'+aaa+'-4',a+aa+'-'+aaa+'-5',a+aa+'-'+aaa+'-6'];
     endPath = [b+bb+'-'+bbb+'-6',b+bb+'-'+bbb+'-5',b+bb+'-'+bbb+'-4',b+bb+'-'+bbb+'-3',b+bb+'-'+bbb+'-2',b+bb+'-'+bbb+'-1'];
  //this stores array of dots
  let pathArr=[],lU=1,lD=1; 
  //check direct path - with no mandrels
  objPaths.directFrame3={}
  if(a+aa+aaa!==b+bb+bbb && a+aa===b+bb){ 
    //
    //within same half but not same chassis
    //
    if(aaa>bbb){
      //if first chassis is higher than second
      objPaths.directFrame3.path = concatDots(startPath,[a+aa+'-'+aaa+'-7',b+bb+'-'+(bbb+1)+'-7'],endPath)
      //all mandrels up
      lU=1
      while(true){
          if(aaa+lU>=10){break}
                  objPaths['U'+lU+'Frame3']={};
                  objPaths['U'+lU+'Frame3'].path = concatDots(startPath,[a+aa+'-'+(aaa+1)+'-7',a+aa+'-'+(aaa+lU)+'-7',a+aa+'-'+(aaa+lU)+'-6',a+aa+'-'+(aaa+lU)+'-5',a+aa+'-'+(aaa+lU+1)+'-5',a+aa+'-'+(aaa+lU+1)+'-6',a+aa+'-'+(aaa+lU+1)+'-7',b+bb+'-'+(bbb+1)+'-7'],endPath);
                     lU++;
          }
      //all mandrels down
      lD=1
      while(true){
          if(bbb-lD<=0){break}
                  objPaths['D'+lD+'Frame3']={};
                  objPaths['D'+lD+'Frame3'].path = concatDots(startPath,[a+aa+'-'+(aaa)+'-7',b+bb+'-'+(bbb-lD)+'-7',b+bb+'-'+(bbb-lD-1)+'-6',b+bb+'-'+(bbb-lD-1)+'-5',b+bb+'-'+(bbb-lD)+'-5',b+bb+'-'+(bbb-lD)+'-6',b+bb+'-'+(bbb-lD+1)+'-7',b+bb+'-'+(bbb)+'-7'],endPath);
                     lD++;
          }
      
      } else if(aaa<bbb){
        //if second chassis is higher than first chassis
      objPaths.directFrame3.path = concatDots(startPath,[a+aa+'-'+(aaa+1)+'-7',b+bb+'-'+(bbb)+'-7'],endPath)
        //all mandrels up
        lU=1
        while(true){
          if(bbb+lU>=10){break}
                  objPaths['U'+lU+'Frame3']={};
                  objPaths['U'+lU+'Frame3'].path = concatDots(startPath,[a+aa+'-'+(aaa+1)+'-7',b+bb+'-'+(bbb+lU+1)+'-7',b+bb+'-'+(bbb+lU+1)+'-6',b+bb+'-'+(bbb+lU+1)+'-5',b+bb+'-'+(bbb+lU)+'-5',b+bb+'-'+(bbb+lU)+'-6',b+bb+'-'+(bbb+lU)+'-7',b+bb+'-'+(bbb+1)+'-7'],endPath);
                     lU++;
          }
        //all mandrels down
        lD=1
        while(true){
          if(aaa-lD<=0){break}
                  objPaths['D'+lD+'Frame3']={};
                  objPaths['D'+lD+'Frame3'].path = concatDots(startPath,[a+aa+'-'+(aaa)+'-7',a+aa+'-'+(aaa-lD+1)+'-7',a+aa+'-'+(aaa-lD)+'-6',a+aa+'-'+(aaa-lD)+'-5',a+aa+'-'+(aaa-lD-1)+'-5',a+aa+'-'+(aaa-lD-1)+'-6',a+aa+'-'+(aaa-lD)+'-7',a+aa+'-'+(aaa-lD)+'-7',b+bb+'-'+(bbb)+'-7'],endPath);
                     lD++;
          }  
      }
    } else if(a+aa!==b+bb){
      //
      //within different halves
      //
      objPaths.directFrame3.path = concatDots(startPath,[a+aa+'-'+(aaa)+'-7',a+aa+'-0-7',b+bb+'-0-7',b+bb+'-1-7',b+bb+'-'+(bbb)+'-7'],endPath)
      //all mandrels up - side A mandrels
      lU=1
      while(true){   
          if(aaa+lU>=10){break}
                  objPaths['LU'+lU+'Frame3']={}
                  objPaths['LU'+lU+'Frame3'].path = concatDots(startPath,[a+aa+'-'+(aaa+1)+'-7',a+aa+'-'+(aaa+lU+1)+'-7',a+aa+'-'+(aaa+lU+1)+'-6',a+aa+'-'+(aaa+lU+1)+'-5',a+aa+'-'+(aaa+lU)+'-5',a+aa+'-'+(aaa+lU)+'-6',a+aa+'-'+(aaa+lU)+'-7',a+aa+'-'+(aaa)+'-7',a+aa+'-0-7',b+bb+'-0-7',b+bb+'-1-7',b+bb+'-'+(bbb)+'-7'],endPath);
                     lU++;
          }
      //all mandrels up - side B mandrels
        lU=1
        while(true){
         if(bbb+lU>=10){break}
                  objPaths['RU'+lU+'Frame3']={};
                  objPaths['RU'+lU+'Frame3'].path = concatDots(startPath,[a+aa+'-'+(aaa)+'-7',a+aa+'-0-7',b+bb+'-0-7',b+bb+'-1-7',b+bb+'-'+(bbb)+'-7',b+bb+'-'+(bbb+lU+1)+'-7',b+bb+'-'+(bbb+lU+1)+'-6',b+bb+'-'+(bbb+lU+1)+'-5',b+bb+'-'+(bbb+lU)+'-5',b+bb+'-'+(bbb+lU)+'-6',b+bb+'-'+(bbb+lU)+'-7',b+bb+'-'+(bbb+1)+'-7'],endPath);
                     lU++;
          }
      
    } else if(a+aa+aaa===b+bb+bbb){
              //same chassis
              } else {console.warn('There was a combination that is not considered')}
  console.log(objPaths)
  let i=0; 
  //pre-draw all possible paths
    for(let key in objPaths){
          if(objPaths[key].path!==undefined){
            let path = convertDots(objPaths[key].path,dots);
            objPaths[key].length ={};objPaths[key].pc ={};
            objPaths[key].length = drawPath(path,key,i,g44,0,scaleFactor)
            // after obtaining the physical length - determines the patch cord length
            objPaths[key].pc = calculatePCLength(objPaths[key].length)
            i++;  
          }
    }

  return objPaths
 // check patching side
} 
//function draws legend
function addLegend(objPC){
  
  let gr = g6.g().attr({id:'legendgroup-frame3'});
  gr.rect(60,80,90,60,5).attr({fill: colors[1],stroke:"white"})
  gr.text(70,120,obj.PCstate.endA).attr({class:"Legend2"})
  //arrow symbol
  gr.polygon(249.888,490,8.139,244.996,249.888,0,481.861,0,239.71,244.996,481.861,490).attr({
    transform:'matrix(-.1,0,0,.1,220,88)',fill:'grey'})
  //second selected rectangle
  gr.rect(240,80,90,60,5).attr({fill: colors[1],stroke:"white"})
  gr.text(250,120,obj.PCstate.endB).attr({class:"Legend2"})
  //again arrow symbol
  gr.polygon(249.888,490,8.139,244.996,249.888,0,481.861,0,239.71,244.996,481.861,490).attr({
    transform:'matrix(-.1,0,0,.1,400,88)',fill:'grey'})
  
  let a = obj.PCstate.endA, b=obj.PCstate.endB, A=defineSection(a),B=defineSection(b); 
  //draws patch cord lengths
  let recPClen;
  //recommended patch cord length
    if(recPCL[A+B]===undefined){
      recPClen = recPCL[B+A]  
    } 
  else {
      recPClen = recPCL[A+B]
    }
  console.log('recommended patch cord lenght: '+recPClen+' m')
 
//go through the list of obtained patch cord length and show only appropriate
  let currPC=0,currLen=0,pc;
  let findRecLengthKey = function(recPClen){ 
       for( let key in objPC) {
         pc = objPC[key].pc/1000; 
         if(objPC[key].path!==undefined && pc==recPClen){
           //remember the patch cord and its length
           if(currPC==0 && currLen==0){currPC = key;currLen=pc} else if (pc === currLen){
             let el = Snap.select("#"+currPC);
             el.attr({opacity:0});
             currLen=pc;
             currPC=key;
           }}}
  }
  findRecLengthKey(recPClen);
  //if recommended patch cord length was not found, then check for the next length - +0.5 meter
  let nextRecPC=[0.5,1,1.5,-0.5,-1],q=0;
  while (currPC==0){
    console.log('verifying '+(recPClen+nextRecPC[q])+' cord')
    findRecLengthKey(recPClen+nextRecPC[q])
    q++;
  }
     //recommended patch cord lengths
     gr.rect(420,80,110,60,4).attr({fill:colors[0],opacity:0.5})
     gr.text(435,120,currLen+' m').attr({class:"Legend2"})
     let el = Snap.select("#"+currPC),
         elLength=objPC[currPC].length;
     el.attr({opacity:1,stroke:colors[0],strokeWidth:(4),'stroke-dasharray': elLength + ' ' + elLength,
    strokeDashoffset: elLength});
      el.animate({
            strokeDashoffset : 0
        },5000, mina.linear)
  
  //show alternative patching options
  let iii=0,showAlt=false;
  for( let key in objPC) {
    pc = objPC[key].pc/1000; 
    //skip the pc which is recommended
   if(objPC[key].path!==undefined && key!=currPC){
     showAlt=true;
     //to 4 columns
     let rect = gr.rect(625+45*iii-(iii-iii % 5)*45,100 + (iii-iii % 5)/5*25,40,20,4).attr({class:"alt-cords-button",fill:'grey',opacity:1,cursor:'pointer'})
     gr.text(635+45*iii-(iii-iii % 5)*45,115 + (iii-iii % 5)/5*25,pc+' m').attr({class:"Legend3",fontSize:'10px'})
     //when click on the alternative patch cord - it's shown for 3 seconds
     rect.click(function(){
       let el2 = Snap.select("#"+key);       
        el2.attr({opacity:1,strokeWidth:4,stroke:'grey'});
        el.attr({opacity:0});
       setTimeout(function(){
         el2.attr({opacity:0});
         el.attr({opacity:1});
       },3000)
     })
     iii++;
     }
    
  } 
  //show alternative only if there is at least one alternative path
  if(showAlt){
    gr.text(700,90,"Alternative").attr({class:"Legend1",fontSize:'15px'});
  }
    gr.text(30,170,"To start again - select chassis again").attr({class:"Legend2",fontSize:'16px'});
}; 

  }
}
//end of three IANOS object
function homeFrame(){
  this.Draw = function(){
  //frame subgroups
    var g1 = s.group().attr({id:'empty-frame1'}); // stores background, frame and other info
    var g2 = s.group().attr({id:'title-frame1'}); // shows title
    var g3 = s.group().attr({id:'tools-frame1'}); // other frames links
    var g4 = s.group().attr({id:'application-note-frame1'}); //stores patchcords
    var g5 = s.group().attr({id:'image-frame1'}); //temporary circles
    var g = s.group(g1,g2,g3,g4,g5).attr({id:'frame1',transform:'matrix(1,0,0,1,0,0)'});
  //title
    g2.text(60,60,'Interactive Patching Guide').attr({class:'Legend2'})
    g2.text(60,100,title).attr({class:'Legend2'})
  //other frames links
    g3.rect(60,150,400,120,5).attr({fill:'white',stroke:'grey',strokeWidth:'2px'})
      let icon1_rr = g3.rect(80,170,80,80,5).attr({class:'Icon'}),
          icon1_ll = g3.path(firstPath).attr({fill:'white',cursor:'pointer'}).transform('t98,-560'),
          icon1=g3.group(icon1_rr,icon1_ll).click(function(){changeFrame(1)});
    g3.text(180,220,'Single Rack').attr({class:'Legend3'})
    g3.rect(60,300,400,120,5).attr({fill:'white',stroke:'grey',strokeWidth:'2px'})    
      let icon2_rr = g3.rect(80,320,80,80,5).attr({class:'Icon'}),
          icon2_ll = g3.path(threePath).attr({fill:'white',cursor:'pointer'}).transform('t98,-410'),
          icon2=g3.group(icon2_rr,icon2_ll).click(function(){changeFrame(2)});
    g3.text(180,370,'Three Side-by-side racks').attr({class:'Legend3'})
    
    g4.rect(600,150,300,270,5).attr({fill:'white',stroke:'grey',strokeWidth:'2px'})
    //recommended lengths icon
    let recLen = g4.group().attr({id:'recommended-lengths-icon'}).transform('matrix(1,0,0,1,620,170)'),
        recLenRect = recLen.rect(0,0,80,80,5).attr({class:'Icon'}),
        guideIconClone = guideIcon.clone().transform('matrix(2,0,0,2,3,25)').attr({stroke:'white', fill:'none',cursor:'pointer'});
    recLen.text(90,30,'Recommended').attr({class:'Legend3'})
    recLen.text(90,50,'lengths').attr({class:'Legend3'});
    recLen.append(guideIconClone);
    recLen.click(function(){
      openPNG(s,'https://dl.dropboxusercontent.com/s/5ik69yd8gaf66p5/recommended-lengths.png',10,10,920,720,true)
    })
    //patching principles
    let recPatch = g4.group().attr({id:'patching-principles'}).transform('matrix(1,0,0,1,620,270)'),
        recPatchRect = recPatch.rect(0,0,80,80,5).attr({class:'Icon'}),
        principlesIconClone = principlesIcon.clone().transform('matrix(1.5,0,0,1.5,13,8)').attr({stroke:'white', fill:'none',cursor:'pointer'});
    recPatch.append(principlesIconClone);
    recPatch.text(90,30,'Patching').attr({class:'Legend3'})
    recPatch.text(90,50,'principles').attr({class:'Legend3'})
    recPatch.click(function(){
      openPNG(s,'https://dl.dropboxusercontent.com/s/1cmemitbldkhdtj/patching-principle.png',10,10,920,720,true)
    })
}
}




















//Helpful functions
//Return values or repeateble actions
//opens png file and adds event to close it
function openPNG(paper,src,x,y,W,H,clickOnClose){  
  let img = paper.image(src,x,y,W,H);
  if(clickOnClose || clickOnClose===undefined){
    img.attr({cursor:'pointer'})
    img.append(Snap.parse('<title>click on image to close it</title>'))
    img.click(function(){img.remove()})
  }
}

//simple function determines which section of rack the chassis is
function defineSection(a){
    let A;    
    switch (true){
    case (a=='L1-10' || a=='L1-9' || a=='L1-8'|| a=='L1-7' || a=='L1-6'):
      A='A'
      break;
     case (a=='L1-5' || a=='L1-4' || a=='L1-3'|| a=='L1-2' || a=='L1-1'):
      A='B'
      break; 
    case (a=='R1-10' || a=='R1-9' || a=='R1-8'|| a=='R1-7' || a=='R1-6'):
      A='C'
      break;
     case (a=='R1-5' || a=='R1-4' || a=='R1-3'|| a=='R1-2' || a=='R1-1'):
      A='D'
      break;
     case (a=='L2-10' || a=='L2-9' || a=='L2-8'|| a=='L2-7' || a=='L2-6'):
      A='E'
      break;
     case (a=='L2-5' || a=='L2-4' || a=='L2-3'|| a=='L2-2' || a=='L2-1'):
      A='F'
      break; 
    case (a=='R2-10' || a=='R2-9' || a=='R2-8'|| a=='R2-7' || a=='R2-6'):
      A='G'
      break;
     case (a=='R2-5' || a=='R2-4' || a=='R2-3'|| a=='R2-2' || a=='R2-1'):
      A='H'
      break;
     case (a=='L3-10' || a=='L3-9' || a=='L3-8'|| a=='L3-7' || a=='L3-6'):
      A='I'
      break;
     case (a=='L3-5' || a=='L3-4' || a=='L3-3'|| a=='L3-2' || a=='L3-1'):
      A='J'
      break; 
    case (a=='R3-10' || a=='R3-9' || a=='R3-8'|| a=='R3-7' || a=='R3-6'):
      A='K'
      break;
     case (a=='R3-5' || a=='R3-4' || a=='R3-3'|| a=='R3-2' || a=='R3-1'):
      A='L'
      break;
  }
    return A;
 }
//function takes first array, adds in the middle second array and adds in the end the third array
//returns concatenated array
function concatDots(array1,array2,array3){
  if(array1===undefined){array1=[]}
  if(array2===undefined){array2=[]}
  if(array3===undefined){array3=[]}
  let arr=[];
    arr=arr.concat(array1)
    for(let el in array2){arr.push(array2[el])}
    arr=arr.concat(array3)
    return arr;
}

//build object of dots coordinates
function convertDots(obj,dots){
  let path = "M ";
  for(let el in obj){ 
    if(dots[obj[el]]===undefined){console.log(obj[el])}
      path = path + dots[obj[el]][0] + ' ' + dots[obj[el]][1]+ ' L'
  }
  path = path.slice(0,-1)
  return path
}  

//function draws single invisible path with key as id and attaches that into group gr
function drawPath(path,key,i,gr,vis,scaleFactor){
  let pc1 = gr.path().attr({
                //check the function below which rounds path corners      
                    d: roundPathCorners(path,5,false),
                    id:key, 
                    fill:'none',                    
                    opacity:vis,
                    stroke:'red'
                    });
              let pathLength = pc1.getTotalLength();                  
  //two times 200mm is taken to compensate the length which is required to go through black mandrels to the rear part of a rack
  return pathLength*scaleFactor+2*200
} 
 //function determines patch cord length, step between lengths - 0.5 meter 
function calculatePCLength(len){
  let adder=0,ch=Math.abs(Math.ceil(len/500)*500-len) ;
  (ch<=420)?(adder=0):(adder=-500)
  return Math.ceil(len/500)*500+adder
  }
//end of draw function
//deletes element by id
function DeleteEl(id){
  let el = s.select(id);
  if(el){el.remove()}
}

//changes the text of the given element with animation
//p - paper, id - id of <text> tag, text - text to place, speed - how fast to change letters
function changeText(p,id,text,speed){
  changingComplete=false
  if(speed===undefined){speed=0}
  let textArr =[];
  textArr = text.split('');
  let newText ='';
  let el = Snap.select('#'+id);
  if(text===''){ 
     el.attr({text:''})
  } else {
    let i=0;
    function animateText(i){
     setTimeout(function(){
       newText = newText + textArr[i]
       el.attr({text:newText}) 
       i++
       if(i<=textArr.length-1){animateText(i)}
     },speed)
    }
    animateText(i)
  }
}

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
