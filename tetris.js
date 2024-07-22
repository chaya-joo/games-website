
let points=0;
let flag=0;
let arr1=['d1','d2','d3','d4','d5'];
let arr2=['b1','b2','b3','b4','b5'];
let pid;
let flag2=0;
function start()
{
    document.getElementById('p').textContent="points: "+points;
}

function func() 
{
let c=document.querySelector('input').value;
   actDate();
    if(!flag)
    { 
    prev=rand();
    prevId=arr1[prev];
    pid=prevId;
    document.getElementById(pid).disabled="disabled";
    flag=1;
    }
    let z=document.getElementById(prevId);
    z.style.backgroundColor='pink';
    let x=rand();
while(x==prev)
{
    x=rand();
}
   
    let Id=arr1[x];
    let y=document.getElementById(Id);
    y.style.backgroundColor=c;
    localStorage.setItem('id',arr1[x]);
    prev=x;
    prevId=Id;
}

 function rand(){return Math.floor(Math.random()*5);}
 let level1=function level1() {setInterval("func()",2000) }
 let level2=function level2() {setInterval("func()",1000) }
 let level3=function l2v2l3() {setInterval("func()",500) }
 function actDate()
 {
    setInterval("date()",10)
 }
function date()
{
    let t=document.getElementById('t');
    let d=new Date();
    t.textContent=d.getHours()+": "+d.getMinutes()+":  "+d.getSeconds() +": "+d.getMilliseconds();
}

 function game(id)
 {
    document.getElementById(id).disabled="disabled";
    document.getElementById(pid).disabled="";
    pid=id;
    let x=localStorage.getItem('id');
    if(id.charAt(1)==x.charAt(1))
    points++;
    else
    points--;
    if(points<0)
    points=0;
    document.getElementById('p').textContent="points: "+points;
    if(points%10==0&&points>0)
    {
        document.getElementById('p').textContent="well-done!!";
    }
  
 }
 function toStop() {
    console.log("jl");
    clearInterval("acx");
 }
