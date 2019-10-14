
function drawMessage(){
	textFont("Courier",20);
	noStroke();
	textAlign(CENTER,CENTER);
	
	t = millis()/2000;
	opacity = 180*sin(t);
	
	fill(255,255,255,opacity);
	text("please press 'I' to view instructions",W/2, 9*H/10);
	
	fill(255,255,255,-opacity);
	text("Tobias Loader",W/2, 9*H/10);
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

function slider(X,Y,TEXT,VAR,C){
	textFont("Courier",15);
	noStroke();
	textAlign(RIGHT,CENTER);
	
	fill(255,255,255,150);
	text(TEXT,X-50, Y);
	textAlign(CENTER,CENTER);
	fill(C[0], C[1], C[2]);
	text(VAR,X, Y);
	noFill();
	stroke(C[0], C[1], C[2],150);
	if (mouseX>X-23 && mouseX<X-15 && mouseY>Y-5 && mouseY<Y+5){
		strokeWeight(2);
	} else {
		strokeWeight(1);
	}
	line(X-23,Y,X-15,Y-5);
	line(X-23,Y,X-15,Y+5);
	
	if (mouseX>X+15 && mouseX<X+23 && mouseY>Y-5 && mouseY<Y+5){
		strokeWeight(2);
	} else {
		strokeWeight(1);
	}
	line(X+23,Y,X+15,Y-5);
	line(X+23,Y,X+15,Y+5);
}

function button(X,Y,TEXT){
	stroke(255);
	strokeWeight(0.5);
	fill(109, 113, 163);
	rectMode(CENTER);
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
	
	slider(19*W/20-15,34*H/40,'Neutrons:',nNum,[194,247,255]);
	slider(19*W/20-15,35*H/40+10,'Protons:',pNum,[255, 176, 176]);

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

