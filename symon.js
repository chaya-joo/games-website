
let arr1=['d1','d2','d3','d4','d5'];
let orginals=[ 'rgb(56, 59, 219)','rgb(236, 57, 57)','rgb(132, 219, 44)','rgb(175, 32, 211)','rgb(207, 146, 31)'];
let newColors=['rgb(20, 21, 87)','rgb(146, 16, 16)','rgb(87, 150, 25)','rgb(101, 10, 124)','rgb(148, 101, 0)'];
let arr2=[];
let arr3=[];
let count=1;
var n=1000;
var points=0;
let index=0;
let isOn=true;
let time1,time2;
async function func()
{
    document.getElementById('btn').disabled="disabled";
    document.getElementById('text').innerHTML="points: "+points;
    let x=rand();
    let Id=arr1[x];
    arr2.push(Id);
    disab();
     for(let i=0;i<count;i++)
    {
        if(i==0)
        n=1000;
    let y=document.getElementById(arr2[i]);
    await f1(arr2[i],y);
    await f2(arr2[i],y);
    }
    disab2();
    count++;
  }

  function f1(Id,y){ 
    time1=setTimeout(() => {
    switch(Id)
    {
        case 'd1': y.style.backgroundColor=newColors[0];break;
        case 'd2': y.style.backgroundColor=newColors[1];break;
        case 'd3': y.style.backgroundColor=newColors[2];break;
        case 'd4': y.style.backgroundColor=newColors[3];break;
        case 'd5': y.style.backgroundColor=newColors[4];break;
    }
}
, n+=500)}
function f2(Id,y)
{
   time2=setTimeout(() => {
    switch(Id)
    {
        case 'd1': y.style.backgroundColor=orginals[0];break;
        case 'd2': y.style.backgroundColor=orginals[1];break;
        case 'd3': y.style.backgroundColor=orginals[2];break;
        case 'd4': y.style.backgroundColor=orginals[3];break;
        case 'd5': y.style.backgroundColor=orginals[4];break;
    }
   },n+=500);
}
function clickme(id)
{   
    if(id==arr2[index])
    {
        arr3.push(id);
        index++;
    }
    else
    {
        points--;
        f();
        alert('הו, לא! עשית שגיאה!\n שנמשיך?');
        arr3=[];
        index=0;
        if(points<0)
        {
            document.getElementById('text').innerHTML="looser!!";
              points=0;
        }
        func();
    }
    if(arr3.length==arr2.length)
    { 
        points++;
        f();
        arr3=[];
        index=0;
       func(); 
    }
   if(points==15)
  {alert('הגעת לשלב האחרון, והמשחק נגמר.\nאתה המנצח! כל הכבוד!');
  clearTimeout(time1);
  clearTimeout(time2);
}
}


function rand(){return Math.floor(Math.random()*5);}
function f()
{
    document.getElementById('text').innerHTML="points: "+points;
}
function disab() {
    console.log("disab");
    document.getElementById('d1').disabled="disabled";
    document.getElementById('d2').disabled="disabled";
    document.getElementById('d3').disabled="disabled";
    document.getElementById('d4').disabled="disabled";
    document.getElementById('d5').disabled="disabled";
}
function disab2() {
    console.log("disab2");
    document.getElementById('d1').disabled="";
    document.getElementById('d2').disabled="";
    document.getElementById('d3').disabled="";
    document.getElementById('d4').disabled="";
    document.getElementById('d5').disabled="";
}