document.getElementById("Reset").style.display="none";
document.getElementById("Stop").style.display="none";
var displaytime=document.getElementById("timer");
var milisecond=0;
var timeid;
var lapno=1;

function createlap(value1="leftdata",value2="rightdata"){
    var col1=document.createElement("div");
    var col2=document.createElement("div");
    col1.setAttribute("class", "col-6 border-bottom");
    col1.style.textAlign="left";
    col1.innerText=value1;
    col2.setAttribute("class", "col-6 border-bottom");
    col2.style.textAlign="right";
    col2.innerText=value2;
    document.getElementById("data").appendChild(col1);
    document.getElementById("data").appendChild(col2);
}
function onstart(){
    timeid=setInterval(function(){
        var mm,ss,ms;
        mm=parseInt(milisecond/(6000));
        mm=parseInt(mm%60);
        ss=parseInt(milisecond/100);
        ss=parseInt(ss%60);
        ms=parseInt(milisecond%100);
        if(mm<10){ mm='0'+mm};
        if(ss<10){ ss='0'+ss};
        if(ms<10){ ms='0'+ms};
        displaytime.innerText=mm+" : "+ss+" : "+ms;
        milisecond++;
    },10);
    document.getElementById("Start").style.display="none";
    document.getElementById("Stop").style.display="block";
    document.getElementById("Reset").style.display="none";
    document.getElementById("Lap").style.display="block";
    
}
function onlap(){
    if(displaytime.innerText!="00 : 00 : 00"){
        createlap("Lap "+lapno,displaytime.innerText);
        lapno++;
    }
    
}
function onstop(){
    document.getElementById("Lap").style.display="none";
    document.getElementById("Reset").style.display="block";
    document.getElementById("Stop").style.display="none";
    document.getElementById("Start").style.display="block";
    clearTimeout(timeid);
}
function onresets(){
    document.getElementById("Reset").style.display="none";
    document.getElementById("Lap").style.display="block";
    document.getElementById("Stop").style.display="none";
    document.getElementById("Start").style.display="block";
    const list = document.getElementById("data");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
    clearTimeout(timeid);
    displaytime.innerText="00"+" : "+"00"+" : "+"00";
    milisecond=0;
    lapno=1;
}