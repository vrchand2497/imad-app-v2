var counter=0;
var button=document.getElementById('counter');
button.onclick=function ()
{
  counter=counter+1;
   var span=document.getElemntById('count');
   span.innerHTML=counter.tostring();
};