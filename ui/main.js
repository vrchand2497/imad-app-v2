console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML="new";
var element=document.getElementById('madi');
var marginLeft=0;
function moveLeft(){
marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';}
    
img.oneclick=function ()
{
    
    var interval=  setInterval(moveLeft,100);
    
};