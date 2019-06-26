
function drawGraphs(){
	if (showGraphs){
		strokeWeight(1);
		stroke(255, 255, 255,50);
		line(0,H/2,W,H/2);
		if (appliedEM){
	    stroke(255, 176, 176,50);
	    for (var xCoor=0; xCoor<W; xCoor+=3){
	        line(xCoor,H/2-10*electroMagnetic(xCoor)*H/1200,xCoor+3,H/2-10*electroMagnetic(xCoor+3)*H/1200);
	    }
    }
    if (appliedST){
	    stroke(194, 247, 255,50);
	    for (var xCoor=0; xCoor<W; xCoor+=3){
	        line(xCoor,H/2-10*strongNuclear(xCoor)*H/1200,xCoor+3,H/2-10*strongNuclear(xCoor+3)*H/1200);
	    }
    }
    stroke(194, 247, 255,100);
    strokeWeight(6);
    for (var particle=0; particle<p.length-1; particle+=1){
	    for (var particle2=particle; particle2<p.length; particle2+=1){
            dForGraph = dist(p[particle].x,p[particle].y,p[particle2].x,p[particle2].y);
            if (appliedST){
            	point(dForGraph,H/2-10*strongNuclear(dForGraph)*H/1200);
            }
            if (p[particle].type === 'p' && p[particle2].type === 'p' && appliedEM) {
                stroke(255, 176, 176,100);
                point(dForGraph,H/2-10*electroMagnetic(dForGraph)*H/1200);
                stroke(194, 247, 255,100);
            }
        }
    }
  }
}

function particleDraw(){
	if (showParticles){
				strokeWeight(1);
		    stroke(255, 255, 255,100);
        for (var particle=0; particle<p.length; particle+=1){
            if (p[particle].type === 'n'){
                fill(70, 162, 212,100);
            } else if (p[particle].type === 'p'){
                fill(212, 72, 79,100);
            }
            ellipse(W/2+scaleSize*(p[particle].x + dragX - W/2),H/2 + scaleSize*(p[particle].y + dragY - H/2),4*scaleSize*p[particle].m,4*scaleSize*p[particle].m);
        }
    }
}