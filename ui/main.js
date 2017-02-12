console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="new";
var img=document.getElementById('madi');
var marginLeft=0;
function moveLeft(){
marginLeft=marginLeft+50;
img.style.marginLeft=marginLeft+'px';}
    
img.onclick=function ()
{
   var interval=  setInterval(moveLeft,100);
};