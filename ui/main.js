
var button=document.getElementById('counter');
button.onclick = function()
{


   var request = new XMLHttpRequest();


request.onreadystatechange = function ()
{
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
            var counter = request.responseText;
             var span = document.getElementById('count');
             span.innerHTML = counter.toString();

        }
    }

};
request.open('GET','http://vrchand2497.imad.hasura-app.io/counter',true);
request.send(null);
};
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElementById('submit_btn');
submit.onclick=function (){
      var request = new XMLHttpRequest();


request.onreadystatechange = function ()
{
    if(request.readyState === XMLHttpRequest.DONE)
    {
        if(request.status === 200)
        {
          var names =request.responseText;
          names=JSON.parse();

        }
    }

};
request.open('GET','http://vrchand2497.imad.hasura-app.io/submit-name?name='+name,true);
request.send(null);
   var names=['name1','name2','name3','name4'];
   
};