var i;
var q;
var w;
var e;
var r;
var t;
var y;
var u;
var o;
var p;

function setup(){
    createCanvas(1000,1000);
    background(250, 0, 0);
    angleMode(DEGREES);
    i = 0;
    q = 0;
    w = 0;
    e = 0;
    r = 0;
    t = 0;
    y = 0;
    u = 0;
    o = 0;
    p = 0;
}

function draw(){

    if (i < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(300,200);
        rotate(i + i);
        rect(0, 0, 600, 600, 300);
        pop();
        i++;
    }
    
    if (q < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(300,350);
        rotate(q + q);
        rect(0, 0, 600, 600, 300);
        pop();
        q++;
    }

    if (w < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(300,500);
        rotate(w + w);
        rect(0, 0, 600, 600, 300);
        pop();
        w++;
    }
    
    if (e < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(300,650);
        rotate(e + e);
        rect(0, 0, 600, 600, 300);
        pop();
        e++;
    }

    if (r < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(300,800);
        rotate(r + r);
        rect(0, 0, 600, 600, 300);
        pop();
        r++;
    }

    if (t < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(450,200);
        rotate(t + t);
        rect(0, 0, 600, 600, 300);
        pop();
        t++;
    }

    if (y < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(600,200);
        rotate(y + y);
        rect(0, 0, 600, 600, 300);
        pop();
        y++;
    }

    if (u < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(750,200);
        rotate(u + u);
        rect(0, 0, 600, 600, 300);
        pop();
        u++;
    }

    if (o < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(450,500);
        rotate(o + o);
        rect(0, 0, 600, 600, 300);
        pop();
        o++;
    }

    if (p < 180) { 
        push();
        noFill();
        stroke(0, 255, 0);
        translate(600,500);
        rotate(p + p);
        rect(0, 0, 600, 600, 300);
        pop();
        p++;
    }


}

