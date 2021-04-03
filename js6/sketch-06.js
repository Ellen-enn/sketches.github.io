var i;
var p;
var q;
var o;
var w;
var e;
var r;
var t;
var y;
var u;
var a;
var s;
var d;
var f;



function setup(){
    createCanvas(1000,1000);
    background(0);
    angleMode(DEGREES);
    i = 0;
    p = 0;
    q = 0;
    o = 0;
    w = 0;
    e = 0;
    r = 0;
    t = 0;
    y = 0;
    u = 0;
    a = 0;
    s = 0;
    d = 0;
    f = 0;
   
}

function draw(){

    if (i < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,200);
        rotate(i + i);
        rect(0, 0, 50, 50, 10);
        pop();
        i++;
    }

    if (p < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,300);
        rotate(p + p);
        rect(0, 0, 50, 50, 10);
        pop();
        p++;
    }

    if (q < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,400);
        rotate(q + q);
        rect(0, 0, 50, 50, 10);
        pop();
        q++;
    }
    
    if (o < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,500);
        rotate(o + o);
        rect(0, 0, 50, 50, 10);
        pop();
        o++;
    }

    if (w < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,600);
        rotate(w + w);
        rect(0, 0, 50, 50, 10);
        pop();
        w++;
    }

    if (e < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,700);
        rotate(e + e);
        rect(0, 0, 50, 50, 10);
        pop();
        e++;
    }

    if (r < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(300,800);
        rotate(r + r);
        rect(0, 0, 50, 50, 10);
        pop();
        r++;
    }
    
    if (t < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(400,200);
        rotate(t + t);
        rect(0, 0, 50, 50, 10);
        pop();
        t++;
    }


    if (y < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(500,200);
        rotate(y + y);
        rect(0, 0, 50, 50, 10);
        pop();
        y++;
    }

    if (u < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(600,200);
        rotate(u + u);
        rect(0, 0, 50, 50, 10);
        pop();
        u++;
    }

    if (a < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(700,200);
        rotate(a + a);
        rect(0, 0, 50, 50, 10);
        pop();
        a++;
    }


    if (d < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(400,500);
        rotate(d + d);
        rect(0, 0, 50, 50, 10);
        pop();
        d++;
    }

    if (s < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(500,500);
        rotate(s + s);
        rect(0, 0, 50, 50, 10);
        pop();
        s++;
    }

    if (f < 180) { 
        push();
        noFill();
        stroke(random(255), random(255), random(255));
        translate(600,500);
        rotate(f + f);
        rect(0, 0, 50, 50, 10);
        pop();
        f++;
    }


}