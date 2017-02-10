var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
         'article-one':{title:'article one',
    head:'one',
    date:'feb 8th',
    content:
        `<p> 
            'this is the first article of my web page'
        </p>`},
         'article-two':{title:'article two',
    head:'two',
    date:'feb 8th',
    content:
        `<p> 
            'this is the first article of my web page'
        </p>`},
         'article-three':{title:'article three',
    head:'one',
    date:'feb 8th',
    content:
        `<p> 
            'this is the first article of my web page'
        </p>`}
        
    };
    
function createtemplate(data) {
    var title=data.title;
    var date=date.date;
    var head=data.head;
    var content=data.content;
    var htmltemplate=
    `<html>
        <head> 
             <title>
                          ${title}
             </title>
                       <meta name="vi export" content="width-device-width,initial-scale-1"/>
                       <link href="/ui/style.css" rel="stylesheet" />
        </head>
               <body>
                   <div class="never">
            
            <div >
                 <a href="/">home page</a>
            </div>
            <hr/>
            <h1>
              ${head}
            </h1>
            <div>
            ${date}
            </div>
            <div>
            <p> 
            ${content}
            </p>
            </div>
        </div>
              </body>
    </html>` ;         
 return htmltemplate;
}   

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename', function (req, res) {
    var articlename=req.params.articlename;
  res.send(createtemplate(articles[articlename]));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
