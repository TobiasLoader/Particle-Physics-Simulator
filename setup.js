
var A;
var B;
var C;

var xD;
var yD;
var D;

var STE; // Strong Force Energy
var EM;
var appliedST;
var appliedEM;

var showGraphs;
var showParticles;

var nNum;
var pNum;

var dragX;
var dragY;
var scaleSize;
var zIn;
var zOut;

var dForGraph;

var p;

var t;
var opacity;

var start;


function setup() {
	frameRate(30);
	
	W = window.innerWidth;
	H = window.innerHeight;
	
	A = 350;
	B = 10;
	C = 200;
	
	xD = 0;
	yD = 0;
	D = 0;
	
	STE = 0; // Strong Force Energy
	EM = 0;
	appliedST = true;
	appliedEM = true;
	
	showGraphs = true;
	showParticles = true;
	
	nNum = 7;
	pNum = 6;
	
	dragX = 0;
	dragY = 0;
	scaleSize = 1;
	zIn = false;
	zOut = false;
	
	p = [];
	
	start = false;

	
	for (var n=0; n<pNum; n+=1){
    p.push({x:random(W/4,3*W/4),y:random(H/4,3*H/4),vx:0,vy:0,ax:0,ay:0,KEx:random(-1,1),KEy:random(-1,1),m:18,type:'p'});    
	}
	for (var n=0; n<nNum; n+=1){
	  p.push({x:random(W/4,3*W/4),y:random(H/4,3*H/4),vx:0,vy:0,ax:0,ay:0,KEx:random(-1,1),KEy:random(-1,1),m:22,type:'n'});    
	}
	
	canvas = createCanvas(W, H);
}


function zoom(){
	if (zIn){
        scaleSize *= 1.05;
    }
    if (zOut){
        scaleSize /= 1.05;    
    }
}

function mouseWheel(event) {
	if (event.delta>0){
		scaleSize *= 1 + event.delta/1000;
	} else if (event.delta<0){
		scaleSize /= 1 - event.delta/1000;
	}
}

function mouseClicked(){
		if (mouseX>19*W/20-30-50-175/2 && mouseX<19*W/20-30-50+175/2 && mouseY>8*H/40-50/2+40 && mouseY<8*H/40+50/2+40){
	    if (start){
	        start = false; 
	    } else {
	        start = true;    
	    }
    }
    if (mouseX>19*W/20-15/2 && mouseX<19*W/20+15/2){
	    if (mouseY>4*H/40-15/2 && mouseY<4*H/40+15/2){
		    if (appliedST){
		        appliedST = false; 
		    } else {
		        appliedST = true;    
		    }
	    } else if (mouseY>5*H/40-15/2+10 && mouseY<5*H/40+15/2+10){
		    if (appliedEM){
		        appliedEM = false; 
		    } else {
		        appliedEM = true;    
		    }
	    } else if (mouseY>11*H/40-15/2+70 && mouseY<11*H/40+15/2+70){
		    if (showGraphs){
		        showGraphs = false; 
		    } else {
		        showGraphs = true;    
		    }
	    } else if (mouseY>12*H/40-15/2+80 && mouseY<12*H/40+15/2+80){
		    if (showParticles){
		      showParticles = false;		    
		    } else {
		      showParticles = true;    
		    }
	    }
    }
    if (mouseY>34*H/40-5 && mouseY<34*H/40+5){
	    if (mouseX>19*W/20-15-23 && mouseX<19*W/20-15-15){
		    if (nNum>0){
			  	for (var particle=0; particle<p.length;particle+=1){
				  	if (p[particle].type === 'n'){
					  	p.splice(particle,1);
					  	break
				  	}
			  	}
			  	nNum -= 1;
		  	}
		  }
			if (mouseX>19*W/20-15+15 && mouseX<19*W/20-15+23){
				p.push({x:random(W/4,3*W/4),y:random(H/4,3*H/4),vx:0,vy:0,ax:0,ay:0,KEx:random(-1,1),KEy:random(-1,1),m:22,type:'n'});
				nNum += 1;
			}
		}
		if (mouseY>35*H/40+10-5 && mouseY<35*H/40+10+5){
	    if (mouseX>19*W/20-15-23 && mouseX<19*W/20-15-15){
		    if (pNum>0){
			  	for (var particle=0; particle<p.length;particle+=1){
				  	if (p[particle].type === 'p'){
					  	p.splice(particle,1);
					  	break
				  	}
			  	}
			  	pNum -= 1;
		  	}
		  }
			if (mouseX>19*W/20-15+15 && mouseX<19*W/20-15+23){
				p.push({x:random(W/4,3*W/4),y:random(H/4,3*H/4),vx:0,vy:0,ax:0,ay:0,KEx:random(-1,1),KEy:random(-1,1),m:18,type:'p'});
				pNum += 1;
			}
		}
}

function keyPressed(){
    if (keyCode === 38){
        zIn = true;
    }
    if (keyCode === 40){
        zOut = true;
    }
    if (keyCode === 72){
        alert("\nWhat's this?\n\nA cluster of sub-atomic particles is loosely modelled by simulating their interactions with each other via the strong and electromagnetic forces. The blue particles represent larger neutrla particles such as neutrons, whilst the slightly smaller charged red particles behave like protons.\n\nUsage Instructions...\n\nEvery time the page is loaded, the particles' positions are randomly generated. Click the PLAY button to start the simulation, then the pause button to stop it. You can untick any of the check boxes to observe simulation with or without these features. You can also zoom in or out using the up or down arrow keys or by scrolling, and you can move around by dragging.\n\nThe Graphs\n\nThe BLUE graph represents the strong interaction between particles and the RED graph, the electromagnetic repulsion. Above the x-axis is repulsion, below is attraction.\n");
    }
}

function keyReleased(){
    zIn = false;
    zOut = false;
}

function mouseDragged(){
    dragX += (mouseX-pmouseX)/scaleSize;
    dragY += (mouseY-pmouseY)/scaleSize;
    cursor(MOVE);
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
  W = windowWidth;
  H = windowHeight
};

