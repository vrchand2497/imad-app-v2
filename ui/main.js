
var button=document.getElementById('counter');
button.onclick=function ()
{var request= new XMLHttpRequest();
Request.onreadystatechange = function(){
    if(request.readystate===XMLHttpRequest.DONE)
    if(request.state===200){
       var counter= request.responseText;
    }
};
  counter=counter+1;
  
   
};