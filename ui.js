
function drawMessage(){
	textFont("Courier",20);
	noStroke();
	textAlign(CENTER,CENTER);
	
	t = millis()/1000;
	opacity = 100*sin(t)*(10/(t+10));
	
	fill(255,255,255,opacity);
	text("press H for help.",W/2, 9*H/10);
	
	fill(255,255,255,-opacity);
	text("hope you like my Particle Simulator. :)",W/2, 9*H/10);
}

function tickBox(X,Y,TEXT,ticked){
	textFont("Courier",15);
	noStroke();
	textAlign(RIGHT,CENTER);
	rectMode(CENTER);
	
	fill(255,255,255,150);
	text(TEXT,X, Y);
	noFill();
	stroke(255);
	strokeWeight(1);
	rect(X+30,Y,15,15,2);
	if (ticked){
		line(X+28,Y-3,X+31,Y+3);
		line(X+31,Y+3,X+45,Y-10);
	}
}

function button(X,Y,TEXT){
	stroke(255);
	strokeWeight(0.5);
	fill(109, 113, 163);
	rect(X-50,Y,175,50,1);
	textFont("Courier",20);
	noStroke();
	textAlign(CENTER,CENTER);
	
	
	fill(255,255,255,200);
	text(TEXT,X-50, Y);
	
}

function customisableOptions(){
	tickBox(19*W/20-30,4*H/40,"Strong Force",appliedST);
	tickBox(19*W/20-30,5*H/40+10,"Electromagnetic",appliedEM);
	if (start){
		button(19*W/20-30,8*H/40+40,"PAUSE");
	} else {
		button(19*W/20-30,8*H/40+40,"PLAY");
	}
	tickBox(19*W/20-30,11*H/40+70,"Show Graphs",showGraphs);
	tickBox(19*W/20-30,12*H/40+80,"Show Particles",showParticles);

}

function hoveringCursor(){
	if (mouseX>19*W/20-30-50-175/2 && mouseX<19*W/20-30-50+175/2 && mouseY>8*H/40-50/2+40 && mouseY<8*H/40+50/2+40){
		cursor(HAND);	
	}
	if (mouseX>19*W/20-15/2 && mouseX<19*W/20+15/2){
	    if ((mouseY>4*H/40-15/2 && mouseY<4*H/40+15/2) || (mouseY>5*H/40-15/2+10 && mouseY<5*H/40+15/2+10) || (mouseY>11*H/40-15/2+70 && mouseY<11*H/40+15/2+70) || (mouseY>12*H/40-15/2+80 && mouseY<12*H/40+15/2+80)){
		    cursor(HAND);
    }
	}
}

