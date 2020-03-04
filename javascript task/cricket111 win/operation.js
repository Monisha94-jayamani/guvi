class cricket1
{

constructor(w1,p1,b1,o1,score1,count1,r1,w,p,b,o,score,count,r)

{
    this.w1=w1;
    this.p1=p1;
    this.b1=b1;
    this.o1=o1;
    this.score1=score1;
    this.count1=count;
    this.w=w;
    this.p=p;
    this.b=b;
    this.o=o;
    this.count=count;
    this.score=score;
    this.r1=r1;
    this.r=r;
    

  
}

ball()
{
document.getElementById(this.p1).innerHTML="player:"+this.p;
console.log("player:",this.p);
let x= Math.floor(Math.random() * 7);
this.r=x;
document.getElementById(this.r1).innerHTML="run:"+this.r;
this.count=parseInt(this.count)+1;
console.log("count",this.count);
console.log("run:",x);

this.score=this.score+x;
document.getElementById(this.score1).innerHTML="score:"+this.score;
console.log("score:",this.score);
if(x==0)
{
    this.w=this.w+1;
    this.p=this.p+1;
     this.count=0;
}
if(this.w == 11 || this.b==0)
{
    document.getElementById("press1").disabled = true; 
    document.getElementById("press2").disabled = true; 
    alert("game over");
}

if(this.count ==6)
{
   this.p=this.p+1;
    
    this.count=0;
}

this.b=this.b-1;
document.getElementById(this.b1).innerHTML="ball:"+this.b;
console.log("current ball",this.b);
document.getElementById(this.w1).innerHTML="wicket:"+this.w;
console.log("current wicket:",this.w);

}
}
obj1 = new cricket1("w1","p1","b1","o1","score1","count","r1",0,1,36,0,0,0,0);
obj2 = new cricket1("w2","p2","b2","o2","score2","count","r2",0,1,36,0,0,0,0);
function play1(){
    let n=obj1.ball();
    if(n!="undefined")localStorage.setItem("score1",n);
}
function play2(){
    let m=obj2.ball();
    if(m!="undefined")localStorage.setItem("score2",m);
}


