
function strongNuclear(x){
    // return (50-(50*sq(0.5*D-201)/sq((0.5*D-201)+201)))/1000;
    if (x <= C){
        return ((A*sq(x-C))/sq(x) - A)/10;
    } else if (x > C && x < 2*C){
        return (((6*A*(B+1)*sq(B))/(6*A*sq(B)+pow(C*(B+1),3))) * (-pow(x,3)/3 + (3*C/2 + (A*sq(B))/(sq(C)*pow(B+1,3)))*sq(x) - (2*sq(C)+ 2*(A*sq(B))/(sq(C)*pow(B+1,3)))*x + (5*pow(C,3)/6 + (A*sq(B))/pow(B+1,3))) - A)/10;
    } else {
        return ((A*sq(B*(x-C)))/sq(B*(x-C) + C) - A)/10;    
    }
}
function electroMagnetic(x){
    return 5000/x;
}
function applyEnergy(energy,distance,componentD){
    return (energy/distance)*componentD;
}

function KE(particle){
    for (var otherParticles=0; otherParticles<p.length; otherParticles+=1){
        if (otherParticles !== particle){
            
            xD = p[otherParticles].x-p[particle].x;
            yD = p[otherParticles].y-p[particle].y;
            D = sqrt(sq(xD)+sq(yD));
            
            if (appliedST){
	            STE = -strongNuclear(D); 
	            p[particle].KEx += applyEnergy(STE,D,xD);
	            p[particle].KEy += applyEnergy(STE,D,yD);
            }
            
            if (appliedEM && p[particle].type === 'p' && p[otherParticles].type === 'p') {
                EM = -electroMagnetic(D);
                p[particle].KEx += applyEnergy(EM,D,xD);
                p[particle].KEy += applyEnergy(EM,D,yD);
            }
        }
    }
}

function KEToVel(particle){
    p[particle].vx = sqrt(abs((2/5)*p[particle].KEx/p[particle].m)) * p[particle].KEx/abs(p[particle].KEx);
    p[particle].vy = sqrt(abs((2/5)*p[particle].KEy/p[particle].m)) * p[particle].KEy/abs(p[particle].KEy);
    p[particle].KEx /= 1.01;
    p[particle].KEy /= 1.01;
}

function velToDist(particle){
    p[particle].x += p[particle].vx;
    p[particle].y += p[particle].vy;
}

function particleMovement(){
	if (start){
        for (var particle=0; particle<p.length; particle+=1){
            KE(particle);
            KEToVel(particle);
        }
        for (var particle=0; particle<p.length; particle+=1){
            velToDist(particle);
        }
    }
}
