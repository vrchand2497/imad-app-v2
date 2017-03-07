var express = require('express');
var morgan = require('morgan');
var path = require('path');
var pool = require('pg').Pool;
var config = {
  user: 'vrchand2497',
  database: 'vrchand2497',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: process.env.DB_PASSWORD 
};

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
    var date=data.date;
    var head=data.head;
    var content=data.content;
    var htmltemplate=
    `<html>
        <head> 
             <title>
                    ${title}
             </title>
                       <meta name="viewport" content="width=device-width,initial-scale-1"/>
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
var names=[];
app.get('/submit-name', function (req, res) {
  var name=req.query.name;
  names.push(name);
  res.send(JSON.stringify(names));
}); 
  

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool = new Pool(config);

app.get('/test-db', function (req, res) {
  
});

var counter=0;
app.get('/counter', function (req, res) {
    counter=counter+1;
  res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
  res.send(createtemplate(articles[articleName]));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
 app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
 
app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
