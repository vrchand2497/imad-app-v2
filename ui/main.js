
var button=document.getElementById('counter');
button.onclick=function ()
{var request= new XMLHttpRequest();
Request.onreadystatechange = function(){
    if(request.readystate===XMLHttpRequest.DONE)
    if(request.status===200){
       var counter= request.responseText;
       var  span=document.getElementById('count');
       span.innerHTML=counter.tostring();
    }
};
  request.open('GET','http://vrchand2497.imad.hasura-app.io/counter',true);
  request.send(null);
  
  
   
};